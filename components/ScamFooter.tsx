
import React from 'react';
import { Mascot } from './Mascot';
import { usePayment } from '../contexts/PaymentContext';

export const ScamFooter: React.FC = () => {
  const { openPayment } = usePayment();
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#0F1923] text-[#FDFBF7] relative overflow-hidden border-t border-[#FF8A75]">
      
      {/* Background Warning Stripes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #FF8A75, #FF8A75 10px, #0F1923 10px, #0F1923 20px)' }}>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        
        {/* The Mascot - Compliance Officer Mode */}
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 relative">
           <Mascot excitementLevel={0} /> 
           {/* Speech Bubble */}
           <div className="absolute -top-4 -right-12 bg-[#2D9C8E] text-[#1A2A3A] text-[10px] font-bold px-3 py-1 rounded-tr-xl rounded-bl-xl shadow-lg transform rotate-12 whitespace-nowrap">
              I Got This.
           </div>
        </div>

        <h2 className="text-4xl md:text-7xl font-bold font-['Space_Grotesk'] tracking-tighter mb-8 text-[#FDFBF7] hover:text-[#FF8A75] transition-colors cursor-help">
          IS THIS LEGAL?
        </h2>

        <div className={`transition-all duration-500`}>
            <div className="prose text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto space-y-6 text-[#FDFBF7]/80">
                <p>
                    <span className="text-[#2D9C8E] font-bold text-2xl block mb-4">Yes. Selling information is legal.</span> 
                </p>
                <p>
                   We sell a <strong>Protocol</strong>. It is a digital course containing educational material on social dynamics and digital marketing. Selling a course on "Social Engineering" is no different than selling a book on "Acting" or "Creative Writing."
                </p>
                <div className="bg-[#1A2A3A] p-6 rounded-xl border border-[#FDFBF7]/10 text-sm md:text-base">
                    <p className="italic mb-2">
                        "If I sell you a hammer, and you build a house, that's great. 
                        If I sell you a hammer, and you break a window, that is <strong>your</strong> problem."
                    </p>
                    <p className="font-bold text-[#FF8A75]">
                        We provide the tools. We do not control how you use them.
                    </p>
                </div>
                
                <div className="py-8">
                    <button 
                        onClick={openPayment}
                        className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest text-lg md:text-xl hover:bg-[#FDFBF7] transition-colors shadow-[0_0_40px_rgba(255,138,117,0.4)] cursor-pointer"
                    >
                        I ACCEPT THE LIABILITY
                    </button>
                    <div className="text-[10px] uppercase tracking-[0.2em] mt-4 opacity-50 font-mono">
                        By clicking, you agree to our Terms of Service.
                    </div>
                </div>

                {/* Legal Links */}
                <div className="mt-12 text-center text-[10px] text-[#FDFBF7]/40 font-mono">
                    <p>This is educational content. Use at your own risk.</p>
                    <div className="mt-2 flex justify-center gap-4">
                        <a href="/privacy.html" className="underline hover:text-[#2D9C8E]">Privacy</a>
                        <a href="/terms.html" className="underline hover:text-[#2D9C8E]">Terms</a>
                        <a href="/press-kit.html" className="underline hover:text-[#2D9C8E]">Press</a>
                    </div>
                </div>
            </div>
        </div>

      </div>

    </section>
  );
};
