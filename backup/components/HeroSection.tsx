
import React, { useState, useEffect } from 'react';
import { Mascot } from './Mascot';
import { usePayment } from '../contexts/PaymentContext';

export const HeroSection: React.FC = () => {
  const { openPayment } = usePayment();
  const [referrerMessage, setReferrerMessage] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');

  useEffect(() => {
    // Check referrer on mount
    const referrer = document.referrer;
    const currentDomain = window.location.hostname;

    if (referrer && !referrer.includes(currentDomain)) {
      const referrerUrl = new URL(referrer);

      // Define referrer messages
      const referrerMap: { [key: string]: string } = {
        'hackforums.net': 'Welcome HackForum User!',
        'raidforums.com': 'Welcome RaidForum User!',
        'crimebb.net': 'Welcome CrimeBB User!',
        'exploit.in': 'Welcome Exploit User!',
        'reddit.com': 'Welcome Reddit User!',
        'twitter.com': 'Welcome Twitter User!',
        'x.com': 'Welcome X User!',
        'discord.com': 'Welcome Discord User!',
        'telegram.org': 'Welcome Telegram User!',
        '4chan.org': 'Welcome 4chan User!',
        '8kun.top': 'Welcome 8kun User!',
        'linkedin.com': 'Welcome LinkedIn User!',
        'facebook.com': 'Welcome Facebook User!',
        'instagram.com': 'Welcome Instagram User!',
        'tiktok.com': 'Welcome TikTok User!',
        'youtube.com': 'Welcome YouTube User!'
      };

      // Check for exact domain match
      const domain = referrerUrl.hostname.replace('www.', '');
      if (referrerMap[domain]) {
        setReferrerMessage(referrerMap[domain]);
        // Auto-hide after 5 seconds
        setTimeout(() => setReferrerMessage(null), 5000);
      }
    }

    // Set content freshness timestamp
    const now = new Date();
    setLastUpdated(now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }));
  }, []);

  return (
    <header id="hero" className="relative z-10 min-h-[100dvh] flex flex-col justify-center items-center py-12 px-4 md:px-8 lg:px-12 overflow-hidden w-full max-w-full mx-auto will-change-transform" style={{ backfaceVisibility: 'hidden' }}>
      
      {/* Vertical Branding - Architectural */}
      <div className="absolute left-4 bottom-32 hidden lg:block -rotate-90 origin-bottom-left z-0">
          <span className="text-[10px] font-mono font-bold tracking-[1em] text-[#1A2A3A]/20 uppercase">
              Oranolio Systems // Est. 2014
          </span>
      </div>

      {/* Hidden Legal Framework - "Safe Harbor" */}
      <div className="absolute top-24 right-4 md:right-12 text-[9px] font-mono text-[#1A2A3A]/20 text-right leading-tight pointer-events-none select-none hidden md:block">
        OPERATING UNDER U.S. SATIRE LAWS<br/>
        SECTION 230 PROTECTION ACTIVE<br/>
        NO LIABILITY ASSUMED
      </div>

      {/* Massive Background Typography - Viewport Width Locked for Perfect Scaling */}
      <div className="flex flex-col relative w-full max-w-7xl mx-auto mb-8 md:mb-12">
        <div className="relative w-full animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0 z-10 will-change-transform transform-gpu">
          {/* Main Headline - SEO Optimized H1 */}
          <h1 className="text-[clamp(2.25rem,12vw,10rem)] leading-[0.9] font-bold text-[#1A2A3A] tracking-tighter mix-blend-darken break-words w-full transition-colors duration-500 cursor-default select-none relative z-10 transform-gpu">
            <span className="sr-only">Sugar Daddy Protocol - Target Wealthy Men - Complete Ewhoring Guide - </span>YOU'RE BROKE?
          </h1>

          {/* Referrer Welcome Message */}
          {referrerMessage && (
            <div className="mt-4 md:mt-6 animate-[fadeInUp_0.8s_cubic-bezier(0.19,1,0.22,1)_forwards] opacity-0">
              <div className="inline-flex items-center gap-3 bg-[#2D9C8E] text-white px-6 py-3 rounded-full shadow-lg shadow-[#2D9C8E]/30 transform-gpu">
                <span className="text-2xl animate-bounce">👋</span>
                <span className="font-bold text-lg uppercase tracking-widest">{referrerMessage}</span>
                <span className="text-sm opacity-80">Found the good stuff!</span>
              </div>
            </div>
          )}

          {/* Mascot - Improved Mobile Positioning to prevent overlap/clutter on iPhone */}
          <div className="absolute top-[-10%] right-[-20%] w-[40vw] h-[40vw] min-w-[clamp(80px,20vw,120px)] min-h-[clamp(80px,20vw,120px)] md:top-[-15%] md:right-[2%] md:w-[18vw] md:h-[18vw] lg:w-[20vw] lg:h-[20vw] opacity-40 md:opacity-80 z-0 pointer-events-none md:pointer-events-auto mix-blend-multiply transform-gpu" style={{ transform: 'translate3d(0,0,0)' }}>
             <Mascot />
          </div>
        </div>
        
        {/* Sub-headline */}
        <div className="flex items-center gap-2 md:gap-12 ml-1 md:ml-[5vw] mt-2 md:mt-[1vw] animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.2s_forwards] opacity-0 relative z-20 flex-wrap transform-gpu">
           <div className="h-[clamp(1px,0.5vw,2px)] w-[15vw] md:w-[8vw] bg-[#FF8A75] shrink-0"></div>
           <h2 className="text-[clamp(1rem,4vw,2.5rem)] font-light italic text-[#1A2A3A] font-serif flex items-center gap-3 flex-wrap leading-tight">
             congratulations,
             <div className="bg-[#2D9C8E] text-white text-[10px] md:text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 uppercase tracking-widest shadow-lg shadow-[#2D9C8E]/30 whitespace-nowrap">
                <span>✓</span> Oranolio Verified
             </div>
           </h2>
        </div>

        {/* Second Headline */}
        <div className="text-[clamp(2.25rem,11vw,9rem)] leading-[0.9] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2D9C8E] to-[#1A2A3A] tracking-tighter self-end text-right mt-4 md:mt-[1vw] relative z-20 animate-[fadeInUp_1.5s_cubic-bezier(0.19,1,0.22,1)_0.4s_forwards] opacity-0 drop-shadow-sm max-w-full hover:hue-rotate-15 transition-all duration-500 select-none transform-gpu will-change-transform">
          NOW YOU'RE WEALTHY.
        </div>
      </div>

        {/* Bottom Editorial Content */}
      <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-8 mt-4 md:mt-12 w-full max-w-7xl mx-auto animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0 relative z-20 transform-gpu">
        <div className="lg:col-span-6">
          <p className="text-[10px] md:text-xs font-mono uppercase text-[#FF8A75] mb-3 font-bold tracking-widest bg-[#1A2A3A] w-fit px-2 py-1 text-white">
            [ ORANOLIO ARBITRAGE // EST. 2014 ]
          </p>
              <h3 className="text-xl md:text-3xl leading-none font-bold text-[#1A2A3A] uppercase">
              FROM BROKE LOSER TO <br className="hidden md:block" /> SUGAR BABY MILLIONAIRE.
              <br className="hidden md:block"/>
              <span className="text-[#2D9C8E] italic normal-case font-serif text-base md:text-xl block mt-4 max-w-xl leading-relaxed">
                I teach you how to target wealthy sugar daddies and high-net-worth individuals.
                Forget broke college kids. We're targeting LinkedIn executives, crypto whales, and investment bankers who pay $5,000+ monthly.
              </span>
            </h3>
        </div>
        

        <div className="flex lg:col-span-4 justify-start lg:justify-end items-end gap-4 mt-4 lg:mt-0 w-full">
           <div className="text-left lg:text-right w-full lg:w-auto">
                <button
                  onClick={openPayment}
                  className="w-full lg:w-auto bg-[#1A2A3A] text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-colors shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
                  aria-label="Get The Sugar Daddy Protocol"
                >
                    GET THE PROTOCOL
                </button>
               

           </div>
        </div>

        {/* Content Freshness Indicator */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end items-end">
          <div className="text-[8px] md:text-[10px] font-mono text-[#1A2A3A]/40 uppercase tracking-wider text-center lg:text-right">
            <div className="flex items-center gap-1 justify-center lg:justify-end">
              <span className="w-1 h-1 bg-[#2D9C8E] rounded-full"></span>
              <span>Updated {lastUpdated}</span>
              <span className="w-1 h-1 bg-[#2D9C8E] rounded-full"></span>
            </div>
          </div>
        </div>

      </article>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </header>
  );
};
