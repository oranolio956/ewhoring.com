
import React, { useState } from 'react';

// SEO-Optimized FAQs targeting People Also Ask (PAA) queries
export const faqs = [
  // Core Questions
  {
    q: "What is ewhoring?",
    a: "Ewhoring is the practice of creating fake female online personas to monetize lonely men on platforms like Discord, Telegram, and dating apps. It involves social engineering, persona creation, and various revenue strategies like selling pics, getting gift cards, or running premium content subscriptions. The Oranolio Protocol teaches the complete system."
  },
  {
    q: "How much money can you make ewhoring?",
    a: "Realistic earnings range from $500-$5000 per week depending on effort and skill level. Beginners typically make $200-$500 in their first week. Advanced operators running multiple personas can exceed $10,000/month. The key is consistency and following proven methods rather than improvising."
  },
  {
    q: "Is ewhoring illegal?",
    a: "We sell educational information. The legality depends on YOUR actions and jurisdiction. Selling info products is legal everywhere. What you do with knowledge is your responsibility. We're the bookstore, not the author of your story. Consult local laws before doing anything questionable."
  },
  {
    q: "How do I start ewhoring as a beginner?",
    a: "Start with Day 1: Create anonymous accounts, get a VPN, and wipe your digital footprint. Day 2: Build your persona with AI-generated images and a believable backstory. Day 3: Deploy to Discord servers and Telegram groups. The Oranolio Protocol walks you through each step in detail."
  },
  // Platform-Specific
  {
    q: "How to make money on OnlyFans without showing your face?",
    a: "Multiple strategies work: 1) Focus on body content only, 2) Use AI face-swapping tools, 3) Wear masks or use strategic angles, 4) Buy content packs and rebrand them, 5) Operate as a 'faceless' account selling exclusivity. The Protocol covers all methods with specific implementation guides."
  },
  {
    q: "What are the best platforms for ewhoring in 2025?",
    a: "Top platforms ranked by ROI: 1) Discord (highest volume), 2) Telegram (best for premium groups), 3) Dating apps (Tinder, Bumble for gift card farming), 4) Reddit (for building initial following), 5) Twitter/X (for driving traffic). Each platform requires different approaches covered in our training."
  },
  {
    q: "How does Discord ewhoring work?",
    a: "Join dating/lonely servers, build rapport with simps, then monetize through: selling pics, getting Nitro gifts, Amazon gift cards, or PayPal donations. Key is building trust first. Advanced method: create your own server with premium tiers. We provide full scripts and conversation templates."
  },
  // Technical Questions
  {
    q: "Do I need to show my face for ewhoring?",
    a: "Absolutely not. You should be a GHOST. We teach you to use AI-generated images, stock content, purchased packs, and strategic cropping. If you're showing your real face, you're doing it catastrophically wrong. Anonymity is the foundation of this entire system."
  },
  {
    q: "Can I do ewhoring on my phone?",
    a: "Yes. You need: a phone with WiFi, thumbs, and basic reading comprehension. You can run this operation from a Samsung Smart Fridge if it connects to the internet. Stop looking for excuses. The device doesn't matter - the execution does."
  },
  {
    q: "What payment methods work for ewhoring?",
    a: "Ranked by safety: 1) Cryptocurrency (Bitcoin, Monero), 2) Gift cards (Amazon, Steam, iTunes), 3) CashApp/Venmo with burner accounts, 4) PayPal (higher risk of chargebacks). Never use anything linked to your real identity. The Protocol includes a full payment anonymization guide."
  },
  // Comparison Questions
  {
    q: "Ewhoring vs OnlyFans - which is better?",
    a: "Ewhoring: Lower barrier, faster money, higher risk, requires persona skills. OnlyFans: Slower start, more sustainable, requires content creation, platform takes 20%. For pure profit speed, ewhoring wins. For long-term brand building, OnlyFans. Smart operators do both simultaneously."
  },
  {
    q: "Is the ewhoring market saturated?",
    a: "Saturated with idiots doing it wrong? Yes. Saturated with skilled operators? No. New lonely men turn 18 every single day. The supply of desperate males is literally infinite. The supply of competent digital personas (that aren't obviously 50-year-old men named Boris) is extremely low."
  },
  // Practical Questions
  {
    q: "How fast can I get paid with ewhoring?",
    a: "Following the Protocol exactly: first payment within 20 minutes to 2 hours. If you 'freestyle' because you think you're smarter than people who've done this since 2014: potentially never. The system is optimized. Trust the process or waste your time."
  },
  {
    q: "Where can I find ewhoring packs?",
    a: "We don't sell or link to content packs for legal reasons. The Protocol teaches you: 1) How to generate AI content, 2) Where to ethically source material, 3) How to create original content without showing yourself. Buying random packs online is risky - many are recycled and get you instantly blocked."
  },
  {
    q: "How to avoid getting scammed while ewhoring?",
    a: "Rules: 1) Payment BEFORE content, always, 2) Use escrow for large deals, 3) Never accept checks or 'I'll pay after', 4) Verify gift cards before sending anything, 5) Use burner accounts so chargebacks don't hurt you. The Protocol includes a full section on protecting yourself."
  },
  {
    q: "Can I get in trouble for ewhoring?",
    a: "Depends entirely on YOUR actions. Selling pics of yourself = legal. Fraud = illegal. We teach information and strategy. What you implement and how you implement it is your moral and legal responsibility. We are explicitly NOT advising you to break any laws."
  },
  // Objection Handlers
  {
    q: "Will you mentor me 1-on-1?",
    a: "No. I am not your father. The Protocol is the roadmap. You drive the car. If you need someone to hold your hand and tell you you're special, hire a therapist with the money you make. Everything you need is in the training."
  },
  {
    q: "Does the Oranolio Protocol actually work?",
    a: "12,847+ students since 2014. Average first-week earnings of $340. The method works if YOU work. If you're looking for a 'push button money' scheme, this isn't it. If you're willing to put in 2-4 hours daily for a week, you'll see results. We don't do refunds for laziness."
  },
  {
    q: "How is this different from other ewhoring guides?",
    a: "Most guides are outdated 2018 methods that got patched years ago. The Oranolio Protocol is updated monthly with: new platform exploits, AI integration, current conversation scripts, and live method testing. We've been doing this since 2014. Others are copying our old material."
  },
  {
    q: "What if I'm not good at talking to people?",
    a: "We provide word-for-word scripts. Copy. Paste. Profit. You don't need charisma - you need to follow instructions. The conversations are templated based on 10+ years of psychological research on what makes lonely men open their wallets. Just use the scripts."
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
