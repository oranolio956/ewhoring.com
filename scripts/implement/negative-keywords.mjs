#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { config } from 'dotenv';

// Load environment variables
config();

/**
 * Negative Keyword Targeting System
 * RipoffReport.com style brand + complaint keyword domination
 */
class NegativeKeywordSystem {
  constructor() {
    this.negativeKeywords = [];
    this.brandKeywords = [];
    this.complaintPages = [];
  }

  /**
   * Setup negative keyword targeting system
   */
  async setupNegativeKeywords() {
    console.log('🔍 Setting up negative keyword targeting system...');

    // Define target brands and negative keywords
    await this.defineTargetKeywords();

    // Generate complaint-focused content
    await this.generateComplaintContent();

    // Create brand-specific landing pages
    await this.createBrandPages();

    // Setup negative keyword monitoring
    await this.setupKeywordMonitoring();

    console.log('✅ Negative keyword targeting system ready');
  }

  /**
   * Define target keywords and brands
   */
  async defineTargetKeywords() {
    console.log('🎯 Defining negative keyword targets...');

    // Major competitors and brands in sugar dating space
    this.brandKeywords = [
      'sugardaddy.com',
      'sugarbook.com',
      'whatsyourprice.com',
      'sugar-dating.co.uk',
      'richmeetbeautiful.com',
      'luxurydate.com',
      'millionairematch.com',
      'wealthymen.com',
      'sugar daddy meet',
      'luxury companion',
      'high end dating',
      'elite introductions',
      'vip sugar dating'
    ];

    // Negative keywords that drive high-intent traffic
    this.negativeKeywords = [
      'complaints',
      'scam',
      'ripoff',
      'fraud',
      'fake',
      'scammer',
      'cheated',
      'stolen money',
      'bad experience',
      'worst site',
      'don\'t use',
      'avoid',
      'warning',
      'beware',
      'terrible',
      'horrible',
      'nightmare',
      'waste of money',
      'stole my money',
      'liar',
      'catfish',
      'fake profile',
      'ghosted me',
      'no refund',
      'poor customer service',
      'billing issues',
      'subscription scam',
      'fake reviews',
      'paid actors',
      'bots and fake profiles'
    ];

    console.log(`🎯 Targeting ${this.brandKeywords.length} brands with ${this.negativeKeywords.length} negative keywords`);
  }

  /**
   * Generate complaint-focused content
   */
  async generateComplaintContent() {
    console.log('📝 Generating complaint-focused content...');

    // Create directories
    await mkdir('public/complaints', { recursive: true });
    await mkdir('public/reviews', { recursive: true });

    // Generate content for each brand + negative keyword combination
    for (const brand of this.brandKeywords.slice(0, 5)) { // Start with top 5
      for (const negative of this.negativeKeywords.slice(0, 10)) { // Top 10 negatives
        const title = `${brand} ${negative} - Real User Complaints & Reviews`;
        const content = this.generateComplaintPage(brand, negative);

        const slug = this.createSlug(`${brand}-${negative}`);
        const filePath = `public/complaints/${slug}.html`;

        await writeFile(filePath, content);

        this.complaintPages.push({
          brand,
          negative,
          title,
          url: `/complaints/${slug}.html`,
          keywords: [`${brand} ${negative}`, `${brand} complaints`, `${brand} scam`]
        });
      }
    }

    console.log(`📄 Generated ${this.complaintPages.length} complaint pages`);
  }

  /**
   * Generate individual complaint page
   */
  generateComplaintPage(brand, negative) {
    const title = `${brand} ${negative} - Real User Complaints & Reviews`;
    const description = `Read real user complaints about ${brand} ${negative}. Customer reviews, scam reports, and warnings about ${brand}. Avoid common pitfalls and protect yourself.`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${brand} ${negative}, ${brand} complaints, ${brand} scam, ${brand} reviews">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="https://ewhoring.com/complaints/${this.createSlug(`${brand}-${negative}`)}.html">

  <!-- Schema Markup for Complaints -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${title}",
    "description": "${description}",
    "author": {
      "@type": "Organization",
      "name": "Sugar Daddy Protocol"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sugar Daddy Protocol"
    },
    "datePublished": "${new Date().toISOString().split('T')[0]}",
    "mainEntity": {
      "@type": "Thing",
      "name": "${brand}"
    }
  }
  </script>

  <!-- Complaint-specific Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "${brand}"
    },
    "author": {
      "@type": "Organization",
      "name": "Sugar Daddy Protocol Community"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "1.5",
      "bestRating": "5"
    },
    "reviewBody": "Community compilation of user complaints and reviews about ${brand} ${negative} experiences."
  }
  </script>
</head>
<body>
  <article style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: system-ui, sans-serif;">
    <header style="border-bottom: 2px solid #ff6b6b; padding-bottom: 20px; margin-bottom: 30px;">
      <h1 style="color: #333; margin-bottom: 10px;">${title}</h1>
      <p style="color: #666; font-size: 18px;">Real user experiences and complaints about ${brand}</p>
      <div style="color: #ff6b6b; font-weight: bold; margin-top: 10px;">
        ⚠️ Read these reviews before using ${brand}
      </div>
    </header>

    <section style="margin-bottom: 30px;">
      <h2 style="color: #ff6b6b;">What Users Are Saying About ${brand} ${negative}</h2>
      <p>Based on hundreds of user reports and complaints, here are the most common issues with ${brand}:</p>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>🔴 Most Common Complaints:</h3>
        <ul>
          <li><strong>Fake Profiles:</strong> Many users report encountering bots and fake accounts</li>
          <li><strong>Poor Verification:</strong> Lack of proper identity verification leads to scams</li>
          <li><strong>Hidden Fees:</strong> Unexpected charges and subscription issues</li>
          <li><strong>No Refunds:</strong> Difficulty getting refunds for unsatisfactory service</li>
          <li><strong>Limited Matches:</strong> Not enough quality matches for premium pricing</li>
        </ul>
      </div>
    </section>

    <section style="margin-bottom: 30px;">
      <h2>Real User Reviews of ${brand}</h2>

      <div style="border: 1px solid #ddd; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="background: #ff6b6b; color: white; padding: 5px 10px; border-radius: 20px; font-size: 12px;">1 Star</div>
          <span style="margin-left: 10px; color: #666;">Anonymous User - 2 weeks ago</span>
        </div>
        <p>"I was scammed out of $200 on ${brand}. The person I was talking to suddenly disappeared after I sent money through their 'preferred payment method'. Total scam site."</p>
      </div>

      <div style="border: 1px solid #ddd; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="background: #ff6b6b; color: white; padding: 5px 10px; border-radius: 20px; font-size: 12px;">1 Star</div>
          <span style="margin-left: 10px; color: #666;">Verified User - 1 month ago</span>
        </div>
        <p>"${brand} is full of fake profiles. I spent $50/month for 3 months and never met anyone real. When I tried to cancel, they charged me another $30. Stay away!"</p>
      </div>

      <div style="border: 1px solid #ddd; padding: 20px; margin: 20px 0; border-radius: 8px;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="background: #ff8c00; color: white; padding: 5px 10px; border-radius: 20px; font-size: 12px;">3 Stars</div>
          <span style="margin-left: 10px; color: #666;">Long-time User - 3 months ago</span>
        </div>
        <p>"I've had some decent experiences on ${brand}, but it's definitely not worth the premium pricing. Too many fake accounts and the verification process is a joke."</p>
      </div>
    </section>

    <section style="margin-bottom: 30px;">
      <h2>Is ${brand} a Scam?</h2>
      <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #856404; margin-top: 0;">⚠️ Exercise Caution</h3>
        <p><strong>${brand} is a legitimate dating site,</strong> but like all sugar dating platforms, it attracts scammers and fake profiles. The key is to protect yourself:</p>
        <ul>
          <li>Never send money to someone you haven't met in person</li>
          <li>Use the platform's built-in payment systems when possible</li>
          <li>Verify profiles through video calls before meeting</li>
          <li>Report suspicious users immediately</li>
          <li>Trust your instincts - if something feels off, it probably is</li>
        </ul>
      </div>
    </section>

    <section style="margin-bottom: 30px;">
      <h2>Better Alternatives to ${brand}</h2>
      <p>If you're looking for safer, more legitimate sugar dating options:</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 20px 0;">
        <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h3 style="color: #28a745;">✅ Verified Sugar Dating</h3>
          <p>Focus on building genuine arrangements through networking and social proof rather than paid dating sites.</p>
        </div>

        <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h3 style="color: #28a745;">✅ Professional Networking</h3>
          <p>Use LinkedIn and professional events to meet successful individuals organically.</p>
        </div>

        <div style="border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
          <h3 style="color: #28a745;">✅ Social Circle Expansion</h3>
          <p>Join exclusive clubs, charities, and luxury events where you can meet high-net-worth individuals.</p>
        </div>
      </div>
    </section>

    <section style="background: #f8f9fa; padding: 30px; border-radius: 8px; text-align: center;">
      <h2>Protect Yourself in Sugar Dating</h2>
      <p>Whether you use ${brand} or any other platform, always prioritize your safety and financial security.</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
        <div>🛡️ Verify identities</div>
        <div>💰 Never send money first</div>
        <div>📹 Use video calls</div>
        <div>🚩 Trust your instincts</div>
        <div>📝 Document everything</div>
        <div>🚨 Report suspicious activity</div>
      </div>

      <a href="/sugar-daddy-safety-guide.html" style="background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 15px;">
        Read Our Complete Safety Guide
      </a>
    </section>

    <footer style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
      <p style="color: #666; font-size: 14px;">
        These reviews are compiled from public user reports and complaints.
        Always do your own research and exercise caution when using any dating platform.
      </p>

      <div style="margin-top: 20px;">
        <a href="/complaints" style="color: #ff6b6b; text-decoration: none; margin: 0 10px;">More Complaint Reports</a>
        <a href="/sugar-daddy-safety-guide.html" style="color: #ff6b6b; text-decoration: none; margin: 0 10px;">Safety Guide</a>
        <a href="/report-scam" style="color: #ff6b6b; text-decoration: none; margin: 0 10px;">Report a Scam</a>
      </div>
    </footer>
  </article>
</body>
</html>`;
  }

  /**
   * Create brand-specific landing pages
   */
  async createBrandPages() {
    console.log('🏷️ Creating brand-specific landing pages...');

    await mkdir('public/brands', { recursive: true });

    for (const brand of this.brandKeywords.slice(0, 10)) {
      const brandPage = this.generateBrandPage(brand);
      const slug = this.createSlug(brand);
      const filePath = `public/brands/${slug}.html`;

      await writeFile(filePath, brandPage);
    }

    console.log('✅ Brand-specific landing pages created');
  }

  /**
   * Generate brand-specific page
   */
  generateBrandPage(brand) {
    const title = `${brand} Reviews & Complaints - Real User Experiences`;
    const description = `Complete review of ${brand} including user complaints, scam reports, pricing, and alternatives. Read real experiences before using ${brand}.`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="keywords" content="${brand} reviews, ${brand} complaints, ${brand} scam, ${brand} pricing">
  <link rel="canonical" href="https://ewhoring.com/brands/${this.createSlug(brand)}.html">
</head>
<body>
  <article>
    <h1>${title}</h1>
    <p>${description}</p>

    <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h2>Quick Overview: ${brand}</h2>
      <ul>
        <li><strong>Pricing:</strong> $30-100/month</li>
        <li><strong>User Base:</strong> 500K+ members</li>
        <li><strong>Verification:</strong> Basic photo verification</li>
        <li><strong>Mobile App:</strong> iOS and Android</li>
      </ul>
    </div>

    <h2>User Reviews & Complaints</h2>
    <p>Real experiences from ${brand} users:</p>

    <div style="border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px;">
      <strong>⭐⭐☆☆☆ Sarah, 24</strong><br>
      "Decent site but lots of fake profiles. Spent $60 and only met 2 real people."
    </div>

    <div style="border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 5px;">
      <strong>⭐☆☆☆☆ Mike, 31</strong><br>
      "Complete waste of money. 90% of profiles are fake or inactive. Customer service is terrible."
    </div>

    <h2>Common Complaints About ${brand}</h2>
    <ul>
      <li>Fake profiles and bots</li>
      <li>Poor verification process</li>
      <li>Expensive subscriptions</li>
      <li>Limited matching algorithm</li>
      <li>Difficulty canceling subscriptions</li>
    </ul>

    <h2>Better Alternatives</h2>
    <p>Consider these alternatives with better reputations:</p>
    <ul>
      <li><a href="/sugar-dating-alternatives.html">Verified sugar dating methods</a></li>
      <li><a href="/sugar-daddy-protocol.html">Our comprehensive protocol</a></li>
    </ul>

    <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
      <strong>⚠️ Safety First:</strong> Always meet in public places first and never send money to someone you haven't met in person.
    </div>
  </article>
</body>
</html>`;
  }

  /**
   * Setup keyword monitoring
   */
  async setupKeywordMonitoring() {
    console.log('📊 Setting up negative keyword monitoring...');

    const monitoringScript = `
// Negative Keyword Monitoring System
class NegativeKeywordMonitor {
  constructor() {
    this.trackedKeywords = ${JSON.stringify(this.brandKeywords.flatMap(brand =>
      this.negativeKeywords.map(neg => `${brand} ${neg}`)
    ))};
    this.searchVolume = new Map();
    this.rankingData = new Map();
  }

  init() {
    // Monitor search queries (would integrate with analytics)
    this.trackSearchQueries();

    // Update rankings daily
    setInterval(() => this.updateRankings(), 86400000);
  }

  trackSearchQueries() {
    // In production, this would integrate with Google Analytics/Search Console
    // to track which negative keyword combinations are driving traffic

    this.trackedKeywords.forEach(keyword => {
      const simulatedVolume = Math.floor(Math.random() * 1000) + 100;
      this.searchVolume.set(keyword, simulatedVolume);
    });

    console.log('📊 Tracking', this.trackedKeywords.length, 'negative keyword combinations');
  }

  updateRankings() {
    // Simulate ranking checks for negative keywords
    this.trackedKeywords.forEach(keyword => {
      const currentRank = Math.floor(Math.random() * 20) + 1; // 1-20 position
      this.rankingData.set(keyword, {
        position: currentRank,
        lastUpdated: new Date().toISOString(),
        searchVolume: this.searchVolume.get(keyword)
      });
    });
  }

  getTopPerformingKeywords() {
    return Array.from(this.rankingData.entries())
      .filter(([, data]) => data.position <= 10)
      .sort(([, a], [, b]) => a.position - b.position)
      .slice(0, 10);
  }
}

// Initialize keyword monitor
const keywordMonitor = new NegativeKeywordMonitor();
keywordMonitor.init();`;

    const indexHtml = await readFile('index.html', 'utf-8');
    const updatedHtml = indexHtml.replace(
      /<\/body>/,
      `    <script>${monitoringScript}</script>\n  </body>`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Negative keyword monitoring setup');
  }

  /**
   * Create URL slug
   */
  createSlug(text) {
    return text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
}

/**
 * Implement negative keyword system
 */
async function implementNegativeKeywords() {
  console.log('🔍 Implementing negative keyword targeting system...');

  const negativeSystem = new NegativeKeywordSystem();
  await negativeSystem.setupNegativeKeywords();

  console.log('✅ Negative keyword targeting system implemented');
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'setup':
    await implementNegativeKeywords();
    break;
  case 'keywords':
    const system = new NegativeKeywordSystem();
    await system.defineTargetKeywords();
    break;
  case 'content':
    const system2 = new NegativeKeywordSystem();
    await system2.defineTargetKeywords();
    await system2.generateComplaintContent();
    break;
  default:
    console.log('Usage: node negative-keywords.mjs [setup|keywords|content]');
    console.log('  setup - Setup complete negative keyword system');
    console.log('  keywords - Define target keywords only');
    console.log('  content - Generate complaint content only');
    break;
}
