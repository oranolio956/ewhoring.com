
import React from 'react';
import { Mascot } from './Mascot';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-12 overflow-hidden w-full max-w-full mx-auto">
      
      {/* Vertical Branding - Architectural */}
      <div className="absolute left-4 bottom-32 hidden lg:block -rotate-90 origin-bottom-left z-0">
          <span className="text-[10px] font-mono font-bold tracking-[1em] text-[#1A2A3A]/20 uppercase">
              Oranolio Systems // Est. 2014
          </span>
      </div>

      {/* Massive Background Typography - Viewport Width Locked for Perfect Scaling */}
      <header className="flex flex-col relative w-full max-w-[1920px] mx-auto">
        <div className="relative w-full animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0 z-10">
          {/* Main Headline */}
          <h1 className="text-[14vw] leading-[0.85] font-bold text-[#1A2A3A] tracking-tighter mix-blend-darken break-words w-full transition-colors duration-500 cursor-default select-none">
            YOU'RE A DUDE?
          </h1>
          
          {/* Mascot - Positioned safely for mobile vs desktop */}
          <div className="absolute top-[-15%] right-0 w-[25vw] h-[25vw] md:top-[-10%] md:right-[5%] md:w-[18vw] md:h-[18vw] opacity-90 z-0 pointer-events-none md:pointer-events-auto">
             <Mascot />
          </div>
        </div>
        
        {/* Sub-headline */}
        <div className="flex items-center gap-4 md:gap-12 ml-1 md:ml-[5vw] mt-[2vw] animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.2s_forwards] opacity-0 relative z-20">
           <div className="h-[2px] w-[8vw] bg-[#FF8A75] shrink-0"></div>
           <h2 className="text-[clamp(1rem,3vw,2.5rem)] font-light italic text-[#1A2A3A] font-serif flex items-center gap-3 flex-wrap leading-tight">
             congratulations,
             <div className="bg-[#2D9C8E] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest shadow-lg shadow-[#2D9C8E]/30 whitespace-nowrap">
                <span>✓</span> Oranolio Verified
             </div>
           </h2>
        </div>

        {/* Second Headline */}
        <h1 className="text-[14vw] leading-[0.85] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A] tracking-tighter self-end text-right mt-[2vw] relative z-20 animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.4s_forwards] opacity-0 drop-shadow-sm max-w-full hover:hue-rotate-15 transition-all duration-500 select-none">
          NOW YOU'RE NOT.
        </h1>
      </header>

      {/* Bottom Editorial Content */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-12 w-full max-w-[1920px] mx-auto animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0 relative z-20">
        <div className="lg:col-span-6">
          <p className="text-[10px] md:text-xs font-mono uppercase text-[#FF8A75] mb-3 font-bold tracking-widest bg-[#1A2A3A] w-fit px-2 py-1 text-white">
            [ ORANOLIO ARBITRAGE // EST. 2014 ]
          </p>
          <h3 className="text-xl md:text-3xl leading-none font-bold text-[#1A2A3A] uppercase">
            FROM "SUP BRO" TO <br className="hidden md:block" /> "HEY DADDY" IN 20 MINUTES.
            <br className="hidden md:block"/>
            <span className="text-[#2D9C8E] italic normal-case font-serif text-base md:text-xl block mt-4 max-w-xl leading-relaxed">
              I teach you how to engineer a high-value female identity and monetize male psychology. 
              Real girls are terrible at this. You know what men want because you ARE a man. It's just biology.
            </span>
          </h3>
        </div>
        
        <div className="lg:col-span-2 flex flex-col justify-end items-start lg:items-center">
           <div className="flex gap-2 items-center bg-white/50 w-fit px-3 py-2 rounded-full backdrop-blur-sm border border-[#1A2A3A]/10">
             <div className="w-2 h-2 rounded-full bg-[#FF8A75] animate-pulse"></div>
             <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#FF8A75]">Grift Active</span>
           </div>
        </div>

        <div className="flex lg:col-span-4 justify-start lg:justify-end items-end gap-4 mt-4 lg:mt-0">
           <div className="text-left lg:text-right w-full lg:w-auto">
                <button 
                  onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior:'smooth'})} 
                  className="w-full lg:w-auto bg-[#1A2A3A] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-colors shadow-xl hover:scale-105 transform duration-200 btn-glitch"
                  aria-label="Start The Grift"
                >
                    START THE GRIFT
                </button>
               <p className="text-[10px] text-[#1A2A3A]/40 mt-3 font-mono">
                 *Results may vary. Tom generated $150 in 15 mins.
               </p>
           </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute left-1/2 bottom-[2vh] -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
            <span className="text-[8px] font-mono uppercase tracking-widest text-[#1A2A3A]">Powered by Oranolio</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#1A2A3A] to-transparent"></div>
        </div>
      </article>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};
