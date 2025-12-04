
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { FloatingBlobs } from './components/FloatingBlobs';
import { Ticker } from './components/Ticker';
import { MoneyPhone } from './components/MoneyPhone';
import { Testimonials } from './components/Testimonials';
import { FAQ, faqs } from './components/FAQ';
import { ROICalculator } from './components/ROICalculator';
import { BannedBy } from './components/BannedBy';
import { OriginStory } from './components/OriginStory';
import { RealityCheck } from './components/RealityCheck';
import { WhySection } from './components/WhySection';
import { TheSprint } from './components/TheSprint';
import { RedditChat } from './components/RedditChat';
import { ScamFooter } from './components/ScamFooter';
import { LegalModal } from './components/LegalModal';
import { FalseIdols } from './components/FalseIdols';
import { PunchMadeParody } from './components/PunchMadeParody';
import { ThePhilosophy } from './components/ThePhilosophy';
import { GeoGate } from './components/GeoGate';
import { LoserFilter } from './components/LoserFilter';
import { OranolioSlam } from './components/OranolioSlam';
import { ReceiptVault } from './components/ReceiptVault';
import { PricingTerminal } from './components/PricingTerminal';
import { SideEffects } from './components/SideEffects';
import { CookieConsent } from './components/CookieConsent';
import { AsSeenOn } from './components/AsSeenOn';
import { SEOContent } from './components/SEOContent';
import { KeywordTargets } from './components/KeywordTargets';
import { CryptoPayment } from './components/CryptoPayment';
import { PaymentProvider, usePayment } from './contexts/PaymentContext';
import { AuthorityStack } from './components/AuthorityStack';
import { DrunkConfessionBanner } from './components/DrunkConfessionBanner';
import './src/utils/performanceMonitor';
import './src/utils/visualDebugger';

// Crypto Payment Modal Wrapper - uses the payment context
const CryptoPaymentModal: React.FC = () => {
  const { isPaymentOpen, closePayment } = usePayment();
  return <CryptoPayment isOpen={isPaymentOpen} onClose={closePayment} />;
};

// Global CTA Button - for use in App.tsx
const GlobalCTAButton: React.FC = () => {
  const { openPayment } = usePayment();
  return (
    <button onClick={openPayment} className="group relative px-8 py-4 md:px-10 md:py-5 bg-[#1A2A3A] text-white rounded-full font-bold uppercase tracking-widest overflow-hidden text-xs md:text-base z-10 cursor-pointer shadow-xl hover:shadow-2xl transition-all w-full md:w-auto transform hover:scale-105 duration-200 btn-glitch">
      <span className="relative z-10 group-hover:text-[#F4D35E] transition-colors duration-300">GET THE SUGAR DADDY PROTOCOL</span>
      <div className="absolute inset-0 bg-[#FF8A75] transform scale-x-100 group-hover:scale-x-0 transition-transform origin-right duration-500 ease-out"></div>
      <div className="absolute inset-0 bg-[#FF8A75] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
    </button>
  );
};

const App: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<string>("0");
  const [legalOpen, setLegalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let frameId: number;
    const handleScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
        setScrollProgress(Number(scroll));
        frameId = 0;
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  // Initialize Performance Monitoring
  useEffect(() => {
    // Performance monitoring is initialized automatically when imported
    console.log('📊 Performance monitoring active');
  }, []);

  // Copy protection removed for better UX

  useEffect(() => {
    // Logic to generate a realistic, consistent "Weekly Unique Visitor" count
    const calculateVisitors = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        const weekNumber = Math.ceil(dayOfYear / 7);
        
        const baseTraffic = 12400;
        const growthFactor = weekNumber * 340; 
        const dayFactor = now.getDay() * 215; 
        const hourlyFactor = now.getHours() * 12;
        const minuteFactor = now.getMinutes() * 3;
        
        const total = baseTraffic + growthFactor + dayFactor + hourlyFactor + minuteFactor;
        
        return total.toLocaleString();
    };

    setVisitorCount(calculateVisitors());
    
    const interval = setInterval(() => {
        setVisitorCount(calculateVisitors());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // NUCLEAR SEO SCHEMA STRATEGY - 12+ Schema Types for Maximum SERP Dominance
  const currentDate = new Date().toISOString().split('T')[0];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // 1. WebSite with SitelinksSearchBox
      {
        "@type": "WebSite",
        "name": "Ewhoring Guide - Oranolio Protocol",
        "alternateName": ["Oranolio", "Oranolio Masterclass", "Ewhoring.com"],
        "url": "https://ewhoring.com",
        "description": "The #1 ewhoring guide for 2025. Learn how to ewhore, make money on OnlyFans, and master digital persona creation.",
        "inLanguage": "en-US",
        "datePublished": "2014-01-01",
        "dateModified": currentDate,
        "changefreq": "weekly",
        "priority": "1.0",
        "publisher": {
          "@type": "Organization",
          "@id": "https://ewhoring.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://ewhoring.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      // 2. Organization with full Knowledge Graph signals
      {
        "@type": "Organization",
        "@id": "https://ewhoring.com/#organization",
        "name": "Oranolio Systems",
        "alternateName": "Oranolio",
        "url": "https://ewhoring.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ewhoring.com/logo.png",
          "width": 512,
          "height": 512
        },
        "foundingDate": "2014",
        "founder": {
          "@type": "Person",
          "@id": "https://ewhoring.com/#founder"
        },
        "description": "The premier authority on ewhoring, digital persona monetization, and online revenue generation since 2014.",
        "slogan": "Men Have Wallets. You Have WiFi.",
        "knowsAbout": ["ewhoring", "OnlyFans", "digital marketing", "social engineering", "online monetization", "persona creation"],
        "sameAs": [
          "https://twitter.com/oranolio",
          "https://discord.gg/oranolio",
          "https://t.me/oranolio",
          "https://reddit.com/r/oranolio"
        ]
      },
      // 3. Person - Founder with E-E-A-T credentials
      {
        "@type": "Person",
        "@id": "https://ewhoring.com/#founder",
        "name": "Oranolio",
        "alternateName": "The Protocol Creator",
        "description": "Pioneer of digital gender arbitrage and founder of the Oranolio Protocol. Teaching ewhoring methods since 2014.",
        "knowsAbout": [
          "ewhoring", "digital arbitrage", "OnlyFans strategies", "social engineering",
          "persona creation", "online monetization", "catfishing", "findom"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Digital Marketing Strategist",
          "occupationLocation": {
            "@type": "Country",
            "name": "United States"
          }
        },
        "sameAs": ["https://twitter.com/oranolio", "https://ewhoring.com"]
      },
      // 3b. Compliance / trust landing pages
      {
        "@type": "WebPage",
        "@id": "https://ewhoring.com/press-kit",
        "url": "https://ewhoring.com/press-kit.html",
        "name": "Oranolio Press Kit",
        "description": "Official logos, founder bios, verification documents, and media contact.",
        "lastReviewed": currentDate
      },
      {
        "@type": "WebPage",
        "@id": "https://ewhoring.com/privacy",
        "url": "https://ewhoring.com/privacy.html",
        "name": "Privacy Policy",
        "description": "Data handling, retention, and consent management for ewhoring.com.",
        "lastReviewed": currentDate
      },
      {
        "@type": "WebPage",
        "@id": "https://ewhoring.com/terms",
        "url": "https://ewhoring.com/terms.html",
        "name": "Terms of Service",
        "description": "License, refund, and arbitration language governing the Oranolio Protocol.",
        "lastReviewed": currentDate
      },
      // 4. Course with enhanced details
      {
        "@type": "Course",
        "name": "The Oranolio Protocol - Complete Ewhoring Guide 2025",
        "alternateName": "Ewhoring Masterclass",
        "description": "The definitive 7-day ewhoring protocol. Learn how to ewhore, create digital personas, monetize simps, and generate $500-$5000/week. Includes OnlyFans without face strategies, Discord monetization, and more.",
        "url": "https://ewhoring.com",
        "provider": {
          "@type": "Organization",
          "@id": "https://ewhoring.com/#organization"
        },
        "instructor": {
          "@type": "Person",
          "@id": "https://ewhoring.com/#founder"
        },
        "educationalLevel": "Beginner to Advanced",
        "teaches": ["ewhoring", "OnlyFans creation", "persona building", "social engineering", "online monetization"],
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "online",
          "courseWorkload": "PT7D",
          "instructor": {
            "@type": "Person",
            "@id": "https://ewhoring.com/#founder"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "12847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "category": "Educational",
          "priceCurrency": "USD",
          "price": "150.00",
          "availability": "https://schema.org/InStock",
          "url": "https://ewhoring.com/#pricing",
          "validFrom": "2024-01-01",
          "priceValidUntil": "2025-12-31"
        }
      },
      // 5. Product Schema for Shopping results
      {
        "@type": "Product",
        "name": "Oranolio Protocol - Ewhoring Guide",
        "description": "Complete ewhoring tutorial with step-by-step instructions for making money online through digital personas.",
        "brand": {
          "@type": "Brand",
          "name": "Oranolio"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "150.00",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "@id": "https://ewhoring.com/#organization"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "12847",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Anonymous User" },
            "reviewBody": "Made $2,400 in my first week. This actually works."
          },
          {
            "@type": "Review",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "author": { "@type": "Person", "name": "Discord Hustler" },
            "reviewBody": "Better than any OnlyFans guide I've seen. The Discord methods alone are worth it."
          }
        ]
      },
      // 6. Event Schema for Course Launch
      {
        "@type": "Event",
        "name": "Oranolio Protocol 2025 - Limited Access Open",
        "description": "Exclusive access to the updated 2025 ewhoring protocol with new Discord and Telegram methods.",
        "startDate": currentDate,
        "endDate": "2025-12-31",
        "eventStatus": "https://schema.org/EventScheduled",
        "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
        "location": {
          "@type": "VirtualLocation",
          "url": "https://ewhoring.com"
        },
        "organizer": {
          "@type": "Organization",
          "@id": "https://ewhoring.com/#organization"
        },
        "offers": {
          "@type": "Offer",
          "price": "150.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/LimitedAvailability",
          "url": "https://ewhoring.com/#pricing"
        }
      },
      // 7. VideoObject for Video Carousel
      {
        "@type": "VideoObject",
        "name": "How to Ewhore in 2025 - Complete Tutorial",
        "description": "Full ewhoring tutorial showing how to create personas, find platforms, and start earning. Step-by-step guide for beginners.",
        "thumbnailUrl": "https://ewhoring.com/video-thumbnail.jpg",
        "uploadDate": "2024-01-01",
        "duration": "PT15M",
        "contentUrl": "https://ewhoring.com/tutorial",
        "embedUrl": "https://ewhoring.com/embed/tutorial",
        "publisher": {
          "@type": "Organization",
          "@id": "https://ewhoring.com/#organization"
        }
      },
      // 8. HowTo with detailed steps
      {
        "@type": "HowTo",
        "name": "How to Start Ewhoring in 2025",
        "description": "Complete step-by-step guide on how to ewhore and make money online through digital persona monetization.",
        "totalTime": "PT7D",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "currency": "USD",
          "value": "0"
        },
        "step": [
          {
            "@type": "HowToStep",
            "name": "Day 1: Digital Wipe",
            "text": "Complete erasure of your previous digital footprint. Create new anonymous accounts and secure your identity.",
            "url": "https://ewhoring.com/#day1"
          },
          {
            "@type": "HowToStep",
            "name": "Day 2: Persona Construction",
            "text": "Build a believable female persona using psychological markers, AI-generated images, and backstory creation.",
            "url": "https://ewhoring.com/#day2"
          },
          {
            "@type": "HowToStep",
            "name": "Day 3: Platform Injection",
            "text": "Deploy your persona to high-traffic platforms like Discord, Telegram, and dating apps for initial exposure.",
            "url": "https://ewhoring.com/#day3"
          },
          {
            "@type": "HowToStep",
            "name": "Day 4: Engagement Protocol",
            "text": "Learn the conversation scripts and psychological triggers that convert simps into paying customers.",
            "url": "https://ewhoring.com/#day4"
          },
          {
            "@type": "HowToStep",
            "name": "Day 5: Monetization Setup",
            "text": "Set up anonymous payment methods including crypto, gift cards, and payment apps.",
            "url": "https://ewhoring.com/#day5"
          },
          {
            "@type": "HowToStep",
            "name": "Day 6: Scaling Operations",
            "text": "Learn to manage multiple personas and automate repetitive tasks for maximum efficiency.",
            "url": "https://ewhoring.com/#day6"
          },
          {
            "@type": "HowToStep",
            "name": "Day 7: Automation Handoff",
            "text": "Finalize your automated revenue system and learn maintenance strategies for long-term income.",
            "url": "https://ewhoring.com/#day7"
          }
        ]
      },
      // 9. BreadcrumbList for navigation
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ewhoring.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ewhoring Guide",
            "item": "https://ewhoring.com/#manifesto"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Pricing",
            "item": "https://ewhoring.com/#pricing"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "FAQ",
            "item": "https://ewhoring.com/#faq"
          }
        ]
      },
      // 10. ItemList for featured rankings
      {
        "@type": "ItemList",
        "name": "Best Ewhoring Methods 2025",
        "description": "Top rated methods for making money through digital personas",
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Discord Server Monetization" },
          { "@type": "ListItem", "position": 2, "name": "Telegram Premium Groups" },
          { "@type": "ListItem", "position": 3, "name": "Dating App Arbitrage" },
          { "@type": "ListItem", "position": 4, "name": "OnlyFans Without Face" },
          { "@type": "ListItem", "position": 5, "name": "Findom & Gift Card Methods" }
        ]
      },
      // 11. SpeakableSpecification for Voice Search
      {
        "@type": "WebPage",
        "name": "Ewhoring Guide 2025",
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".speakable"]
        },
        "url": "https://ewhoring.com"
      },
      // 12. FAQPage with expanded questions
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      // 13. DefinedTerm for featured snippet definitions
      {
        "@type": "DefinedTerm",
        "name": "Ewhoring",
        "description": "Ewhoring is the practice of creating and monetizing fake female online personas to generate revenue from male users on platforms like Discord, Telegram, and dating apps. It involves social engineering, digital persona creation, and various monetization strategies.",
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "Online Monetization Glossary"
        }
      },
      // 14. Additional HowTo - Discord Ewhoring
      {
        "@type": "HowTo",
        "name": "How to Find Ewhore Discord Servers",
        "description": "Step-by-step guide to finding the best Discord servers for ewhoring and monetization in 2025.",
        "totalTime": "PT30M",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Use Server Discovery Sites",
            "text": "Search Disboard.org, Discord.me, and Discadia for dating, lonely, and 18+ servers."
          },
          {
            "@type": "HowToStep",
            "name": "Join High-Traffic Servers",
            "text": "Target servers with 1000+ members and active daily chat. Avoid over-moderated servers."
          },
          {
            "@type": "HowToStep",
            "name": "Build Rapport First",
            "text": "Engage in public channels before DMing. React to posts, comment naturally."
          },
          {
            "@type": "HowToStep",
            "name": "Move to DMs",
            "text": "After building presence, move conversations to direct messages for monetization."
          }
        ]
      },
      // 15. Additional HowTo - Telegram Ewhoring
      {
        "@type": "HowTo",
        "name": "How to Make Money on Telegram with Ewhoring",
        "description": "Complete guide to monetizing Telegram groups and channels for ewhoring in 2025.",
        "totalTime": "PT1H",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Create Persona Account",
            "text": "Set up Telegram with VPN, use virtual number for verification."
          },
          {
            "@type": "HowToStep",
            "name": "Join Relevant Groups",
            "text": "Find dating, hookup, and premium content groups via Telegram search."
          },
          {
            "@type": "HowToStep",
            "name": "Create Premium Channel",
            "text": "Set up paid channel with tiered access for recurring revenue."
          },
          {
            "@type": "HowToStep",
            "name": "Accept Crypto Payments",
            "text": "Use Telegram's native crypto support for anonymous transactions."
          }
        ]
      },
      // 16. ItemList - Best Discord Servers
      {
        "@type": "ItemList",
        "name": "Best Ewhore Discord Servers 2025",
        "description": "Top Discord server types for ewhoring and digital persona monetization",
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "numberOfItems": 6,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Dating & Relationship Servers" },
          { "@type": "ListItem", "position": 2, "name": "Lonely & Depression Support Servers" },
          { "@type": "ListItem", "position": 3, "name": "18+ Adult Community Servers" },
          { "@type": "ListItem", "position": 4, "name": "E-girl Appreciation Servers" },
          { "@type": "ListItem", "position": 5, "name": "Gaming Community Servers" },
          { "@type": "ListItem", "position": 6, "name": "Anime & Weeb Culture Servers" }
        ]
      },
      // 17. ItemList - Best Telegram Methods
      {
        "@type": "ItemList",
        "name": "Best Telegram Ewhoring Methods 2025",
        "description": "Top Telegram monetization strategies for ewhoring",
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "numberOfItems": 5,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Premium Channel Subscriptions" },
          { "@type": "ListItem", "position": 2, "name": "Direct Message Monetization" },
          { "@type": "ListItem", "position": 3, "name": "Crypto Payment Integration" },
          { "@type": "ListItem", "position": 4, "name": "Bot-Automated Responses" },
          { "@type": "ListItem", "position": 5, "name": "Group Promotion Services" }
        ]
      },
      // 18. Additional DefinedTerms for other keywords
      {
        "@type": "DefinedTerm",
        "name": "Ewhore Discord Servers",
        "description": "Discord servers used for ewhoring, typically dating servers, lonely servers, and 18+ communities where operators deploy fake female personas to monetize male users through selling content, receiving gifts, and building paid relationships.",
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "Online Monetization Glossary"
        }
      },
      {
        "@type": "DefinedTerm",
        "name": "Catfishing for Money",
        "description": "The practice of creating fake online identities to deceive others for financial gain. In ewhoring context, this involves creating believable female personas to monetize lonely men through various platforms and payment methods.",
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "Online Monetization Glossary"
        }
      },
      {
        "@type": "DefinedTerm",
        "name": "Simp",
        "description": "Internet slang for men who are excessively attentive, submissive, or generous toward women, often online. Simps are the primary monetization targets in ewhoring operations, willing to pay for attention, content, and virtual relationships.",
        "inDefinedTermSet": {
          "@type": "DefinedTermSet",
          "name": "Online Monetization Glossary"
        }
      },
      // 19. Service Schema
      {
        "@type": "Service",
        "name": "Ewhoring Training Course",
        "serviceType": "Online Education",
        "description": "Comprehensive training on ewhoring methods, Discord server monetization, Telegram groups, persona creation, and payment processing. Updated monthly with current methods.",
        "provider": {
          "@type": "Organization",
          "@id": "https://ewhoring.com/#organization"
        },
        "areaServed": "Worldwide",
        "offers": {
          "@type": "Offer",
          "price": "150.00",
          "priceCurrency": "USD"
        }
      },
      // 20. CollectionPage for keyword grouping
      {
        "@type": "CollectionPage",
        "name": "Ewhoring Resources & Guides",
        "description": "Complete collection of ewhoring guides, Discord server lists, Telegram methods, and monetization strategies.",
        "url": "https://ewhoring.com",
        "mainEntity": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "url": "https://ewhoring.com/#discord-servers", "name": "Ewhore Discord Servers Guide" },
            { "@type": "ListItem", "position": 2, "url": "https://ewhoring.com/#telegram-groups", "name": "Telegram Ewhoring Methods" },
            { "@type": "ListItem", "position": 3, "url": "https://ewhoring.com/#methods", "name": "Advanced Ewhoring Methods 2025" },
            { "@type": "ListItem", "position": 4, "url": "https://ewhoring.com/#fake-girl-guide", "name": "Catfish Money Guide" },
            { "@type": "ListItem", "position": 5, "url": "https://ewhoring.com/#faceless-onlyfans", "name": "OnlyFans Without Face" },
            { "@type": "ListItem", "position": 6, "url": "https://ewhoring.com/#find-simps", "name": "How to Find Simps" }
          ]
        }
      },
      // Content Update Frequency Signal for SEO
      {
        "@type": "DataFeed",
        "name": "Oranolio Protocol Updates",
        "description": "Weekly content updates with latest ewhoring methods and server intelligence",
        "dateModified": currentDate,
        "feedElement": [
          {
            "@type": "DataFeedItem",
            "dateCreated": currentDate,
            "item": {
              "@type": "Article",
              "headline": "Latest Ewhoring Methods & Server Updates",
              "datePublished": currentDate,
              "dateModified": currentDate,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://ewhoring.com/"
              }
            }
          }
        ]
      }
    ]
  };

  return (
    <PaymentProvider>
      <div className="relative min-h-screen w-full max-w-full overflow-x-hidden selection:bg-[#2D9C8E] selection:text-white scroll-smooth" style={{ scrollBehavior: 'smooth' }} role="main" aria-label="Main content">
          
          {/* Essential modals only */}
          <CookieConsent />
          <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
          <CryptoPaymentModal />

          {/* Inject Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
          
          {/* Global Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-[#1A2A3A] z-[100] w-full origin-left will-change-transform" style={{ transform: `scaleX(${scrollProgress})` }}>
            <div className="h-full w-full bg-[#FF8A75] shadow-[0_0_10px_#FF8A75]" />
          </div>

          {/* Drunk Confession Banner with Crypto & Telegram */}
          <DrunkConfessionBanner />

          {/* 1. Global Noise Overlay (Clean Version) */}
          <div className="bg-noise" />
          
          {/* Ambient Particles - Optimized for low-end devices */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
             {[...Array(typeof window !== 'undefined' && (window.innerWidth < 768 || window.devicePixelRatio < 1.5) ? 5 : 15)].map((_, i) => (
                <div 
                  key={i} 
                  className="particle" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 20 + 10}s`,
                    // Disable animation on low-end devices
                    animation: typeof window !== 'undefined' && (window.innerWidth < 768 || window.devicePixelRatio < 1.5) 
                      ? 'none' 
                      : 'floatParticle 10s infinite linear'
                  }}
                />
             ))}
          </div>
          
          {/* 2. Global Subliminal Branding Layer - Reduced opacity for brighter appearance */}
          <div className="fixed inset-0 z-0 pointer-events-none bg-subliminal mix-blend-multiply opacity-20" />
          
          {/* 3. Floating Blobs Background */}
          <FloatingBlobs />

          {/* 4. Content */}
          <NavBar />
          
          <main id="main-content" className="relative z-10 w-full pt-[calc(4rem+env(safe-area-inset-top)+3rem)]">
            {/* === HOOK & ATTENTION === */}
            <HeroSection />

            {/* === SOCIAL PROOF === */}
            <AsSeenOn />

            {/* === AUTHORITY BUILDING === */}
            <OranolioSlam />
            <OriginStory />

            {/* === PROBLEM IDENTIFICATION === */}
            <BannedBy />
            <FalseIdols />

            {/* === SOLUTION DEMONSTRATION === */}
            <div id="money-printer">
                <MoneyPhone />
            </div>
            <ReceiptVault />
            <ROICalculator />

            {/* === SOCIAL PROOF REINFORCEMENT === */}
            <Testimonials />
            <RedditChat />

            {/* === PROCESS EXPLANATION === */}
            <TheSprint />
            <BentoGrid />

            {/* === OBJECTION HANDLING === */}
            <SEOContent />
            <ThePhilosophy />
            <WhySection />
            <SideEffects />

            {/* === QUALIFICATION GATES === */}
            <RealityCheck />
            <LoserFilter />
            <GeoGate />

            {/* === ENTERTAINMENT & VARIETY === */}
            <PunchMadeParody />
            <KeywordTargets />

            {/* === BRANDING === */}
            <Ticker />

            {/* === FINAL OFFER === */}
            <div id="pricing">
                <PricingTerminal />
            </div>

            <FAQ />

            {/* Footer / CTA Area */}
            <section className="py-16 md:py-24 text-center px-4 bg-[#FDFBF7] relative">
              <div className="absolute inset-0 bg-subliminal opacity-20 pointer-events-none"></div>
              <div className="glass-panel max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden group border border-[#1A2A3A]/5">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FF8A75]/10 pointer-events-none"></div>
                 
                 {/* Animated Headline */}
                 <div className="mb-8 md:mb-12 relative z-10">
                    <h2 className="text-4xl md:text-8xl font-bold text-[#1A2A3A] leading-[0.9] tracking-tighter">
                      <span className="block hover:translate-x-2 transition-transform duration-500">MORALS?</span>
                      <span className="block text-gradient-rich italic mt-2 animate-float">TOO EXPENSIVE.</span>
                    </h2>
                 </div>
                 
                 <p className="text-base md:text-xl text-[#1A2A3A]/60 mb-8 md:mb-12 max-w-lg mx-auto font-medium relative z-10">
                   Stop letting your conscience get in the way of your bag. Men are desperate. You are broke. The solution is simple.
                 </p>
                 
                 <GlobalCTAButton />
              </div>
            </section>

            <AuthorityStack />

            {/* Internal Linking for SEO - Hidden for users, seen by bots (or visible as resources) */}
            <section className="py-12 bg-[#0F1923] border-t border-[#FDFBF7]/10">
              <div className="max-w-6xl mx-auto px-4">
                <h4 className="text-[#FDFBF7] text-sm uppercase tracking-widest mb-6 font-mono text-center">Resources & Guides</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <a href="/discord-ewhoring-servers.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Discord Servers</a>
                  <a href="/ewhoring-telegram-groups.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Telegram Groups</a>
                  <a href="/how-to-start-ewhoring.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Beginner Guide</a>
                  <a href="/ewhoring-methods-2025.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Methods 2025</a>
                  <a href="/how-much-money-ewhoring.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Earnings Guide</a>
                  <a href="/onlyfans-without-showing-face.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Faceless OnlyFans</a>
                  <a href="/tinder-ewhoring-guide.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Tinder Guide</a>
                  <a href="/is-ewhoring-illegal.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Legal Guide</a>
                  <a href="/ewhoring-scripts.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Scripts</a>
                  <a href="/ewhoring-ai-guide.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">AI Guide</a>
                  <a href="/findom-guide.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Findom Guide</a>
                  <a href="/reddit-ewhoring.html" className="text-[#FDFBF7]/50 hover:text-[#2D9C8E] text-xs font-mono transition-colors">Reddit Guide</a>
                </div>
              </div>
            </section>

            {/* The New Scam Footer */}
            <ScamFooter />

            <footer className="py-8 md:py-12 flex flex-col items-center justify-center gap-4 text-[#1A2A3A]/80 mb-8 bg-[#0F1923] text-[#FDFBF7] relative z-20">
              <div className="text-[10px] md:text-base uppercase tracking-widest font-extrabold text-center px-4">
                 © {new Date().getFullYear()} Oranolio. Exploiting Losers Since 2014.
              </div>
              
              <div className="flex gap-4 text-[10px] opacity-70 underline">
                 <button type="button" onClick={() => setLegalOpen(true)} className="underline">Legal Liability</button>
                 <a href="/terms.html" className="underline">Terms</a>
                 <a href="/privacy.html" className="underline">Privacy</a>
                 <a href="/press-kit.html" className="underline">Press Kit</a>
              </div>
              
              {/* Unique Visitor Tracker - Interactive */}
              <div className="group flex items-center gap-3 px-5 py-2 border border-[#2D9C8E]/30 rounded-full bg-white/5 backdrop-blur-sm cursor-help transition-all duration-300 hover:scale-105 hover:bg-[#FDFBF7] hover:text-[#1A2A3A] hover:border-[#1A2A3A] shadow-sm hover:shadow-lg hover:shadow-[#2D9C8E]/20 mx-4">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D9C8E] opacity-75 group-hover:bg-[#FF8A75]"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D9C8E] group-hover:bg-[#FF8A75] transition-colors duration-300"></span>
                </span>
                <span className="font-mono text-[10px] md:text-xs tracking-wider transition-colors duration-300 whitespace-nowrap">
                  ACTIVE DUDES ONLINE: <span className="font-bold">{visitorCount}</span>
                </span>
              </div>
            </footer>
          </main>

          {/* Inline styles for marquee animation since we aren't using a tailwind plugin */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      <Analytics />
    </PaymentProvider>
  );
};

export default App;
