
import React from 'react';
import { Mascot } from './Mascot';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      
      {/* Massive Background Typography */}
      <div className="flex flex-col relative">
        <div className="relative">
          <h1 className="text-[12vw] leading-[0.8] font-bold text-[#1A2A3A] tracking-tighter mix-blend-darken">
            ORANOLIO
          </h1>
          <div className="absolute top-0 right-0 md:right-20 w-32 h-32 md:w-48 md:h-48">
             <Mascot />
          </div>
        </div>
        
        <div className="flex items-center gap-4 md:gap-12 ml-2 md:ml-24 mt-4">
           <div className="h-[2px] w-12 md:w-32 bg-[#FF8A75]"></div>
           <h2 className="text-2xl md:text-4xl font-light italic text-[#1A2A3A] font-serif">
             teaches
           </h2>
        </div>

        <h1 className="text-[12vw] leading-[0.8] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A] tracking-tighter self-end text-right mt-4 relative z-20">
          EWHORE
        </h1>
      </div>

      {/* Bottom Editorial Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 md:mt-0 border-t border-[#1A2A3A]/20 pt-8">
        <div className="md:col-span-4">
          <p className="text-xs font-mono uppercase text-[#1A2A3A]/60 mb-2">
            [ Course ID: 99-A ]
          </p>
          <p className="text-lg leading-tight font-medium text-[#1A2A3A]">
            The definitive guide to digital persona architecture.
            <br />
            Construct desire. Monetize the signal.
          </p>
        </div>
        
        <div className="md:col-span-4 flex flex-col justify-end">
           <div className="flex gap-2 items-center">
             <div className="w-2 h-2 rounded-full bg-[#FF8A75] animate-pulse"></div>
             <span className="text-xs font-bold uppercase tracking-widest">Live Cohort Open</span>
           </div>
        </div>

        <div className="md:col-span-4 flex justify-end items-end">
           <p className="text-right text-xs max-w-[200px] text-[#1A2A3A]/50">
             *Results vary. This is high-performance psychological warfare, not a template.
           </p>
        </div>
      </div>
    </section>
  );
};
