
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';

const reviews = [
  {
    name: "Jake, 24",
    role: "Software Engineer",
    alias: "ThoughtSheWasReal",
    income: "-$3,200",
    quote: "I sent $3,200 to 'Jessica' over 6 months on Discord. She said she was a 22-year-old college student. We were planning to meet. Then I found out 'Jessica' was actually a 47-year-old man named Kevin from Ohio. Our recovery specialist helped me process this trauma. Worth every penny of the $299 consultation fee!",
    tags: ["Discord Scam", "6 Months Wasted", "Recovery: $0"]
  },
  {
    name: "Mike, 31",
    role: "Marketing Manager",
    alias: "CryptoWhaleVictim",
    income: "-$8,500",
    quote: "I sent $8,500 in Bitcoin to 'Isabella' on Telegram. She said she was a crypto trader and needed help with her 'investment fund.' After 3 months of daily conversations, I realized the photos were AI-generated. The recovery process has been... enlightening. At least I understand what went wrong now!",
    tags: ["Telegram Scam", "Crypto Loss", "Feelings: Recovered"]
  },
  {
    name: "Chris, 27",
    role: "Accountant",
    alias: "TinderCatfish",
    income: "-$2,100",
    quote: "Matched with 'Victoria' on Tinder. She asked for Steam gift cards because her 'dad was controlling.' Sent $2,100 worth over 4 months. Never met. Never video called. Recovery services helped me understand the red flags I missed. The PDF guide was very informative!",
    tags: ["Tinder Scam", "Gift Card Fraud", "Education: Priceless"]
  },
  {
    name: "Brandon, 29",
    role: "IT Consultant",
    alias: "OnlyFansVictim",
    income: "-$4,800",
    quote: "Subscribed to an OnlyFans for 8 months. Paid $600/month. Found out the 'girl' was using deepfake technology and the content was stolen. Recovery specialist explained that I should have reverse image searched. Very helpful advice! Money still gone though.",
    tags: ["OnlyFans Scam", "Deepfake", "Advice: Received"]
  },
  {
    name: "Ryan, 33",
    role: "Sales Manager",
    alias: "SugarDaddyVictim",
    income: "-$12,000",
    quote: "Met 'Sophia' on Seeking.com. She said she was a 23-year-old med student. Sent $12,000 over 6 months for 'tuition' and 'emergencies.' Never met in person. Recovery consultation helped me realize I should have asked for ID. Great learning experience!",
    tags: ["Sugar Daddy Scam", "6 Months", "Wisdom: Gained"]
  },
  {
    name: "Alex, 26",
    role: "Graphic Designer",
    alias: "RedditVictim",
    income: "-$1,500",
    quote: "Met someone on Reddit who claimed to be a 'cam girl' needing help. Sent $1,500 via CashApp. Turned out to be a 52-year-old man from Florida. Recovery service's red flag guide is now my bible. At least I won't make the same mistake twice!",
    tags: ["Reddit Scam", "CashApp", "Prevention: Learned"]
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
            THEY GOT SCAMMED <br/>
            <span className="text-[#FF8A75] italic font-serif">(WE HELPED THEM)</span>
          </h2>
            <p className="text-lg text-[#1A2A3A]/60 max-w-2xl">
              Real victims. Real recovery. Professional support. <br/>
              See how our certified recovery specialists helped these victims process their trauma and understand what went wrong.
            </p>
        </div>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="group relative bg-white border border-[#1A2A3A]/10 p-6 md:p-8 rounded-3xl hover:border-[#2D9C8E] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <span className="text-4xl">❝</span>
              </div>

              {/* Header: Scam Visualization */}
              <div className="flex items-center gap-3 mb-6 border-b border-[#1A2A3A]/5 pb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg md:text-xl grayscale group-hover:grayscale-0 transition-all shrink-0">
                  😢
                </div>
                <div className="text-xl text-[#1A2A3A]/20">→</div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr from-[#FF8A75] to-[#F4D35E] flex items-center justify-center text-lg md:text-xl shadow-lg animate-pulse shrink-0">
                  🎭
                </div>
                <div className="ml-auto text-right min-w-0">
                    <div className="text-[9px] md:text-[10px] uppercase font-bold text-[#1A2A3A]/40 truncate">Money Lost</div>
                    <div className="text-[#FF8A75] font-bold font-mono text-sm md:text-base">{review.income}</div>
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
            START YOUR RECOVERY PROCESS →
          </button>
          <p className="text-xs text-[#1A2A3A]/60 mt-2 font-mono">
            Professional help is just one click away
          </p>
        </div>
      </div>
    </section>
  );
};
