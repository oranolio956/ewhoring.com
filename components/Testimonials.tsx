
import React from 'react';

const reviews = [
  {
    name: "Tom, 34",
    role: "Ex-Plumber",
    alias: "Tomantha_UwU",
    income: "+$18,500/mo",
    quote: "I put on a wig as a joke. 20 minutes later, a guy named 'Tex' sent me $150 just to say 'good morning'. I haven't touched a toilet in 8 months. My hands are still hairy, but my bank account is smooth.",
    tags: ["Sold His Van", "Sugar Baby"]
  },
  {
    name: "Barry, 52",
    role: "Forklift Certified",
    alias: "Kitten_XoXo",
    income: "+$14,200/mo",
    quote: "I don't even use a voice changer anymore. I just tell them I have 'morning voice' because I'm sleepy. They send me $500 for 'coffee' while I'm watching football. I am a 52-year-old man named Barry.",
    tags: ["Bought a Boat", "Zero Shame"]
  },
  {
    name: "Kevin, 19",
    role: "Failed Crypto Trader",
    alias: "Queen_Slayer_99",
    income: "+$8,500/mo",
    quote: "My dad thinks I'm day trading. I'm actually farming simps on Discord. I bought a Lambo with money meant for a discord mod's insulin.",
    tags: ["Debt Free", "Going to Hell"]
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Background Text - Branding Injection */}
      <div className="absolute top-0 left-0 text-[clamp(100px,18vw,350px)] font-bold text-[#1A2A3A]/[0.03] leading-none pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap z-0">
        ORANOLIO
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2A3A] tracking-tighter mb-4">
            THEY LEFT THE MATRIX <br/>
            <span className="text-[#FF8A75] italic font-serif">(AND THEIR DIGNITY)</span>
          </h2>
          <p className="text-lg text-[#1A2A3A]/60 max-w-2xl">
            Real men. Real results. Fake genders. <br/>
            See how regular dudes are securing the bag by simply lying on the internet.
          </p>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="group relative bg-white border border-[#1A2A3A]/10 p-6 md:p-8 rounded-3xl hover:border-[#2D9C8E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="text-4xl">❝</span>
              </div>

              {/* Header: Identity Swap */}
              <div className="flex items-center gap-3 mb-6 border-b border-[#1A2A3A]/5 pb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg md:text-xl grayscale group-hover:grayscale-0 transition-all shrink-0">
                  🧔🏻‍♂️
                </div>
                <div className="text-xl text-[#1A2A3A]/20">→</div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#FF8A75] to-[#F4D35E] flex items-center justify-center text-lg md:text-xl shadow-lg animate-pulse shrink-0">
                  👩🏼‍🎤
                </div>
                <div className="ml-auto text-right min-w-0">
                    <div className="text-[9px] md:text-[10px] uppercase font-bold text-[#1A2A3A]/40 truncate">Monthly Haul</div>
                    <div className="text-[#2D9C8E] font-bold font-mono text-sm md:text-base">{review.income}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-lg md:text-xl text-[#1A2A3A] mb-1">{review.name}</h3>
              <div className="text-xs uppercase tracking-widest text-[#FF8A75] font-bold mb-4">{review.role}</div>
              
              <p className="text-[#1A2A3A]/70 leading-relaxed italic mb-6 text-sm md:text-base flex-grow">
                "{review.quote}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {review.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold px-2 py-1 bg-[#1A2A3A] text-[#FDFBF7] rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
