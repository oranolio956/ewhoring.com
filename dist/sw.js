// Service Worker for Oranolio Protocol
// Provides offline capability and PWA trust signals

const CACHE_NAME = 'oranolio-v1';
const OFFLINE_URL = '/';

// Assets to cache for offline use
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event - cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching essential assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[SW] Install complete');
        return self.skipWaiting();
      })
  );
});

// Activate event - cleanup old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[SW] Activate complete');
      return self.clients.claim();
    })
  );
});

// Fetch event - network first, fallback to cache
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone response for caching
        const responseClone = response.clone();
        
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            return new Response('Offline', { status: 503 });
          });
      })
  );
});

// Background sync for analytics (optional)
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    console.log('[SW] Syncing analytics data');
  }
});

const PUSH_FALLBACKS = {
  default: {
    title: 'New persona drop is live',
    body: 'Spin up the city-specific funnel before everyone scrapes it.',
    url: 'https://ewhoring.com/discord-ewhoring-servers.html'
  },
  telegram: {
    title: 'Telegram vault update',
    body: '3 whale-tested scripts uploaded. Gate closes in 12 hours.',
    url: 'https://ewhoring.com/ewhoring-telegram-groups.html'
  }
};

self.addEventListener('push', (event) => {
  let payload = {};
  if (event.data) {
    try {
      payload = event.data.json();
    } catch (err) {
      console.warn('[SW] Push payload parse error', err);
    }
  }
  const campaign = PUSH_FALLBACKS[payload.campaign] || PUSH_FALLBACKS.default;
  const options = {
    body: payload.body || campaign.body,
    icon: '/icons/icon-192.png',
    badge: '/icons/badge-72.png',
    data: {
      url: payload.url || campaign.url
    },
    actions: [
      { action: 'open', title: 'Open Drop' },
      { action: 'dismiss', title: 'Dismiss' }
    ]
  };
  event.waitUntil(self.registration.showNotification(payload.title || campaign.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'dismiss') return;
  const targetUrl = event.notification.data?.url || 'https://ewhoring.com/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      const focusedClient = clientList.find((client) => client.url === targetUrl && 'focus' in client);
      if (focusedClient) {
        return focusedClient.focus();
      }
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
      return null;
    })
  );
});

console.log('[SW] Service Worker loaded - Oranolio Protocol');

