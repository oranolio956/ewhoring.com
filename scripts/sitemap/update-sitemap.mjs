#!/usr/bin/env node

import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');

const HOST = 'https://ewhoring.com';
const CURRENT_DATE = new Date().toISOString().split('T')[0];

async function updateMainSitemap() {
    console.log('🔄 Updating main sitemap.xml...');

    // Read existing sitemap
    const sitemapPath = path.join(ROOT, 'public', 'sitemap.xml');
    let sitemapContent = await readFile(sitemapPath, 'utf-8');

    // Get generated pages
    const generatedDir = path.join(ROOT, 'public', 'generated');
    const generatedFiles = await readdir(generatedDir).catch(() => []);
    const generatedUrls = generatedFiles
        .filter(f => f.endsWith('.html') && !f.startsWith('_'))
        .map(f => ({
            url: `${HOST}/generated/${f}`,
            priority: '0.8',
            changefreq: 'weekly'
        }));

    // Find the last </url> tag and insert before </urlset>
    const insertPoint = sitemapContent.lastIndexOf('</url>');
    if (insertPoint === -1) {
        console.warn('Could not find </url> tag in sitemap');
        return;
    }

    // Add generated URLs before the closing </urlset>
    let newUrls = '';
    generatedUrls.forEach(({ url, priority, changefreq }) => {
        newUrls += `
  <url>
    <loc>${url}</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

    const updatedSitemap = sitemapContent.slice(0, insertPoint + 6) + newUrls + sitemapContent.slice(insertPoint + 6);

    await writeFile(sitemapPath, updatedSitemap);
    console.log(`✅ Added ${generatedUrls.length} generated pages to sitemap.xml`);
}

async function updateNewsSitemap() {
    console.log('🔄 Updating news sitemap...');

    // For news sitemap, we could add time-sensitive generated content
    // For now, just update lastmod dates
    const newsSitemapPath = path.join(ROOT, 'public', 'sitemap-news.xml');
    let newsContent = await readFile(newsSitemapPath, 'utf-8');

    // Update all lastmod dates to current date
    newsContent = newsContent.replace(
        /<news:publication_date>.*?<\/news:publication_date>/g,
        `<news:publication_date>${CURRENT_DATE}T00:00:00Z</news:publication_date>`
    );

    await writeFile(newsSitemapPath, newsContent);
    console.log('✅ Updated news sitemap dates');
}

async function pingSearchEngines() {
    console.log('📡 Pinging search engines for updated sitemaps...');

    const sitemaps = [
        `${HOST}/sitemap.xml`,
        `${HOST}/sitemap-news.xml`
    ];

    for (const sitemap of sitemaps) {
        try {
            // Ping Google
            const googlePing = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemap)}`;
            const googleResponse = await fetch(googlePing);
            console.log(`✅ Google ping: ${googleResponse.status === 200 ? 'OK' : 'Failed'}`);

            // Ping Bing
            const bingPing = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemap)}`;
            const bingResponse = await fetch(bingPing);
            console.log(`✅ Bing ping: ${bingResponse.status === 200 ? 'OK' : 'Failed'}`);

        } catch (error) {
            console.warn(`⚠️ Ping failed for ${sitemap}:`, error.message);
        }
    }
}

async function main() {
    try {
        await updateMainSitemap();
        await updateNewsSitemap();
        await pingSearchEngines();

        console.log('\n🎉 Sitemap update complete!');
        console.log('📊 Generated pages now indexed for faster ranking');

    } catch (error) {
        console.error('❌ Sitemap update failed:', error.message);
        process.exit(1);
    }
}

main();
