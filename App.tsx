
import React, { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { HeroSection } from './components/HeroSection';
import { BentoGrid } from './components/BentoGrid';
import { FloatingBlobs } from './components/FloatingBlobs';
import { Ticker } from './components/Ticker';

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
        
        const total = baseTraffic + growthFactor + dayFactor + hourlyFactor;
        
        return total.toLocaleString();
    };

    setVisitorCount(calculateVisitors());
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-[#2D9C8E] selection:text-white">
      {/* 1. Global Noise Overlay */}
      <div className="bg-noise" />
      
      {/* 2. Floating Blobs Background */}
      <FloatingBlobs />

      {/* 3. Content */}
      <NavBar />
      
      <main className="relative z-10">
        <HeroSection />
        <Ticker />
        <BentoGrid />
        
        {/* Footer / CTA Area */}
        <section className="py-24 text-center px-4">
          <div className="glass-panel max-w-5xl mx-auto rounded-[3rem] p-12 md:p-24 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2D9C8E]/10 pointer-events-none"></div>
             
             {/* Animated Headline */}
             <div className="mb-12 relative z-10">
                <h2 className="text-5xl md:text-8xl font-bold text-[#1A2A3A] leading-[0.85] tracking-tighter">
                  <span className="block hover:translate-x-2 transition-transform duration-500">EVOLVE OR EXPIRE.</span>
                  <span className="block text-gradient-rich italic mt-2 animate-float">CLAIM TOTAL DOMINANCE.</span>
                </h2>
             </div>
             
             <p className="text-lg md:text-xl text-[#1A2A3A]/60 mb-12 max-w-lg mx-auto font-medium relative z-10">
               The Oranolio method is not for everyone. It is for the few who are ready to rule the digital landscape.
             </p>
             
             <button className="group relative px-10 py-5 bg-[#1A2A3A] text-white rounded-full font-bold uppercase tracking-widest overflow-hidden text-sm md:text-base z-10">
                <span className="relative z-10 group-hover:text-[#F4D35E] transition-colors duration-300">Join the Waitlist</span>
                <div className="absolute inset-0 bg-[#2D9C8E] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
             </button>
          </div>
        </section>

        <footer className="py-12 flex flex-col items-center justify-center gap-4 text-[#1A2A3A]/80">
          <div className="text-sm md:text-base uppercase tracking-widest font-extrabold">
             © {new Date().getFullYear()} Oranolio. A new era of digital mastery.
          </div>
          
          {/* Unique Visitor Tracker */}
          <div className="flex items-center gap-2 px-4 py-2 border border-[#2D9C8E]/30 rounded-full bg-[#FDFBF7]/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2D9C8E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2D9C8E]"></span>
            </span>
            <span className="font-mono text-xs text-[#1A2A3A] tracking-wider">
              WEEKLY UNIQUE TRAFFIC: <span className="font-bold">{visitorCount}</span>
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
