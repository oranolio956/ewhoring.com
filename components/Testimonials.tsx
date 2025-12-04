
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';
import { ShakeOnHover, GlitchText } from './SectionEasterEggs';

const reviews = [
  {
    name: "Marcus, 28",
    role: "Ex-Bartender",
    alias: "Sophia_Executive",
    income: "+$25,000/mo",
    quote: "I targeted LinkedIn executives and now I have three sugar daddies. One CEO flies me to Dubai every month and pays my rent. Another bought me a condo. I went from $40k/year to $300k/year overnight.",
    tags: ["Multiple Daddies", "Luxury Lifestyle"]
  },
  {
    name: "David, 31",
    role: "Former IT Support",
    alias: "Isabella_Investor",
    income: "+$15,000/mo",
    quote: "Crypto whales on Telegram are insane. One guy sent me $50,000 in BTC just because I 'understood his world.' I positioned myself as a 'tech entrepreneur' and now I have passive income for life.",
    tags: ["Crypto Mining", "Financial Freedom"]
  },
  {
    name: "Alex, 25",
    role: "College Dropout",
    alias: "Victoria_Elite",
    income: "+$12,000/mo",
    quote: "Seeking.com sugar daddies are the real deal. I get $6,000 monthly allowances from two different executives. They think I'm a 'graduate student' - total discretion, total wealth.",
    tags: ["Monthly Allowances", "Elite Clients"]
  }
];

export const Testimonials: React.FC = () => {
  const { openPayment } = usePayment();
  return (
    <section id="testimonials" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Background Text - Branding Injection */}
      <div className="absolute top-0 left-0 text-[clamp(100px,18vw,350px)] font-bold text-[#1A2A3A]/[0.03] leading-none pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap z-0">
        ORANOLIO
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-7xl font-bold text-[#1A2A3A] tracking-tighter mb-4">
            <ShakeOnHover>
              THEY FOUND WEALTH <br/>
              <span className="text-[#FF8A75] italic font-serif"><GlitchText>(NOT DIGNITY)</GlitchText></span>
            </ShakeOnHover>
          </h2>
            <p className="text-lg text-[#1A2A3A]/60 max-w-2xl">
              Real wealth. Real results. Strategic targeting. <br/>
              See how operators are securing monthly allowances and luxury arrangements from sugar daddies.
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

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button
            onClick={openPayment}
            className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-all shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
          >
            BECOME THE NEXT SUCCESS STORY →
          </button>
          <p className="text-xs text-[#1A2A3A]/60 mt-2 font-mono">
            Stop reading and start doing
          </p>
        </div>
      </div>
    </section>
  );
};
