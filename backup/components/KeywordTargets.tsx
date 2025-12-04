import React, { useState } from 'react';
import { usePayment } from '../contexts/PaymentContext';

// AGGRESSIVE KEYWORD TARGETING - MATCHING SITE VOICE
// The voice: Aggressive, insulting, self-aware dark humor

const platforms = [
  {
    id: 1,
    name: "LINKEDIN",
    tag: "EXECUTIVE WHALES",
    color: "#0077B5",
    description: "CEOs, lawyers, and doctors looking for discreet arrangements. Average transaction: $2,000+",
    details: "Professional men in their 40s-60s who can afford luxury lifestyles. They want 'sugar babies' who understand their world. Position yourself as a graduate student or young professional. These men pay for companionship, gifts, and exclusivity.",
    stats: { roi: "★★★★★", speed: "1 week", victims: "High-value" }
  },
  {
    id: 2,
    name: "TELEGRAM",
    tag: "CRYPTO WHALES",
    color: "#0088cc",
    description: "Crypto millionaires who tip in Bitcoin. One whale can fund your entire operation.",
    details: "These are tech entrepreneurs and crypto traders with millions in liquid assets. They tip $500+ per conversation and send Lambos as gifts. Build relationships, not transactions. The psychology is different here - they want intellectual equals.",
    stats: { roi: "★★★★★", speed: "3-5 days", victims: "Ultra-wealthy" }
  },
  {
    id: 3,
    name: "DISCORD",
    tag: "TECH EXECS",
    color: "#5865F2",
    description: "Silicon Valley engineers and startup founders. They pay premium for 'exclusive access.'",
    details: "Join programming and tech communities. Position yourself as a 'tech-savvy model' interested in their world. These men have high IQs but low emotional intelligence. They pay $200-500 per 'private session' and buy expensive gifts.",
    stats: { roi: "★★★★☆", speed: "2-3 days", victims: "High-income" }
  },
  {
    id: 4,
    name: "SEEKING.COM",
    tag: "SUGAR DADDY CENTRAL",
    color: "#FF6B6B",
    description: "The original sugar daddy site. Men here explicitly want to pay for arrangements.",
    details: "No games, no pretense. These men are 50+ executives who want clear arrangements: $5,000-10,000/month for exclusivity. They fly you to Dubai, buy you apartments, and treat you like royalty. This is the big leagues.",
    stats: { roi: "★★★★★", speed: "1-2 weeks", victims: "Maximum value" }
  },
  {
    id: 5,
    name: "LUXURY ESCORT SITES",
    tag: "7-FIGURE CLIENTS",
    color: "#8B5CF6",
    description: "Investment bankers and hedge fund managers. They pay $1,000+ per hour.",
    details: "These are the elite - Wall Street traders, Hollywood producers, tech billionaires. They want sophistication, discretion, and luxury experiences. One client can set you up for life. The entry barrier is high, but the payoff is extraordinary.",
    stats: { roi: "★★★★★", speed: "2-4 weeks", victims: "Elite clients" }
  },
  {
    id: 6,
    name: "PRIVATE CLUBS",
    tag: "CELEBRITY CIRCLE",
    color: "#10B981",
    description: "Access to athletes, actors, and politicians through exclusive networks.",
    details: "This is where the real money is. Celebrities and public figures pay premium for absolute discretion. They arrange through trusted networks and pay $10,000+ for weekend arrangements. The connections compound - one client introduces you to his friends.",
    stats: { roi: "★★★★★", speed: "1 month+", victims: "Celebrity level" }
  }
];

const methods = [
  { name: "SUGAR DADDY ARRANGEMENTS", desc: "Monthly allowances ($5K-10K) for exclusivity. No games, just clear financial arrangements.", level: "Elite" },
  { name: "LUXURY COMPANIONSHIP", desc: "Travel with executives to Dubai, Paris, NYC. All expenses paid + generous compensation.", level: "$$$$" },
  { name: "CRYPTO WHALE MINING", desc: "Target blockchain entrepreneurs. They tip in BTC and send Lambos as gifts.", level: "High-Value" },
  { name: "EXECUTIVE NETWORKING", desc: "Access to CEOs and high-level professionals through LinkedIn and private clubs.", level: "VIP" },
  { name: "CELEBRITY CIRCLE ACCESS", desc: "Build connections with athletes, actors, politicians through exclusive networks.", level: "Ultra-Premium" },
  { name: "WEALTH MANAGEMENT", desc: "Position yourself as a 'financial advisor' to help them 'invest' in you.", level: "Strategic" }
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 w-full">
          
          {/* Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 h-fit flex flex-col justify-center">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-8 text-[#FDFBF7] font-['Space_Grotesk']">
              WHERE THE <br/>
              <span className="text-[#2D9C8E]">SUGAR DADDIES LIVE</span>
            </h2>

            <p className="text-base md:text-lg font-light text-[#FDFBF7]/70 leading-relaxed mb-6">
              Forget broke college kids. We target wealthy professionals and executives.
              Here's where the high-net-worth individuals congregate. <span className="text-[#FF8A75] font-bold">Click each platform for the sugar daddy playbook.</span>
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
          METHODS
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              Sugar Daddy Playbook
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter mb-6 font-['Space_Grotesk']">
              SUGAR DADDY <br/>
              <span className="text-[#FF8A75]">STRATEGIES</span>
            </h2>
            <p className="text-lg text-[#1A2A3A]/60 max-w-2xl mx-auto">
              Forget broke college kids and basic scams.
              We target <span className="text-[#FF8A75] font-bold">wealthy professionals</span> who pay premium for sophistication and discretion.
            </p>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 border border-[#1A2A3A]/10 hover:border-[#2D9C8E] transition-all duration-300 hover:bg-[#1A2A3A] hover:text-[#FDFBF7] relative overflow-hidden"
              >
                
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

          {/* Sugar Daddy Focus */}
          <div className="mt-12 p-6 md:p-8 border-2 border-dashed border-[#FF8A75] bg-[#FF8A75]/5 relative">
            <div className="absolute -top-3 left-6 bg-[#FDFBF7] px-3">
              <span className="text-xs font-bold text-[#FF8A75] uppercase tracking-widest">💎 ELITE FOCUS</span>
            </div>
            <h4 className="text-xl font-bold mb-3 font-['Space_Grotesk']">
              Why We Target Sugar Daddies, Not Basic Scams
            </h4>
            <p className="text-[#1A2A3A]/70 mb-4">
              Basic ewhoring methods work for <strong>$200-500/week</strong> from desperate college kids.
              Sugar daddy strategies deliver <strong>$5,000-50,000/month</strong> from wealthy professionals who want sophistication.
            </p>
            <p className="text-[#1A2A3A] font-bold">
              We're not doing simple things. We're milking the wealthy elite who can afford to pay premium.
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

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="text-center mb-12">
            <div className="inline-block bg-[#2D9C8E] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
              Where Simps Live
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-['Space_Grotesk']">
              SIMP HABITATS <span className="text-[#FF8A75]">🎯</span>
            </h2>
            <p className="text-lg text-[#FDFBF7]/60 max-w-2xl mx-auto">
              Lonely men are EVERYWHERE. Here's where they congregate in the highest concentrations.
              It's like fishing. These are the ponds.
            </p>

            {/* Content Clusters */}
            <div className="mt-6 p-4 bg-[#FDFBF7]/5 rounded-lg border border-[#FDFBF7]/10">
              <h3 className="text-sm font-bold text-[#FF8A75] uppercase tracking-widest mb-3">📚 Content Clusters</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-bold text-[#FDFBF7] mb-2">City Guides</h4>
                  <ul className="space-y-1 text-[#FDFBF7]/70">
                    <li><a href='/discord-ewhoring-london.html' className='hover:text-[#2D9C8E]'>London Guide</a></li>
                    <li><a href='/discord-ewhoring-new-york.html' className='hover:text-[#2D9C8E]'>New York Guide</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#FDFBF7] mb-2">Scripts & Methods</h4>
                  <ul className="space-y-1 text-[#FDFBF7]/70">
                    <li><a href='/ewhoring-scripts-discord.html' className='hover:text-[#2D9C8E]'>Discord Scripts</a></li>
                    <li><a href='/ewhoring-scripts-telegram.html' className='hover:text-[#2D9C8E]'>Telegram Scripts</a></li>
                    <li><a href='/ewhoring-vs-onlyfans.html' className='hover:text-[#2D9C8E]'>Method Comparison</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#FDFBF7] mb-2">Learning Resources</h4>
                  <ul className="space-y-1 text-[#FDFBF7]/70">
                    <li><a href='/how-to-start-ewhoring.html' className='hover:text-[#2D9C8E]'>Beginner Guide</a></li>
                    <li><a href='/ewhoring-for-beginners-step-by-step.html' className='hover:text-[#2D9C8E]'>Step-by-Step</a></li>
                    <li><a href='/ewhoring-success-stories.html' className='hover:text-[#2D9C8E]'>Success Stories</a></li>
                  </ul>
                </div>
              </div>
            </div>
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
