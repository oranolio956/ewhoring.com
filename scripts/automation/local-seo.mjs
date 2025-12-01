#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';

/**
 * Add local SEO structured data for service areas
 */
async function addLocalSEO() {
  console.log('🏙️ Adding local SEO structured data...');

  // Service areas based on generated content
  const serviceAreas = [
    {
      city: 'London',
      country: 'United Kingdom',
      description: 'Sugar Daddy Protocol services in London, UK. Find wealthy executives and high-net-worth individuals in the London area.',
      geo: {
        latitude: 51.5074,
        longitude: -0.1278
      },
      page: 'public/generated/discord-ewhoring-london.html'
    },
    {
      city: 'New York',
      country: 'United States',
      description: 'Sugar Daddy Protocol services in New York City. Connect with wealthy businessmen and entrepreneurs in NYC.',
      geo: {
        latitude: 40.7128,
        longitude: -74.0060
      },
      page: 'public/generated/discord-ewhoring-new-york.html'
    }
  ];

  for (const area of serviceAreas) {
    try {
      await addLocalStructuredData(area);
    } catch (error) {
      console.error(`❌ Failed to add local SEO for ${area.city}:`, error.message);
    }
  }

  // Add general business structured data to main page
  await addBusinessStructuredData();

  console.log('✅ Local SEO structured data added');
}

/**
 * Add local business structured data to city pages
 */
async function addLocalStructuredData(area) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Sugar Daddy Protocol - ${area.city}`,
    "description": area.description,
    "provider": {
      "@type": "Organization",
      "name": "Oranolio Systems",
      "url": "https://ewhoring.com",
      "logo": "https://ewhoring.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "url": "https://ewhoring.com"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": area.city,
      "addressCountry": area.country
    },
    "serviceType": "Digital Marketing Consultation",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": area.geo.latitude,
      "longitude": area.geo.longitude
    }
  };

  const html = await readFile(area.page, 'utf-8');

  // Add structured data to head
  const structuredDataScript = `<script type="application/ld+json">${JSON.stringify(localBusinessSchema, null, 2)}</script>`;

  const updatedHtml = html.replace(
    /<\/head>/,
    `  ${structuredDataScript}\n</head>`
  );

  await writeFile(area.page, updatedHtml);
  console.log(`✅ Added local SEO for ${area.city}`);
}

/**
 * Add general business structured data to main page
 */
async function addBusinessStructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Oranolio Systems",
        "url": "https://ewhoring.com",
        "logo": "https://ewhoring.com/logo.png",
        "description": "The #1 protocol for targeting wealthy sugar daddies and high-net-worth individuals. Learn how to secure monthly allowances and luxury arrangements.",
        "foundingDate": "2014",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://ewhoring.com",
          "availableLanguage": "English"
        },
        "sameAs": [
          // Add social media URLs when available
        ],
        "areaServed": [
          {
            "@type": "Country",
            "name": "United States"
          },
          {
            "@type": "Country",
            "name": "United Kingdom"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Sugar Daddy Protocol Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Sugar Daddy Protocol Masterclass",
                "description": "Complete guide to targeting wealthy men and securing arrangements"
              }
            }
          ]
        }
      }
    ]
  };

  const indexHtml = await readFile('index.html', 'utf-8');

  // Check if structured data already exists
  if (indexHtml.includes('"name": "Oranolio Systems"')) {
    console.log('📋 Business structured data already exists');
    return;
  }

  // Add to existing structured data
  const updatedHtml = indexHtml.replace(
    /"dataFeedElement": \[[\s\S]*?\]/,
    `"dataFeedElement": [${JSON.stringify(businessSchema, null, 2)}]`
  );

  await writeFile('index.html', updatedHtml);
  console.log('✅ Added business structured data');
}

/**
 * Add geo-targeting meta tags
 */
async function addGeoTargeting() {
  console.log('🌍 Adding geo-targeting meta tags...');

  const geoMetaTags = `
    <!-- Geo Targeting -->
    <meta name="geo.region" content="US" />
    <meta name="geo.region" content="GB" />
    <meta name="geo.placename" content="New York, NY" />
    <meta name="geo.placename" content="London, UK" />
    <meta name="ICBM" content="40.7128, -74.0060" />
    <meta name="ICBM" content="51.5074, -0.1278" />`;

  const indexHtml = await readFile('index.html', 'utf-8');

  if (!indexHtml.includes('geo.region')) {
    const updatedHtml = indexHtml.replace(
      /<meta name="msvalidate\.01"/,
      `${geoMetaTags}\n    <meta name="msvalidate.01"`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Added geo-targeting meta tags');
  } else {
    console.log('📋 Geo-targeting already exists');
  }
}

/**
 * Add hreflang tags for international targeting
 */
async function addHreflangTags() {
  console.log('🌐 Adding hreflang tags...');

  const hreflangTags = `
    <!-- Hreflang Tags -->
    <link rel="alternate" hreflang="en-us" href="https://ewhoring.com" />
    <link rel="alternate" hreflang="en-gb" href="https://ewhoring.com" />
    <link rel="alternate" hreflang="x-default" href="https://ewhoring.com" />`;

  const indexHtml = await readFile('index.html', 'utf-8');

  if (!indexHtml.includes('hreflang')) {
    const updatedHtml = indexHtml.replace(
      /<link rel="canonical"/,
      `${hreflangTags}\n    <link rel="canonical"`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Added hreflang tags');
  } else {
    console.log('📋 Hreflang tags already exist');
  }
}

/**
 * Generate local SEO content ideas
 */
function generateLocalContentIdeas() {
  console.log('💡 Local SEO Content Ideas:');
  console.log('===========================');

  const ideas = [
    'Sugar Daddy Scene in [City]: Complete Guide 2025',
    'Wealthiest Neighborhoods in [City] for Sugar Arrangements',
    'Best Hotels in [City] for Sugar Daddy Dates',
    'Luxury Shopping Districts in [City] for High-End Arrangements',
    '[City] Sugar Daddy Success Stories',
    'Networking Events in [City] for Meeting Wealthy Men',
    '[City] Sugar Baby Community Guide',
    'Transportation Tips for [City] Sugar Arrangements',
    'Safety Guide for Sugar Babies in [City]'
  ];

  ideas.forEach(idea => {
    console.log(`• ${idea.replace('[City]', 'London')}`);
    console.log(`• ${idea.replace('[City]', 'New York')}`);
  });

  console.log('\n💡 Pro Tip: Create city-specific landing pages with local keywords');
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'add':
    await addLocalSEO();
    await addGeoTargeting();
    await addHreflangTags();
    break;
  case 'content':
    generateLocalContentIdeas();
    break;
  default:
    console.log('Usage: node local-seo.mjs [add|content]');
    console.log('  add - Add local SEO structured data and meta tags');
    console.log('  content - Show local content ideas');
    break;
}
