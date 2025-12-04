import React from 'react';

export const Ticker: React.FC = () => {
  return (
    <div className="relative w-full bg-[#1A2A3A] overflow-hidden py-4 z-20 transform -rotate-1 origin-left mt-12 mb-12">
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-[#1A2A3A] to-transparent z-10"></div>
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-[#1A2A3A] to-transparent z-10"></div>
      
      <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] flex items-center gap-12">
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-[#FDFBF7] font-bold text-2xl tracking-widest font-['Space_Grotesk']">ORANOLIO</span>
            <span className="text-[#2D9C8E] text-2xl">✦</span>
            <span className="text-[#FDFBF7]/50 text-xl font-light uppercase tracking-widest">Digital Mastery</span>
            <span className="text-[#FF8A75] text-2xl">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};