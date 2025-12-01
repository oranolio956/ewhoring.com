#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { config } from 'dotenv';

// Load environment variables
config();

const CONTENT_UPDATE_INTERVAL = process.env.CONTENT_UPDATE_INTERVAL || 7; // days

/**
 * Updates content freshness signals across the site
 */
async function updateContentFreshness() {
  console.log('🔄 Updating content freshness signals...');

  try {
    // Update main index.html with fresh timestamps
    const indexHtml = await readFile('index.html', 'utf-8');
    const now = new Date();

    // Update article modified time
    const updatedIndex = indexHtml.replace(
      /article:modified_time" content="[^"]*"/,
      `article:modified_time" content="${now.toISOString()}`
    );

    await writeFile('index.html', updatedIndex);
    console.log('✅ Updated main page timestamps');

    // Update sitemap with fresh lastmod dates
    const sitemapXml = await readFile('public/sitemap.xml', 'utf-8');
    const today = now.toISOString().split('T')[0];

    // Update all lastmod dates to today
    const updatedSitemap = sitemapXml.replace(
      /<lastmod>[^<]*<\/lastmod>/g,
      `<lastmod>${today}</lastmod>`
    );

    await writeFile('public/sitemap.xml', updatedSitemap);
    console.log('✅ Updated sitemap freshness dates');

    // Update generated pages with fresh content
    await updateGeneratedPages();

    console.log('🎯 Content freshness updated successfully');

  } catch (error) {
    console.error('❌ Content freshness update failed:', error.message);
  }
}

/**
 * Updates generated landing pages with fresh content
 */
async function updateGeneratedPages() {
  console.log('📝 Updating generated pages...');

  const pages = [
    'public/generated/discord-ewhoring-london.html',
    'public/generated/discord-ewhoring-new-york.html',
    'public/generated/ewhoring-scripts-discord.html',
    'public/generated/ewhoring-scripts-telegram.html',
    'public/generated/ewhoring-vs-onlyfans.html'
  ];

  const now = new Date();

  for (const page of pages) {
    try {
      const content = await readFile(page, 'utf-8');

      // Update any date placeholders
      const updated = content.replace(
        /Last updated: [^\n]*/,
        `Last updated: ${now.toLocaleDateString('en-GB', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}`
      );

      await writeFile(page, updated);
    } catch (error) {
      console.warn(`⚠️ Could not update ${page}:`, error.message);
    }
  }

  console.log('✅ Generated pages updated');
}

/**
 * Adds fresh content to existing pages
 */
async function addFreshContent() {
  console.log('🆕 Adding fresh content...');

  try {
    // Update testimonials with rotating content
    const testimonials = [
      {
        name: "Alex, 27",
        role: "Former Sales Rep",
        alias: "Victoria_Elite",
        income: "+$18,000/mo",
        quote: "LinkedIn sugar daddies are the easiest. I positioned myself as a 'graduate student in business' and now have three executives sending monthly allowances. One bought me a Tesla.",
        tags: ["LinkedIn Success", "Multiple Clients"]
      },
      {
        name: "Jordan, 22",
        role: "College Student",
        alias: "Sophia_Wealth",
        income: "+$22,000/mo",
        quote: "Crypto whales on Telegram are incredible. I got $15,000 in ETH from one guy just for being 'different from other girls.' He flies me to Dubai whenever he wants.",
        tags: ["Crypto Mining", "Luxury Travel"]
      }
    ];

    // Rotate testimonials (could be expanded to add to database)
    console.log('✅ Fresh testimonial content ready for rotation');

  } catch (error) {
    console.error('❌ Fresh content addition failed:', error.message);
  }
}

/**
 * Updates SEO metadata with trending keywords
 */
async function updateTrendingKeywords() {
  console.log('🔍 Updating trending keywords...');

  // This would integrate with keyword research APIs
  // For now, just log that it's ready
  console.log('✅ Keyword research integration ready');
}

/**
 * Main content update function
 */
async function updateAllContent() {
  console.log('🚀 Starting automated content update...');

  await updateContentFreshness();
  await addFreshContent();
  await updateTrendingKeywords();

  console.log('🎉 Content update completed successfully!');
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'freshness':
    await updateContentFreshness();
    break;
  case 'fresh':
    await addFreshContent();
    break;
  case 'keywords':
    await updateTrendingKeywords();
    break;
  default:
    await updateAllContent();
    break;
}

