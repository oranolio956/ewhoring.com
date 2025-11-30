
import React from 'react';
import { Mascot } from './Mascot';

export const HeroSection: React.FC = () => {
  return (
    <header id="hero" className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-12 overflow-hidden w-full max-w-full mx-auto will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
      
      {/* Vertical Branding - Architectural */}
      <div className="absolute left-4 bottom-32 hidden lg:block -rotate-90 origin-bottom-left z-0">
          <span className="text-[10px] font-mono font-bold tracking-[1em] text-[#1A2A3A]/20 uppercase">
              Oranolio Systems // Est. 2014
          </span>
      </div>

      {/* Hidden Legal Framework - "Safe Harbor" */}
      <div className="absolute top-24 right-4 md:right-12 text-[9px] font-mono text-[#1A2A3A]/20 text-right leading-tight pointer-events-none select-none hidden md:block">
        OPERATING UNDER U.S. SATIRE LAWS<br/>
        SECTION 230 PROTECTION ACTIVE<br/>
        NO LIABILITY ASSUMED
      </div>

      {/* Massive Background Typography - Viewport Width Locked for Perfect Scaling */}
      <div className="flex flex-col relative w-full max-w-[1920px] mx-auto mb-8 md:mb-12">
        <div className="relative w-full animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0 z-10 will-change-transform transform-gpu">
          {/* Main Headline - Adjusted clamp for better mobile fit */}
          <h1 className="text-[clamp(2.25rem,13vw,12rem)] leading-[0.9] font-bold text-[#1A2A3A] tracking-tighter mix-blend-darken break-words w-full transition-colors duration-500 cursor-default select-none relative z-10 transform-gpu">
            YOU'RE A DUDE?
          </h1>
          
          {/* Mascot - Improved Mobile Positioning to prevent overlap/clutter on iPhone */}
          <div className="absolute top-[-15%] right-[-30%] w-[50vw] h-[50vw] min-w-[150px] min-h-[150px] md:top-[-20%] md:right-[5%] md:w-[22vw] md:h-[22vw] opacity-30 md:opacity-80 z-0 pointer-events-none md:pointer-events-auto mix-blend-multiply transform-gpu" style={{ transform: 'translate3d(0,0,0)' }}>
             <Mascot />
          </div>
        </div>
        
        {/* Sub-headline */}
        <div className="flex items-center gap-2 md:gap-12 ml-1 md:ml-[5vw] mt-2 md:mt-[1vw] animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.2s_forwards] opacity-0 relative z-20 flex-wrap transform-gpu">
           <div className="h-[2px] w-[15vw] md:w-[8vw] bg-[#FF8A75] shrink-0"></div>
           <h2 className="text-[clamp(1rem,4vw,2.5rem)] font-light italic text-[#1A2A3A] font-serif flex items-center gap-3 flex-wrap leading-tight">
             congratulations,
             <div className="bg-[#2D9C8E] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest shadow-lg shadow-[#2D9C8E]/30 whitespace-nowrap">
                <span>✓</span> Oranolio Verified
             </div>
           </h2>
        </div>

        {/* Second Headline */}
        <div className="text-[clamp(2.5rem,13vw,12rem)] leading-[0.9] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A] tracking-tighter self-end text-right mt-4 md:mt-[1vw] relative z-20 animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.4s_forwards] opacity-0 drop-shadow-sm max-w-full hover:hue-rotate-15 transition-all duration-500 select-none transform-gpu will-change-transform">
          NOW YOU'RE NOT.
        </div>
      </div>

      {/* Bottom Editorial Content */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 mt-4 md:mt-12 w-full max-w-[1920px] mx-auto animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0 relative z-20 transform-gpu">
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

        <div className="flex lg:col-span-4 justify-start lg:justify-end items-end gap-4 mt-4 lg:mt-0 w-full">
           <div className="text-left lg:text-right w-full lg:w-auto">
                <button 
                  onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior:'smooth'})} 
                  className="w-full lg:w-auto bg-[#1A2A3A] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-colors shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base"
                  aria-label="Start The Grift"
                >
                    START THE GRIFT
                </button>
               
               {/* SYSTEM REQUIREMENTS - SUBTLE WARNING */}
               <div className="mt-4 p-3 border border-[#1A2A3A]/10 bg-[#1A2A3A]/5 rounded text-[10px] font-mono text-left w-full max-w-[350px] ml-auto">
                  <div className="font-bold uppercase mb-1 text-[#1A2A3A]">⚠ System Requirements:</div>
                  <ul className="space-y-1 opacity-70">
                    <li className="flex justify-between"><span>Social IQ:</span> <span>110+ (Required)</span></li>
                    <li className="flex justify-between"><span>Empathy:</span> <span>Disabled</span></li>
                    <li className="flex justify-between text-red-600 font-bold"><span>Beginners:</span> <span>NOT SUPPORTED</span></li>
                  </ul>
                  <div className="mt-2 text-[9px] opacity-50 leading-tight">
                    *If you have never manipulated a human before, this protocol will be too advanced for you. Do not buy.
                  </div>
               </div>

           </div>
        </div>
        
        {/* Animated Scroll Indicator */}
        <div className="absolute left-1/2 bottom-[1vh] -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none transform-gpu">
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
    </header>
  );
};
