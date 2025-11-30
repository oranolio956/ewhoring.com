
import React from 'react';

export const GeoGate: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#1A2A3A] text-[#FDFBF7] relative overflow-hidden border-t border-[#FDFBF7]/5">
      
      {/* Background World Map Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none grayscale">
         <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path d="M50,100 Q150,50 250,120 T450,100 T650,150 T850,100" fill="none" stroke="#2D9C8E" strokeWidth="2" />
            <path d="M50,200 Q150,150 250,220 T450,200 T650,250 T850,200" fill="none" stroke="#2D9C8E" strokeWidth="2" opacity="0.5" />
            <path d="M50,300 Q150,250 250,320 T450,300 T650,350 T850,300" fill="none" stroke="#2D9C8E" strokeWidth="2" opacity="0.2" />
         </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center w-full">
        
        <div className="mb-8">
            <div className="inline-block bg-[#FF4500] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 animate-pulse">
                Access Control v4.0
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[0.95]">
                TIER 1 COUNTRIES <br/>
                <span className="text-[#2D9C8E]">ONLY.</span>
            </h2>
        </div>

        <div className="bg-[#0F1923] border border-[#FF8A75]/20 p-8 md:p-10 rounded-3xl relative overflow-hidden shadow-2xl max-w-2xl mx-auto">
            
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#FF8A75" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
            </div>

            <h3 className="text-xl font-bold text-[#FF8A75] mb-4 uppercase tracking-widest font-mono">
                REGIONAL LOCKOUT ACTIVE
            </h3>

            <div className="space-y-4 text-lg text-[#FDFBF7]/80 leading-relaxed font-medium">
                <p>
                    This protocol relies on high-trust banking infrastructure (Stripe, CashApp, PayPal F&F). 
                    <strong className="text-white block mt-2">These do not work in the third world.</strong>
                </p>
                <p>
                    If you are messaging me from a country where the inflation rate is higher than your age... 
                    <span className="text-[#FF8A75] font-bold underline decoration-wavy decoration-[#FF8A75]"> DO NOT BUY THIS.</span>
                </p>
                <p className="text-sm opacity-60 italic mt-4">
                    "I don't do charity. I don't accept iTunes gift cards. I accept strong currencies only. 
                    If you need a VPN to access PayPal, stay in your lane."
                </p>
            </div>
            
            {/* The Linguistic Filter */}
            <div className="mt-8 p-6 bg-[#FF8A75]/5 border border-[#FF8A75]/20 rounded-xl relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0F1923] px-2 text-[#FF8A75] text-[10px] font-bold uppercase tracking-widest">
                    Why You Are Banned
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed">
                   Also, you guys type like this: <br/>
                   <span className="font-mono text-[#FDFBF7] bg-[#1A2A3A] px-2 py-1 rounded mx-1 italic">"hello sir wanna see my wet pussy"</span>
                </p>
                <p className="text-xs mt-3 opacity-70">
                   Do you realize how delusional that sounds? No real woman speaks like that. 
                   You sound like a malfunctioning NPC. You are ruining the market for the professionals. Go away.
                </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-xs font-mono border-t border-[#FDFBF7]/10 pt-6">
                <div className="text-left">
                    <span className="block text-[#2D9C8E] font-bold">ALLOWED:</span>
                    USA, UK, CA, AU, NZ, EU
                </div>
                <div className="text-right">
                    <span className="block text-[#FF8A75] font-bold">RESTRICTED:</span>
                    Everyone else.
                </div>
            </div>

        </div>

        <div className="mt-8 text-[10px] font-mono text-[#FDFBF7]/30 uppercase tracking-widest">
            GEO-IP FILTERING ENABLED • NO POORS ALLOWED
        </div>

      </div>
    </section>
  );
};
