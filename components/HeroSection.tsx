
import React from 'react';
import { Mascot } from './Mascot';
import { usePayment } from '../contexts/PaymentContext';

export const HeroSection: React.FC = () => {
  const { openPayment } = usePayment();
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
      <div className="flex flex-col relative w-full max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="relative w-full animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0 z-10 will-change-transform transform-gpu">
          {/* Main Headline - SEO Optimized H1 */}
          <h1 className="text-[clamp(2.25rem,12vw,10rem)] leading-[0.9] font-bold text-[#1A2A3A] tracking-tighter mix-blend-darken break-words w-full transition-colors duration-500 cursor-default select-none relative z-10 transform-gpu">
            <span className="sr-only">Ewhore Discord Servers 2025 - Complete Ewhoring Guide - </span>YOU'RE A DUDE?
          </h1>
          
          {/* Mascot - Improved Mobile Positioning to prevent overlap/clutter on iPhone */}
          <div className="absolute top-[-10%] right-[-20%] w-[40vw] h-[40vw] min-w-[120px] min-h-[120px] md:top-[-15%] md:right-[2%] md:w-[18vw] md:h-[18vw] lg:w-[20vw] lg:h-[20vw] opacity-40 md:opacity-80 z-0 pointer-events-none md:pointer-events-auto mix-blend-multiply transform-gpu" style={{ transform: 'translate3d(0,0,0)' }}>
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
        <div className="text-[clamp(2.25rem,11vw,9rem)] leading-[0.9] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A] tracking-tighter self-end text-right mt-4 md:mt-[1vw] relative z-20 animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.4s_forwards] opacity-0 drop-shadow-sm max-w-full hover:hue-rotate-15 transition-all duration-500 select-none transform-gpu will-change-transform">
          NOW YOU'RE NOT.
        </div>
      </div>

        {/* Bottom Editorial Content */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 mt-4 md:mt-12 w-full max-w-7xl mx-auto animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0 relative z-20 transform-gpu">
        <div className="lg:col-span-6">
          <p className="text-[10px] md:text-xs font-mono uppercase text-[#FF8A75] mb-3 font-bold tracking-widest bg-[#1A2A3A] w-fit px-2 py-1 text-white">
            [ ORANOLIO ARBITRAGE // EST. 2014 ]
          </p>
            <h3 className="text-xl md:text-3xl leading-none font-bold text-[#1A2A3A] uppercase">
              FROM "SUP BRO" TO <br className="hidden md:block" /> "HEY DADDY" IN 20 MINUTES.
              <br className="hidden md:block"/>
              <span className="text-[#2D9C8E] italic normal-case font-serif text-base md:text-xl block mt-4 max-w-xl leading-relaxed">
                I teach you how to target wealthy sugar daddies and high-net-worth individuals.
                Forget Discord kids and Tinder matches. We're going straight for the whales who pay $500+ per interaction.
              </span>
            </h3>
        </div>
        

        <div className="flex lg:col-span-4 justify-start lg:justify-end items-end gap-4 mt-4 lg:mt-0 w-full">
           <div className="text-left lg:text-right w-full lg:w-auto">
                <button 
                  onClick={openPayment} 
                  className="w-full lg:w-auto bg-[#1A2A3A] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-colors shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
                  aria-label="Start The Grift"
                >
                    START THE GRIFT
                </button>
               

           </div>
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
