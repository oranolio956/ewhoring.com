// Visual Debugging Tools for Perfect Site Quality
// This tool helps identify visual issues in real-time

interface VisualIssue {
  type: 'overflow' | 'contrast' | 'alignment' | 'spacing' | 'z-index' | 'performance';
  element: HTMLElement;
  message: string;
  severity: 'low' | 'medium' | 'high';
}

class VisualDebugger {
  private issues: VisualIssue[] = [];

  constructor() {
    // Only run in development or when explicitly enabled
    const isDev = typeof import.meta !== 'undefined' && typeof (import.meta as any).env !== 'undefined' && Boolean((import.meta as any).env.DEV);
    if (typeof window !== 'undefined' && (isDev || localStorage.getItem('visual-debug') === 'true')) {
      this.init();
    }
  }

  private init() {
    // Check for visual issues on load and after interactions
    window.addEventListener('load', () => {
      setTimeout(() => this.scanForIssues(), 1000);
    });

    // Re-scan on resize
    let resizeTimeout: number;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => this.scanForIssues(), 500);
    });
  }

  private scanForIssues() {
    this.issues = [];

    // Check for horizontal overflow
    const body = document.body;
    if (body.scrollWidth > window.innerWidth) {
      this.issues.push({
        type: 'overflow',
        element: body,
        message: `Horizontal overflow detected: ${body.scrollWidth}px > ${window.innerWidth}px`,
        severity: 'high'
      });
    }

    // Check for contrast issues
    this.checkContrast();

    // Check for z-index conflicts
    this.checkZIndexConflicts();

    // Check for performance issues
    this.checkPerformance();

    // Log issues
    if (this.issues.length > 0) {
      console.group('🔍 Visual Issues Detected');
      this.issues.forEach(issue => {
        console[issue.severity === 'high' ? 'error' : 'warn'](
          `[${issue.type.toUpperCase()}] ${issue.message}`,
          issue.element
        );
      });
      console.groupEnd();
    }
  }

  private checkContrast() {
    // Check text contrast ratios
    const textElements = document.querySelectorAll<HTMLElement>('p, h1, h2, h3, h4, h5, h6, span, a, button');
    textElements.forEach(el => {
      const style = window.getComputedStyle(el);
      const color = style.color;
      const bgColor = this.getBackgroundColor(el);
      
      // Basic contrast check (simplified)
      if (color && bgColor) {
        const contrast = this.calculateContrast(color, bgColor);
        if (contrast < 4.5 && el.textContent && el.textContent.trim().length > 0) {
          this.issues.push({
            type: 'contrast',
            element: el as HTMLElement,
            message: `Low contrast ratio: ${contrast.toFixed(2)} (should be ≥4.5)`,
            severity: 'medium'
          });
        }
      }
    });
  }

  private checkZIndexConflicts() {
    const elements = document.querySelectorAll('[style*="z-index"], [class*="z-"]');
    const zIndexMap = new Map<number, HTMLElement[]>();

    elements.forEach(el => {
      const style = window.getComputedStyle(el);
      const zIndex = parseInt(style.zIndex);
      if (!isNaN(zIndex)) {
        if (!zIndexMap.has(zIndex)) {
          zIndexMap.set(zIndex, []);
        }
        zIndexMap.get(zIndex)!.push(el as HTMLElement);
      }
    });

    // Check for overlapping elements with same z-index
    zIndexMap.forEach((elements, zIndex) => {
      if (elements.length > 1) {
        // Check if they overlap
        for (let i = 0; i < elements.length; i++) {
          for (let j = i + 1; j < elements.length; j++) {
            if (this.elementsOverlap(elements[i], elements[j])) {
              this.issues.push({
                type: 'z-index',
                element: elements[i],
                message: `Potential z-index conflict: multiple elements with z-index ${zIndex} overlap`,
                severity: 'low'
              });
            }
          }
        }
      }
    });
  }

  private checkPerformance() {
    // Check for too many animations
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    if (animatedElements.length > 20) {
      this.issues.push({
        type: 'performance',
        element: document.body,
        message: `Too many animated elements: ${animatedElements.length} (may cause lag)`,
        severity: 'medium'
      });
    }

    // Check for will-change overuse
    const willChangeElements = document.querySelectorAll('[style*="will-change"]');
    if (willChangeElements.length > 15) {
      this.issues.push({
        type: 'performance',
        element: document.body,
        message: `Too many will-change properties: ${willChangeElements.length} (may cause performance issues)`,
        severity: 'medium'
      });
    }
  }

  private getBackgroundColor(element: HTMLElement): string {
    let el: HTMLElement | null = element;
    while (el) {
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
        return bg;
      }
      el = el.parentElement;
    }
    return '#FDFBF7'; // Default background
  }

  private calculateContrast(color1: string, color2: string): number {
    const toRgb = (color: string) => {
      const ctx = document.createElement('canvas').getContext('2d');
      if (!ctx) return [0, 0, 0];
      ctx.fillStyle = color;
      const computed = ctx.fillStyle as string;
      const match = /rgba?\((\d+), (\d+), (\d+)/.exec(computed);
      return match ? [Number(match[1]), Number(match[2]), Number(match[3])] : [0, 0, 0];
    };

    const [r1, g1, b1] = toRgb(color1).map(v => v / 255);
    const [r2, g2, b2] = toRgb(color2).map(v => v / 255);

    const luminance = (r: number, g: number, b: number) => {
      const transform = (v: number) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
      return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
    };

    const l1 = luminance(r1, g1, b1) + 0.05;
    const l2 = luminance(r2, g2, b2) + 0.05;

    return l1 > l2 ? l1 / l2 : l2 / l1;
  }

  private elementsOverlap(el1: HTMLElement, el2: HTMLElement): boolean {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    return !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
  }

  public getIssues(): VisualIssue[] {
    return [...this.issues];
  }

  public enable() {
    localStorage.setItem('visual-debug', 'true');
    this.scanForIssues();
  }

  public disable() {
    localStorage.removeItem('visual-debug');
  }
}

// Export singleton instance
export const visualDebugger = new VisualDebugger();

// Make available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).visualDebugger = visualDebugger;
}
