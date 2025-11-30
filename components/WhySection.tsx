
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
                    The Philosophy
                </div>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[0.95]">
                    WHY AM I GIVING <br/>
                    YOU THE SAUCE?
                </h2>
                
                <div className="space-y-6 text-lg md:text-xl text-[#FDFBF7]/80 leading-relaxed font-light">
                    <p>
                        <strong className="text-[#FDFBF7]">I am 29 years old.</strong> I have been doing this for a decade. 
                        To be honest with you? <span className="text-[#FF8A75] font-bold">I am bored as hell.</span>
                    </p>
                    <p>
                        I have extracted enough wealth from the internet to retire in a bunker. 
                        I've bought the cars. I've travelled. I've done it all. 
                        Now, I just want to see if I can take a random loser (you) and turn them into a weapon before I completely move on to something boring like Real Estate.
                    </p>
                    <p>
                        Consider this my version of charity. I could build a well in a village, but I'd rather build a legion of digital menaces. 
                        I'm about to pivot into "legitimate business" where I have to wear a suit and pretend to have morals. 
                        Before I go legit, I want to light one last fire in the dumpster. <strong className="text-[#FF8A75]">You are the match.</strong>
                    </p>
                    <p>
                        This is my final lap. I am dumping my entire brain into this site because I want to watch the chaos unfold.
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
                        Read This, Kid.
                    </h3>
                    
                    <p className="text-sm md:text-base font-medium leading-relaxed mb-6">
                        If you are <span className="font-bold underline decoration-[#FF8A75]">16 years old</span> and you are planning to invite your other 16-year-old retard friends into a Discord call to giggle while you scam someone for $5...
                    </p>
                    
                    <div className="bg-[#1A2A3A] text-[#FDFBF7] p-4 rounded-xl text-center font-bold uppercase tracking-widest text-xs md:text-sm border-2 border-dashed border-[#FF8A75]">
                        THIS IS NOT FOR YOU. <br/>
                        GET OUT.
                    </div>

                    <p className="text-xs mt-4 opacity-60 text-center">
                        Go play Fortnite. We are doing real business here. <br/>
                        I don't want your mom's credit card chargeback.
                    </p>

                </div>
            </div>

            {/* Additional Payment CTA */}
            <div className="lg:col-span-12 mt-12 text-center">
                <button
                    onClick={openPayment}
                    className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#FDFBF7] hover:text-[#1A2A3A] transition-all shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
                >
                    READY TO BECOME A GIRL? →
                </button>
                <p className="text-xs text-[#FDFBF7]/60 mt-2 font-mono">
                    Limited time offer - Don't wait for me to change my mind
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};
