import React, { useState } from 'react';
import { usePayment } from '../contexts/PaymentContext';

// AGGRESSIVE KEYWORD TARGETING - MATCHING SITE VOICE
// The voice: Aggressive, insulting, self-aware dark humor

const platforms = [
  {
    id: 1,
    name: "DISCORD",
    tag: "SIMP CENTRAL",
    color: "#5865F2",
    description: "Where lonely men pretend to have girlfriends. Your new hunting ground.",
    details: "Join dating servers full of dudes who haven't touched grass since 2019. Build rapport in public (be charming, not desperate). Then DM. Use our scripts. Collect Nitro gifts like Pokémon cards. Average IQ of target: room temperature.",
    stats: { roi: "★★★★★", speed: "20 min", victims: "Infinite" }
  },
  {
    id: 2,
    name: "TELEGRAM",
    tag: "BIG FISH",
    color: "#0088cc",
    description: "Where crypto bros pay $200 for attention. Less volume, bigger wallets.",
    details: "These aren't Discord kids. These are grown men with disposable income and zero game. Create premium channels. Accept Bitcoin so their wives don't see the transaction. The targets here tip in hundreds, not Nitro.",
    stats: { roi: "★★★★☆", speed: "1-2 days", victims: "Wealthy" }
  },
  {
    id: 3,
    name: "REDDIT",
    tag: "SAD BOY HQ",
    color: "#FF4500",
    description: "r/lonely has 500k members. r/ForeverAlone has 600k. Do the math.",
    details: "Don't sell here directly (you'll get banned). Use Reddit to build persona credibility. Post sad girl things. Get karma. Then funnel them to Discord or Snap. They'll already trust you because you 'get them.'",
    stats: { roi: "★★★☆☆", speed: "Slow build", victims: "Pre-warmed" }
  },
  {
    id: 4,
    name: "TINDER",
    tag: "GIFT CARD FARM",
    color: "#FE3C72",
    description: "Match. Flirt. 'My phone broke, can you help?' Classic never dies.",
    details: "Swipe right on everyone. Match with the ugly ones (they're more desperate). Chat for 2-3 days. Drop the bomb: 'I really want to FaceTime but my phone is cracked 🥺 can you help?' Works 40% of the time. Every time.",
    stats: { roi: "★★★★☆", speed: "3 days", victims: "Down bad" }
  },
  {
    id: 5,
    name: "BUMBLE",
    tag: "PREMIUM LOSERS",
    color: "#FFC629",
    description: "Same as Tinder but the men have jobs. Sugar daddy angle works here.",
    details: "Women message first on Bumble, so they think you're invested. Use this psychology against them. These targets will pay for 'dates' that never happen, send 'emergency money,' and believe literally anything you say.",
    stats: { roi: "★★★★☆", speed: "3-5 days", victims: "Employed" }
  },
  {
    id: 6,
    name: "SNAPCHAT",
    tag: "RECURRING REVENUE",
    color: "#FFFC00",
    description: "Sell 'Premium Snap' access. They pay monthly to see... nothing.",
    details: "The genius of Premium Snap: auto-delete creates artificial scarcity. Charge $30/month for 'exclusive content.' Post once a week. They renew because they're addicted to the idea of you. Passive income, baby.",
    stats: { roi: "★★★★☆", speed: "Passive", victims: "Addicted" }
  }
];

const methods = [
  { name: "THE CLASSIC", desc: "Fake pics + dating apps = money. Your grandpa's ewhoring method. Still works.", level: "Beginner" },
  { name: "GFE (GIRLFRIEND EXP)", desc: "Charge monthly for 'good morning' texts. They think you're dating. You're not.", level: "$$$$" },
  { name: "FINDOM", desc: "They PAY you to IGNORE them. I'm not joking. Google it.", level: "Advanced" },
  { name: "AI-ENHANCED", desc: "Generate infinite unique content with AI. ChatGPT for scaling convos. 2025 meta.", level: "Big Brain" },
  { name: "DATING APP ARBITRAGE", desc: "Farm gift cards from Tinder/Bumble matches. Volume play.", level: "High Effort" },
  { name: "PREMIUM SNAP/OF", desc: "Monthly subscriptions. You post once a week. They pay forever.", level: "Passive" }
];

export const KeywordTargets: React.FC = () => {
  const [expandedPlatform, setExpandedPlatform] = useState<number | null>(null);
  const { openPayment } = usePayment();

  return (
    <>
      {/* ============================================== */}
      {/* WHERE TO FIND SIMPS - PLATFORM BREAKDOWN */}
      {/* ============================================== */}
      <section id="discord-servers" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/5">
        
        {/* Background Tape */}
        <div className="absolute top-20 -left-10 bg-[#FF8A75] text-[#000] font-bold text-[10px] px-20 py-1 -rotate-6 tracking-[0.3em] whitespace-nowrap opacity-20">
          TARGET ACQUIRED // TARGET ACQUIRED // TARGET ACQUIRED
        </div>

        <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 w-full">
          
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#FF8A75] animate-pulse"></div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF8A75]">Hunting Grounds</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-8 text-[#FDFBF7] font-['Space_Grotesk']">
              WHERE THE <br/>
              <span className="text-[#2D9C8E]">LOSERS LIVE</span>
            </h2>
            
            <p className="text-base md:text-lg font-light text-[#FDFBF7]/70 leading-relaxed mb-6">
              Every platform has lonely men with money and zero game. 
              Here's where to find them. <span className="text-[#FF8A75] font-bold">Click each one for the full playbook.</span>
            </p>

            <div className="p-4 md:p-6 border-l-2 border-[#FF8A75] bg-[#FF8A75]/5">
              <p className="text-xs md:text-sm text-[#FDFBF7]/80 font-mono">
                "The supply of desperate men is infinite. 50,000 turn 18 every day. You'll never run out of targets."
              </p>
              <p className="text-[10px] text-[#FF8A75] mt-2 font-bold">— ORANOLIO</p>
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
                <div className="absolute left-0 top-0 bottom-0 w-1 transition-transform duration-300 origin-top" 
                     style={{ backgroundColor: platform.color, transform: expandedPlatform === platform.id ? 'scaleY(1)' : 'scaleY(0)' }}></div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 pl-4">
                  <div className="flex items-center gap-3 mb-2 md:mb-0">
                    <span className="font-mono text-xs tracking-widest opacity-60" style={{ color: platform.color }}>
                      [ {String(platform.id).padStart(2, '0')} ]
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1" 
                          style={{ backgroundColor: `${platform.color}20`, color: platform.color }}>
                      {platform.tag}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-4xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300 font-['Space_Grotesk'] uppercase"
                        style={{ color: expandedPlatform === platform.id ? platform.color : '#FDFBF7' }}>
                      {platform.name}
                    </h3>
                    <p className="text-sm md:text-base text-[#FDFBF7]/60 max-w-xl">
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
                            <span className="text-[#FDFBF7]/30">|</span>
                            <span>First $: {platform.stats.speed}</span>
                            <span className="text-[#FDFBF7]/30">|</span>
                            <span className="text-[#FF8A75]">Targets: {platform.stats.victims}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-[#FF8A75] text-xs font-bold uppercase tracking-widest font-mono mt-2 md:mt-0">
                    {expandedPlatform === platform.id ? '[-]' : '[+]'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* EWHORING METHODS - THE ARSENAL */}
      {/* ============================================== */}
      <section id="methods" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] text-[#1A2A3A] relative overflow-hidden border-t border-[#1A2A3A]/5">
        
        <div className="absolute top-0 right-0 text-[30rem] leading-none font-bold text-[#1A2A3A]/[0.03] translate-x-1/4 -translate-y-1/4 pointer-events-none font-['Space_Grotesk']">
          💀
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              Choose Your Weapon
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 font-['Space_Grotesk']">
              THE METHODS <br/>
              <span className="text-[#FF8A75]">(THAT ACTUALLY WORK)</span>
            </h2>
            <p className="text-lg text-[#1A2A3A]/60 max-w-2xl mx-auto">
              Forget whatever garbage you found on Hackforums in 2018. 
              Those methods are <span className="line-through">burned</span> <span className="text-[#FF8A75] font-bold">cremated</span>.
            </p>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method, i) => (
              <div 
                key={i}
                className="group p-6 md:p-8 border border-[#1A2A3A]/10 hover:border-[#2D9C8E] transition-all duration-300 hover:bg-[#1A2A3A] hover:text-[#FDFBF7] relative overflow-hidden"
              >
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
                  <p className="text-sm text-[#1A2A3A]/60 group-hover:text-[#FDFBF7]/70">
                    {method.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hackforums Roast */}
          <div className="mt-12 p-6 md:p-8 border-2 border-dashed border-[#FF8A75] bg-[#FF8A75]/5 relative">
            <div className="absolute -top-3 left-6 bg-[#FDFBF7] px-3">
              <span className="text-xs font-bold text-[#FF8A75] uppercase tracking-widest">⚠ PSA</span>
            </div>
            <h4 className="text-xl font-bold mb-3 font-['Space_Grotesk']">
              Why Your Free Nulled/HF Methods Don't Work
            </h4>
            <p className="text-[#1A2A3A]/70 mb-4">
              Those "free ewhoring packs" you downloaded? <strong>Every image is flagged.</strong> 
              That script you copy-pasted? <strong>Recognized instantly.</strong> 
              The "method" from 2018? <strong>Patched 6 years ago.</strong>
            </p>
            <p className="text-[#1A2A3A] font-bold">
              You're using a musket in a drone war. No wonder you're broke.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* HOW TO CATFISH FOR MONEY */}
      {/* ============================================== */}
      <section id="fake-girl-guide" className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/5">
        
        <div className="absolute bottom-0 left-0 text-[15rem] leading-none font-bold text-[#FDFBF7]/[0.02] -translate-x-1/4 translate-y-1/4 pointer-events-none font-['Space_Grotesk']">
          $$$
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: The Steps */}
            <div className="lg:col-span-7">
              <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                The Blueprint
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[0.95] font-['Space_Grotesk']">
                HOW TO MAKE MONEY <br/>
                <span className="text-[#2D9C8E]">PRETENDING TO BE A GIRL</span>
              </h2>
              <p className="text-[#FDFBF7]/60 mb-8 text-lg">
                Yes, you—a 30-year-old man named Dave—can make $3,000/month by being "Jessica, 22, aspiring model." 
                Here's exactly how.
              </p>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "CREATE YOUR IDENTITY", desc: "Pick a name, age (18-24), location, and backstory. Be consistent. Write it down. The Protocol has templates because I know you're lazy." },
                  { step: "02", title: "GET YOUR CONTENT", desc: "AI-generated images or purchased packs. NOT random Google images. NOT your ex. We teach you how to generate infinite unique content." },
                  { step: "03", title: "INFILTRATE PLATFORMS", desc: "Discord servers, Telegram groups, Tinder, Bumble, Reddit. Go where the lonely men are. (Spoiler: everywhere.)" },
                  { step: "04", title: "EXTRACT THE BAG", desc: "Use psychological triggers. Create scarcity. ALWAYS payment before content. Gift cards, crypto, CashApp. Never Venmo (reversible)." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="flex-shrink-0 w-12 h-12 border border-[#2D9C8E] flex items-center justify-center font-mono text-[#2D9C8E] group-hover:bg-[#2D9C8E] group-hover:text-[#1A2A3A] transition-all text-sm">
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

            {/* Right: Income Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#FDFBF7] text-[#1A2A3A] p-8 md:p-10 transform -rotate-2 relative group hover:rotate-0 transition-transform duration-300 shadow-[10px_10px_0px_#FF8A75]">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#2D9C8E] flex items-center justify-center text-white text-xl font-bold">
                  💰
                </div>
                
                <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-6 uppercase border-b border-[#1A2A3A]/10 pb-4">
                  What You'll Make (If You're Not Lazy)
                </h3>
                
                <div className="space-y-4 font-mono text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-[#1A2A3A]/60">Week 1 (learning):</span>
                    <span className="font-bold text-[#2D9C8E]">$200-$500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1A2A3A]/60">Monthly (1 persona):</span>
                    <span className="font-bold text-[#2D9C8E]">$2,000-$4,000</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-[#1A2A3A]/10 pt-4">
                    <span className="text-[#1A2A3A]/60">Monthly (multi-persona):</span>
                    <span className="font-bold text-[#FF8A75] text-lg">$10,000+</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[#1A2A3A]/10 text-[10px] text-[#1A2A3A]/50">
                  *Results require effort. If you don't follow the Protocol, you'll make $0 and blame me. Don't.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================== */}
      {/* WHERE TO FIND SIMPS */}
      {/* ============================================== */}
      <section id="find-simps" className="py-16 md:py-24 px-4 md:px-12 bg-[#0F1923] text-[#FDFBF7] relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="text-[10vw] font-black leading-none whitespace-nowrap text-center" style={{ transform: `rotate(-12deg) translateY(${i * 20}%)` }}>
              SIMP SIMP SIMP SIMP SIMP
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-[#2D9C8E] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              Target Acquisition
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Space_Grotesk']">
              SIMP HABITATS <span className="text-[#FF8A75]">🎯</span>
            </h2>
            <p className="text-lg text-[#FDFBF7]/60 max-w-2xl mx-auto">
              Lonely men are EVERYWHERE. Here's where they congregate in the highest concentrations. 
              It's like fishing. These are the ponds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: "💬", name: "Discord", spots: "Dating servers, lonely servers, anime degenerates" },
              { icon: "✈️", name: "Telegram", spots: "Crypto bros, premium group addicts" },
              { icon: "🔥", name: "Tinder/Bumble", spots: "Men who haven't been swiped right in months" },
              { icon: "🎮", name: "Gaming", spots: "Twitch simps, gaming Discord mods" },
              { icon: "📸", name: "Instagram", spots: "Thirst trappers in comments" },
              { icon: "😢", name: "Reddit", spots: "r/lonely (500k), r/ForeverAlone (600k)" }
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
              "The demand for female attention will never decrease. Ever. Men are biologically programmed to be desperate. You're just monetizing nature."
            </p>
            <p className="text-xs text-[#FF8A75] mt-2 font-mono font-bold">— ORANOLIO, EXPLOITING LOSERS SINCE 2014</p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="py-8 px-4 bg-[#1A2A3A] border-t border-[#FDFBF7]/10" aria-label="Related Topics">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] font-mono text-[#FDFBF7]/30 mb-4 uppercase tracking-widest text-center">// Navigate This Mess</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {[
              { href: "#discord-servers", label: "Discord Ewhore Servers" },
              { href: "#methods", label: "Ewhoring Methods 2025" },
              { href: "#fake-girl-guide", label: "Catfish Money Guide" },
              { href: "#find-simps", label: "Where Simps Live" },
              { href: "#learn", label: "WTF is Ewhoring" },
              { href: "#sprint", label: "7-Day Protocol" },
              { href: "#faq", label: "Stupid Questions" }
            ].map((link, i) => (
              <a 
                key={i}
                href={link.href} 
                className="px-3 py-1.5 text-xs font-mono border border-[#FDFBF7]/20 hover:border-[#2D9C8E] hover:text-[#2D9C8E] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={openPayment}
              className="px-3 py-1.5 text-xs font-mono border border-[#FF8A75]/50 bg-[#FF8A75]/10 text-[#FF8A75] hover:bg-[#FF8A75] hover:text-[#1A2A3A] transition-colors cursor-pointer"
            >
              Buy The Damn Thing
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
