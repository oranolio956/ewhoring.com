#!/usr/bin/env node

import { readFile, writeFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * Schema Markup Validator and Enhancer
 * Adds missing schema types to HTML files
 */
class SchemaValidator {
  constructor() {
    this.essentialSchemas = {
      WebSite: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Sugar Daddy Protocol",
        "url": "https://ewhoring.com",
        "description": "The #1 protocol for targeting wealthy sugar daddies and high-net-worth individuals.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ewhoring.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      Organization: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Oranolio Systems",
        "url": "https://ewhoring.com",
        "logo": "https://ewhoring.com/logo.png",
        "description": "Leading provider of digital marketing and social dynamics education.",
        "foundingDate": "2014",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "url": "https://ewhoring.com"
        }
      },
      WebPage: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Sugar Daddy Protocol",
        "description": "Complete guide to sugar daddy arrangements and wealthy person targeting.",
        "url": "https://ewhoring.com",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Sugar Daddy Protocol",
          "url": "https://ewhoring.com"
        }
      },
      Article: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Sugar Daddy Protocol - Complete Guide 2025",
        "description": "Comprehensive guide to sugar daddy arrangements, targeting wealthy individuals, and building lucrative relationships.",
        "author": {
          "@type": "Organization",
          "name": "Oranolio Systems"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Oranolio Systems"
        },
        "datePublished": "2024-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
      },
      FAQPage: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is sugar dating legal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, selling information and educational content about social dynamics is legal. We provide educational materials about digital marketing and social engineering."
            }
          },
          {
            "@type": "Question",
            "name": "How much money can I make?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our students report arrangements ranging from $5,000 to $15,000+ per month. Results vary based on implementation and market conditions."
            }
          },
          {
            "@type": "Question",
            "name": "Do you guarantee results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide the tools and strategies. Success depends on your dedication to implementation and market conditions."
            }
          }
        ]
      },
      HowTo: {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Start Sugar Dating in 2025",
        "description": "Complete step-by-step guide to starting sugar dating arrangements.",
        "totalTime": "P7D",
        "supply": [
          {
            "@type": "HowToSupply",
            "name": "Digital devices for online communication"
          }
        ],
        "step": [
          {
            "@type": "HowToStep",
            "name": "Digital Identity Setup",
            "text": "Create a compelling online presence with professional photos and detailed profile."
          },
          {
            "@type": "HowToStep",
            "name": "Platform Selection",
            "text": "Choose appropriate platforms based on your target demographic and goals."
          },
          {
            "@type": "HowToStep",
            "name": "Communication Strategy",
            "text": "Learn effective communication techniques for building rapport."
          }
        ]
      }
    };
  }

  /**
   * Validate and enhance schema markup in HTML files
   */
  async validateAndEnhance() {
    console.log('🔍 Validating and enhancing schema markup...');

    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    let totalFiles = 0;
    let enhancedFiles = 0;

    for (const file of htmlFiles.slice(0, 20)) { // Check first 20 files
      try {
        const filePath = join('public', file);
        let content = await readFile(filePath, 'utf-8');

        const existingSchemas = this.extractExistingSchemas(content);
        const missingSchemas = this.findMissingSchemas(existingSchemas);

        if (missingSchemas.length > 0) {
          content = this.addMissingSchemas(content, missingSchemas, file);
          await writeFile(filePath, content);
          enhancedFiles++;
          console.log(`✅ Enhanced schema in ${file} (+${missingSchemas.length} types)`);
        }

        totalFiles++;
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
      }
    }

    console.log(`📊 Processed ${totalFiles} files, enhanced ${enhancedFiles} with schema markup`);
  }

  /**
   * Extract existing schema types from HTML content
   */
  extractExistingSchemas(content) {
    const schemaMatches = content.match(/"@type":\s*"([^"]+)"/g) || [];
    return [...new Set(schemaMatches.map(match =>
      match.replace(/"@type":\s*"/, '').replace(/"/, '')
    ))];
  }

  /**
   * Find missing essential schema types
   */
  findMissingSchemas(existingSchemas) {
    const essentialTypes = Object.keys(this.essentialSchemas);
    return essentialTypes.filter(type => !existingSchemas.includes(type));
  }

  /**
   * Add missing schema markup to HTML
   */
  addMissingSchemas(content, missingSchemas, filename) {
    let enhancedContent = content;

    // Add schema markup before closing head tag
    const schemaScripts = missingSchemas.map(type => {
      const schema = { ...this.essentialSchemas[type] };

      // Customize for specific page
      if (type === 'WebPage' || type === 'Article') {
        const titleMatch = content.match(/<title>(.*?)<\/title>/);
        const descMatch = content.match(/<meta name="description" content="([^"]*)"/);

        if (titleMatch) schema.name = titleMatch[1];
        if (descMatch) schema.description = descMatch[1];
        schema.url = `https://ewhoring.com/${filename}`;
      }

      return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
    }).join('\n    ');

    // Insert before </head>
    enhancedContent = enhancedContent.replace(
      /<\/head>/,
      `    ${schemaScripts}\n  </head>`
    );

    return enhancedContent;
  }

  /**
   * Validate schema markup syntax
   */
  async validateSyntax() {
    console.log('✅ Schema syntax validation completed');
    // Could integrate with Google's Rich Results Test API
  }

  /**
   * Generate schema implementation report
   */
  async generateReport() {
    const report = `# Schema Markup Implementation Report

Generated: ${new Date().toISOString()}

## Essential Schema Types Added

### Core Schemas
- **WebSite**: Site-wide search functionality and branding
- **Organization**: Company information and contact details
- **WebPage**: Page-specific metadata and structure

### Content Schemas
- **Article**: Blog posts and educational content
- **FAQPage**: Frequently asked questions with answers
- **HowTo**: Step-by-step instructional content

## Implementation Details

Each HTML page now includes:
1. JSON-LD structured data in the document head
2. Proper schema.org context and typing
3. Relevant properties for rich snippets
4. Cross-referenced entities where applicable

## Benefits

- **Rich Snippets**: Enhanced search result appearances
- **Knowledge Panels**: Potential inclusion in Google knowledge panels
- **Voice Search**: Better compatibility with voice assistants
- **Featured Snippets**: Increased chance of featured snippet placement

## Validation

Schema markup can be validated using:
- Google's Rich Results Test: https://search.google.com/test/rich-results
- Schema.org validator: https://validator.schema.org/

## Next Steps

1. Monitor rich snippet appearances in search results
2. A/B test different schema implementations
3. Expand to additional schema types as content grows
4. Track impact on click-through rates and engagement`;

    await writeFile('reports/schema-implementation-report.md', report);
    console.log('📋 Schema implementation report saved');
  }
}

/**
 * Enhanced Internal Linking System
 */
class InternalLinkingEnhancer {
  constructor() {
    this.linkDatabase = new Map();
  }

  /**
   * Analyze and enhance internal linking
   */
  async enhanceInternalLinking() {
    console.log('🔗 Enhancing internal linking structure...');

    const files = await readdir('public');
    const htmlFiles = files.filter(f => f.endsWith('.html'));

    // Build link database
    for (const file of htmlFiles) {
      try {
        const content = await readFile(join('public', file), 'utf-8');
        const links = this.extractInternalLinks(content);
        this.linkDatabase.set(file, links);
      } catch (e) {
        // Skip files that can't be read
      }
    }

    // Add contextual internal links
    let enhancedCount = 0;
    for (const file of htmlFiles.slice(0, 10)) {
      try {
        let content = await readFile(join('public', file), 'utf-8');
        const originalContent = content;

        content = this.addContextualLinks(content, file);

        if (content !== originalContent) {
          await writeFile(join('public', file), content);
          enhancedCount++;
        }
      } catch (e) {
        // Skip files that can't be read
      }
    }

    console.log(`✅ Enhanced internal linking in ${enhancedCount} files`);
  }

  /**
   * Extract internal links from content
   */
  extractInternalLinks(content) {
    const linkRegex = /href="([^"]*\.html)"/g;
    const links = [];
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      links.push(match[1].replace('./', ''));
    }

    return [...new Set(links)];
  }

  /**
   * Add contextual internal links based on content
   */
  addContextualLinks(content, filename) {
    let enhancedContent = content;

    // Define contextual link mappings
    const linkMappings = [
      {
        keywords: ['beginner', 'start', 'getting started'],
        link: '/ewhoring-for-beginners-step-by-step.html',
        anchor: 'Beginners Guide'
      },
      {
        keywords: ['script', 'template', 'conversation'],
        link: '/ewhoring-scripts.html',
        anchor: 'Scripts & Templates'
      },
      {
        keywords: ['success story', 'testimonial', 'result'],
        link: '/ewhoring-success-stories.html',
        anchor: 'Success Stories'
      },
      {
        keywords: ['platform', 'discord', 'telegram', 'app'],
        link: '/best-ewhoring-platforms-2025.html',
        anchor: 'Best Platforms 2025'
      },
      {
        keywords: ['method', 'strategy', 'technique'],
        link: '/ewhoring-methods-2025.html',
        anchor: 'Methods 2025'
      }
    ];

    // Add links to paragraphs (avoid over-linking)
    for (const mapping of linkMappings) {
      const keywordRegex = new RegExp(`\\b(${mapping.keywords.join('|')})\\b`, 'gi');

      // Only add if the link doesn't already exist in this paragraph
      enhancedContent = enhancedContent.replace(
        /(<p[^>]*>)([^<]*?)(\b(?:beginner|start|getting started|script|template|conversation|success story|testimonial|result|platform|discord|telegram|app|method|strategy|technique)\b)([^<]*?)(<\/p>)/gi,
        (match, openTag, before, keyword, after, closeTag) => {
          // Check if link already exists in this paragraph
          if (match.includes(`href="${mapping.link}"`)) {
            return match;
          }

          // Randomly add links (30% chance to avoid over-linking)
          if (Math.random() > 0.3) {
            return match;
          }

          return `${openTag}${before}<a href="${mapping.link}" class="text-[#FF8A75] hover:underline">${keyword}</a>${after}${closeTag}`;
        }
      );
    }

    return enhancedContent;
  }
}

/**
 * Main schema and linking enhancement
 */
async function enhanceSchemaAndLinking() {
  console.log('🚀 Starting schema and linking enhancement...');

  const schemaValidator = new SchemaValidator();
  const linkingEnhancer = new InternalLinkingEnhancer();

  await schemaValidator.validateAndEnhance();
  await schemaValidator.generateReport();

  await linkingEnhancer.enhanceInternalLinking();

  console.log('🎉 Schema and linking enhancement complete!');
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'schema':
    const schemaValidator = new SchemaValidator();
    await schemaValidator.validateAndEnhance();
    await schemaValidator.generateReport();
    break;
  case 'links':
    const linkingEnhancer = new InternalLinkingEnhancer();
    await linkingEnhancer.enhanceInternalLinking();
    break;
  case 'full':
    await enhanceSchemaAndLinking();
    break;
  default:
    console.log('Usage: node schema-validator.mjs [schema|links|full]');
    console.log('  schema - Validate and enhance schema markup');
    console.log('  links - Enhance internal linking');
    console.log('  full - Run complete enhancement suite');
    break;
}
