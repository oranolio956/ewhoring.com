import React from 'react';

// SEO Content Component - Featured Snippet Bait
// VOICE: Aggressive, insulting, self-aware dark humor - matching site tone

export const SEOContent: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#0F1923] text-[#FDFBF7] relative overflow-hidden" id="learn">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-[#FDFBF7]/[0.02] rotate-12 pointer-events-none select-none font-['Space_Grotesk'] whitespace-nowrap">
        EWHORING
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Definition Section */}
        <div className="mb-16 md:mb-24">
          <div className="mb-4 flex items-center gap-2 justify-center">
            <div className="w-8 h-[1px] bg-[#FF8A75]"></div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF8A75]">The Definition</span>
            <div className="w-8 h-[1px] bg-[#FF8A75]"></div>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-bold mb-8 font-['Space_Grotesk'] text-center tracking-tighter">
            WTF IS <span className="text-[#2D9C8E]">EWHORING</span>?
          </h2>
          
          <div className="speakable border-l-2 border-[#2D9C8E] pl-6 md:pl-8 py-4 bg-[#FDFBF7]/5 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-[#FDFBF7]/90">
              <strong className="text-[#FDFBF7]">Ewhoring</strong> is when you (probably a dude) create a fake female persona 
              and extract money from lonely men on Discord, Telegram, Tinder, and anywhere else desperate males congregate.
              It's <span className="text-[#2D9C8E]">social engineering</span> meets <span className="text-[#2D9C8E]">digital marketing</span> meets 
              <span className="text-[#FF8A75]"> "men are stupid."</span> The term came from Hackforums around 2010. 
              Now it's a whole industry. Welcome to the future.
            </p>
          </div>
          
          <p className="text-center text-[#FDFBF7]/40 text-sm mt-6 font-mono">
            (Yes, this is real. Yes, it works. No, I'm not going to debate the ethics with you.)
          </p>
        </div>

        {/* How It Works + Earnings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 md:mb-24">
          
          {/* How It Works */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-['Space_Grotesk'] uppercase">
              How This Actually Works
            </h3>
            <p className="text-[#FDFBF7]/60 mb-6">
              It's not complicated. Men are lonely. You have WiFi. Connect the dots.
            </p>
            <div className="space-y-4">
              {[
                { num: "01", text: "Create fake accounts. Don't use your real anything. Ever." },
                { num: "02", text: "Build a believable female identity. Name, age, backstory, content." },
                { num: "03", text: "Go where the simps are. Discord, Telegram, Reddit, dating apps." },
                { num: "04", text: "Engage. Build rapport. Don't be desperate (ironic, I know)." },
                { num: "05", text: "Monetize. Payment BEFORE content. Always. No exceptions." },
                { num: "06", text: "Scale. Run multiple personas. Print money." }
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
              <h3 className="text-xl font-bold mb-2 font-['Space_Grotesk'] uppercase text-[#FF8A75]">
                The Money (Real Numbers)
              </h3>
              <p className="text-[#FDFBF7]/50 text-xs mb-6 font-mono">
                *Assuming you're not completely incompetent
              </p>
              <div className="space-y-4">
                {[
                  { level: "Complete Beginner", range: "$200-$500/week", note: "(still learning)" },
                  { level: "Got The Hang Of It", range: "$500-$2k/week", note: "(one persona)" },
                  { level: "Actually Good", range: "$2k-$5k/week", note: "(multiple personas)" },
                  { level: "Full Degenerate", range: "$10k+/month", note: "(this is your job now)" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#FDFBF7]/10 pb-3">
                    <div>
                      <span className="text-sm text-[#FDFBF7]/70 block">{item.level}</span>
                      <span className="text-[10px] text-[#FDFBF7]/40 font-mono">{item.note}</span>
                    </div>
                    <span className="font-bold text-[#2D9C8E]">{item.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">
              Comparison
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] tracking-tighter">
              EWHORING VS ONLYFANS VS <span className="text-[#FDFBF7]/40">GETTING A JOB</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm md:text-base">
              <thead>
                <tr className="border-b border-[#2D9C8E]">
                  <th className="p-4 text-left font-bold font-['Space_Grotesk'] uppercase text-[#FDFBF7]/60">Factor</th>
                  <th className="p-4 text-center font-bold text-[#2D9C8E]">Ewhoring</th>
                  <th className="p-4 text-center font-bold text-[#FDFBF7]/40">OnlyFans</th>
                  <th className="p-4 text-center font-bold text-[#FDFBF7]/40">Real Job 🤮</th>
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                {[
                  { factor: "Startup Cost", ew: "$0", of: "$0", job: "4 years of college debt" },
                  { factor: "Time to First $", ew: "20 minutes", of: "2-4 weeks", job: "2 weeks + interview hell" },
                  { factor: "Show Your Face", ew: "NEVER", of: "Usually", job: "Every damn day" },
                  { factor: "Platform Takes", ew: "0%", of: "20%", job: "40% (taxes lol)" },
                  { factor: "Wear Pants", ew: "No", of: "Sometimes", job: "Unfortunately" },
                  { factor: "Boss", ew: "You", of: "You", job: "Some guy named Gary" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[#FDFBF7]/5 hover:bg-[#FDFBF7]/5 transition-colors">
                    <td className="p-4 text-[#FDFBF7]/70">{row.factor}</td>
                    <td className="p-4 text-center text-[#2D9C8E] font-bold">{row.ew}</td>
                    <td className="p-4 text-center text-[#FDFBF7]/40">{row.of}</td>
                    <td className="p-4 text-center text-[#FDFBF7]/30 italic">{row.job}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="text-center text-[#FDFBF7]/40 text-xs mt-4 font-mono">
            (I'm not saying quit your job. I'm saying you have options. Bad options. But options.)
          </p>
        </div>

        {/* Quick Start Guide */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold font-['Space_Grotesk'] tracking-tighter">
              THE "I DIDN'T READ ANYTHING" <span className="text-[#FF8A75]">TLDR</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "1", title: "HIDE YOURSELF", desc: "VPN. New email. Burner number. Your mom can never know." },
              { num: "2", title: "BE A GIRL", desc: "Name. Age (18-24). Photos (AI or packs). Backstory. Consistency." },
              { num: "3", title: "GO HUNTING", desc: "Discord. Telegram. Tinder. Reddit. Anywhere lonely men cry." },
              { num: "4", title: "GET PAID", desc: "Gift cards. Crypto. CashApp. BEFORE you send anything. Always." }
            ].map((step, i) => (
              <div key={i} className="group p-6 border border-[#FDFBF7]/10 hover:border-[#2D9C8E] transition-all relative">
                <span className="absolute -top-4 -left-2 text-5xl font-bold text-[#2D9C8E]/20 font-['Space_Grotesk'] group-hover:text-[#2D9C8E]/40 transition-colors">
                  {step.num}
                </span>
                <h4 className="font-bold text-lg mb-2 font-['Space_Grotesk'] uppercase relative z-10">{step.title}</h4>
                <p className="text-sm text-[#FDFBF7]/60 relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12 p-6 border border-dashed border-[#FDFBF7]/20">
            <p className="text-[#FDFBF7]/60 mb-4">
              This is the free preview. The actual Protocol has scripts, templates, server lists, content generation guides, and 10 years of my brain.
            </p>
            <a href="#pricing" className="inline-block bg-[#FF8A75] text-[#1A2A3A] px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-[#FDFBF7] transition-colors">
              Fine, I'll Buy It →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
