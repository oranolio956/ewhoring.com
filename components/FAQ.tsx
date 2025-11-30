
import React, { useState } from 'react';

export const faqs = [
  {
    q: "How fast does this actually work?",
    a: "The '5-Message Protocol'. Men are biologically programmed to protect helpless women. We give you a script that bypasses their logic center. You will have a CFO named 'Gary' offering to pay your rent within 15 minutes of creating the account."
  },
  {
    q: "What if they ask for a photo?",
    a: "You send a picture of your elbow and tell them it's your 'side boob'. They will send you $50. Men are visually impaired when they are horny. It's science."
  },
  {
    q: "Do I target broke college kids?",
    a: "Gross. No. We target 'Whales'. Divorced Dads, lonely Sugar Daddies, and guys who own jet ski dealerships. We don't want $20 for skins. We want their alimony payments."
  },
  {
    q: "What if they ask to Voice Call?",
    a: "You use the 'Abusive Ex' Defense. You tell them: 'My ex monitors my calls, I'm scared.' Boom. Now they feel like a hero for 'protecting' you, and they never ask to call again. It's not lying; it's storytelling."
  },
  {
    q: "Does pretending to be a girl make me gay?",
    a: "Is Tyler Perry gay? He put on a wig and became a billionaire. You are sitting in your underwear broke. Stop asking questions and put on the digital skirt. Your masculinity can handle a PayPal transfer."
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
              <span className="text-[#FF8A75]">INSECURE MEN</span>
            </h2>
            <p className="text-[#FDFBF7]/50 uppercase tracking-widest text-[10px] md:text-xs font-bold mt-4">
                (Who are about to be rich)
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
                *Disclaimer: We are not responsible if a 65-year-old oil tycoon named 'BigTex' falls in love with you and buys you a condominium in Miami. That is a tax liability you must handle yourself.
            </p>
        </div>
      </div>
    </section>
  );
};
