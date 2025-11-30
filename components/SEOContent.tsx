import React from 'react';

// SEO Content Component - Featured Snippet Bait
// MATCHING ORIGINAL SITE DESIGN - dark industrial aesthetic

export const SEOContent: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#0F1923] text-[#FDFBF7] relative overflow-hidden" id="learn">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-[#FDFBF7]/[0.02] rotate-12 pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap">
        EWHORING
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Definition Section - Targets "What is ewhoring" featured snippet */}
        <div className="mb-16 md:mb-24">
          <div className="mb-4 flex items-center gap-2 justify-center">
            <div className="w-8 h-[1px] bg-[#FF8A75]"></div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF8A75]">Definition</span>
            <div className="w-8 h-[1px] bg-[#FF8A75]"></div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 font-['Space_Grotesk'] text-center tracking-tighter">
            WHAT IS <span className="text-[#2D9C8E]">EWHORING</span>?
          </h2>
          
          {/* Definition paragraph - optimized for featured snippets */}
          <div className="speakable border-l-2 border-[#2D9C8E] pl-6 md:pl-8 py-4 bg-[#FDFBF7]/5 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-[#FDFBF7]/90">
              <strong className="text-[#FDFBF7]">Ewhoring</strong> is the practice of creating and monetizing fake female online personas 
              to generate revenue from male users on platforms like <span className="text-[#2D9C8E]">Discord</span>, <span className="text-[#2D9C8E]">Telegram</span>, and dating apps. 
              It involves social engineering, digital persona creation, and various 
              monetization strategies including selling content, receiving gift cards, and running premium 
              subscriptions. The term originated in online forums around 2010 and has evolved into a 
              structured methodology for online income generation.
            </p>
          </div>
        </div>

        {/* How It Works + Earnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          
          {/* How It Works */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-['Space_Grotesk'] uppercase">
              How Ewhoring Works
            </h3>
            <div className="space-y-4">
              {[
                { num: "01", text: "Create anonymous accounts and personas" },
                { num: "02", text: "Build believable female identity with images" },
                { num: "03", text: "Join high-traffic platforms (Discord, Telegram, Reddit)" },
                { num: "04", text: "Engage with potential paying users" },
                { num: "05", text: "Monetize through various payment methods" },
                { num: "06", text: "Scale with multiple personas" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <span className="font-mono text-xs text-[#2D9C8E] mt-1 opacity-60">[{item.num}]</span>
                  <p className="text-[#FDFBF7]/80 group-hover:text-[#FDFBF7] transition-colors">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Earnings Card */}
          <div className="lg:col-span-5">
            <div className="border border-[#FF8A75]/30 p-6 md:p-8 bg-[#FF8A75]/5">
              <h3 className="text-xl font-bold mb-6 font-['Space_Grotesk'] uppercase text-[#FF8A75]">
                Average Earnings
              </h3>
              <div className="space-y-4">
                {[
                  { level: "Beginners", range: "$200-$500/week" },
                  { level: "Intermediate", range: "$500-$2,000/week" },
                  { level: "Advanced", range: "$2,000-$5,000/week" },
                  { level: "Multi-persona", range: "$5,000-$15,000/month" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#FDFBF7]/10 pb-3">
                    <span className="text-sm font-mono text-[#FDFBF7]/60">{item.level}:</span>
                    <span className="font-bold text-[#2D9C8E]">{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table - Targets "Ewhoring vs OnlyFans" featured snippet */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
              Comparison
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] tracking-tighter">
              EWHORING VS ONLYFANS VS FANSLY
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-[#2D9C8E]">
                  <th className="p-4 text-left font-bold font-['Space_Grotesk'] uppercase text-[#FDFBF7]/60">Factor</th>
                  <th className="p-4 text-center font-bold text-[#2D9C8E]">Ewhoring</th>
                  <th className="p-4 text-center font-bold text-[#FDFBF7]/60">OnlyFans</th>
                  <th className="p-4 text-center font-bold text-[#FDFBF7]/60">Fansly</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                {[
                  { factor: "Startup Cost", ew: "$0", of: "$0", fa: "$0", highlight: false },
                  { factor: "Time to First $", ew: "20 min", of: "1-4 weeks", fa: "1-4 weeks", highlight: true },
                  { factor: "Face Required", ew: "No", of: "Optional", fa: "Optional", highlight: true },
                  { factor: "Platform Fee", ew: "0%", of: "20%", fa: "20%", highlight: true },
                  { factor: "Anonymity", ew: "Full", of: "Partial", fa: "Partial", highlight: true },
                  { factor: "Scalability", ew: "Multi-persona", of: "Single", fa: "Single", highlight: true }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#FDFBF7]/5 hover:bg-[#FDFBF7]/5 transition-colors">
                    <td className="p-4 text-[#FDFBF7]/70">{row.factor}</td>
                    <td className={`p-4 text-center ${row.highlight ? 'text-[#2D9C8E] font-bold' : 'text-[#FDFBF7]/80'}`}>{row.ew}</td>
                    <td className="p-4 text-center text-[#FDFBF7]/50">{row.of}</td>
                    <td className="p-4 text-center text-[#FDFBF7]/50">{row.fa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Start Guide - Targets "How to start ewhoring" */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] tracking-tighter">
              QUICK START <span className="text-[#FF8A75]">GUIDE</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", title: "Anonymous Setup", desc: "VPN, new email, burner number. Never use real identity." },
              { num: "2", title: "Build Persona", desc: "Name, age, location. Source images. Create backstory." },
              { num: "3", title: "Join Platforms", desc: "Discord servers, Telegram groups. Build presence." },
              { num: "4", title: "Monetize", desc: "Use scripts. Payment first. Gift cards, crypto." }
            ].map((step, i) => (
              <div key={i} className="group p-6 border border-[#FDFBF7]/10 hover:border-[#2D9C8E] transition-all relative">
                <span className="absolute -top-4 -left-2 text-5xl font-bold text-[#2D9C8E]/20 font-['Space_Grotesk'] group-hover:text-[#2D9C8E]/40 transition-colors">
                  {step.num}
                </span>
                <h4 className="font-bold text-lg mb-2 font-['Space_Grotesk'] uppercase relative z-10">{step.title}</h4>
                <p className="text-sm text-[#FDFBF7]/60 font-mono relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-[#FDFBF7]/40 text-sm font-mono">
            Want the complete 7-day protocol with scripts, templates, and advanced methods? 
            <a href="#pricing" className="text-[#FF8A75] hover:underline ml-1">Get the Oranolio Protocol →</a>
          </p>
        </div>

      </div>
    </section>
  );
};
