
import React, { useState } from 'react';
import { ModuleItem } from '../types';
import { Tooltip } from 'react-tooltip';

const modules: ModuleItem[] = [
  {
    id: 1,
    title: "Emotional Support Module",
    description: "Processing the trauma of being scammed (for $299).",
    details: "Our certified specialists help you work through the 5 stages of grief: denial, anger, bargaining, depression, and acceptance. Learn to accept that your money is gone while we charge you for the privilege of telling you this.",
    price: "01",
    tags: ["Feelings"]
  },
  {
    id: 2,
    title: "Red Flag Identification",
    description: "Learning what you should have noticed (PDF guide included).",
    details: "We'll teach you to identify red flags like: asking for gift cards, refusing video calls, AI-generated photos, and being a 47-year-old man named Kevin. This information is free on Google, but we charge $299 to tell it to you.",
    price: "02",
    tags: ["Education"]
  },
  {
    id: 3,
    title: "Trauma Processing",
    description: "Understanding why you fell for it (spoiler: you're lonely).",
    details: "Our specialists will help you understand that loneliness makes people vulnerable. We'll explain why you sent money to someone you never met. This insight is worth $299 according to us.",
    price: "03",
    tags: ["Therapy"]
  },
  {
    id: 4,
    title: "Money Recovery",
    description: "Just kidding, we can't recover your money.",
    details: "This module doesn't actually exist. We cannot recover your money. We can only help you feel better about losing it. But hey, at least you learned something! That's worth $299, right?",
    price: "04",
    tags: ["Reality"]
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
         RECOVERY PROTOCOL
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 w-full">
        
        {/* Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col justify-center">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF8A75]">Recovery Services</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-8 text-[#FDFBF7]">
            OUR PROCESS
          </h2>
          

          <p className="text-base md:text-xl font-light text-[#FDFBF7]/70 leading-relaxed font-mono">
            // Subject: Emotional Recovery<br/>
            // Money Recovery: NOT INCLUDED
          </p>
          <div className="mt-8 md:mt-12 p-4 md:p-6 border-l-2 border-[#FF8A75] bg-[#FDFBF7]/5 backdrop-blur-sm">
            <p className="text-xs md:text-sm text-[#FDFBF7]/60 font-mono">
              "We can't get your money back, but we can help you feel better about losing it. That's worth $299, right?"
            </p>
          </div>
        </div>

        {/* List View - Technical Dossier Style */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {modules.map((module) => (
            <div
              key={module.id}
              data-tooltip-id="syllabus-tooltip"
              data-tooltip-content={module.details}
              onClick={() => toggleExpand(module.id)}
              className="group border-b border-[#FDFBF7]/10 py-8 md:py-10 hover:bg-[#FDFBF7]/5 transition-all cursor-pointer md:cursor-help relative overflow-hidden"
            >

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 pl-4">
                <span className="font-mono text-xs md:text-sm text-[#2D9C8E] mb-2 md:mb-0 tracking-widest opacity-60 group-hover:opacity-100">
                    [ FILE_{module.price} ]
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 group-hover:translate-x-2 transition-transform duration-300 font-['Space_Grotesk'] uppercase">
                    {module.title}
                  </h3>
                  
                  {/* Clean Description */}
                  <div className="relative w-fit">
                    <p className="text-sm md:text-lg text-[#FDFBF7]/60 max-w-lg group-hover:text-[#FDFBF7] transition-colors font-mono">
                        {module.description}
                    </p>
                  </div>
                  
                  {/* Mobile Expanded Details */}
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${expandedId === module.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                    <div className="overflow-hidden">
                       <p className="text-sm text-[#FF8A75] border-l border-[#FF8A75] pl-4 py-2 leading-relaxed bg-[#FDFBF7]/5">
                         {module.details}
                       </p>
                    </div>
                  </div>
                </div>
                
                {/* Tech Deco */}
                <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="text-[10px] font-mono text-[#FDFBF7]/30 text-right">
                      SEC_LEVEL_1<br/>
                      ENCRYPTED
                   </div>
                </div>

                {/* Mobile indicator */}
                <div className="md:hidden mt-2 text-[#FF8A75] text-xs font-bold uppercase tracking-widest font-mono">
                   {expandedId === module.id ? '[-] COLLAPSE' : '[+] EXPAND'}
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
                opacity: 1,
                fontFamily: 'monospace'
            }}
            opacity={1}
            border="1px solid #2D9C8E"
        />

      </div>
    </section>
  );
};
