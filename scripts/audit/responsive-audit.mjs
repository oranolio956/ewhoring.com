#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');

const ISSUES_FOUND = [];
const RECOMMENDATIONS = [];

// Responsive design audit checklist
const RESPONSIVE_CHECKS = [
  // Typography
  { pattern: /text-\[clamp\(/g, issue: 'Custom clamp() values may not work on all browsers', fix: 'Use Tailwind responsive classes instead' },
  { pattern: /text-\d+.*md:text-\d+/g, issue: 'Good responsive typography scaling' },

  // Spacing
  { pattern: /p-\d+.*md:p-\d+/g, issue: 'Good responsive padding' },
  { pattern: /m-\d+.*md:m-\d+/g, issue: 'Good responsive margins' },
  { pattern: /gap-\d+.*md:gap-\d+/g, issue: 'Good responsive gaps' },

  // Grid layouts
  { pattern: /grid-cols-\d+.*md:grid-cols-\d+/g, issue: 'Good responsive grid' },
  { pattern: /grid-cols-\d+.*lg:grid-cols-\d+/g, issue: 'Good responsive grid with lg breakpoint' },

  // Flexbox
  { pattern: /flex-col.*md:flex-row/g, issue: 'Good responsive flex direction' },

  // Images and media
  { pattern: /w-\[.*\].*md:w-\[.*\]/g, issue: 'Arbitrary width values - check mobile' },
  { pattern: /h-\[.*\].*md:h-\[.*\]/g, issue: 'Arbitrary height values - check mobile' },

  // Touch targets
  { pattern: /min-h-\[.*touch.*\]/g, issue: 'Touch-friendly minimum heights' },

  // Overflow issues
  { pattern: /overflow-hidden/g, issue: 'Check for content cutoff' },
  { pattern: /text-ellipsis/g, issue: 'Text truncation - ensure important content visible' },

  // Fixed positioning
  { pattern: /fixed.*top-\d+/g, issue: 'Fixed positioning - check mobile header overlap' },
  { pattern: /sticky/g, issue: 'Sticky positioning - test on mobile' },

  // Z-index issues
  { pattern: /z-\d+/g, issue: 'Z-index usage - check stacking context' },

  // Viewport units
  { pattern: /\d+vw|\d+vh/g, issue: 'Viewport units - test on small screens' },

  // Safe areas
  { pattern: /safe-area/g, issue: 'iOS safe areas implemented' },

  // Transform issues
  { pattern: /transform.*translate/g, issue: 'Transforms - check mobile performance' },
  { pattern: /transform.*rotate/g, issue: 'Rotation transforms - test on mobile' },
];

async function auditComponent(componentPath, componentName) {
  try {
    const content = await readFile(path.join(ROOT, componentPath), 'utf-8');

    console.log(`\n🔍 Auditing ${componentName}...`);

    // Check for responsive classes
    const hasResponsiveClasses = /md:|lg:|xl:|sm:/g.test(content);
    if (!hasResponsiveClasses) {
      ISSUES_FOUND.push(`${componentName}: No responsive classes found - potential mobile issues`);
    }

    // Check for hardcoded widths/heights that might not be responsive
    const hardcodedSizes = content.match(/\bw-\[\d+px\]|\bh-\[\d+px\]/g);
    if (hardcodedSizes) {
      ISSUES_FOUND.push(`${componentName}: Hardcoded pixel sizes found: ${hardcodedSizes.join(', ')} - may not scale properly`);
    }

    // Check for very large text that might overflow on mobile
    const largeText = content.match(/text-\[.*\d+rem.*\]|\d+rem/g);
    if (largeText) {
      RECOMMENDATIONS.push(`${componentName}: Large text sizes - ensure clamp() or responsive scaling`);
    }

    // Check for grid layouts
    const grids = content.match(/grid.*grid-cols/g);
    if (grids) {
      console.log(`✅ ${componentName}: Grid layouts found - ensure mobile-first`);
    }

    // Check for flexbox usage
    const flexes = content.match(/flex.*items-|justify-/g);
    if (flexes) {
      console.log(`✅ ${componentName}: Flexbox layouts found`);
    }

    // Check for proper mobile navigation
    if (componentName === 'NavBar') {
      const mobileMenu = /hidden.*md:block|block.*md:hidden/g.test(content);
      if (!mobileMenu) {
        ISSUES_FOUND.push('NavBar: No mobile-specific navigation patterns detected');
      }
    }

    // Check for touch targets
    const buttons = content.match(/button|onClick/g);
    if (buttons) {
      const touchTargets = /min-h-\[44px\]|py-\d+.*px-\d+/g.test(content);
      if (!touchTargets && buttons.length > 3) {
        RECOMMENDATIONS.push(`${componentName}: Check button touch targets (minimum 44px)`);
      }
    }

  } catch (error) {
    console.error(`❌ Error auditing ${componentName}:`, error.message);
  }
}

async function auditGlobalStyles() {
  console.log('\n🔍 Auditing Global Styles...');

  try {
    const indexHtml = await readFile(path.join(ROOT, 'index.html'), 'utf-8');

    // Check for viewport meta tag
    if (!indexHtml.includes('viewport')) {
      ISSUES_FOUND.push('CRITICAL: No viewport meta tag found');
    } else {
      console.log('✅ Viewport meta tag present');
    }

    // Check for proper responsive meta tags
    const responsiveMeta = indexHtml.includes('width=device-width') &&
                          indexHtml.includes('initial-scale=1.0') &&
                          indexHtml.includes('maximum-scale=1.0') &&
                          indexHtml.includes('user-scalable=no');

    if (!responsiveMeta) {
      ISSUES_FOUND.push('Responsive viewport meta tag incomplete');
    } else {
      console.log('✅ Responsive viewport configured');
    }

    // Check for iOS safe areas
    if (indexHtml.includes('safe-area-inset')) {
      console.log('✅ iOS safe areas implemented');
    } else {
      RECOMMENDATIONS.push('Consider iOS safe area support for notched devices');
    }

    // Check for proper font loading
    if (indexHtml.includes('font-display')) {
      console.log('✅ Font loading optimized');
    } else {
      RECOMMENDATIONS.push('Add font-display: swap for better loading');
    }

  } catch (error) {
    console.error('Error auditing global styles:', error.message);
  }
}

async function checkComponentImports() {
  console.log('\n🔍 Checking Component Imports...');

  const components = [
    'HeroSection',
    'NavBar',
    'MoneyPhone',
    'Testimonials',
    'WhySection',
    'FalseIdols',
    'BentoGrid',
    'TheSprint',
    'PricingTerminal',
    'KeywordTargets'
  ];

  for (const component of components) {
    try {
      const componentPath = path.join(ROOT, 'components', `${component}.tsx`);
      await auditComponent(`components/${component}.tsx`, component);
    } catch (error) {
      console.log(`⚠️  ${component}: File not found or error`);
    }
  }
}

async function generateAuditReport() {
  console.log('\n' + '='.repeat(60));
  console.log('📱 RESPONSIVE DESIGN AUDIT REPORT');
  console.log('='.repeat(60));

  console.log(`\n🚨 ISSUES FOUND: ${ISSUES_FOUND.length}`);
  ISSUES_FOUND.forEach(issue => console.log(`   ❌ ${issue}`));

  console.log(`\n💡 RECOMMENDATIONS: ${RECOMMENDATIONS.length}`);
  RECOMMENDATIONS.forEach(rec => console.log(`   ✅ ${rec}`));

  const criticalIssues = ISSUES_FOUND.filter(issue => issue.includes('CRITICAL'));
  if (criticalIssues.length > 0) {
    console.log(`\n🔥 CRITICAL FIXES NEEDED (${criticalIssues.length}):`);
    criticalIssues.forEach(issue => console.log(`   🚨 ${issue}`));
  }

  console.log('\n' + '='.repeat(60));
  console.log('📏 RESPONSIVE CHECKLIST:');
  console.log('   • Mobile-first design (base styles for mobile)');
  console.log('   • Touch targets minimum 44px');
  console.log('   • Readable text on all screens');
  console.log('   • No horizontal scroll');
  console.log('   • Proper viewport configuration');
  console.log('   • iOS safe areas');
  console.log('   • Performance optimized transforms');
  console.log('   • Content doesn\'t overflow containers');
  console.log('='.repeat(60));
}

async function main() {
  try {
    await auditGlobalStyles();
    await checkComponentImports();
    await generateAuditReport();
  } catch (error) {
    console.error('❌ Audit failed:', error.message);
    process.exit(1);
  }
}

main();
