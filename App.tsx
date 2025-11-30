
import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { FloatingBlobs } from './components/FloatingBlobs';
import { Ticker } from './components/Ticker';
import { MoneyPhone } from './components/MoneyPhone';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ROICalculator } from './components/ROICalculator';
import { BannedBy } from './components/BannedBy';
import { OriginStory } from './components/OriginStory';

const App: React.FC = () => {
  const [visitorCount, setVisitorCount] = useState<string>("0");

  useEffect(() => {
    // Logic to generate a realistic, consistent "Weekly Unique Visitor" count
    // This simulates analytics data by using the current time as a seed
    const calculateVisitors = () => {
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        const weekNumber = Math.ceil(dayOfYear / 7);
        
        // "Oranolio Algorithm" for traffic simulation
        // Base: 12,400 | Growth: Week * 340 | Daily Flux: Day * 215
        const baseTraffic = 12400;
        const growthFactor = weekNumber * 340; 
        const dayFactor = now.getDay() * 215; 
        const hourlyFactor = now.getHours() * 12; // Ticks up during the day
        const minuteFactor = now.getMinutes() * 3; // Ticks up during the hour
        
        const total = baseTraffic + growthFactor + dayFactor + hourlyFactor + minuteFactor;
        
        return total.toLocaleString();
    };

    setVisitorCount(calculateVisitors());
    
    // Update every minute to keep it "Live"
    const interval = setInterval(() => {
        setVisitorCount(calculateVisitors());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-[#2D9C8E] selection:text-white" style={{ scrollBehavior: 'smooth' }}>
      
      {/* 0. Fake Urgency Banner */}
      <div className="bg-[#FF8A75] text-[#1A2A3A] text-[10px] md:text-xs font-bold text-center py-2 uppercase tracking-widest z-[60] relative px-2">
         ⚠ Warning: Discord is patching the "Voice Changer" exploit soon. Join before the loophole closes.
      </div>

      {/* 1. Global Noise Overlay */}
      <div className="bg-noise" />
      
      {/* 2. Floating Blobs Background */}
      <FloatingBlobs />

      {/* 3. Content - Wrapped for Ultra Wide screens to prevent content stretching */}
      <NavBar />
      
      <main className="relative z-10 w-full">
        <HeroSection />

        <OriginStory />
        
        {/* Social Proof Parody */}
        <BannedBy />
        
        {/* New Revenue Simulation Section */}
        <MoneyPhone />

        <Ticker />
        
        {/* Earnings Calculator */}
        <ROICalculator />

        <Testimonials />

        {/* ID for smooth scrolling */}
        <div id="manifesto">
            <BentoGrid />
        </div>
        
        <FAQ />

        {/* Footer / CTA Area */}
        <section className="py-16 md:py-24 text-center px-4 bg-[#FDFBF7]">
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
             
             <button onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior: 'smooth'})} className="group relative px-8 py-4 md:px-10 md:py-5 bg-[#1A2A3A] text-white rounded-full font-bold uppercase tracking-widest overflow-hidden text-xs md:text-base z-10 cursor-pointer shadow-xl hover:shadow-2xl transition-all w-full md:w-auto">
                <span className="relative z-10 group-hover:text-[#F4D35E] transition-colors duration-300">BECOME A GIRL NOW</span>
                <div className="absolute inset-0 bg-[#FF8A75] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
             </button>
          </div>
        </section>

        <footer className="py-8 md:py-12 flex flex-col items-center justify-center gap-4 text-[#1A2A3A]/80 mb-8 bg-[#FDFBF7]">
          <div className="text-[10px] md:text-base uppercase tracking-widest font-extrabold text-center px-4">
             © {new Date().getFullYear()} Oranolio. Exploiting Losers Since 2014.
          </div>
          
          {/* Unique Visitor Tracker - Interactive */}
          <div className="group flex items-center gap-3 px-5 py-2 border border-[#2D9C8E]/30 rounded-full bg-white/50 backdrop-blur-sm cursor-help transition-all duration-300 hover:scale-105 hover:bg-[#1A2A3A] hover:border-[#1A2A3A] shadow-sm hover:shadow-lg hover:shadow-[#2D9C8E]/20 mx-4">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D9C8E] opacity-75 group-hover:bg-[#FF8A75]"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D9C8E] group-hover:bg-[#FF8A75] transition-colors duration-300"></span>
            </span>
            <span className="font-mono text-[10px] md:text-xs text-[#1A2A3A] tracking-wider group-hover:text-[#FDFBF7] transition-colors duration-300 whitespace-nowrap">
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
  );
};

export default App;
