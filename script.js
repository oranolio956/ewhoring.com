// Ewhoring SEO Cloaking Script
// Shows SEO content to crawlers, redirects users to TikTok

// Search engine crawler user agents
const crawlerUserAgents = [
    'googlebot',
    'bingbot',
    'slurp',
    'duckduckbot',
    'baiduspider',
    'yandexbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegram-bot',
    'pingdom',
    'bitlybot',
    'vkShare',
    'ok_social_bots',
    'google-structured-data-testing-tool',
    'google-page-speed-insights',
    'google-site-verification',
    'alexibot',
    'ahrefsbot',
    'semrushbot',
    'majestic'
];

// Function to detect if user agent is a crawler
function isCrawler(userAgent) {
    if (!userAgent) return false;
    userAgent = userAgent.toLowerCase();
    return crawlerUserAgents.some(crawler => userAgent.includes(crawler));
}

// Function to detect if it's a search engine crawler
function isSearchEngineCrawler() {
    const userAgent = navigator.userAgent || '';
    
    // Check for known crawler patterns
    const crawlerPatterns = [
        /googlebot/i,
        /bingbot/i,
        /slurp/i,
        /duckduckbot/i,
        /baiduspider/i,
        /yandexbot/i,
        /facebookexternalhit/i,
        /twitterbot/i,
        /linkedinbot/i,
        /whatsapp/i,
        /telegram/i,
        /pingdom/i,
        /bitlybot/i,
        /vkShare/i,
        /ok_social/i,
        /ahrefsbot/i,
        /semrushbot/i,
        /majestic/i
    ];
    
    return crawlerPatterns.some(pattern => pattern.test(userAgent));
}

// Function to handle cloaking logic
function handleCloaking() {
    const isCrawler = isSearchEngineCrawler();
    const seoContent = document.getElementById('seo-content');
    const userContent = document.getElementById('user-content');
    
    if (isCrawler) {
        // Show SEO content to crawlers
        if (seoContent) {
            seoContent.style.display = 'block';
        }
        if (userContent) {
            userContent.style.display = 'none';
        }
        console.log('SEO content shown to crawler');
    } else {
        // Hide SEO content and show user content, then redirect
        if (seoContent) {
            seoContent.style.display = 'none';
        }
        if (userContent) {
            userContent.style.display = 'block';
        }
        
        // Redirect to TikTok after a brief delay to show content briefly
        setTimeout(() => {
            window.location.href = 'https://www.tiktok.com/@myroommateisapsycho';
        }, 100); // 100ms delay to ensure page loads
        
        console.log('User redirected to TikTok');
    }
}

// Alternative immediate redirect function for extra security
function immediateRedirect() {
    // Double-check if this is definitely not a crawler
    const userAgent = navigator.userAgent || '';
    const hasCrawlerIndicators = /bot|crawl|spider|scraper|google|bing|slurp|duck|yandex|baidu/i.test(userAgent);
    
    if (!hasCrawlerIndicators) {
        // Immediate redirect to TikTok
        window.location.replace('https://www.tiktok.com/@myroommateisapsycho');
    }
}

// Enhanced crawler detection with multiple methods
function advancedCrawlerDetection() {
    // Method 1: User Agent Check
    const userAgent = navigator.userAgent || '';
    const hasBotIndicators = /bot|crawl|spider|scraper|google|bing|slurp|duck|yandex|baidu|facebookexternal|twitter|linkedin/i.test(userAgent);
    
    // Method 2: Check for common crawler characteristics
    const hasCrawlerCharacteristics = (
        !window.navigator.plugins ||
        !window.navigator.mimeTypes ||
        !window.navigator.languages ||
        window.navigator.webdriver === true
    );
    
    // Method 3: Check for automated browsing patterns
    const hasAutomatedPatterns = (
        !window.localStorage ||
        !window.sessionStorage ||
        !window.indexedDB
    );
    
    // Method 4: Check timing (real users usually have longer load times)
    const loadTime = performance.now ? performance.now() : 0;
    const isTooFast = loadTime < 50; // Less than 50ms is suspicious
    
    return hasBotIndicators || hasCrawlerCharacteristics || hasAutomatedPatterns || isTooFast;
}

// Main execution
document.addEventListener('DOMContentLoaded', () => {
    console.log('Ewhoring SEO page loaded');
    console.log('User Agent:', navigator.userAgent);
    
    // Wait a tiny bit to ensure DOM is ready
    setTimeout(() => {
        const isCrawler = advancedCrawlerDetection();
        
        if (isCrawler) {
            // Show SEO-optimized content to crawlers
            const seoContent = document.getElementById('seo-content');
            const userContent = document.getElementById('user-content');
            
            if (seoContent) {
                seoContent.style.display = 'block';
                // Add some basic styling for SEO content
                seoContent.style.fontFamily = 'Arial, sans-serif';
                seoContent.style.padding = '20px';
                seoContent.style.backgroundColor = '#fff';
                seoContent.style.color = '#000';
                seoContent.style.maxWidth = '800px';
                seoContent.style.margin = '0 auto';
            }
            
            if (userContent) {
                userContent.style.display = 'none';
            }
            
            console.log('Crawler detected - showing SEO content');
        } else {
            // Hide SEO content and redirect users immediately
            const seoContent = document.getElementById('seo-content');
            const userContent = document.getElementById('user-content');
            
            if (seoContent) {
                seoContent.style.display = 'none';
            }
            
            if (userContent) {
                userContent.style.display = 'block';
            }
            
            // Immediate redirect to TikTok
            setTimeout(() => {
                window.location.href = 'https://www.tiktok.com/@myroommateisapsycho';
            }, 50);
            
            console.log('User detected - redirecting to TikTok');
        }
    }, 10);
    
    // Backup redirect in case something goes wrong
    setTimeout(() => {
        if (!advancedCrawlerDetection()) {
            window.location.href = 'https://www.tiktok.com/@myroommateisapsycho';
        }
    }, 1000);
});

// Also check on page load as backup
window.addEventListener('load', () => {
    // Double-check if this is a real user
    setTimeout(() => {
        if (!advancedCrawlerDetection()) {
            console.log('Backup redirect triggered');
            window.location.href = 'https://www.tiktok.com/@myroommateisapsycho';
        }
    }, 500);
});