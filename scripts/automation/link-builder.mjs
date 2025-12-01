#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import https from 'node:https';
import { config } from 'dotenv';

// Load environment variables
config();

const SERPAPI_KEY = process.env.SERPAPI_KEY;

/**
 * Finds broken backlinks and opportunities
 */
class LinkBuilder {
  constructor() {
    this.apiKey = SERPAPI_KEY;
  }

  /**
   * Find competitor backlinks for inspiration
   */
  async findCompetitorLinks(competitors = ['ewhoring.com', 'sugar daddy sites']) {
    console.log('🔍 Finding competitor backlinks...');

    const backlinkOpportunities = [];

    for (const competitor of competitors) {
      try {
        const links = await this.getBacklinksFromSerpApi(competitor);
        backlinkOpportunities.push(...links);
      } catch (error) {
        console.warn(`⚠️ Could not get links for ${competitor}:`, error.message);
      }
    }

    return backlinkOpportunities;
  }

  /**
   * Get backlinks using SerpAPI
   */
  async getBacklinksFromSerpApi(domain) {
    if (!this.apiKey) {
      console.log('🔴 SerpAPI not configured');
      return [];
    }

    return new Promise((resolve) => {
      const url = `https://serpapi.com/search.json?engine=google&q=site:${domain}&api_key=${this.apiKey}`;

      https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            const response = JSON.parse(data);
            const links = response.organic_results?.map(result => ({
              url: result.link,
              title: result.title,
              domain: new URL(result.link).hostname,
              competitor: domain
            })) || [];

            resolve(links);
          } catch (error) {
            console.error('❌ Error parsing SerpAPI response:', error.message);
            resolve([]);
          }
        });
      }).on('error', (error) => {
        console.error('❌ SerpAPI request failed:', error.message);
        resolve([]);
      });
    });
  }

  /**
   * Generate content ideas for link building
   */
  generateContentIdeas() {
    const contentIdeas = [
      {
        title: "The Psychology of Sugar Daddy Relationships",
        type: "educational",
        target: "psychology blogs, relationship sites"
      },
      {
        title: "Financial Independence Through Alternative Income",
        type: "finance",
        target: "personal finance blogs, entrepreneur sites"
      },
      {
        title: "Digital Persona Creation: A Complete Guide",
        type: "technical",
        target: "marketing blogs, social media sites"
      },
      {
        title: "The Economics of Online Monetization",
        type: "business",
        target: "business blogs, economics sites"
      },
      {
        title: "Social Engineering: Ethical Considerations",
        type: "ethical",
        target: "technology ethics blogs, privacy sites"
      }
    ];

    return contentIdeas;
  }

  /**
   * Create resource pages for link building
   */
  async createResourcePages() {
    console.log('📄 Creating resource pages for link building...');

    const resources = [
      {
        title: "Sugar Daddy Statistics 2025",
        content: "Comprehensive statistics on the sugar daddy economy, including average arrangements, demographics, and market size.",
        slug: "sugar-daddy-statistics-2025"
      },
      {
        title: "Legal Guide to Online Arrangements",
        content: "Complete legal guide covering contracts, taxation, and jurisdiction considerations for online arrangements.",
        slug: "legal-guide-online-arrangements"
      },
      {
        title: "Sugar Daddy Cities: Where to Find the Wealthiest",
        content: "Ranking of cities by sugar daddy concentration, average incomes, and networking opportunities.",
        slug: "sugar-daddy-cities-guide"
      }
    ];

    // Save to resources directory
    for (const resource of resources) {
      const filename = `public/resources/${resource.slug}.html`;
      const html = this.generateResourcePageHTML(resource);

      try {
        await writeFile(filename, html);
        console.log(`✅ Created ${filename}`);
      } catch (error) {
        console.error(`❌ Failed to create ${filename}:`, error.message);
      }
    }
  }

  /**
   * Generate HTML for resource pages
   */
  generateResourcePageHTML(resource) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${resource.title} | Oranolio Protocol</title>
  <meta name="description" content="${resource.content.substring(0, 160)}...">
  <link rel="canonical" href="https://ewhoring.com/resources/${resource.slug}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
</head>
<body>
  <article>
    <h1>${resource.title}</h1>
    <p>${resource.content}</p>
    <p><em>Learn more at <a href="https://ewhoring.com">ewhoring.com</a></em></p>
  </article>
</body>
</html>`;
  }

  /**
   * Submit to directories and indexes
   */
  async submitToDirectories() {
    console.log('📋 Submitting to web directories...');

    const directories = [
      'https://www.curlie.org/',
      'https://www.dmoz.org/',
      'https://www.botw.org/'
    ];

    directories.forEach(dir => {
      console.log(`📝 Manual submission needed: ${dir}`);
    });

    console.log('💡 Tip: Use services like Moz Local, Yelp, and industry-specific directories');
  }

  /**
   * Generate broken link opportunities
   */
  async findBrokenLinkOpportunities() {
    console.log('🔗 Finding broken link building opportunities...');

    const opportunities = [
      {
        targetSite: 'sugar daddy forums',
        brokenLink: 'outdated sugar daddy guide',
        ourContent: 'updated comprehensive guide'
      },
      {
        targetSite: 'financial independence blogs',
        brokenLink: 'old side hustle list',
        ourContent: '2025 alternative income methods'
      },
      {
        targetSite: 'marketing blogs',
        brokenLink: 'outdated persona creation guide',
        ourContent: 'modern digital persona strategy'
      }
    ];

    opportunities.forEach(opp => {
      console.log(`🎯 Opportunity: Replace broken "${opp.brokenLink}" on ${opp.targetSite} with our "${opp.ourContent}"`);
    });
  }
}

/**
 * Main link building function
 */
async function runLinkBuilding() {
  console.log('🚀 Starting automated link building...');

  const linkBuilder = new LinkBuilder();

  // Find competitor backlinks
  const competitorLinks = await linkBuilder.findCompetitorLinks();
  console.log(`📊 Found ${competitorLinks.length} competitor backlinks for analysis`);

  // Generate content ideas
  const contentIdeas = linkBuilder.generateContentIdeas();
  console.log(`💡 Generated ${contentIdeas.length} content ideas for link building`);

  // Create resource pages
  await linkBuilder.createResourcePages();

  // Find broken link opportunities
  await linkBuilder.findBrokenLinkOpportunities();

  // Submit to directories
  await linkBuilder.submitToDirectories();

  console.log('🎉 Link building campaign ready!');
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'analyze':
    const lb = new LinkBuilder();
    await lb.findCompetitorLinks();
    break;
  case 'resources':
    const lb2 = new LinkBuilder();
    await lb2.createResourcePages();
    break;
  case 'opportunities':
    const lb3 = new LinkBuilder();
    await lb3.findBrokenLinkOpportunities();
    break;
  default:
    await runLinkBuilding();
    break;
}

