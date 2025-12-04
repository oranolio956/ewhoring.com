
import React from 'react';

const BRANDS = [
  { name: "Dateline NBC", color: "#FDFBF7" },
  { name: "FBI Watchlist", color: "#FF0000" },
  { name: "WorldStarHipHop", color: "#FDFBF7" },
  { name: "r/legaladvice", color: "#FF8A75" },
  { name: "Your Mom's DM's", color: "#FDFBF7" },
  { name: "The First 48", color: "#FDFBF7" },
];

export const AsSeenOn: React.FC = () => {
  return (
    <section className="bg-[#0F1923] py-8 border-b border-[#FDFBF7]/5 overflow-hidden relative z-20">
      <div className="text-center mb-6 opacity-40">
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#FDFBF7]">
            FEATURED IN MEDIA OUTLETS (Allegedly)
        </span>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32 px-16">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-help grayscale hover:grayscale-0">
               <span className="text-xl md:text-2xl font-black font-['Space_Grotesk'] uppercase tracking-tighter" style={{ color: brand.color }}>
                 {brand.name}
               </span>
            </div>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 md:gap-32 px-16">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex items-center gap-2 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-help grayscale hover:grayscale-0">
               <span className="text-xl md:text-2xl font-black font-['Space_Grotesk'] uppercase tracking-tighter" style={{ color: brand.color }}>
                 {brand.name}
               </span>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee2 { animation: marquee2 25s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};
