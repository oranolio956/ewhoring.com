import React, { useState } from 'react';

// AGGRESSIVE KEYWORD TARGETING - MATCHING ORIGINAL SITE DESIGN
// Targets: Discord servers, Telegram groups, Reddit, Tinder, Dating Apps, all ewhoring variations

const platforms = [
  {
    id: 1,
    name: "DISCORD",
    tag: "HIGHEST VOLUME",
    color: "#5865F2",
    description: "Dating servers, lonely servers, e-girl communities. Nitro gifts, PayPal, gift cards.",
    details: "Join dating/lonely servers with 1k+ members. Build rapport in public channels first. Move to DMs. Use proven scripts. Collect via Nitro, Amazon cards, CashApp.",
    stats: { roi: "★★★★★", speed: "Fast", risk: "Medium" }
  },
  {
    id: 2,
    name: "TELEGRAM",
    tag: "HIGH TICKET",
    color: "#0088cc",
    description: "Premium groups, crypto payments, minimal moderation. Best for $50-200 sales.",
    details: "Create premium channels with tiered access. Native crypto support for anonymity. Run bots for automated responses. Higher ticket sales, less volume.",
    stats: { roi: "★★★★☆", speed: "Medium", risk: "Low" }
  },
  {
    id: 3,
    name: "REDDIT",
    tag: "TRAFFIC SOURCE",
    color: "#FF4500",
    description: "r/lonely, r/dating, r/ForeverAlone. Build following, drive to monetization platforms.",
    details: "Post in lonely/dating subreddits. Build karma, don't sell directly. Use as funnel to Discord/Telegram. Great for establishing persona credibility.",
    stats: { roi: "★★★☆☆", speed: "Slow", risk: "Low" }
  },
  {
    id: 4,
    name: "TINDER",
    tag: "GIFT CARD FARMING",
    color: "#FE3C72",
    description: "Match → Build rapport → Extract gifts. Move to Telegram/Snap for monetization.",
    details: "Swipe right on everyone. Match, flirt, build connection over 2-3 days. 'My phone is broken, can you send me a gift card for a new one?' Classic.",
    stats: { roi: "★★★★☆", speed: "Medium", risk: "High" }
  },
  {
    id: 5,
    name: "BUMBLE",
    tag: "PREMIUM TARGETS",
    color: "#FFC629",
    description: "Higher income users than Tinder. Same playbook, bigger payouts.",
    details: "Women message first = they're invested. Use this psychology. Sugar daddy angle works well. Move to private platform ASAP before ban.",
    stats: { roi: "★★★★☆", speed: "Medium", risk: "High" }
  },
  {
    id: 6,
    name: "SNAPCHAT",
    tag: "PREMIUM CONTENT",
    color: "#FFFC00",
    description: "Premium Snap subscriptions. Recurring revenue from 'exclusive' access.",
    details: "Sell 'premium Snapchat' access for $20-50/month. Auto-delete creates urgency. Great combined with Discord/Tinder traffic.",
    stats: { roi: "★★★★☆", speed: "Fast", risk: "Medium" }
  }
];

const methods = [
  { name: "THE CLASSIC", desc: "Persona + dating platforms + pic selling", level: "Beginner" },
  { name: "GFE METHOD", desc: "Girlfriend Experience - recurring monthly simps", level: "Intermediate" },
  { name: "FINDOM", desc: "Financial domination - pay to be ignored", level: "Advanced" },
  { name: "AI-ENHANCED", desc: "AI images + ChatGPT scaling + voice cloning", level: "2025 Meta" },
  { name: "DATING ARBITRAGE", desc: "Tinder/Bumble → gift card extraction", level: "High Volume" },
  { name: "PREMIUM SNAP", desc: "Monthly subscriptions + PPV content", level: "Passive" }
];

export const KeywordTargets: React.FC = () => {
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);

  return (
    <>
      {/* ============================================== */}
      {/* PLATFORM BREAKDOWN - DISCORD/TELEGRAM/REDDIT/TINDER */}
      {/* ============================================== */}
      <section id="discord-servers" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/5">
        
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-[#FDFBF7]/[0.02] -rotate-12 pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap">
          PLATFORMS
        </div>

        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 w-full">
          
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF8A75] animate-pulse"></div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF8A75]">Target Platforms</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-8 text-[#FDFBF7] font-['Space_Grotesk']">
              WHERE THE <br/>
              <span className="text-[#2D9C8E]">SIMPS LIVE</span>
            </h2>
            
            <p className="text-base md:text-lg font-light text-[#FDFBF7]/70 leading-relaxed mb-8">
              Every platform has lonely men with wallets. Here's where to find them and how to extract value. <span className="text-[#FF8A75]">Click each platform for the full playbook.</span>
            </p>

            <div className="p-4 md:p-6 border-l-2 border-[#2D9C8E] bg-[#FDFBF7]/5">
              <p className="text-xs md:text-sm text-[#FDFBF7]/60 font-mono">
                // Multi-platform strategy = 3x revenue<br/>
                // Never rely on one source<br/>
                // The Protocol covers ALL of these
              </p>
            </div>
          </div>

          {/* Platform List */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {platforms.map((platform) => (
              <div 
                key={platform.id}
                onClick={() => setExpandedPlatform(expandedPlatform === platform.id ? null : platform.id)}
                className="group border-b border-[#FDFBF7]/10 py-6 md:py-8 hover:bg-[#FDFBF7]/5 transition-all cursor-pointer relative overflow-hidden"
              >
                {/* Hover highlight bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 transition-transform duration-300 origin-top" 
                     style={{ backgroundColor: platform.color, transform: expandedPlatform === platform.id ? 'scaleY(1)' : 'scaleY(0)' }}></div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 pl-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <span className="font-mono text-xs tracking-widest opacity-60" style={{ color: platform.color }}>
                      [ {String(platform.id).padStart(2, '0')} ]
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded" 
                          style={{ backgroundColor: `${platform.color}20`, color: platform.color }}>
                      {platform.tag}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300 font-['Space_Grotesk'] uppercase"
                        style={{ color: expandedPlatform === platform.id ? platform.color : '#FDFBF7' }}>
                      {platform.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#FDFBF7]/60 max-w-xl font-mono">
                      {platform.description}
                    </p>
                    
                    {/* Expanded Details */}
                    <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${expandedPlatform === platform.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                        <div className="border-l-2 pl-4 py-3 bg-[#FDFBF7]/5" style={{ borderColor: platform.color }}>
                          <p className="text-sm text-[#FDFBF7]/80 mb-4 leading-relaxed">
                            {platform.details}
                          </p>
                          <div className="flex flex-wrap gap-4 text-xs font-mono">
                            <span className="text-[#2D9C8E]">ROI: {platform.stats.roi}</span>
                            <span className="text-[#FDFBF7]/50">|</span>
                            <span>Speed: {platform.stats.speed}</span>
                            <span className="text-[#FDFBF7]/50">|</span>
                            <span className={platform.stats.risk === 'High' ? 'text-[#FF8A75]' : ''}>Risk: {platform.stats.risk}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator */}
                  <div className="text-[#FF8A75] text-xs font-bold uppercase tracking-widest font-mono mt-2 md:mt-0">
                    {expandedPlatform === platform.id ? '[-] COLLAPSE' : '[+] EXPAND'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* EWHORING METHODS SECTION */}
      {/* ============================================== */}
      <section id="methods" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] text-[#1A2A3A] relative overflow-hidden border-t border-[#1A2A3A]/5">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 text-[30rem] leading-none font-bold text-[#1A2A3A]/[0.03] translate-x-1/4 -translate-y-1/4 pointer-events-none font-['Space_Grotesk']">
          M
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              The Arsenal
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 font-['Space_Grotesk']">
              EWHORING METHODS <br/>
              <span className="text-[#2D9C8E]">2025 EDITION</span>
            </h2>
            <p className="text-lg text-[#1A2A3A]/60 max-w-2xl mx-auto">
              Forget the free Hackforums methods from 2018. Those are burned. 
              <span className="text-[#FF8A75] font-bold"> This is the current meta.</span>
            </p>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method, i) => (
              <div 
                key={i}
                className="group p-6 md:p-8 border border-[#1A2A3A]/10 hover:border-[#2D9C8E] transition-all duration-300 hover:bg-[#1A2A3A] hover:text-[#FDFBF7] relative overflow-hidden"
              >
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-6xl font-bold text-[#1A2A3A]/[0.05] group-hover:text-[#FDFBF7]/[0.05] font-['Space_Grotesk']">
                  {String(i + 1).padStart(2, '0')}
                </span>
                
                <div className="relative z-10">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF8A75] mb-2 block">
                    {method.level}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 font-['Space_Grotesk'] uppercase">
                    {method.name}
                  </h3>
                  <p className="text-sm text-[#1A2A3A]/60 group-hover:text-[#FDFBF7]/70 font-mono">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hackforums Warning */}
          <div className="mt-12 p-6 md:p-8 border-2 border-dashed border-[#FF8A75] bg-[#FF8A75]/5 relative">
            <div className="absolute -top-3 left-6 bg-[#FDFBF7] px-3">
              <span className="text-xs font-bold text-[#FF8A75] uppercase tracking-widest">⚠ WARNING</span>
            </div>
            <h4 className="text-xl font-bold mb-3 font-['Space_Grotesk']">
              Why Free Methods Don't Work Anymore
            </h4>
            <p className="text-[#1A2A3A]/70 mb-4">
              Those "free ewhoring packs" and leaked methods from Hackforums/Nulled? They're burned. 
              Every image is reverse-searched. Every script is recognized. Platforms patched the exploits.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-[#1A2A3A]/60">
              <span>✗ Images flagged</span>
              <span>✗ Scripts detected</span>
              <span>✗ Methods patched</span>
              <span>✗ Accounts instabanned</span>
              <span>✗ Zero updates</span>
              <span>✗ No support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* CATFISH MONEY GUIDE */}
      {/* ============================================== */}
      <section id="fake-girl-guide" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/5">
        
        <div className="absolute bottom-0 left-0 text-[20rem] leading-none font-bold text-[#FDFBF7]/[0.02] -translate-x-1/4 translate-y-1/4 pointer-events-none font-['Space_Grotesk']">
          $$$
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: The Steps */}
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                Step-by-Step
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.95] font-['Space_Grotesk']">
                HOW TO MAKE MONEY <br/>
                <span className="text-[#2D9C8E]">AS A FAKE GIRL</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "CREATE IDENTITY", desc: "Name, age (18-25), location, occupation. Consistent backstory. The Protocol includes templates." },
                  { step: "02", title: "SOURCE CONTENT", desc: "AI-generated images or purchased packs. Never reverse-searchable. We teach generation." },
                  { step: "03", title: "DEPLOY TO PLATFORMS", desc: "Discord → Telegram → Dating Apps. Cast wide net. Quality over spam." },
                  { step: "04", title: "EXTRACT PAYMENT", desc: "Psychological triggers. Payment BEFORE content. Gift cards, crypto, CashApp." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="flex-shrink-0 w-12 h-12 border border-[#2D9C8E] flex items-center justify-center font-mono text-[#2D9C8E] group-hover:bg-[#2D9C8E] group-hover:text-[#1A2A3A] transition-all">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-lg mb-1 font-['Space_Grotesk'] uppercase">{item.title}</h4>
                      <p className="text-[#FDFBF7]/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Income Potential */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFBF7] text-[#1A2A3A] p-8 md:p-10 transform -rotate-2 relative group hover:rotate-0 transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2D9C8E] flex items-center justify-center text-white text-xl font-bold">
                  💰
                </div>
                
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-6 uppercase border-b border-[#1A2A3A]/10 pb-4">
                  Income Potential
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono">First Week:</span>
                    <span className="font-bold text-[#2D9C8E]">$500+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono">Monthly (1 persona):</span>
                    <span className="font-bold text-[#2D9C8E]">$3,000+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-mono">Monthly (multi):</span>
                    <span className="font-bold text-[#FF8A75]">$15,000+</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#1A2A3A]/10 text-xs text-[#1A2A3A]/50">
                  *Results vary. Depends on effort and following the Protocol.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* FIND SIMPS SECTION */}
      {/* ============================================== */}
      <section id="find-simps" className="py-16 md:py-24 px-4 md:px-12 bg-[#0F1923] text-[#FDFBF7] relative overflow-hidden">
        
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-[#2D9C8E] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              Target Acquisition
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Space_Grotesk']">
              WHERE TO FIND <span className="text-[#FF8A75]">SIMPS</span>
            </h2>
            <p className="text-lg text-[#FDFBF7]/60 max-w-2xl mx-auto">
              The supply of lonely men is infinite. 50,000 men turn 18 every single day. Here's where they congregate.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "💬", name: "Discord", spots: "Dating servers, lonely servers, anime communities" },
              { icon: "✈️", name: "Telegram", spots: "Premium groups, DM communities" },
              { icon: "🔥", name: "Tinder/Bumble", spots: "The desperate ones with money" },
              { icon: "🎮", name: "Gaming", spots: "Twitch chats, gaming Discords" },
              { icon: "📸", name: "Instagram", spots: "Comment sections of models" },
              { icon: "🔴", name: "Reddit", spots: "r/lonely, r/dating, r/ForeverAlone" }
            ].map((item, i) => (
              <div key={i} className="p-4 md:p-6 border border-[#FDFBF7]/10 hover:border-[#2D9C8E]/50 transition-colors group">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h4 className="font-bold text-lg mb-2 font-['Space_Grotesk'] group-hover:text-[#2D9C8E] transition-colors">{item.name}</h4>
                <p className="text-xs text-[#FDFBF7]/50 font-mono">{item.spots}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-12 p-6 border-l-2 border-[#FF8A75] bg-[#FDFBF7]/5">
            <p className="text-lg md:text-xl italic text-[#FDFBF7]/80">
              "The demand for female attention will never decrease. Ever."
            </p>
            <p className="text-xs text-[#FF8A75] mt-2 font-mono">— ORANOLIO, EST. 2014</p>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* INTERNAL LINKS NAV */}
      {/* ============================================== */}
      <nav className="py-8 px-4 bg-[#1A2A3A] border-t border-[#FDFBF7]/10" aria-label="Related Topics">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-mono text-[#FDFBF7]/30 mb-4 uppercase tracking-widest text-center">// Quick Navigation</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { href: "#discord-servers", label: "Discord Servers" },
              { href: "#methods", label: "Ewhoring Methods" },
              { href: "#fake-girl-guide", label: "Catfish Guide" },
              { href: "#find-simps", label: "Find Simps" },
              { href: "#learn", label: "What is Ewhoring" },
              { href: "#sprint", label: "7-Day Protocol" },
              { href: "#pricing", label: "Get Access" },
              { href: "#faq", label: "FAQ" }
            ].map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                className="px-3 py-1.5 text-xs font-mono border border-[#FDFBF7]/20 hover:border-[#2D9C8E] hover:text-[#2D9C8E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};
