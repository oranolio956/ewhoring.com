
import React, { useState } from 'react';

export const faqs = [
  {
    q: "Can I do this on my phone?",
    a: "Yes. Do you have thumbs? Then yes. You can do this on a Samsung Smart Fridge if it has WiFi. Stop looking for excuses to be lazy. The device doesn't matter, the hustle does."
  },
  {
    q: "Is the market saturated?",
    a: "Saturated with idiots? Yes. Saturated with high-quality personas? No. Men turn 18 every day. The supply of lonely men is infinite. The supply of competent e-girls (who aren't actually 50-year-old scammers named Boris) is very low."
  },
  {
    q: "Will you mentor me 1-on-1?",
    a: "No. I am not your father. I provide the roadmap. You drive the car. If you need someone to hold your hand and tell you you're special, hire a therapist with the money you make."
  },
  {
    q: "Do I need to show my face?",
    a: "Read the site. We teach you how to be a GHOST. If you show your face, you are doing it wrong. You are likely a 30-year-old man. Nobody wants to see that. We use AI generated content and stolen valor."
  },
  {
    q: "How fast do I get paid?",
    a: "If you follow the protocol: 20 minutes. If you try to 'remix' the strategy because you think you're smarter than me: Never. The system works if you work."
  },
  {
    q: "Is this legal?",
    a: "We sell information. Selling a book about 'How to Rob a Bank' is legal. Actually robbing the bank is... a choice. We are the bookstore. You are the protagonist. Choose your own adventure."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 font-['Space_Grotesk'] leading-none">
              QUESTIONS FROM <br/>
              <span className="text-[#FF8A75]">LAZY PEOPLE</span>
            </h2>
            <p className="text-[#FDFBF7]/50 uppercase tracking-widest text-[10px] md:text-xs font-bold mt-4">
                (Read this so you don't ask me stupid things)
            </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`border border-[#FDFBF7]/10 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${openIndex === i ? 'bg-[#FDFBF7]/5 border-[#FF8A75]/50 shadow-[0_0_30px_rgba(255,138,117,0.1)]' : 'hover:bg-[#FDFBF7]/5'}`}
            >
              <div className="p-6 md:p-8 flex justify-between items-start md:items-center gap-4">
                <h3 className={`font-bold text-lg md:text-xl transition-colors duration-300 ${openIndex === i ? 'text-[#FF8A75]' : 'text-[#FDFBF7] group-hover:text-[#2D9C8E]'}`}>
                    {faq.q}
                </h3>
                <span className={`text-2xl font-mono text-[#2D9C8E] transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#FF8A75]' : ''}`}>
                    {openIndex === i ? '−' : '+'}
                </span>
              </div>
              <div className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="p-6 md:p-8 pt-0 text-[#FDFBF7]/80 leading-relaxed border-t border-[#FDFBF7]/5 mt-2 text-sm md:text-base font-light">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 p-6 md:p-8 border border-dashed border-[#FDFBF7]/20 rounded-xl text-center bg-[#1A2A3A] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
            <p className="relative z-10 text-xs md:text-sm font-mono text-[#FDFBF7]/50 max-w-2xl mx-auto leading-relaxed">
                *Note: If you email support asking "Does this really work?", you will be blocked. We do not have time to convince you to make money.
            </p>
        </div>
      </div>
    </section>
  );
};
