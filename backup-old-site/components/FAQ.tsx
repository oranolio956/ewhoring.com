
import React, { useState } from 'react';

// Scam Victim Recovery FAQs - Professional Support Questions
export const faqs = [
  // Core Questions
  {
    q: "I sent money to someone on Discord who said they were a girl. Can I get it back?",
    a: "Unfortunately, once money is sent via cryptocurrency, gift cards, or unverified payment methods, recovery is extremely difficult. However, our certified recovery specialists can help you: 1) Process the emotional trauma, 2) Understand the red flags you missed, 3) Create a recovery plan for future interactions, and 4) Connect you with support groups. We charge a consultation fee of $299 to begin the recovery process."
  },
  {
    q: "How much money have people lost to ewhoring scams?",
    a: "Based on our database of 12,847+ victims, the average loss is $2,400 per person. Some victims have lost $10,000-$50,000 over extended periods. The most common scenario: sending money for 3-6 months before realizing the person was fake. Our recovery services help you understand why this happened and how to prevent it."
  },
  {
    q: "Is it illegal to catfish someone for money?",
    a: "Yes, in many jurisdictions, creating a fake identity to obtain money through deception is considered fraud. However, prosecuting these cases is difficult because: 1) Scammers use anonymous payment methods, 2) They operate across international borders, 3) Victims often don't report due to embarrassment. Our recovery specialists can help you understand your legal options (consultation fee applies)."
  },
  {
    q: "I've been talking to someone for 6 months and sent $5,000. How do I know if I'm being scammed?",
    a: "Red flags: 1) They refuse video calls, 2) They always have emergencies requiring money, 3) They use AI-generated or stolen photos, 4) They avoid meeting in person, 5) They ask for gift cards or crypto. If you're experiencing 3+ of these, you're likely being scammed. Our $299 consultation includes a professional assessment of your situation."
  },
  // Platform-Specific
  {
    q: "I sent money to someone on OnlyFans who turned out to be fake. Can I get a refund?",
    a: "OnlyFans has strict refund policies. If you purchased content from a fake account, you may be able to dispute the charge with your bank, but success rates are low. Our recovery specialists can help you: 1) Document the fraud, 2) File proper complaints, 3) Understand why you fell for it. Consultation fee: $299."
  },
  {
    q: "What platforms are most common for ewhoring scams?",
    a: "Based on our victim database: 1) Discord (45% of cases) - dating servers, lonely servers, 2) Telegram (30%) - premium groups, direct messages, 3) Dating apps (15%) - Tinder, Bumble, Hinge, 4) Reddit (5%) - relationship subs, 5) Other (5%). Our recovery program teaches you to identify scams on each platform. $299 consultation includes platform-specific training."
  },
  {
    q: "How do Discord ewhoring scams work?",
    a: "Scammers join dating/lonely servers, create fake female personas, build rapport over weeks/months, then ask for: Steam gift cards, Discord Nitro, Amazon cards, crypto, or PayPal. They use AI-generated photos, stolen images, or deepfakes. Our recovery specialists can help you understand the psychological manipulation techniques used. Consultation: $299."
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
  },
  // Discord-Specific FAQs
  {
    q: "What are the best ewhore Discord servers?",
    a: "Look for: dating/relationship servers, lonely/depression support servers, gaming communities with high male ratios, anime servers, e-girl appreciation servers. The Protocol includes a monthly-updated list of 50+ vetted servers with active, paying members."
  },
  {
    q: "How do I find Discord servers for ewhoring?",
    a: "Use Disboard.org, Discord.me, or Discadia. Search terms: 'dating', 'lonely', '18+', 'egirl', 'social'. Join servers with 1000+ members and active chat. Avoid heavily moderated servers. We provide a curated list in the Protocol."
  },
  {
    q: "How do I avoid getting banned on Discord?",
    a: "Use aged accounts (buy or age yourself), don't spam DMs, build rapport in public channels first, use different IPs for different personas, don't sell too aggressively. The Protocol includes ban evasion and account farming guides."
  },
  {
    q: "What's the best way to DM guys on Discord?",
    a: "Never cold DM. Comment on their messages in public first, react to their posts, then DM with context ('hey, saw your message about X'). Our conversation templates have 70%+ response rates."
  },
  // Telegram-Specific FAQs
  {
    q: "How do I start ewhoring on Telegram?",
    a: "Create a persona account, join relevant groups (dating, lonely, adult), build presence, then either: 1) DM members directly, 2) Create a premium channel, or 3) Use bots for automation. Telegram is best for high-ticket sales ($50-200)."
  },
  {
    q: "What are the best Telegram groups for ewhoring?",
    a: "Search for: dating groups, hookup groups, premium content groups, regional lonely groups. Telegram's search is better than Discord's. The Protocol includes Telegram-specific strategies and group recommendations."
  },
  {
    q: "How do I accept payments on Telegram?",
    a: "Telegram has native crypto support (TON, Bitcoin). Also accept: gift cards, CashApp, PayPal F&F. Telegram's anonymity makes it ideal for crypto payments. Never use payment methods linked to your identity."
  },
  // Method-Specific FAQs
  {
    q: "Where can I get ewhoring packs?",
    a: "We don't sell or distribute content packs. The Protocol teaches: 1) AI image generation, 2) Ethical content sourcing, 3) Creating original faceless content. Random packs from forums are usually burned and get you caught instantly."
  },
  {
    q: "Are Hackforums ewhoring methods still working?",
    a: "Most free methods from Hackforums/Nulled are from 2016-2018 and are completely burned. Images are flagged, scripts are recognized, platforms patched the exploits. The Oranolio Protocol is updated monthly with current methods."
  },
  {
    q: "What's the difference between ewhoring and catfishing?",
    a: "Same concept, different terms. Ewhoring is the monetization-focused term from hacking communities. Catfishing is the mainstream term. Both involve fake personas. We teach the monetization strategies that turn catfishing into income."
  },
  {
    q: "How do I create a fake girl persona?",
    a: "Choose: name, age (18-25), location, occupation, personality. Create consistent backstory. Source images (AI-generated or purchased packs). Set up social profiles. The Protocol includes persona templates and psychology guides."
  },
  // Money/Payment FAQs
  {
    q: "How do I not get scammed while ewhoring?",
    a: "Golden rule: PAYMENT BEFORE CONTENT. Never accept 'I'll pay after.' Verify gift cards before sending anything. Use crypto for large amounts. Never share personal info. The Protocol covers all safety protocols."
  },
  {
    q: "Can you make money from simps without selling content?",
    a: "Yes. GFE (Girlfriend Experience) is just texting/attention. Findom is literally being paid to ignore them. Sugar daddy sites pay for conversation. Wish lists get you gifts. Not all monetization requires explicit content."
  },
  {
    q: "How much do simps actually pay?",
    a: "Entry level: $5-20 for pics/attention. Mid tier: $50-200/month for GFE. High tier: $500-2000/month for findom/sugar arrangements. Whales exist who spend $10k+. It's about finding and nurturing the right targets."
  },
  // Technical FAQs
  {
    q: "Do I need a VPN for ewhoring?",
    a: "Yes. Always. Use a paid VPN (NordVPN, ExpressVPN). Change servers for different personas. Never access persona accounts from your real IP. The Protocol covers full OpSec setup."
  },
  {
    q: "How do I use AI for ewhoring?",
    a: "AI image generators for unique content, ChatGPT for conversation scaling, voice cloning for calls, deepfakes for video (use ethically). AI is the 2025 meta. The Protocol includes full AI integration guides."
  },
  {
    q: "Can I ewhore without a computer?",
    a: "Yes. Phone-only is viable. You need: smartphone, VPN app, messaging apps, payment apps. Desktop helps for scaling but isn't required. Many successful operators are phone-only."
  },
  // Niche FAQs
  {
    q: "What is findom and how does it work?",
    a: "Financial domination: submissive men pay to be financially controlled/humiliated. You demand payment, they comply for the power exchange. Niche but extremely profitable. Requires specific persona type. Covered in advanced Protocol modules."
  },
  {
    q: "How do I sell feet pics online?",
    a: "Feet content doesn't require face/body. Platforms: FeetFinder, OnlyFans, direct selling via Discord/Telegram. Combine with ewhoring traffic. The Protocol covers feet content as a faceless monetization strategy."
  },
  {
    q: "Can guys do ewhoring?",
    a: "The personas are female, but operators are any gender. Most successful ewhoring operators are male. You're not being a girl - you're operating a digital business. Gender of the operator is irrelevant."
  },
  // Scaling FAQs
  {
    q: "How do I run multiple personas?",
    a: "Separate devices or browser profiles for each persona. Different VPN servers. Different payment accounts. Keep detailed notes on each persona's 'life.' The Protocol includes multi-persona management systems."
  },
  {
    q: "Can ewhoring be automated?",
    a: "Partially. Bots for initial outreach, templates for conversations, scheduled posts. But high-ticket sales need personal touch. The Protocol teaches what to automate vs. handle personally for max ROI."
  },
  {
    q: "How do I scale from $500 to $5000/week?",
    a: "Multiple personas, multiple platforms, automation, and moving upmarket. One persona on one platform caps around $1-2k/month. Scaling requires systems. The Protocol is designed for scaling."
  },
  // Additional PAA-Targeted Questions
  {
    q: "Is ewhoring safe?",
    a: "If done correctly with proper OpSec: VPN, burner accounts, anonymous payments, no personal info shared - yes. The danger comes from being sloppy with identity. Follow the Protocol's security guidelines and you're protected."
  },
  {
    q: "What is the best ewhoring method for beginners?",
    a: "Discord dating server method. Lowest barrier to entry, fastest feedback loop, most forgiving of mistakes. Join 5-10 dating servers, build rapport, monetize through gift cards and Nitro. Graduate to Telegram and dating apps after."
  },
  {
    q: "How long does it take to make money ewhoring?",
    a: "Following the Protocol: first payment within 24-48 hours. Most students see $100+ in first week. Reaching $1000/week typically takes 2-4 weeks of consistent effort. Timeline depends entirely on how closely you follow the system."
  },
  {
    q: "Can I do ewhoring part-time?",
    a: "Yes. 2-4 hours daily is enough to generate $500-2000/month. Many operators do this alongside jobs or school. The key is consistency - 2 hours every day beats 14 hours on weekends. <a href='/ewhoring-scripts-discord.html'>Check our Discord conversation scripts</a> for proven templates."
  },
  {
    q: "What's the difference between ewhoring and being a sugar baby?",
    a: "Sugar baby = you (real person) date rich people. Ewhoring = fake persona extracts money from regular people. Ewhoring is more scalable (multiple personas), more anonymous, and doesn't require meeting anyone in person."
  },
  {
    q: "Do I need to be attractive to ewhore?",
    a: "Your real appearance is irrelevant. You're operating a digital persona. Could be a 300lb dude named Gary running 'Jessica, 22, college student.' The persona's appearance matters, yours doesn't."
  },
  {
    q: "How do I find simps to pay me?",
    a: "Simps are everywhere men are lonely: Discord dating/lonely servers, Telegram social groups, Reddit relationship subs, dating apps, gaming communities. The Protocol includes a map of where to find them by platform."
  },
  {
    q: "What's the best time to ewhore?",
    a: "Evening hours (7PM-12AM) in your target's timezone. Lonely people are loneliest at night. Weekends have higher engagement. Avoid Monday mornings - everyone's too busy pretending to work."
  },
  {
    q: "Can I get my money back if ewhoring doesn't work?",
    a: "No refunds for laziness. The Protocol works for 12,000+ students. If you follow instructions and fail, something is wrong with your execution, not the system. We don't refund effort problems."
  },
  {
    q: "Is ewhoring ethical?",
    a: "That's for you to decide. We sell information. Lonely men paying for attention is as old as civilization. We don't force anyone to pay. Adults making transactions. Your moral compass is your own."
  },
  {
    q: "What countries is ewhoring popular in?",
    a: "Targets: USA, UK, Canada, Australia (English-speaking + disposable income). Operators: Global - India, Philippines, Eastern Europe, South America. Location doesn't matter if you have internet."
  },
  {
    q: "How do I handle reverse image searches?",
    a: "AI-generated images can't be reverse searched. For non-AI content: edit images (flip, filter, crop), use lesser-known sources, or create original faceless content. The Protocol covers image OpSec."
  },
  {
    q: "What if someone threatens to expose me?",
    a: "If your OpSec is correct, there's nothing to expose. They don't know who you are. Block and move on. Never pay blackmail - it never ends. The Protocol covers handling difficult situations."
  },
  {
    q: "Can I ewhore on Reddit?",
    a: "Reddit is better for funnel building than direct monetization. Post in relevant subs, build karma, then direct traffic to Discord/Telegram/OnlyFans. Don't sell directly on Reddit - accounts get banned."
  },
  {
    q: "What's the Oranolio Protocol exactly?",
    a: "A complete 7-day system covering: persona creation, platform deployment, conversation scripts, payment processing, scaling strategies, and ongoing support. Based on 10+ years of testing. Over 12,000 students since 2014."
  },
  {
    q: "How do I know if ewhoring is for me?",
    a: "Can you: follow instructions, type coherently, dedicate 2-4 hours daily, and not feel guilty about strangers paying for attention? Then yes. If any of those are no, this isn't for you."
  },
  // Voice Search Optimization - Question-based content
  {
    q: "Can women do ewhoring?",
    a: "Yes, but it's much harder. Women face intense competition from actual attractive women. Most successful female ewhorers are trans or use extreme filters. Men pretending to be women have a massive advantage in this space."
  },
  {
    q: "What happens if I get caught ewhoring?",
    a: "Worst case: account bans, potential legal issues in some jurisdictions. Best case: learn from it and get better. Use VPNs, burner accounts, and never reveal personal information. The Protocol includes comprehensive OpSec."
  },
  {
    q: "How do I deal with creepy guys in ewhoring?",
    a: "Block immediately. Have clear boundaries. Never meet in person unless you're prepared for anything. Use platform reporting features. Focus on quality over quantity - better to have 10 good payers than 100 creeps."
  },
  {
    q: "Is ewhoring addictive?",
    a: "Yes. The combination of easy money, validation, and adrenaline is highly addictive. Many operators get trapped in the lifestyle. Have an exit strategy and savings goals. Don't let this become your identity."
  },
  {
    q: "How do I price my ewhoring services?",
    a: "Start low to build reviews ($20-50), then scale up based on demand. Premium operators charge $200-500 per session. Sugar arrangements range from $1,000-10,000/month. Price based on perceived value, not time."
  },
  {
    q: "What are the best times to be online for ewhoring?",
    a: "Weekdays 8-11 PM local time, weekends 10 AM-2 AM. Avoid daytime hours. International time zones allow 24/7 coverage. Peak times: after work, during commutes, late nights when loneliness peaks."
  },
  {
    q: "How do I create convincing fake photos for ewhoring?",
    a: "AI tools like Midjourney, Stable Diffusion, or paid services. Never use Google-reverse searchable images. Create consistent backstories. Use photo editing for lighting consistency. Professional operators invest in custom content."
  },
  {
    q: "What if I'm not good looking?",
    a: "Looks don't matter in ewhoring. It's about persona, conversation skills, and reliability. Ugly men pretending to be women make millions because they understand psychology and consistency. Good looking people fail because they think looks alone are enough."
  },
  {
    q: "How do I transition from ewhoring to real sugar relationships?",
    a: "Build trust over 3-6 months, arrange local meetups, prove reliability. Convert online arrangements to in-person. Some operators successfully transition to full-time sugar baby lifestyles with single high-value benefactors."
  },
  {
    q: "What are red flags to avoid in ewhoring?",
    a: "Users asking for real photos immediately, wanting to move off-platform too quickly, being overly aggressive, asking about your 'real' identity, offering too much money upfront. Trust your instincts and block freely."
  },
  // More Absurd Victim Questions
  {
    q: "I sent $5,000 to someone who said they were a Nigerian princess. Can you help?",
    a: "Yes! Our $299 consultation includes a comprehensive analysis of why you fell for a 20-year-old scam. We'll help you understand that Nigerian princes don't use Discord. Money recovery: still not possible, but you'll feel smarter!"
  },
  {
    q: "The person I sent money to said they were stuck at the airport and needed $500. Was I scammed?",
    a: "Classic airport scam! Our recovery specialists will explain that: 1) Real people don't get 'stuck' at airports, 2) They have credit cards, 3) This scam is from 2005. For just $299, we'll teach you about modern scams too!"
  },
  {
    q: "I sent money because they said they loved me after 2 days of chatting. Is that normal?",
    a: "No, that's not normal. But don't worry - you're not alone! 47% of our clients fell for the 'love bombing' technique. Our consultation will help you understand why 2 days isn't enough time to fall in love. $299 well spent!"
  },
  {
    q: "Can you actually get my money back?",
    a: "No. We cannot recover your money. We can: 1) Help you process the emotional trauma, 2) Explain what went wrong, 3) Give you a PDF guide on red flags, 4) Make you feel better about losing it. That's what the $299 consultation covers. Money recovery is not included."
  },
  {
    q: "Why does your service cost $299 if you can't recover money?",
    a: "Great question! Our certified specialists (certified by us) provide valuable services: emotional support, trauma processing, red flag education, and 'what went wrong' analysis. Think of it as therapy, but for people who got scammed. Therapy costs money, and so does this!"
  },
  {
    q: "I've been scammed 3 times. Will your service prevent future scams?",
    a: "Our $299 consultation includes a comprehensive red flag guide (PDF format). If you read it and apply it, you might avoid future scams. However, we cannot guarantee you won't fall for another one. Some people are just... special. We offer a $999 VIP package with monthly check-ins if you're a repeat victim."
  },
  {
    q: "Do you offer refunds if I'm not satisfied?",
    a: "No. All consultation fees are non-refundable. This is clearly stated in our terms. If you're not satisfied with the emotional support we provided, we're sorry, but that's the risk you take when paying for services that can't actually recover your money."
  },
  {
    q: "Are your recovery specialists actually certified?",
    a: "Yes! Our specialists are certified by our own certification program. We created the certification, we administer the tests, and we issue the certificates. It's a completely legitimate process (by our standards). Trust us, we're professionals!"
  },
  {
    q: "I sent money via gift cards. Can you trace those?",
    a: "No. Gift cards are untraceable once redeemed. That's why scammers love them. Our consultation will help you understand why gift cards are a red flag. For $299, you'll learn that legitimate people don't ask for Steam gift cards as payment."
  },
  {
    q: "The person I sent money to blocked me. What should I do?",
    a: "First, accept that your money is gone. Second, book our $299 consultation to process this trauma. Third, understand that blocking you after taking your money is a clear sign you were scammed. Our specialists will help you work through the 5 stages of grief (denial, anger, bargaining, depression, acceptance)."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7]">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 font-['Space_Grotesk'] leading-none">
              QUESTIONS FROM <br/>
              <span className="text-[#FF8A75]">SCAM VICTIMS</span>
            </h2>
            <p className="text-[#FDFBF7]/50 uppercase tracking-widest text-[10px] md:text-xs font-bold mt-4">
                (We're here to help - professional recovery services)
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
                *Note: Recovery consultation fee is $299 (non-refundable). This covers professional assessment, emotional support, and recovery planning. We cannot guarantee money recovery, but we can help you understand what happened and prevent future scams.
            </p>
        </div>
      </div>
    </section>
  );
};
