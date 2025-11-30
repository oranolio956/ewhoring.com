
import React, { useState, useEffect } from 'react';
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
import { Preloader } from './components/Preloader';
import { SalesToast } from './components/SalesToast';
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
import { HaterBlocker } from './components/HaterBlocker';
import { ExitModal } from './components/ExitModal';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
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
        const scroll = `${totalScroll / windowHeight}`;
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

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "Oranolio Masterclass",
        "url": "https://ewhoring.com",
        "description": "The premier guide to digital social engineering and revenue generation.",
        "publisher": {
            "@type": "Organization",
            "name": "Oranolio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ewhoring.com/logo.png"
            }
        }
      },
      {
        "@type": "Course",
        "name": "The Oranolio E-Whoring Protocol",
        "description": "The comprehensive guide to digital gender arbitrage, social engineering, and online revenue generation. Learn how to monetize male psychology.",
        "provider": {
          "@type": "Organization",
          "name": "Oranolio",
          "sameAs": "https://ewhoring.com"
        },
        "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "online",
            "courseWorkload": "PT20M"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "12480",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "category": "Educational",
          "priceCurrency": "USD",
          "price": "150.00",
          "availability": "https://schema.org/InStock",
          "url": "https://ewhoring.com"
        }
      },
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
                "name": "Masterclass",
                "item": "https://ewhoring.com/#manifesto"
            }
        ]
      }
    ]
  };

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-[#2D9C8E] selection:text-white" style={{ scrollBehavior: 'smooth' }}>
          
          <HaterBlocker />
          <ExitModal />
          <SalesToast />
          <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />

          {/* Inject Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
          
          {/* Global Progress Bar */}
          <div className="fixed top-0 left-0 h-1 bg-[#1A2A3A] z-[100] w-full">
            <div 
              className="h-full bg-[#FF8A75] shadow-[0_0_10px_#FF8A75] will-change-transform" 
              style={{ width: `${scrollProgress * 100}%` }} 
            />
          </div>

          {/* 0. Fake Urgency Banner */}
          <div className="bg-[#FF8A75] text-[#1A2A3A] text-[10px] md:text-xs font-bold text-center py-2 uppercase tracking-widest z-[60] relative px-2 cursor-pointer hover:underline">
             ⚠ Warning: Discord is patching the "Voice Changer" exploit soon. Join before the loophole closes.
          </div>

          {/* 1. Global Noise & Scanlines Overlay */}
          <div className="bg-noise" />
          <div className="scanlines" />
          
          {/* Ambient Particles - Optimized with will-change */}
          <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
             {[...Array(15)].map((_, i) => (
                <div 
                  key={i} 
                  className="particle will-change-transform" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 4 + 1}px`,
                    height: `${Math.random() * 4 + 1}px`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 20 + 10}s`
                  }}
                />
             ))}
          </div>
          
          {/* 2. Global Subliminal Branding Layer */}
          <div className="fixed inset-0 z-0 pointer-events-none bg-subliminal mix-blend-multiply opacity-50" />
          
          {/* 3. Floating Blobs Background */}
          <FloatingBlobs />

          {/* 4. Content */}
          <NavBar />
          
          <main className="relative z-10 w-full">
            <HeroSection />

            <OriginStory />
            
            {/* The Chat Simulation */}
            <RedditChat />
            
            {/* Visual Proof / Receipts */}
            <ReceiptVault />

            {/* Social Proof Parody */}
            <BannedBy />
            
            {/* New Revenue Simulation Section */}
            <MoneyPhone />

            <Ticker />
            
            {/* Earnings Calculator */}
            <ROICalculator />

            {/* DRAMATIC SLAM ANIMATION HERE */}
            <OranolioSlam />

            <Testimonials />

            {/* ID for smooth scrolling */}
            <div id="manifesto">
                <BentoGrid />
            </div>

            {/* The 7-Day Sprint Protocol */}
            <TheSprint />
            
            {/* The Philosophy */}
            <ThePhilosophy />
            
            {/* Side Effects */}
            <SideEffects />

            {/* The Reality Check / Aggressive Filter */}
            <RealityCheck />
            
            {/* The Loser Filter - Aggressive */}
            <LoserFilter />
            
            {/* The Geographic Gate */}
            <GeoGate />
            
            {/* The Tate Roast */}
            <FalseIdols />
            
            {/* The PunchMade Parody */}
            <PunchMadeParody />

            {/* The Why / 29yo Rant */}
            <WhySection />
            
            {/* The Final Checkout */}
            <PricingTerminal />

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
                 
                 <button onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-4 md:px-10 md:py-5 bg-[#1A2A3A] text-white rounded-full font-bold uppercase tracking-widest overflow-hidden text-xs md:text-base z-10 cursor-pointer shadow-xl hover:shadow-2xl transition-all w-full md:w-auto transform hover:scale-105 duration-200 btn-glitch">
                    <span className="relative z-10 group-hover:text-[#F4D35E] transition-colors duration-300">BECOME A GIRL NOW</span>
                    <div className="absolute inset-0 bg-[#FF8A75] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                 </button>
              </div>
            </section>

            {/* The New Scam Footer */}
            <ScamFooter />

            <footer className="py-8 md:py-12 flex flex-col items-center justify-center gap-4 text-[#1A2A3A]/80 mb-8 bg-[#0F1923] text-[#FDFBF7] relative z-20">
              <div className="text-[10px] md:text-base uppercase tracking-widest font-extrabold text-center px-4">
                 © {new Date().getFullYear()} Oranolio. Exploiting Losers Since 2014.
              </div>
              
              <div className="flex gap-4 text-[10px] opacity-50 underline cursor-pointer">
                 <span onClick={() => setLegalOpen(true)}>Legal Liability</span>
                 <span>Terms of Service (LOL)</span>
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
      )}
    </>
  );
};

export default App;
