
import React, { useState } from 'react';
import { ModuleItem } from '../types';
import { Tooltip } from 'react-tooltip';

const modules: ModuleItem[] = [
  {
    id: 1,
    title: "Digital HRT",
    description: "Building a female identity when you are a 30-year-old man.",
    details: "How to find 'content' that isn't reverse searchable. How to hide your hairy knuckles in photos. The art of the 'broken camera' excuse.",
    price: "01",
    tags: ["Identity"]
  },
  {
    id: 2,
    title: "Voice Training",
    description: "Sounding like a waifu (without AI).",
    details: "AI voice changers are for amateurs. I teach you the psychological text patterns that make them 'hear' a girl's voice in their head. It's wizardry.",
    price: "02",
    tags: ["Audio"]
  },
  {
    id: 3,
    title: "Simp Farming",
    description: "They are desperate. Take advantage.",
    details: "Where to find the saddest, loneliest men with 401ks. How to become their 'online girlfriend' while you play Call of Duty with the boys.",
    price: "03",
    tags: ["Exploitation"]
  },
  {
    id: 4,
    title: "The Cashout",
    description: "Get the money. Block the number.",
    details: "Structuring payments so your wife doesn't find out. Laundering crypto. How to emotionally devastate them so they are too embarrassed to call the police.",
    price: "04",
    tags: ["Safety"]
  }
];

export const BentoGrid: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative z-10 py-16 md:py-24 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] w-full max-w-[100vw] overflow-hidden">
      
      {/* Subliminal Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-[#FDFBF7]/[0.02] -rotate-45 pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap">
         ORANOLIO PROTOCOL
      </div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        
        {/* Header - Sticky on Desktop, Normal on Mobile */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-8 text-[#FF8A75]">
            THE MANIFESTO
          </h2>
          <p className="text-base md:text-xl font-light text-[#FDFBF7]/70 leading-relaxed">
            Stop working at Wendy's. Start being "Wendy."
            <br/>
            <span className="text-[#2D9C8E] italic font-bold">Gender is a construct. Money is real.</span>
          </p>
          <div className="mt-8 md:mt-12 p-4 md:p-6 border border-[#FF8A75]/20 bg-black/20 backdrop-blur-sm rounded-lg">
            <h4 className="font-mono text-[10px] md:text-xs uppercase text-[#FF8A75] mb-2 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF8A75] rounded-full animate-pulse"></span>
                Reality Check
            </h4>
            <p className="text-xs md:text-sm text-[#FDFBF7]/50">
              Is it wrong to pretend to be a girl? Maybe. Is it wrong to be broke? Absolutely. Pick your struggle.
            </p>
          </div>
        </div>

        {/* List View (Educational) */}
        <div className="lg:col-span-8 flex flex-col">
          {modules.map((module) => (
            <div 
              key={module.id} 
              // Desktop: Tooltip
              data-tooltip-id="syllabus-tooltip"
              data-tooltip-content={module.details}
              // Mobile: Click to expand
              onClick={() => toggleExpand(module.id)}
              className="group border-t border-[#FDFBF7]/20 py-8 md:py-12 hover:bg-[#FDFBF7]/5 transition-colors cursor-pointer md:cursor-help"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                <span className="font-mono text-xl text-[#2D9C8E] mb-2 md:mb-0">/ {module.price}</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 md:group-hover:translate-x-4 transition-transform duration-300">
                    {module.title}
                  </h3>
                  
                  {/* Clean Description */}
                  <div className="relative w-fit">
                    <p className="text-sm md:text-lg text-[#FDFBF7]/80 max-w-lg md:group-hover:text-[#FDFBF7] transition-colors">
                        {module.description}
                    </p>
                  </div>
                  
                  {/* Mobile Expanded Details */}
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${expandedId === module.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                       <p className="text-sm text-[#FF8A75] border-l-2 border-[#FF8A75] pl-4 py-2 leading-relaxed bg-[#FDFBF7]/5 rounded-r-lg">
                         {module.details}
                       </p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs border border-[#FDFBF7] px-3 py-1 rounded-full uppercase tracking-widest text-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#1A2A3A] transition-colors">
                    Learn
                  </span>
                </div>
                {/* Mobile indicator */}
                <div className="md:hidden mt-4 flex items-center gap-2">
                   <div className={`w-1.5 h-1.5 rounded-full ${expandedId === module.id ? 'bg-[#FF8A75]' : 'bg-[#2D9C8E]'}`}></div>
                   <span className="text-[#FDFBF7]/50 text-[10px] uppercase tracking-widest">
                     {expandedId === module.id ? 'Hide Secret' : 'Reveal Secret'}
                   </span>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-[#FDFBF7]/20"></div>
        </div>

      </div>

      {/* Shared Tooltip Instance */}
      <Tooltip 
        id="syllabus-tooltip"
        place="top"
        className="!hidden lg:!block !bg-[#1A2A3A] !text-[#FDFBF7] !border !border-[#FF8A75] !rounded-none !opacity-100 !px-6 !py-4 !max-w-md !font-sans !text-sm !leading-relaxed !tracking-wide !z-50 !shadow-[0_0_30px_rgba(255,138,117,0.2)]"
        noArrow={false}
      />
    </section>
  );
};