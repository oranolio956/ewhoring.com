
import React from 'react';

const platforms = [
  { name: "TINDER", reason: "Catfishing" },
  { name: "BUMBLE", reason: "Identity Theft" },
  { name: "HINGE", reason: "Solicitation" },
  { name: "DISCORD", reason: "Too Powerful" },
  { name: "PAYPAL", reason: "Suspicious Growth" },
  { name: "VENMO", reason: "Reports" }
];

export const BannedBy: React.FC = () => {
  return (
    <section className="w-full bg-[#1A2A3A] py-12 border-b border-[#FDFBF7]/10 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-4">
        <p className="text-center text-[#FDFBF7]/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8">
          Proudly Banned From The World's Leading Platforms
        </p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {platforms.map((p, i) => (
            <div key={i} className="group relative flex flex-col items-center justify-center cursor-not-allowed">
              <span className="text-2xl md:text-3xl font-['Space_Grotesk'] font-bold text-[#FDFBF7] tracking-tighter group-hover:opacity-40 transition-opacity">
                {p.name}
              </span>
              
              {/* The "BANNED" Stamp */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 transform scale-150 -rotate-12 pointer-events-none">
                <div className="border-4 border-[#FF8A75] text-[#FF8A75] px-2 py-1 font-black uppercase text-xs tracking-widest bg-[#1A2A3A]/90">
                  BANNED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
