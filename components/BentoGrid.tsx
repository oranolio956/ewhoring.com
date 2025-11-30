
import React from 'react';
import { ModuleItem } from '../types';
import { Tooltip } from 'react-tooltip';

const modules: ModuleItem[] = [
  {
    id: 1,
    title: "Persona Architecture",
    description: "Building a bulletproof digital identity from zero.",
    details: "Deep dive into archetype selection, shadow work, and consistency algorithms. Includes 3 case studies of successful 7-figure personas.",
    price: "01",
    tags: ["Foundation"]
  },
  {
    id: 2,
    title: "The Retention Loop",
    description: "Keep them scrolling, keep them paying. Hypnotic loops.",
    details: "Dopamine mapping and variable reward scheduling. Learn how to turn casual viewers into obsessive devotees using psychometric triggers.",
    price: "02",
    tags: ["Psychology"]
  },
  {
    id: 3,
    title: "Whale Hunting",
    description: "Identifying and nurturing high-value patrons.",
    details: "The art of high-ticket conversion. Scripting, pacing, and the 'velvet rope' technique for identifying maximum LTV (Lifetime Value) targets.",
    price: "03",
    tags: ["Finance"]
  },
  {
    id: 4,
    title: "Exit Strategy",
    description: "Cashing out without destroying the brand.",
    details: "Legal structures, IP transfer, and the 'Ghost Protocol' for disappearing with your earnings intact. Wealth preservation 101.",
    price: "04",
    tags: ["Legacy"]
  }
];

export const BentoGrid: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 bg-[#1A2A3A] text-[#FDFBF7]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Header */}
        <div className="md:col-span-4 sticky top-12 h-fit">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8 text-[#2D9C8E]">
            SYLLABUS
          </h2>
          <p className="text-xl font-light text-[#FDFBF7]/70 leading-relaxed">
            No fluff. No generic advice. <br/>
            Just raw, operational strategies for high-net-worth digital entities.
          </p>
          <div className="mt-12 p-6 border border-[#FDFBF7]/20">
            <h4 className="font-mono text-xs uppercase text-[#FF8A75] mb-2">Warning</h4>
            <p className="text-sm text-[#FDFBF7]/50">
              The techniques contained herein are powerful. Use with discretion.
            </p>
          </div>
        </div>

        {/* List View (Anti-Grid) */}
        <div className="md:col-span-8 flex flex-col">
          {modules.map((module) => (
            <div 
              key={module.id} 
              data-tooltip-id="syllabus-tooltip"
              data-tooltip-content={module.details}
              className="group border-t border-[#FDFBF7]/20 py-12 hover:bg-[#FDFBF7]/5 transition-colors cursor-help"
            >
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
                <span className="font-mono text-xl text-[#FF8A75]">/ {module.price}</span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:translate-x-4 transition-transform duration-300">
                    {module.title}
                  </h3>
                  <p className="text-lg text-[#FDFBF7]/60 max-w-lg group-hover:text-[#FDFBF7] transition-colors">
                    {module.description}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs border border-[#FDFBF7] px-3 py-1 rounded-full uppercase tracking-widest">
                    Access
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
        className="!bg-[#1A2A3A] !text-[#FDFBF7] !border !border-[#2D9C8E] !rounded-none !opacity-100 !px-6 !py-4 !max-w-md !font-sans !text-sm !leading-relaxed !tracking-wide !z-50 !shadow-[0_0_30px_rgba(45,156,142,0.3)]"
        noArrow={false}
      />
    </section>
  );
};