
import React from 'react';
import { Mascot } from './Mascot';

export const ScamFooter: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-12 bg-[#0F1923] text-[#FDFBF7] relative overflow-hidden border-t border-[#FF8A75]">
      
      {/* Background Warning Stripes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FF8A75, #FF8A75 10px, #0F1923 10px, #0F1923 20px)' }}>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* The Mascot - Serious */}
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 relative">
           <Mascot excitementLevel={0} /> 
           {/* Speech Bubble */}
           <div className="absolute -top-4 -right-12 bg-[#FDFBF7] text-[#1A2A3A] text-[10px] font-bold px-3 py-1 rounded-tr-xl rounded-bl-xl shadow-lg transform rotate-12 whitespace-nowrap">
              Wake up.
           </div>
        </div>

        <h2 className="text-4xl md:text-7xl font-bold font-['Space_Grotesk'] tracking-tighter mb-8 text-[#FDFBF7] hover:text-[#FF8A75] transition-colors cursor-help">
          IS THIS A SCAM?
        </h2>

        <div className={`transition-all duration-500`}>
            <div className="prose text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto space-y-6 text-[#FDFBF7]/80">
                <p>
                    <span className="text-[#2D9C8E] font-bold text-2xl block mb-4">No. The real scam is your 9-5.</span> 
                </p>
                <p>
                   You wake up at 7AM. You commute 45 minutes. You sit in a cubicle. You make $200 a day if you're lucky. 
                   <strong className="text-white"> That is the scam.</strong>
                </p>
                <p>
                    I am offering you a method. A set of instructions. 
                    If you follow them, you make money. If you don't, you don't.
                </p>
                <p>
                    I charge for this because <strong className="text-[#FF8A75]">free information is ignored.</strong> 
                    When you pay, you pay attention.
                </p>
                
                <div className="py-8">
                    <button 
                        onClick={() => document.getElementById('manifesto')?.scrollIntoView({behavior:'smooth'})}
                        className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest text-lg md:text-xl hover:bg-[#FDFBF7] transition-colors shadow-[0_0_40px_rgba(255,138,117,0.4)]"
                    >
                        I AM READY TO WORK
                    </button>
                    <div className="text-[10px] uppercase tracking-[0.2em] mt-4 opacity-50 font-mono">
                        Instant Access • Lifetime Updates
                    </div>
                </div>
            </div>
        </div>

      </div>

    </section>
  );
};
