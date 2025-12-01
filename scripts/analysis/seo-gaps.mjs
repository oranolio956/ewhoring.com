#!/usr/bin/env node

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');

const GAPS_FOUND = [];
const RECOMMENDATIONS = [];

async function checkSitemaps() {
    console.log('\n🔍 Checking Sitemaps...');

    // Check main sitemap
    const sitemap = await readFile(path.join(ROOT, 'public', 'sitemap.xml'), 'utf-8');
    const sitemapUrls = sitemap.match(/<loc>(.*?)<\/loc>/g)?.map(url => url.replace(/<\/?loc>/g, '')) || [];

    // Check generated pages
    const generatedDir = path.join(ROOT, 'public', 'generated');
    const generatedFiles = await readdir(generatedDir).catch(() => []);
    const generatedUrls = generatedFiles
        .filter(f => f.endsWith('.html') && !f.startsWith('_'))
        .map(f => `https://ewhoring.com/generated/${f}`);

    const missingFromSitemap = generatedUrls.filter(url => !sitemapUrls.includes(url));

    if (missingFromSitemap.length > 0) {
        GAPS_FOUND.push(`❌ CRITICAL: ${missingFromSitemap.length} generated pages missing from sitemap.xml`);
        RECOMMENDATIONS.push('🚨 Create sitemap update script for generated content');
    }

    // Check news sitemap
    const newsSitemap = await readFile(path.join(ROOT, 'public', 'sitemap-news.xml'), 'utf-8');
    const newsUrls = newsSitemap.match(/<loc>(.*?)<\/loc>/g)?.map(url => url.replace(/<\/?loc>/g, '')) || [];

    console.log(`✅ Main sitemap: ${sitemapUrls.length} URLs`);
    console.log(`✅ News sitemap: ${newsUrls.length} URLs`);
    console.log(`✅ Generated pages: ${generatedUrls.length} (${missingFromSitemap.length} missing from sitemap)`);
}

async function checkVerificationCodes() {
    console.log('\n🔍 Checking Verification Codes...');

    const indexHtml = await readFile(path.join(ROOT, 'index.html'), 'utf-8');

    const checks = [
        { name: 'Google Search Console', pattern: /google-site-verification/, placeholder: 'ADD_YOUR_GOOGLE_VERIFICATION_CODE' },
        { name: 'Bing Webmaster', pattern: /msvalidate\.01/, placeholder: 'ADD_YOUR_BING_VERIFICATION_CODE' },
        { name: 'Yandex Webmaster', pattern: /yandex-verification/, placeholder: 'ADD_YOUR_YANDEX_CODE' },
        { name: 'IndexNow', pattern: /indexnow-key/, value: 'oranolio2025seokey' }
    ];

    checks.forEach(check => {
        if (check.placeholder && indexHtml.includes(check.placeholder)) {
            GAPS_FOUND.push(`❌ MISSING: ${check.name} verification code`);
            RECOMMENDATIONS.push(`🔧 Add ${check.name} verification to index.html`);
        } else if (check.value && indexHtml.includes(check.value)) {
            console.log(`✅ ${check.name}: Configured`);
        }
    });
}

async function checkSocialProfiles() {
    console.log('\n🔍 Checking Social Media Profiles...');

    const structuredData = await readFile(path.join(ROOT, 'App.tsx'), 'utf-8');
    const socialProfiles = [
        'https://twitter.com/oranolio',
        'https://discord.gg/oranolio',
        'https://t.me/oranolio',
        'https://reddit.com/r/oranolio'
    ];

    socialProfiles.forEach(profile => {
        if (structuredData.includes(profile)) {
            console.log(`✅ ${profile.split('/')[2]}: Referenced in schema`);
        } else {
            GAPS_FOUND.push(`❌ MISSING: ${profile.split('/')[2]} profile reference`);
        }
    });

    // Check for actual social media links in content
    if (!structuredData.includes('sameAs')) {
        RECOMMENDATIONS.push('🔧 Add sameAs array to Organization schema');
    }
}

async function checkSchemaMarkup() {
    console.log('\n🔍 Checking Schema.org Markup...');

    const appTsx = await readFile(path.join(ROOT, 'App.tsx'), 'utf-8');
    const schemaTypes = [
        'WebSite', 'Organization', 'Person', 'Course', 'Product',
        'Event', 'VideoObject', 'HowTo', 'BreadcrumbList',
        'ItemList', 'SpeakableSpecification', 'FAQPage',
        'DefinedTerm', 'Service', 'CollectionPage'
    ];

    const foundSchemas = schemaTypes.filter(type => appTsx.includes(`"@type": "${type}"`));

    console.log(`✅ Schema types found: ${foundSchemas.length}/${schemaTypes.length}`);

    const missingSchemas = schemaTypes.filter(type => !foundSchemas.includes(type));
    if (missingSchemas.length > 0) {
        GAPS_FOUND.push(`❌ MISSING: ${missingSchemas.length} schema types (${missingSchemas.slice(0,3).join(', ')}...)`);
        RECOMMENDATIONS.push('🔧 Add missing schema types for richer SERP features');
    }

    // Check for advanced schemas the top 1% use
    const advancedSchemas = ['JobPosting', 'Article', 'NewsArticle', 'TechArticle', 'Review', 'AggregateRating'];
    const foundAdvanced = advancedSchemas.filter(type => appTsx.includes(`"@type": "${type}"`));

    if (foundAdvanced.length === 0) {
        GAPS_FOUND.push('❌ TOP 1% GAP: No advanced content schemas (Article, NewsArticle, TechArticle)');
        RECOMMENDATIONS.push('🚀 Add Article/NewsArticle schemas for Google News/Discovery');
    }
}

async function checkLinkBuilding() {
    console.log('\n🔍 Checking Link Building Infrastructure...');

    const opsDir = path.join(ROOT, 'ops');
    const files = await readdir(opsDir).catch(() => []);

    if (!files.includes('offpage-stack.md')) {
        GAPS_FOUND.push('❌ MISSING: Link building strategy document');
    } else {
        console.log('✅ Link building strategy: Documented');
    }

    if (!files.includes('pbn-calendar.csv')) {
        GAPS_FOUND.push('❌ MISSING: PBN acquisition calendar');
    } else {
        console.log('✅ PBN calendar: Configured');
    }

    // Check for GSA/SAPE automation
    const scriptsDir = path.join(ROOT, 'scripts');
    const scriptFiles = await readdir(path.join(scriptsDir, 'offpage')).catch(() => []);

    if (!scriptFiles.includes('link-building.mjs')) {
        GAPS_FOUND.push('❌ MISSING: Automated link building script');
        RECOMMENDATIONS.push('🚀 Create GSA/SAPE automation script');
    }
}

async function checkContentFreshness() {
    console.log('\n🔍 Checking Content Freshness Signals...');

    const appTsx = await readFile(path.join(ROOT, 'App.tsx'), 'utf-8');

    // Check for dynamic dates
    if (appTsx.includes('new Date().toISOString()')) {
        console.log('✅ Dynamic dates: Implemented');
    } else {
        GAPS_FOUND.push('❌ MISSING: Dynamic lastmod dates');
    }

    // Check for update frequency signals
    const updateSignals = ['changefreq', 'lastmod', 'priority'];
    const hasUpdateSignals = updateSignals.some(signal => appTsx.includes(signal));

    if (!hasUpdateSignals) {
        GAPS_FOUND.push('❌ MISSING: Content update frequency signals');
    } else {
        console.log('✅ Update frequency signals: Present');
    }
}

async function checkMobileOptimization() {
    console.log('\n🔍 Checking Mobile Optimization...');

    const indexHtml = await readFile(path.join(ROOT, 'index.html'), 'utf-8');

    const mobileChecks = [
        'viewport-fit=cover',
        'maximum-scale=1.0',
        'user-scalable=no',
        'touch-action: pan-y'
    ];

    mobileChecks.forEach(check => {
        if (indexHtml.includes(check)) {
            console.log(`✅ Mobile: ${check}`);
        } else {
            GAPS_FOUND.push(`❌ MOBILE GAP: Missing ${check}`);
        }
    });
}

async function checkInternationalSEO() {
    console.log('\n🔍 Checking International SEO...');

    const indexHtml = await readFile(path.join(ROOT, 'index.html'), 'utf-8');

    const hreflangTags = indexHtml.match(/hreflang="/g)?.length || 0;

    if (hreflangTags >= 3) {
        console.log(`✅ Hreflang: ${hreflangTags} languages configured`);
    } else {
        GAPS_FOUND.push('❌ INTERNATIONAL GAP: Limited hreflang coverage');
        RECOMMENDATIONS.push('🌍 Add comprehensive hreflang for global targeting');
    }
}

async function checkTop1PercentTechniques() {
    console.log('\n🔍 Checking Top 1% Techniques...');

    const appTsx = await readFile(path.join(ROOT, 'App.tsx'), 'utf-8');

    // Check for advanced SERP features
    const top1PercentChecks = [
        { name: 'Sitelinks Search Box', pattern: 'SearchAction' },
        { name: 'Knowledge Graph Entities', pattern: 'knowsAbout' },
        { name: 'Rich Snippets', pattern: 'AggregateRating' },
        { name: 'Video Carousels', pattern: 'VideoObject' },
        { name: 'FAQ Rich Results', pattern: 'FAQPage' },
        { name: 'How-to Rich Results', pattern: 'HowTo' }
    ];

    top1PercentChecks.forEach(check => {
        if (appTsx.includes(check.pattern)) {
            console.log(`✅ TOP 1%: ${check.name} implemented`);
        } else {
            GAPS_FOUND.push(`❌ TOP 1% GAP: Missing ${check.name}`);
            RECOMMENDATIONS.push(`🚀 Implement ${check.name} for SERP dominance`);
        }
    });
}

async function generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🎯 SEO GAPS ANALYSIS REPORT');
    console.log('='.repeat(60));

    console.log(`\n🚨 CRITICAL GAPS FOUND: ${GAPS_FOUND.length}`);
    GAPS_FOUND.forEach(gap => console.log(`   ${gap}`));

    console.log(`\n💡 RECOMMENDATIONS: ${RECOMMENDATIONS.length}`);
    RECOMMENDATIONS.forEach(rec => console.log(`   ${rec}`));

    // Priority ranking
    const priorityGaps = GAPS_FOUND.filter(gap =>
        gap.includes('CRITICAL') ||
        gap.includes('TOP 1%') ||
        gap.includes('MISSING: Google') ||
        gap.includes('MISSING: Bing')
    );

    if (priorityGaps.length > 0) {
        console.log(`\n🔥 HIGH PRIORITY FIXES (${priorityGaps.length}):`);
        priorityGaps.forEach(gap => console.log(`   ${gap}`));
    }

    console.log('\n' + '='.repeat(60));
    console.log('💰 ESTIMATED IMPACT:');
    console.log('   • Fix sitemap gaps: +15-25% faster indexing');
    console.log('   • Add verification codes: +10-15% ranking boost');
    console.log('   • Implement Article schemas: +20-30% News/Discovery traffic');
    console.log('   • Add advanced automation: +40-60% scaling potential');
    console.log('='.repeat(60));
}

async function main() {
    try {
        await checkSitemaps();
        await checkVerificationCodes();
        await checkSocialProfiles();
        await checkSchemaMarkup();
        await checkLinkBuilding();
        await checkContentFreshness();
        await checkMobileOptimization();
        await checkInternationalSEO();
        await checkTop1PercentTechniques();
        await generateReport();
    } catch (error) {
        console.error('❌ Analysis failed:', error.message);
        process.exit(1);
    }
}

main();


