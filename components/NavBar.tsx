
import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <>
      {/* Top Left Branding */}
      <div className="fixed top-6 left-6 z-50 mix-blend-difference">
        <span className="font-['Space_Grotesk'] font-bold text-[#1A2A3A] text-xl tracking-tighter hover:italic cursor-pointer transition-all">
          ORANOLIO ©
        </span>
      </div>

      {/* Top Right Actions */}
      <div className="fixed top-6 right-6 z-50 flex gap-4">
        <button className="hidden md:block px-6 py-2 border border-[#1A2A3A] text-[#1A2A3A] text-xs font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-colors">
          Manifesto
        </button>
        <button className="px-6 py-2 bg-[#1A2A3A] text-[#FDFBF7] text-xs font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-colors">
          Enroll
        </button>
      </div>

      {/* Vertical Navigation (Desktop) */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8">
        {['Philosophy', 'Syllabus', 'Pricing'].map((item, index) => (
          <div key={item} className="group flex items-center gap-4 cursor-pointer">
             <span className="text-[10px] font-mono text-[#1A2A3A]/40">0{index + 1}</span>
             <span className="text-sm uppercase tracking-widest text-[#1A2A3A] font-medium relative overflow-hidden">
               <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
               <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-[#FF8A75]">{item}</span>
             </span>
          </div>
        ))}
      </nav>
    </>
  );
};
