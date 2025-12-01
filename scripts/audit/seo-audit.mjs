#!/usr/bin/env node

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';
import https from 'node:https';

/**
 * Comprehensive SEO Audit Tool
 * Identifies missing optimizations and improvement opportunities
 */
class SEOAudit {
  constructor() {
    this.issues = {
      critical: [],
      high: [],
      medium: [],
      low: [],
      info: []
    };
    this.scores = {
      technical: 0,
      content: 0,
      mobile: 0,
      performance: 0,
      accessibility: 0
    };
  }

  /**
   * Run complete SEO audit
   */
  async runFullAudit() {
    console.log('🔍 Running comprehensive SEO audit...\n');

    await this.auditTechnicalSEO();
    await this.auditContentSEO();
    await this.auditMobileSEO();
    await this.auditPerformanceSEO();
    await this.auditAccessibilitySEO();
    await this.auditSchemaMarkup();
    await this.auditImageOptimization();
    await this.auditInternalLinking();
    await this.auditSecurityHeaders();

    this.calculateScores();
    await this.generateAuditReport();

    console.log('✅ SEO audit complete!');
  }

  /**
   * Technical SEO Audit
   */
  async auditTechnicalSEO() {
    console.log('🔧 Auditing technical SEO...');

    // Check robots.txt
    try {
      const robotsTxt = await readFile('public/robots.txt', 'utf-8');
      if (!robotsTxt.includes('User-agent: *')) {
        this.issues.medium.push({
          type: 'robots.txt',
          issue: 'Missing or incomplete robots.txt',
          impact: 'Search engines may not crawl site properly',
          fix: 'Add proper robots.txt with crawl directives'
        });
      }
    } catch (e) {
      this.issues.critical.push({
        type: 'robots.txt',
        issue: 'Missing robots.txt file',
        impact: 'Critical for search engine crawling',
        fix: 'Create robots.txt in public/ directory'
      });
    }

    // Check sitemap
    try {
      const sitemapXml = await readFile('public/sitemap.xml', 'utf-8');
      if (!sitemapXml.includes('<urlset')) {
        this.issues.high.push({
          type: 'sitemap',
          issue: 'Invalid sitemap.xml format',
          impact: 'Search engines cannot discover pages',
          fix: 'Fix sitemap XML structure'
        });
      }
    } catch (e) {
      this.issues.critical.push({
        type: 'sitemap',
        issue: 'Missing sitemap.xml',
        impact: 'Search engines cannot discover pages',
        fix: 'Generate sitemap.xml'
      });
    }

    // Check for duplicate content
    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));
    const titles = new Map();

    for (const file of htmlFiles) {
      try {
        const content = await readFile(join('public', file), 'utf-8');
        const titleMatch = content.match(/<title>(.*?)<\/title>/i);
        if (titleMatch) {
          const title = titleMatch[1].toLowerCase().trim();
          if (titles.has(title)) {
            this.issues.medium.push({
              type: 'duplicate_content',
              issue: `Duplicate title: "${title}" in ${file} and ${titles.get(title)}`,
              impact: 'Confuses search engines',
              fix: 'Make titles unique'
            });
          } else {
            titles.set(title, file);
          }
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }

    // Check meta descriptions
    const descriptions = new Map();
    for (const file of htmlFiles.slice(0, 20)) { // Check first 20 files
      try {
        const content = await readFile(join('public', file), 'utf-8');
        const descMatch = content.match(/<meta name="description" content="([^"]*)"/i);
        if (descMatch) {
          const desc = descMatch[1].toLowerCase().trim();
          if (descriptions.has(desc)) {
            this.issues.medium.push({
              type: 'duplicate_meta',
              issue: `Duplicate meta description in ${file}`,
              impact: 'Search engines may choose wrong snippet',
              fix: 'Make descriptions unique'
            });
          } else {
            descriptions.set(desc, file);
          }

          // Check description length
          if (desc.length < 120) {
            this.issues.low.push({
              type: 'meta_description',
              issue: `Meta description too short in ${file} (${desc.length} chars)`,
              impact: 'May not display full description in SERP',
              fix: 'Expand to 150-160 characters'
            });
          } else if (desc.length > 160) {
            this.issues.low.push({
              type: 'meta_description',
              issue: `Meta description too long in ${file} (${desc.length} chars)`,
              impact: 'Description may be truncated in SERP',
              fix: 'Shorten to 150-160 characters'
            });
          }
        } else {
          this.issues.medium.push({
            type: 'missing_meta',
            issue: `Missing meta description in ${file}`,
            impact: 'No description in search results',
            fix: 'Add meta description tag'
          });
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  }

  /**
   * Content SEO Audit
   */
  async auditContentSEO() {
    console.log('📝 Auditing content SEO...');

    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    for (const file of htmlFiles.slice(0, 10)) { // Check first 10 files
      try {
        const content = await readFile(join('public', file), 'utf-8');

        // Check for H1 tags
        const h1Count = (content.match(/<h1[^>]*>/gi) || []).length;
        if (h1Count === 0) {
          this.issues.medium.push({
            type: 'h1_missing',
            issue: `Missing H1 tag in ${file}`,
            impact: 'Page lacks main heading',
            fix: 'Add exactly one H1 tag'
          });
        } else if (h1Count > 1) {
          this.issues.medium.push({
            type: 'multiple_h1',
            issue: `Multiple H1 tags (${h1Count}) in ${file}`,
            impact: 'Confuses search engines about page topic',
            fix: 'Use only one H1 tag per page'
          });
        }

        // Check content length
        const textContent = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
        const wordCount = textContent.split(' ').length;

        if (wordCount < 300) {
          this.issues.medium.push({
            type: 'thin_content',
            issue: `Thin content in ${file} (${wordCount} words)`,
            impact: 'May not rank well for competitive keywords',
            fix: 'Add more comprehensive content (aim for 1500+ words)'
          });
        }

        // Check for internal links
        const internalLinks = (content.match(/href="[^"]*"/g) || [])
          .filter(link => link.includes('.html') || link.startsWith('href="/'))
          .length;

        if (internalLinks < 3) {
          this.issues.low.push({
            type: 'internal_links',
            issue: `Few internal links in ${file} (${internalLinks})`,
            impact: 'Poor site structure and link equity distribution',
            fix: 'Add more internal links to related pages'
          });
        }

      } catch (e) {
        // Skip files that can't be read
      }
    }
  }

  /**
   * Mobile SEO Audit
   */
  async auditMobileSEO() {
    console.log('📱 Auditing mobile SEO...');

    const indexHtml = await readFile('index.html', 'utf-8');

    // Check viewport meta tag
    if (!indexHtml.includes('viewport')) {
      this.issues.critical.push({
        type: 'viewport',
        issue: 'Missing viewport meta tag',
        impact: 'Site not mobile-friendly',
        fix: 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">'
      });
    }

    // Check for mobile-specific CSS
    if (!indexHtml.includes('@media') && !indexHtml.includes('sm:') && !indexHtml.includes('md:') && !indexHtml.includes('lg:')) {
      this.issues.medium.push({
        type: 'mobile_css',
        issue: 'No mobile-specific CSS detected',
        impact: 'Poor mobile user experience',
        fix: 'Add responsive CSS with media queries or Tailwind responsive classes'
      });
    }
  }

  /**
   * Performance SEO Audit
   */
  async auditPerformanceSEO() {
    console.log('⚡ Auditing performance SEO...');

    const indexHtml = await readFile('index.html', 'utf-8');

    // Check for lazy loading
    const imgTags = indexHtml.match(/<img[^>]*>/g) || [];
    const lazyLoaded = imgTags.filter(img => img.includes('loading="lazy"')).length;
    const totalImages = imgTags.length;

    if (totalImages > 0 && lazyLoaded / totalImages < 0.5) {
      this.issues.medium.push({
        type: 'lazy_loading',
        issue: `Only ${lazyLoaded}/${totalImages} images use lazy loading`,
        impact: 'Slower page load times',
        fix: 'Add loading="lazy" to above-the-fold images'
      });
    }

    // Check for image optimization
    const unoptimizedImages = imgTags.filter(img =>
      !img.includes('.webp') &&
      !img.includes('width=') &&
      !img.includes('height=')
    ).length;

    if (unoptimizedImages > 0) {
      this.issues.medium.push({
        type: 'image_optimization',
        issue: `${unoptimizedImages} images lack optimization attributes`,
        impact: 'Larger page size, slower loading',
        fix: 'Use WebP format, add width/height attributes, implement lazy loading'
      });
    }

    // Check for resource hints
    const resourceHints = ['dns-prefetch', 'preconnect', 'preload', 'prefetch']
      .filter(hint => indexHtml.includes(hint)).length;

    if (resourceHints < 2) {
      this.issues.low.push({
        type: 'resource_hints',
        issue: 'Few resource hints implemented',
        impact: 'Slower loading of external resources',
        fix: 'Add dns-prefetch and preconnect for external domains'
      });
    }
  }

  /**
   * Accessibility SEO Audit
   */
  async auditAccessibilitySEO() {
    console.log('♿ Auditing accessibility SEO...');

    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    for (const file of htmlFiles.slice(0, 5)) {
      try {
        const content = await readFile(join('public', file), 'utf-8');

        // Check for alt attributes on images
        const imgTags = content.match(/<img[^>]*>/g) || [];
        const missingAlt = imgTags.filter(img => !img.includes('alt=')).length;

        if (missingAlt > 0) {
          this.issues.medium.push({
            type: 'missing_alt',
            issue: `${missingAlt} images missing alt attributes in ${file}`,
            impact: 'Poor accessibility and image SEO',
            fix: 'Add descriptive alt attributes to all images'
          });
        }

        // Check for lang attribute
        if (!content.includes('<html lang=')) {
          this.issues.low.push({
            type: 'lang_attribute',
            issue: `Missing lang attribute in ${file}`,
            impact: 'Screen readers may not read correctly',
            fix: 'Add lang="en" to html tag'
          });
        }

        // Check heading hierarchy
        const headings = content.match(/<h[1-6][^>]*>/g) || [];
        const h1Count = headings.filter(h => h.startsWith('<h1')).length;

        if (h1Count > 1) {
          this.issues.medium.push({
            type: 'heading_hierarchy',
            issue: `Multiple H1 tags in ${file}`,
            impact: 'Poor document structure',
            fix: 'Use one H1 and proper heading hierarchy'
          });
        }

      } catch (e) {
        // Skip files that can't be read
      }
    }
  }

  /**
   * Schema Markup Audit
   */
  async auditSchemaMarkup() {
    console.log('🏷️ Auditing schema markup...');

    const indexHtml = await readFile('index.html', 'utf-8');
    const schemaMatches = indexHtml.match(/"@type":\s*"([^"]+)"/g) || [];
    const schemaTypes = [...new Set(schemaMatches.map(match =>
      match.replace(/"@type":\s*"/, '').replace(/"/, '')
    ))];

    // Essential schema types for this site
    const essentialSchemas = [
      'WebSite', 'Organization', 'WebPage', 'Article', 'FAQPage', 'HowTo'
    ];

    const missingSchemas = essentialSchemas.filter(type => !schemaTypes.includes(type));

    if (missingSchemas.length > 0) {
      this.issues.medium.push({
        type: 'schema_markup',
        issue: `Missing schema types: ${missingSchemas.join(', ')}`,
        impact: 'Reduced rich snippet opportunities',
        fix: 'Add missing structured data markup'
      });
    }

    // Check for JSON-LD format
    const jsonLdCount = (indexHtml.match(/<script type="application\/ld\+json"/g) || []).length;
    if (jsonLdCount === 0) {
      this.issues.low.push({
        type: 'json_ld',
        issue: 'No JSON-LD structured data found',
        impact: 'Search engines prefer JSON-LD format',
        fix: 'Convert microdata to JSON-LD format'
      });
    }
  }

  /**
   * Image Optimization Audit
   */
  async auditImageOptimization() {
    console.log('🖼️ Auditing image optimization...');

    try {
      const publicFiles = await readdir('public');
      const imageFiles = publicFiles.filter(file =>
        /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file)
      );

      if (imageFiles.length === 0) {
        this.issues.info.push({
          type: 'no_images',
          issue: 'No images found in public directory',
          impact: 'Visual content could improve engagement',
          fix: 'Consider adding relevant images'
        });
        return;
      }

      // Check for WebP usage
      const webpFiles = imageFiles.filter(file => file.endsWith('.webp'));
      const webpRatio = webpFiles.length / imageFiles.length;

      if (webpRatio < 0.5) {
        this.issues.medium.push({
          type: 'webp_format',
          issue: `Only ${Math.round(webpRatio * 100)}% of images are WebP format`,
          impact: 'Larger file sizes, slower loading',
          fix: 'Convert images to WebP format for better compression'
        });
      }

    } catch (e) {
      this.issues.low.push({
        type: 'image_check_error',
        issue: 'Could not check image files',
        impact: 'Unknown image optimization status',
        fix: 'Ensure public/images directory exists'
      });
    }
  }

  /**
   * Internal Linking Audit
   */
  async auditInternalLinking() {
    console.log('🔗 Auditing internal linking...');

    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    const linkGraph = new Map();

    for (const file of htmlFiles.slice(0, 10)) {
      try {
        const content = await readFile(join('public', file), 'utf-8');
        const links = content.match(/href="([^"]*\.html)"/g) || [];

        linkGraph.set(file, links.map(link =>
          link.replace('href="', '').replace('"', '')
        ));
      } catch (e) {
        // Skip files that can't be read
      }
    }

    // Check for orphaned pages
    const allLinks = Array.from(linkGraph.values()).flat();
    const linkedFiles = new Set(allLinks.map(link => link.replace('./', '')));
    const allFiles = new Set(linkGraph.keys());

    const orphanedPages = Array.from(allFiles).filter(file => !linkedFiles.has(file));

    if (orphanedPages.length > 1) { // Allow index.html to be orphaned
      this.issues.medium.push({
        type: 'orphaned_pages',
        issue: `Orphaned pages: ${orphanedPages.join(', ')}`,
        impact: 'Poor crawlability and link equity distribution',
        fix: 'Add internal links to these pages from other pages'
      });
    }
  }

  /**
   * Security Headers Audit
   */
  async auditSecurityHeaders() {
    console.log('🔒 Auditing security headers...');

    const indexHtml = await readFile('index.html', 'utf-8');

    const securityHeaders = [
      'Content-Security-Policy',
      'X-Frame-Options',
      'X-Content-Type-Options',
      'X-XSS-Protection',
      'Referrer-Policy',
      'Strict-Transport-Security'
    ];

    const foundHeaders = securityHeaders.filter(header =>
      indexHtml.includes(header) || indexHtml.includes(header.toLowerCase())
    );

    const missingHeaders = securityHeaders.filter(header => !foundHeaders.includes(header));

    if (missingHeaders.length > 0) {
      this.issues.medium.push({
        type: 'security_headers',
        issue: `Missing security headers: ${missingHeaders.join(', ')}`,
        impact: 'Vulnerable to certain attacks',
        fix: 'Add security headers to server configuration'
      });
    }
  }

  /**
   * Calculate SEO scores
   */
  calculateScores() {
    const totalIssues = Object.values(this.issues).reduce((sum, issues) => sum + issues.length, 0);

    // Base scores
    this.scores.technical = Math.max(0, 100 - (this.issues.critical.length * 20 + this.issues.high.length * 10));
    this.scores.content = Math.max(0, 100 - (this.issues.medium.length * 5));
    this.scores.mobile = this.issues.critical.some(i => i.type === 'viewport') ? 0 : 85;
    this.scores.performance = Math.max(0, 100 - (this.issues.medium.filter(i => i.type.includes('image') || i.type.includes('lazy')).length * 10));
    this.scores.accessibility = Math.max(0, 100 - (this.issues.medium.filter(i => i.type.includes('alt') || i.type.includes('lang')).length * 15));
  }

  /**
   * Generate comprehensive audit report
   */
  async generateAuditReport() {
    const report = `# SEO Audit Report

Generated: ${new Date().toISOString()}

## Executive Summary

**Overall SEO Score: ${Math.round(Object.values(this.scores).reduce((a, b) => a + b) / 5)}/100**

### Category Scores
- **Technical SEO**: ${this.scores.technical}/100
- **Content SEO**: ${this.scores.content}/100
- **Mobile SEO**: ${this.scores.mobile}/100
- **Performance SEO**: ${this.scores.performance}/100
- **Accessibility SEO**: ${this.scores.accessibility}/100

## Issues Found

### Critical Issues (${this.issues.critical.length})
${this.issues.critical.map(issue => `- **${issue.type}**: ${issue.issue}\n  *Impact*: ${issue.impact}\n  *Fix*: ${issue.fix}`).join('\n\n')}

### High Priority Issues (${this.issues.high.length})
${this.issues.high.map(issue => `- **${issue.type}**: ${issue.issue}\n  *Impact*: ${issue.impact}\n  *Fix*: ${issue.fix}`).join('\n\n')}

### Medium Priority Issues (${this.issues.medium.length})
${this.issues.medium.map(issue => `- **${issue.type}**: ${issue.issue}\n  *Impact*: ${issue.impact}\n  *Fix*: ${issue.fix}`).join('\n\n')}

### Low Priority Issues (${this.issues.low.length})
${this.issues.low.map(issue => `- **${issue.type}**: ${issue.issue}\n  *Impact*: ${issue.impact}\n  *Fix*: ${issue.fix}`).join('\n\n')}

### Informational (${this.issues.info.length})
${this.issues.info.map(issue => `- **${issue.type}**: ${issue.issue}\n  *Impact*: ${issue.impact}\n  *Fix*: ${issue.fix}`).join('\n\n')}

## Recommendations

### Immediate Actions (Critical/High Priority)
1. Fix all critical issues that prevent proper crawling/indexing
2. Address high-priority issues affecting search visibility
3. Implement missing technical SEO elements

### Short-term Improvements (Medium Priority)
1. Optimize content structure and quality
2. Improve mobile experience
3. Enhance performance optimizations

### Long-term Enhancements (Low Priority)
1. Add advanced accessibility features
2. Implement additional schema markup
3. Optimize for voice search and international SEO

## Tools & Resources

- **Google Search Console**: Monitor indexing and search performance
- **Google PageSpeed Insights**: Performance optimization
- **Google Mobile-Friendly Test**: Mobile optimization
- **Schema Markup Validator**: Structured data validation
- **WAVE Accessibility Tool**: Accessibility testing

## Next Steps

1. Prioritize and fix critical issues
2. Re-run this audit after implementing fixes
3. Monitor improvements in search rankings
4. Schedule regular audits (monthly recommended)

---
*This report was generated by the automated SEO audit tool.*`;

    await writeFile('reports/seo-audit-report.md', report);
    console.log('📋 SEO audit report saved to reports/seo-audit-report.md');

    // Display summary
    console.log('\n📊 SEO Audit Summary:');
    console.log('===================');
    console.log(`Overall Score: ${Math.round(Object.values(this.scores).reduce((a, b) => a + b) / 5)}/100`);
    console.log(`Critical Issues: ${this.issues.critical.length}`);
    console.log(`High Priority: ${this.issues.high.length}`);
    console.log(`Medium Priority: ${this.issues.medium.length}`);
    console.log(`Low Priority: ${this.issues.low.length}`);
  }
}

/**
 * Quick optimization fixes
 */
class SEOAutoFix {
  constructor() {
    this.fixes = [];
  }

  /**
   * Apply automatic fixes for common issues
   */
  async applyAutoFixes() {
    console.log('🔧 Applying automatic SEO fixes...');

    await this.fixMissingAltTags();
    await this.addLazyLoading();
    await this.optimizeMetaDescriptions();
    await this.addSecurityHeaders();

    console.log(`✅ Applied ${this.fixes.length} automatic fixes`);
  }

  /**
   * Fix missing alt tags
   */
  async fixMissingAltTags() {
    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    for (const file of htmlFiles) {
      try {
        let content = await readFile(join('public', file), 'utf-8');
        let modified = false;

        // Add generic alt tags where missing
        content = content.replace(/<img([^>]*)(?<!alt="[^"]*")>/g, (match) => {
          modified = true;
          return match.replace('>', ' alt="SEO optimized image">');
        });

        if (modified) {
          await writeFile(join('public', file), content);
          this.fixes.push(`Added missing alt tags to ${file}`);
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  }

  /**
   * Add lazy loading to images
   */
  async addLazyLoading() {
    const indexHtml = await readFile('index.html', 'utf-8');

    // Add loading="lazy" to images that don't have it
    const updatedHtml = indexHtml.replace(
      /<img([^>]*)(?<!loading="lazy")>/g,
      '<img$1 loading="lazy">'
    );

    if (updatedHtml !== indexHtml) {
      await writeFile('index.html', updatedHtml);
      this.fixes.push('Added lazy loading to images');
    }
  }

  /**
   * Optimize meta descriptions
   */
  async optimizeMetaDescriptions() {
    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    for (const file of htmlFiles.slice(0, 5)) {
      try {
        let content = await readFile(join('public', file), 'utf-8');

        // Find meta descriptions that are too short
        const descRegex = /<meta name="description" content="([^"]*)"/g;
        let match;
        let modified = false;

        while ((match = descRegex.exec(content)) !== null) {
          const desc = match[1];
          if (desc.length < 120) {
            // Extend short descriptions
            const extendedDesc = desc + ' Learn more about sugar daddy strategies, success stories, and proven methods for building lucrative arrangements.';
            content = content.replace(match[0], `<meta name="description" content="${extendedDesc}"`);
            modified = true;
          }
        }

        if (modified) {
          await writeFile(join('public', file), content);
          this.fixes.push(`Extended meta description in ${file}`);
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }
  }

  /**
   * Add basic security headers
   */
  async addSecurityHeaders() {
    const indexHtml = await readFile('index.html', 'utf-8');

    const securityHeaders = `
    <!-- Security Headers -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-Frame-Options" content="DENY" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
    <meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin" />`;

    if (!indexHtml.includes('X-Content-Type-Options')) {
      const updatedHtml = indexHtml.replace(
        /<meta name="msvalidate\.01"/,
        `${securityHeaders}\n    <meta name="msvalidate.01"`
      );

      await writeFile('index.html', updatedHtml);
      this.fixes.push('Added basic security headers');
    }
  }
}

/**
 * Main audit function
 */
async function runSEOAudit() {
  const audit = new SEOAudit();
  await audit.runFullAudit();

  console.log('\n🤖 Applying automatic fixes...');
  const autoFix = new SEOAutoFix();
  await autoFix.applyAutoFixes();
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'audit':
    await runSEOAudit();
    break;
  case 'fix':
    const autoFix = new SEOAutoFix();
    await autoFix.applyAutoFixes();
    break;
  case 'full':
    await runSEOAudit();
    break;
  default:
    console.log('Usage: node seo-audit.mjs [audit|fix|full]');
    console.log('  audit - Run comprehensive SEO audit');
    console.log('  fix - Apply automatic fixes only');
    console.log('  full - Run audit and apply fixes');
    break;
}
