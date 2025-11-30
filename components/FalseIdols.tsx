
import React from 'react';
import { usePayment } from '../contexts/PaymentContext';

export const FalseIdols: React.FC = () => {
  const { openPayment } = usePayment();
  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#FF8A75] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: The Roast */}
            <div>
                <div className="inline-block bg-[#1A2A3A] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6">
                    De-Programming
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] tracking-tighter mb-6 leading-[0.95]">
                    FORGET THE <br/>
                    <span className="text-[#FF8A75]">BALD MAN.</span>
                </h2>
                
                <div className="prose text-[#1A2A3A]/70 text-lg leading-relaxed mb-8">
                    <p>
                        He wants you to do pushups, smoke cigars, and shout at women. 
                        <strong className="text-[#1A2A3A]"> That sounds like a lot of work.</strong>
                    </p>
                    <p>
                        Why escape the Matrix when you can just hack it? 
                        He asks "What color is your Bugatti?" 
                        I ask "Why are you working so hard?"
                    </p>
                </div>

                {/* Real Talk Bullets */}
                <div className="bg-white border border-[#1A2A3A]/10 rounded-2xl p-8 shadow-lg">
                    <div className="space-y-4 text-[#1A2A3A]">
                        <div className="flex items-start gap-3">
                            <span className="text-[#FF8A75] font-bold text-lg">💀</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">THEM:</div>
                                <p className="text-sm opacity-70">"Grind 18 hours a day, post shirtless gym selfies, yell about discipline"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#2D9C8E] font-bold text-lg">💰</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">ME:</div>
                                <p className="text-sm">"Put on cheap wig, say 'good morning daddy', get $200 for coffee money"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#FF8A75] font-bold text-lg">💀</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">THEM:</div>
                                <p className="text-sm opacity-70">"Get canceled for saying the wrong thing, beg for forgiveness"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#2D9C8E] font-bold text-lg">💰</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">ME:</div>
                                <p className="text-sm">"Stay completely anonymous, collect payments, never get doxxed"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#FF8A75] font-bold text-lg">💀</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">THEM:</div>
                                <p className="text-sm opacity-70">"Fight with haters online, lose followers, spiral into depression"</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-[#2D9C8E] font-bold text-lg">💰</span>
                            <div>
                                <div className="font-bold text-sm uppercase tracking-widest mb-1">ME:</div>
                                <p className="text-sm">"Ignore drama, focus on whales, buy Lambos with their money"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: The Caricature */}
            <div className="relative flex justify-center w-full">
                
                {/* Speech Bubble */}
                <div className="absolute top-0 right-0 md:right-10 bg-[#1A2A3A] text-white p-4 rounded-xl rounded-bl-none transform -rotate-6 z-20 shadow-xl max-w-[140px] sm:max-w-[160px] md:max-w-[200px]">
                    <p className="text-[10px] md:text-xs font-mono font-bold uppercase">
                        "BREATHE AIR! YOU DON'T NEED MONEY YOU NEED SPARKLING WATER!"
                    </p>
                </div>

                {/* Rough Sketch Character */}
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                    <div className="relative bg-white p-8 rounded-2xl shadow-xl border-4 border-[#1A2A3A] transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        {/* Rough Sketch Style Character */}
                        <div className="text-center space-y-4">
                            {/* Bald Head Sketch */}
                            <div className="relative">
                                <div className="w-32 h-32 mx-auto bg-[#E0AC69] rounded-full border-4 border-[#1A2A3A] relative overflow-hidden">
                                    {/* Rough sketch lines */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1A2A3A]/10 to-transparent"></div>
                                    <div className="absolute top-4 left-4 w-8 h-6 border-2 border-[#1A2A3A] rounded-full bg-[#1A2A3A]"></div>
                                    <div className="absolute top-4 right-4 w-8 h-6 border-2 border-[#1A2A3A] rounded-full bg-[#1A2A3A]"></div>
                                </div>
                            </div>

                            {/* Body Sketch */}
                            <div className="text-6xl font-bold text-[#1A2A3A] leading-none">🧔‍♂️</div>

                            {/* Rough Speech Bubble */}
                            <div className="bg-[#1A2A3A] text-white p-3 rounded-lg transform -rotate-2 text-xs font-bold uppercase tracking-widest">
                                "GRIND HARDER BRO"
                            </div>

                            {/* Cigar Sketch */}
                            <div className="text-3xl transform rotate-12">🚬</div>

                            {/* Name Tag - Rough */}
                            <div className="bg-[#FF8A75] text-[#1A2A3A] px-4 py-2 rounded font-bold text-sm uppercase tracking-widest border-2 border-[#1A2A3A] transform rotate-1">
                                BOTTOM G
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <button
            onClick={openPayment}
            className="bg-[#FF8A75] text-[#1A2A3A] px-8 py-4 font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-all shadow-xl hover:scale-105 transform duration-200 btn-glitch text-sm md:text-base cursor-pointer"
          >
            DOWNLOAD THE BRAIN →
          </button>
          <p className="text-xs text-[#FDFBF7]/60 mt-2 font-mono">
            The sauce that turns losers into winners
          </p>
        </div>
      </div>
    </section>
  );
};
