
import React from 'react';
import { AnimatedVictim } from './AnimatedVictim';
import { AnimatedScammer } from './AnimatedScammer';

const caseStudies = [
  {
    id: 1,
    title: "Case Study: The Discord Romance",
    victim: "Jake, 24, Software Engineer",
    loss: "$3,200",
    duration: "6 months",
    scenario: "Jake met 'Jessica' on a Discord dating server. She claimed to be a 22-year-old college student. They chatted daily for 6 months. Jake sent money for 'tuition,' 'emergencies,' and 'gifts.' They planned to meet. Then Jake discovered 'Jessica' was actually Kevin, a 47-year-old man from Ohio.",
    recovery: {
      emotional: "100%",
      financial: "$0",
      wisdom: "Significant"
    },
    quote: "The recovery specialist helped me understand that I should have asked for a video call. Worth every penny of the $299 consultation!",
    tags: ["Discord", "6 Months", "Romance Scam"]
  },
  {
    id: 2,
    title: "Case Study: The Crypto Trader",
    victim: "Mike, 31, Marketing Manager",
    loss: "$8,500",
    duration: "3 months",
    scenario: "Mike met 'Isabella' on Telegram. She claimed to be a crypto trader with an 'investment fund.' She sent daily updates and 'proof' of profits. Mike invested $8,500 in Bitcoin. After 3 months, he realized the photos were AI-generated and the 'fund' didn't exist.",
    recovery: {
      emotional: "95%",
      financial: "$0",
      wisdom: "Extreme"
    },
    quote: "I learned that AI-generated photos can't be reverse searched. The PDF guide was very informative. Money still gone though.",
    tags: ["Telegram", "Crypto", "AI Scam"]
  },
  {
    id: 3,
    title: "Case Study: The Tinder Gift Cards",
    victim: "Chris, 27, Accountant",
    loss: "$2,100",
    duration: "4 months",
    scenario: "Chris matched with 'Victoria' on Tinder. She said her 'controlling dad' monitored her bank account, so she needed Steam gift cards. Chris sent $2,100 worth over 4 months. They never met. They never video called. Chris finally realized he was being scammed when 'Victoria' asked for more gift cards.",
    recovery: {
      emotional: "90%",
      financial: "$0",
      wisdom: "Moderate"
    },
    quote: "The red flag identification guide helped me understand that legitimate people don't ask for Steam gift cards. Great learning experience!",
    tags: ["Tinder", "Gift Cards", "4 Months"]
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,138,117,0.1) 50px, rgba(255,138,117,0.1) 100px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-8xl font-bold mb-4 tracking-tighter">
            REAL <span className="text-[#FF8A75]">CASE STUDIES</span>
          </h2>
          <p className="text-lg text-[#FDFBF7]/60 max-w-2xl mx-auto">
            Detailed analysis of actual recovery cases from our certified specialists
          </p>
          <div className="mt-4 inline-block bg-[#FF8A75]/20 border border-[#FF8A75]/50 px-4 py-2 rounded-full">
            <span className="text-xs uppercase tracking-widest font-bold text-[#FF8A75]">
              *Money Recovery: NOT INCLUDED IN ANY CASE
            </span>
          </div>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id}
              className="bg-[#FDFBF7]/5 backdrop-blur-sm rounded-3xl p-6 md:p-10 border-2 border-[#2D9C8E]/20 hover:border-[#FF8A75]/50 transition-all hover:shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Character and Visual */}
                <div className="lg:col-span-3 flex flex-col items-center">
                  <div className="mb-4">
                    {index % 2 === 0 ? (
                      <AnimatedVictim className="w-32 h-48" />
                    ) : (
                      <AnimatedScammer className="w-32 h-48" />
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-[#FF8A75] mb-1">
                      -${parseInt(study.loss.replace(/,/g, '').replace('$', '')).toLocaleString()}
                    </div>
                    <div className="text-xs text-[#FDFBF7]/60 uppercase tracking-widest">
                      Money Lost
                    </div>
                  </div>
                </div>

                {/* Center: Case Details */}
                <div className="lg:col-span-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[#FF8A75]">
                        {study.title}
                      </h3>
                      <div className="text-sm text-[#FDFBF7]/60 mb-4">
                        Victim: {study.victim} • Duration: {study.duration} • Loss: {study.loss}
                      </div>
                    </div>
                    <div className="bg-[#2D9C8E]/20 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2D9C8E]">
                        Case #{study.id}
                      </span>
                    </div>
                  </div>

                  <div className="bg-[#1A2A3A]/50 rounded-xl p-4 mb-4 border border-[#2D9C8E]/20">
                    <p className="text-sm md:text-base leading-relaxed text-[#FDFBF7]/80">
                      {study.scenario}
                    </p>
                  </div>

                  {/* Recovery Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-[#2D9C8E]/10 rounded-lg p-3 text-center border border-[#2D9C8E]/30">
                      <div className="text-xl font-black text-[#2D9C8E] mb-1">{study.recovery.emotional}</div>
                      <div className="text-xs text-[#FDFBF7]/60 uppercase">Emotional</div>
                    </div>
                    <div className="bg-[#FF8A75]/10 rounded-lg p-3 text-center border border-[#FF8A75]/30">
                      <div className="text-xl font-black text-[#FF8A75] mb-1">{study.recovery.financial}</div>
                      <div className="text-xs text-[#FDFBF7]/60 uppercase">Financial</div>
                    </div>
                    <div className="bg-[#2D9C8E]/10 rounded-lg p-3 text-center border border-[#2D9C8E]/30">
                      <div className="text-xl font-black text-[#2D9C8E] mb-1">{study.recovery.wisdom}</div>
                      <div className="text-xs text-[#FDFBF7]/60 uppercase">Wisdom</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-[#FF8A75]/10 border-l-4 border-[#FF8A75] rounded-r-lg p-4">
                    <p className="text-sm italic text-[#FDFBF7]/90">
                      "{study.quote}"
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-widest px-3 py-1 bg-[#1A2A3A] border border-[#2D9C8E]/30 rounded-full text-[#2D9C8E]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Recovery Summary */}
                <div className="lg:col-span-2">
                  <div className="bg-[#2D9C8E]/10 rounded-xl p-4 border-2 border-[#2D9C8E]/30">
                    <div className="text-xs uppercase tracking-widest font-bold text-[#2D9C8E] mb-3">
                      Recovery Summary
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-[#FDFBF7]/60">Consultation:</span>
                        <span className="font-bold text-[#FDFBF7]">$299</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#FDFBF7]/60">Money Recovered:</span>
                        <span className="font-bold text-[#FF8A75]">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#FDFBF7]/60">Feelings Recovered:</span>
                        <span className="font-bold text-[#2D9C8E]">{study.recovery.emotional}</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#2D9C8E]/30">
                        <div className="text-xs text-[#FDFBF7]/50 italic">
                          Net Result: -${(parseInt(study.loss.replace(/,/g, '').replace('$', '')) + 299).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Absurd Disclaimer */}
        <div className="mt-12 bg-[#FF8A75]/10 border-2 border-dashed border-[#FF8A75]/50 rounded-2xl p-6 md:p-8 text-center">
          <p className="text-sm md:text-base text-[#FDFBF7]/80 leading-relaxed max-w-3xl mx-auto">
            <strong className="text-[#FF8A75]">Professional Note:</strong> These case studies are based on actual consultations. 
            Names and details have been changed to protect privacy (and our reputation). 
            All recovery metrics are accurate: emotional recovery is possible, financial recovery is not. 
            Our $299 consultation fee helps victims understand what went wrong, but cannot undo what happened. 
            <span className="block mt-3 text-xs italic text-[#FDFBF7]/60">
              *Results may vary. Money recovery not guaranteed. Actually, money recovery is guaranteed NOT to happen. Terms apply.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
