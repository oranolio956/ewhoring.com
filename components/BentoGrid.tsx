
import React, { useState } from 'react';
import { ModuleItem } from '../types';
import { Tooltip } from 'react-tooltip';

const modules: ModuleItem[] = [
  {
    id: 1,
    title: "The Honey Pot",
    description: "Building a female identity when you are a 30-year-old man.",
    details: "Sourcing content that isn't reverse searchable. Concealing identifiers. The art of the 'broken camera' excuse. Creating a believable digital footprint.",
    price: "01",
    tags: ["Identity"]
  },
  {
    id: 2,
    title: "Voice Changers",
    description: "Sounding female without getting caught.",
    details: "AI voice changers are for amateurs. I teach you the psychological text patterns that make them 'hear' a girl's voice in their head. It's linguistics.",
    price: "02",
    tags: ["Audio"]
  },
  {
    id: 3,
    title: "Simp Farming",
    description: "Targeting high-net-worth losers.",
    details: "Where to find lonely men with disposable income. How to become their 'online girlfriend' while maintaining complete anonymity.",
    price: "03",
    tags: ["Acquisition"]
  },
  {
    id: 4,
    title: "The Cashout",
    description: "Structuring payments and anonymity.",
    details: "Receiving funds without doxxing yourself. Crypto rails. How to manage multiple 'clients' efficiently without getting burned.",
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
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] w-full max-w-[100vw] overflow-hidden relative">
      
      {/* Subliminal Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-[#FDFBF7]/[0.02] -rotate-45 pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap">
         ORANOLIO METHOD
      </div>

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col justify-center">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-8 text-[#FF8A75]">
            THE METHOD
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

        {/* List View */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {modules.map((module) => (
            <div 
              key={module.id} 
              // Desktop: Tooltip
              data-tooltip-id="syllabus-tooltip"
              data-tooltip-content={module.details}
              // Mobile: Click to expand
              onClick={() => toggleExpand(module.id)}
              className="group border-t border-[#FDFBF7]/20 py-6 md:py-10 hover:bg-[#FDFBF7]/5 transition-colors cursor-pointer md:cursor-help"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                <span className="font-mono text-lg md:text-xl text-[#2D9C8E] mb-2 md:mb-0 tracking-wider">ORANOLIO / {module.price}</span>
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
                         <span className="block mt-2 text-[9px] uppercase opacity-50 font-mono tracking-widest">Property of Oranolio Corp</span>
                       </p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs border border-[#FDFBF7] px-3 py-1 rounded-full uppercase tracking-widest text-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#1A2A3A] transition-colors">
                    Access
                  </span>
                </div>
                {/* Mobile indicator */}
                <div className="md:hidden mt-2 text-[#FF8A75] text-xs font-bold uppercase tracking-widest">
                   {expandedId === module.id ? '- Close' : '+ Details'}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <Tooltip 
            id="syllabus-tooltip" 
            style={{ 
                backgroundColor: '#0F1923', 
                color: '#FDFBF7', 
                border: '1px solid #2D9C8E',
                borderRadius: '0px',
                padding: '12px 20px',
                maxWidth: '300px',
                fontSize: '12px',
                lineHeight: '1.5',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                opacity: 1
            }}
            opacity={1}
            border="1px solid #2D9C8E"
        />

      </div>
    </section>
  );
};
