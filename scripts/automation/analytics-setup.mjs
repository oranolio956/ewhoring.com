#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

/**
 * Setup Google Analytics 4 and Search Console verification
 */
async function setupAnalytics() {
  console.log('📊 Setting up Google Analytics 4 and Search Console...');

  const gaMeasurementId = process.env.GA_MEASUREMENT_ID;
  const googleVerificationCode = process.env.GOOGLE_VERIFICATION_CODE;

  if (!gaMeasurementId) {
    console.error('❌ GA_MEASUREMENT_ID environment variable not set');
    console.log('💡 Get your GA4 Measurement ID from Google Analytics');
    console.log('   1. Go to Google Analytics 4');
    console.log('   2. Admin > Data Streams > Web > Measurement ID');
    console.log('   3. Set GA_MEASUREMENT_ID in your .env file');
    return;
  }

  if (!googleVerificationCode) {
    console.error('❌ GOOGLE_VERIFICATION_CODE environment variable not set');
    console.log('💡 Get your Google Search Console verification code');
    console.log('   1. Go to Google Search Console');
    console.log('   2. Add Property > HTML tag > Copy the content value');
    console.log('   3. Set GOOGLE_VERIFICATION_CODE in your .env file');
    return;
  }

  try {
    // Update index.html with actual codes
    const indexHtml = await readFile('index.html', 'utf-8');

    let updatedHtml = indexHtml;

    // Replace GA4 placeholder
    updatedHtml = updatedHtml.replace(
      /GA_MEASUREMENT_ID/g,
      gaMeasurementId
    );

    // Add Google Search Console verification
    const verificationMeta = `<meta name="google-site-verification" content="${googleVerificationCode}" />`;

    if (!updatedHtml.includes('google-site-verification')) {
      // Insert after charset meta tag
      updatedHtml = updatedHtml.replace(
        /<meta charset="UTF-8">\s*/,
        `<meta charset="UTF-8">\n    ${verificationMeta}\n    `
      );
    }

    await writeFile('index.html', updatedHtml);
    console.log('✅ Google Analytics 4 and Search Console verification codes updated');

    // Create Google Analytics custom events
    await createAnalyticsEvents();

  } catch (error) {
    console.error('❌ Analytics setup failed:', error.message);
  }
}

/**
 * Create custom Google Analytics events for tracking
 */
async function createAnalyticsEvents() {
  console.log('📈 Setting up custom analytics events...');

  const eventsScript = `
// Custom Google Analytics Events
function trackEvent(eventName, parameters = {}) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
}

// Track CTA button clicks
function trackCTA(buttonId, buttonText) {
  trackEvent('cta_click', {
    button_id: buttonId,
    button_text: buttonText,
    page_location: window.location.href
  });
}

// Track crypto payment attempts
function trackCryptoPayment(cryptoType, amount) {
  trackEvent('begin_checkout', {
    currency: cryptoType.toUpperCase(),
    value: amount,
    items: [{
      item_name: 'Sugar Daddy Protocol',
      price: amount,
      currency: cryptoType.toUpperCase()
    }]
  });
}

// Track social shares
function trackSocialShare(platform) {
  trackEvent('share', {
    method: platform
  });
}

// Track scroll depth
function trackScrollDepth(percentage) {
  trackEvent('scroll', {
    percent_scrolled: percentage
  });
}

// Auto-track scroll depth
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = Math.round((scrollTop / docHeight) * 100);

  if (scrollPercent > maxScrollDepth && scrollPercent % 25 === 0) {
    maxScrollDepth = scrollPercent;
    trackScrollDepth(scrollPercent);
  }
});

// Track time on page
let startTime = Date.now();
window.addEventListener('beforeunload', () => {
  const timeSpent = Math.round((Date.now() - startTime) / 1000);
  trackEvent('time_on_page', {
    time_spent_seconds: timeSpent
  });
});`;

  try {
    // Add to index.html before closing body tag
    const indexHtml = await readFile('index.html', 'utf-8');
    const updatedHtml = indexHtml.replace(
      /<\/body>/,
      `    <script>${eventsScript}</script>\n  </body>`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Custom analytics events added');

  } catch (error) {
    console.error('❌ Failed to add analytics events:', error.message);
  }
}

/**
 * Setup Google Tag Manager (optional alternative)
 */
async function setupGoogleTagManager() {
  const gtmId = process.env.GTM_ID;

  if (!gtmId) {
    console.log('🔄 Google Tag Manager not configured (optional)');
    return;
  }

  console.log('🏷️ Setting up Google Tag Manager...');

  const gtmScript = `
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');</script>
<!-- End Google Tag Manager -->`;

  const gtmNoscript = `
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`;

  try {
    const indexHtml = await readFile('index.html', 'utf-8');

    let updatedHtml = indexHtml;

    // Add GTM script to head
    updatedHtml = updatedHtml.replace(
      /<title>/,
      `${gtmScript}\n    <title>`
    );

    // Add GTM noscript to body
    updatedHtml = updatedHtml.replace(
      /<body>/,
      `<body>\n    ${gtmNoscript}`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Google Tag Manager setup complete');

  } catch (error) {
    console.error('❌ GTM setup failed:', error.message);
  }
}

/**
 * Generate analytics configuration guide
 */
function generateSetupGuide() {
  const guide = `# Google Analytics 4 & Search Console Setup Guide

## Required Environment Variables

Add these to your \`.env\` file:

\`\`\`bash
# Google Analytics 4 Measurement ID
GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Search Console Verification Code
GOOGLE_VERIFICATION_CODE=your_verification_code_here

# Optional: Google Tag Manager ID
GTM_ID=GTM-XXXXXXX
\`\`\`

## Getting Your Codes

### Google Analytics 4:
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use existing one
3. Go to Admin → Data Streams → Web
4. Copy the "Measurement ID" (starts with G-)

### Google Search Console:
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (URL: https://ewhoring.com)
3. Choose "HTML tag" verification method
4. Copy the content value from the meta tag

### Optional: Google Tag Manager:
1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new container
3. Copy the GTM-XXXXXXX ID

## Running Setup

\`\`\`bash
npm run setup:analytics
\`\`\`

This will automatically update your HTML files with the correct codes and add custom tracking events.

## Custom Events Tracked

- CTA button clicks
- Crypto payment attempts
- Social shares
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Core Web Vitals (LCP, FID, CLS)

## Testing

After setup, you can verify in Google Analytics:
1. Real-time → Events to see custom events
2. Go to Search Console to verify ownership`;

  console.log('\n📋 Analytics Setup Guide:');
  console.log('========================');
  console.log(guide);
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'setup':
    await setupAnalytics();
    await setupGoogleTagManager();
    break;
  case 'guide':
    generateSetupGuide();
    break;
  default:
    console.log('Usage: node analytics-setup.mjs [setup|guide]');
    console.log('  setup - Configure GA4 and Search Console codes');
    console.log('  guide - Show setup instructions');
    break;
}
