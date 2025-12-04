
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';

export const WhySection: React.FC = () => {
  const { openPayment } = usePayment();
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/10">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 text-[40rem] leading-none font-bold text-[#FDFBF7]/[0.02] -translate-y-1/2 translate-x-1/4 pointer-events-none font-['Space_Grotesk']">
        ?
      </div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            {/* Left: The Rant */}
            <div className="lg:col-span-7">
                <div className="inline-block bg-[#FF8A75] text-[#1A2A3A] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                    Our Mission
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.95]">
                    WHY PEOPLE GET SCAMMED <br/>
                    (AND HOW WE HELP)
                </h2>
                
                <div className="space-y-6 text-lg md:text-xl text-[#FDFBF7]/80 leading-relaxed font-light">
                    <p>
                        <strong className="text-[#FDFBF7]">Loneliness makes people vulnerable.</strong> Scammers exploit this by creating fake personas that seem real.
                        The difference? <span className="text-[#FF8A75] font-bold">Professional recovery vs. going it alone.</span>
                    </p>
                    <p>
                        Discord and Telegram are filled with fake profiles using AI-generated photos and stolen images.
                        Dating apps are crawling with catfish who build relationships over months before asking for money.
                        Why suffer alone when professional help is available?
                    </p>
                    <p>
                        Our certified recovery specialists understand the psychological manipulation techniques scammers use.
                        We help you process the trauma, understand red flags, and create a recovery plan.
                        One consultation can save you from future scams. <strong className="text-[#FF8A75]">That's the real value.</strong>
                    </p>
                    <p>
                        We've helped 12,847+ victims understand what happened to them. Now we're here to help you.
                        This is professional support, not judgment. This is how you move forward after being scammed.
                    </p>
                </div>
            </div>

            {/* Right: The Filter (No Kids) - Container Constraints added */}
            <div className="lg:col-span-5 px-4 md:px-0">
                <div className="bg-[#FDFBF7] text-[#1A2A3A] p-8 md:p-10 rounded-3xl transform rotate-2 shadow-[10px_10px_0px_rgba(255,138,117,1)] md:shadow-[20px_20px_0px_rgba(255,138,117,1)] relative group hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto">
                    
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#FF8A75] rounded-full flex items-center justify-center text-3xl font-bold shadow-lg animate-bounce">
                        ✋
                    </div>

                    <h3 className="text-2xl font-bold font-['Space_Grotesk'] mb-4 uppercase">
                        Important Notice
                    </h3>
                    
                    <p className="text-sm md:text-base font-medium leading-relaxed mb-6">
                        Our recovery services are for <span className="font-bold underline decoration-[#FF8A75]">adults 18+</span> who have been victims of online scams. 
                        If you're under 18, please contact a parent or guardian and consider reporting to law enforcement.
                    </p>
                    
                    <div className="bg-[#1A2A3A] text-[#FDFBF7] p-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs md:text-sm border-2 border-dashed border-[#FF8A75]">
                        CONSULTATION FEE: $299 <br/>
                        (NON-REFUNDABLE)
                    </div>

                    <p className="text-xs mt-4 opacity-60 text-center">
                        Professional recovery services require payment. <br/>
                        We cannot guarantee money recovery, but we provide emotional support and education.
                    </p>

                </div>
            </div>

            {/* Additional Payment CTA */}
            <div className="lg:col-span-12 mt-12 text-center">
                <button
                    onClick={openPayment}
                    className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FDFBF7] hover:text-[#1A2A3A] transition-all shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
                >
                    START RECOVERY CONSULTATION →
                </button>
                <p className="text-xs text-[#FDFBF7]/60 mt-2 font-mono">
                    Professional support for scam victims - $299 consultation fee
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};
