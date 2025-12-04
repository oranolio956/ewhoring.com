// Core Web Vitals Monitoring - Simple Implementation
interface WebVitalsMetric {
  name: string;
  value: number;
  timestamp: number;
  url: string;
  deviceType: string;
}

class PerformanceMonitor {
  private metrics: WebVitalsMetric[] = [];
  private observer: PerformanceObserver | null = null;

  constructor() {
    this.init();
  }

  private getDeviceType(): string {
    const width = window.innerWidth;
    if (width <= 768) return 'mobile';
    if (width <= 1024) return 'tablet';
    return 'desktop';
  }

  private init() {
    // Only run on client-side
    if (typeof window === 'undefined') return;

    // Monitor Largest Contentful Paint
    try {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            this.recordMetric('LCP', entry.startTime);
          }
        });
      });
      this.observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP monitoring not supported');
    }

    // Monitor First Input Delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const perfEntry = entry as any; // Cast to any to access processingStart
          this.recordMetric('FID', perfEntry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID monitoring not supported');
    }

    // Monitor Cumulative Layout Shift
    let clsValue = 0;
    try {
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Report CLS on page unload
      window.addEventListener('beforeunload', () => {
        if (clsValue > 0) {
          this.recordMetric('CLS', clsValue);
        }
      });
    } catch (e) {
      console.warn('CLS monitoring not supported');
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          this.recordMetric('PageLoad', navigation.loadEventEnd - navigation.fetchStart);
        }
      }, 0);
    });
  }

  private recordMetric(name: string, value: number) {
    const metric: WebVitalsMetric = {
      name,
      value: Math.round(value * 100) / 100, // Round to 2 decimal places
      timestamp: Date.now(),
      url: window.location.href,
      deviceType: this.getDeviceType()
    };

    this.metrics.push(metric);

    // Send to analytics endpoint (if available)
    this.sendToAnalytics(metric);

    // Log for debugging
    console.log(`📊 ${name}: ${metric.value}${name === 'CLS' ? '' : 'ms'}`);

    // Store in localStorage for analysis
    this.storeLocally(metric);
  }

  private sendToAnalytics(metric: WebVitalsMetric) {
    // Send to Google Analytics 4 if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: metric.deviceType,
        value: Math.round(metric.value),
        custom_map: {
          metric_name: metric.name,
          metric_value: metric.value
        }
      });
    }

    // Send to custom endpoint (when implemented)
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metric)
    }).catch(() => {
      // Silently fail - don't break user experience
    });
  }

  private storeLocally(metric: WebVitalsMetric) {
    try {
      const stored = localStorage.getItem('webVitalsMetrics');
      const metrics = stored ? JSON.parse(stored) : [];
      metrics.push(metric);

      // Keep only last 100 metrics
      if (metrics.length > 100) {
        metrics.shift();
      }

      localStorage.setItem('webVitalsMetrics', JSON.stringify(metrics));
    } catch (e) {
      // Silently fail if localStorage is not available
    }
  }

  public getMetrics(): WebVitalsMetric[] {
    return [...this.metrics];
  }

  public getStoredMetrics(): WebVitalsMetric[] {
    try {
      const stored = localStorage.getItem('webVitalsMetrics');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  public clearStoredMetrics() {
    try {
      localStorage.removeItem('webVitalsMetrics');
    } catch (e) {
      // Silently fail
    }
  }

  public destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Global instance
export const performanceMonitor = new PerformanceMonitor();

// Export types
export type { WebVitalsMetric };

