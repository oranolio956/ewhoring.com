#!/usr/bin/env node

import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

console.log('🔍 GOOGLE SITE AUDIT - Checking for indexing issues...\n');

// Check 1: Placeholder verification codes
console.log('1️⃣ Checking for placeholder verification codes...');
try {
  const indexHtml = await readFile('index.html', 'utf-8');
  const placeholders = [
    'GOOGLE_VERIFICATION_CODE_PLACEHOLDER',
    'BING_VERIFICATION_CODE_PLACEHOLDER',
    'YANDEX_VERIFICATION_CODE_PLACEHOLDER'
  ];

  const foundPlaceholders = placeholders.filter(p => indexHtml.includes(p));

  if (foundPlaceholders.length > 0) {
    console.log('❌ FOUND PLACEHOLDER VERIFICATION CODES:');
    foundPlaceholders.forEach(p => console.log(`   - ${p}`));
    console.log('   This will cause Google Search Console verification to fail!\n');
  } else {
    console.log('✅ No placeholder verification codes found\n');
  }
} catch (error) {
  console.log('❌ Error reading index.html\n');
}

// Check 2: Sitemap validity
console.log('2️⃣ Validating sitemap.xml...');
try {
  const sitemap = await readFile('public/sitemap.xml', 'utf-8');

  // Check for required elements
  const required = ['<urlset', '<url>', '<loc>', '<lastmod>', '<changefreq>', '<priority>'];
  const missing = required.filter(tag => !sitemap.includes(tag));

  if (missing.length > 0) {
    console.log('❌ MISSING SITEMAP ELEMENTS:');
    missing.forEach(m => console.log(`   - ${m}`));
  } else {
    console.log('✅ Sitemap structure is valid');
  }

  // Count URLs
  const urlCount = (sitemap.match(/<url>/g) || []).length;
  console.log(`📊 Sitemap contains ${urlCount} URLs\n`);

} catch (error) {
  console.log('❌ Error reading sitemap.xml\n');
}

// Check 3: Robots.txt
console.log('3️⃣ Checking robots.txt...');
try {
  const robots = await readFile('public/robots.txt', 'utf-8');

  if (robots.includes('Sitemap:')) {
    console.log('✅ Robots.txt includes sitemap references');
  } else {
    console.log('⚠️  Robots.txt missing sitemap reference');
  }

  if (robots.includes('User-agent: *') && robots.includes('Allow: /')) {
    console.log('✅ Robots.txt allows crawling');
  } else {
    console.log('⚠️  Robots.txt may be blocking crawlers');
  }
  console.log('');

} catch (error) {
  console.log('❌ Error reading robots.txt\n');
}

// Check 4: Canonical URLs
console.log('4️⃣ Checking canonical URLs...');
try {
  const generatedDir = 'public/generated';
  const files = await readdir(generatedDir);
  const htmlFiles = files.filter(f => f.endsWith('.html')).map(f => join(generatedDir, f));

  let canonicalIssues = 0;

  for (const file of htmlFiles) {
    const content = await readFile(file, 'utf-8');
    const canonicalMatch = content.match(/<link rel="canonical" href="([^"]+)"/);

    if (!canonicalMatch) {
      console.log(`❌ Missing canonical URL: ${file}`);
      canonicalIssues++;
    } else {
      const canonicalUrl = canonicalMatch[1];
      const filename = file.replace('public/', '');
      const expectedUrl = `https://ewhoring.com/${filename}`;

      if (canonicalUrl !== expectedUrl) {
        console.log(`⚠️  Canonical mismatch in ${file}:`);
        console.log(`   Expected: ${expectedUrl}`);
        console.log(`   Found: ${canonicalUrl}`);
        canonicalIssues++;
      }
    }
  }

  if (canonicalIssues === 0) {
    console.log('✅ All canonical URLs are correct\n');
  } else {
    console.log(`❌ Found ${canonicalIssues} canonical URL issues\n`);
  }

} catch (error) {
  console.log('❌ Error checking canonical URLs\n');
}

// Check 5: Schema.org markup
console.log('5️⃣ Validating Schema.org markup...');
try {
  const indexHtml = await readFile('index.html', 'utf-8');
  const schemaCount = (indexHtml.match(/@type/g) || []).length;

  if (schemaCount > 0) {
    console.log(`✅ Found ${schemaCount} Schema.org types`);
  } else {
    console.log('⚠️  No Schema.org markup found');
  }

  // Check for common required properties
  const requiredProps = ['@context', '@graph', 'name', 'url'];
  const missingProps = requiredProps.filter(prop => !indexHtml.includes(`"${prop}"`));

  if (missingProps.length > 0) {
    console.log('⚠️  Missing Schema.org properties:');
    missingProps.forEach(p => console.log(`   - ${p}`));
  } else {
    console.log('✅ Schema.org markup appears complete');
  }
  console.log('');

} catch (error) {
  console.log('❌ Error validating schema markup\n');
}

// Check 6: Mobile optimization
console.log('6️⃣ Checking mobile optimization...');
try {
  const indexHtml = await readFile('index.html', 'utf-8');

  const mobileChecks = [
    { name: 'Viewport meta tag', pattern: /viewport.*width=device-width/ },
    { name: 'Maximum scale', pattern: /maximum-scale=1\.0/ },
    { name: 'User scalable', pattern: /user-scalable=no/ },
    { name: 'Touch action', pattern: /touch-action/ }
  ];

  mobileChecks.forEach(check => {
    if (check.pattern.test(indexHtml)) {
      console.log(`✅ ${check.name}`);
    } else {
      console.log(`⚠️  Missing: ${check.name}`);
    }
  });
  console.log('');

} catch (error) {
  console.log('❌ Error checking mobile optimization\n');
}

// Check 7: Page speed signals
console.log('7️⃣ Checking page speed optimizations...');
try {
  const indexHtml = await readFile('index.html', 'utf-8');

  const speedChecks = [
    { name: 'Font display swap', pattern: /font-display.*swap/ },
    { name: 'Preconnect to fonts', pattern: /preconnect.*fonts/ },
    { name: 'DNS prefetch', pattern: /dns-prefetch/ },
    { name: 'Lazy loading images', pattern: /loading.*lazy/ }
  ];

  speedChecks.forEach(check => {
    if (check.pattern.test(indexHtml)) {
      console.log(`✅ ${check.name}`);
    } else {
      console.log(`⚠️  Missing: ${check.name}`);
    }
  });
  console.log('');

} catch (error) {
  console.log('❌ Error checking speed optimizations\n');
}

// Check 8: Security headers
console.log('8️⃣ Checking security headers...');
try {
  const indexHtml = await readFile('index.html', 'utf-8');

  const securityChecks = [
    { name: 'Content Security Policy', pattern: /Content-Security-Policy/ },
    { name: 'X-Frame-Options', pattern: /X-Frame-Options/ },
    { name: 'X-Content-Type-Options', pattern: /X-Content-Type-Options/ },
    { name: 'Referrer Policy', pattern: /Referrer-Policy/ }
  ];

  securityChecks.forEach(check => {
    if (check.pattern.test(indexHtml)) {
      console.log(`✅ ${check.name}`);
    } else {
      console.log(`⚠️  Missing: ${check.name}`);
    }
  });
  console.log('');

} catch (error) {
  console.log('❌ Error checking security headers\n');
}

console.log('🎯 AUDIT COMPLETE');
console.log('\n📋 RECOMMENDATIONS:');
console.log('1. Remove all placeholder verification codes');
console.log('2. Ensure sitemap.xml is accessible at /sitemap.xml');
console.log('3. Verify robots.txt is accessible at /robots.txt');
console.log('4. Test canonical URLs point to correct locations');
console.log('5. Validate Schema.org markup with Google\'s tool');
console.log('6. Test mobile-friendliness with Google\'s tool');
console.log('7. Run PageSpeed Insights and fix critical issues');
console.log('8. Submit sitemap to Google Search Console manually');
