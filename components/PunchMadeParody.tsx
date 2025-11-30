
import React, { useState } from 'react';

export const PunchMadeParody: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [doxRevealed, setDoxRevealed] = useState(false);

  return (
    <section className="py-24 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Glitchy Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-[pulse_0.1s_infinite]"></div>
         <div className="absolute bottom-0 right-0 w-full h-1 bg-red-500 animate-[pulse_0.2s_infinite]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: The Roast */}
            <div className="order-2 lg:order-1">
                <div className="inline-block bg-[#FF0000] text-[#FDFBF7] text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-6 animate-pulse">
                    Warning: Brainrot Detected
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] tracking-tighter mb-6 leading-[0.95]">
                    STOP LISTENING TO <br/>
                    <span className="text-[#FF0000] underline decoration-wavy">THIS CLOWN.</span>
                </h2>
                
                <div className="prose text-[#1A2A3A]/80 text-lg leading-relaxed mb-8 font-medium">
                    <p>
                        There is a guy online who raps about committing fraud. He puts the evidence in 4K resolution on YouTube. 
                        <strong className="text-[#1A2A3A]"> He is functionally brain-dead.</strong>
                    </p>
                    <p>
                        He thinks wearing a ski mask makes him a hacker. He thinks making beats on FL Studio implies "motion." 
                        His music sounds like a dial-up modem screaming for help.
                    </p>
                </div>

                {/* THE DOX ATTACK BOX */}
                <div className="bg-[#1A2A3A] p-6 rounded-xl border-2 border-[#FF0000] relative overflow-hidden group shadow-[10px_10px_0px_#FF0000] hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair">
                    <div className="absolute top-0 right-0 bg-[#FF0000] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                        CLASSIFIED LEAK
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#FDFBF7] mb-2 font-['Space_Grotesk']">
                        WANT HIS ENTIRE DOX?
                    </h3>
                    
                    <p className="text-[#FDFBF7]/70 text-sm mb-4">
                        He acts like a kingpin. <strong className="text-white">He's not.</strong> We tracked his IP. 
                        He isn't in "The Trenches." He lives in a gated community in Nebraska and his real name is 
                        <span className="blur-sm group-hover:blur-none transition-all duration-300 bg-white text-black px-1 mx-1 font-bold">CLARENCE</span>.
                    </p>

                    {doxRevealed ? (
                        <div className="bg-[#FF0000] text-white p-3 rounded font-bold text-center animate-pulse text-xs uppercase tracking-widest">
                            🚨 FILE DOWNLOADED: REAL_IDENTITY.PDF 🚨
                        </div>
                    ) : (
                        <button 
                            onClick={() => setDoxRevealed(true)}
                            className="w-full bg-[#FDFBF7] text-[#1A2A3A] font-bold py-3 uppercase tracking-widest hover:bg-[#FF0000] hover:text-white transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                        >
                            <span>📥</span> DOWNLOAD FULL DOX (FREE)
                        </button>
                    )}
                    
                    <p className="text-[10px] text-[#FDFBF7]/40 mt-3 text-center">
                        *Warning: This file contains embarrassing photos of him without the mask (He looks like a turtle).
                    </p>
                </div>

            </div>

            {/* Right: The Animated Character */}
            <div className="order-1 lg:order-2 relative flex flex-col items-center">
                
                {/* Fake Media Player */}
                <div className="bg-[#000] text-white p-4 rounded-xl w-64 mb-8 shadow-2xl relative z-20 border border-gray-800">
                    <div className="flex gap-4 items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center text-xs font-bold animate-pulse">
                            🗑️
                        </div>
                        <div>
                            <div className="text-xs font-bold text-red-500">Punchmade_Dev_Official</div>
                            <div className="text-[10px] opacity-50">Track: Self_Snitching.mp3</div>
                        </div>
                    </div>
                    <div className="h-1 bg-gray-800 rounded-full mb-4 overflow-hidden">
                        <div className={`h-full bg-red-500 ${isPlaying ? 'animate-[width_2s_linear_infinite]' : 'w-0'}`}></div>
                    </div>
                    <div className="flex justify-center gap-4 text-xl">
                        <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-red-500 transition-colors">
                            {isPlaying ? '⏸' : '▶'}
                        </button>
                    </div>
                    {isPlaying && (
                        <div className="absolute -right-12 top-0 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded rotate-12">
                            EAR BLEEDING!
                        </div>
                    )}
                </div>

                {/* The Character SVG */}
                <svg viewBox="0 0 400 500" className="w-72 h-96 drop-shadow-2xl">
                    <defs>
                        <linearGradient id="skiMask" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#333" />
                            <stop offset="100%" stopColor="#000" />
                        </linearGradient>
                    </defs>
                    
                    {/* Body - Bad Posture */}
                    <path d="M100 500 L120 350 Q125 300 200 300 Q275 300 280 350 L300 500 Z" fill="#1A1A1A" />
                    
                    {/* Gold Chain - Massive and Tacky */}
                    <path d="M150 320 Q200 450 250 320" fill="none" stroke="#FFD700" strokeWidth="15" strokeLinecap="round" />
                    <circle cx="200" cy="400" r="30" fill="#FFD700" />
                    <text x="200" y="410" textAnchor="middle" fontSize="20" fontWeight="bold">L</text>

                    {/* Head - Ski Mask */}
                    <ellipse cx="200" cy="200" rx="70" ry="90" fill="url(#skiMask)" />
                    
                    {/* Eye Holes */}
                    <ellipse cx="175" cy="180" rx="15" ry="10" fill="#8B4513" /> {/* Skin showing */}
                    <ellipse cx="225" cy="180" rx="15" ry="10" fill="#8B4513" />
                    <circle cx="175" cy="180" r="3" fill="#FFF" /> {/* Vacant stare */}
                    <circle cx="225" cy="180" r="3" fill="#FFF" />

                    {/* Mouth Hole */}
                    <ellipse cx="200" cy="240" rx="20" ry="10" fill="#8B4513" />
                    <path d="M190 240 Q200 250 210 240" stroke="black" fill="none" strokeWidth="2" /> {/* Frown */}

                    {/* Dreadlocks (coming out of top) */}
                    <path d="M150 130 Q130 100 120 150" stroke="#000" strokeWidth="10" fill="none" />
                    <path d="M250 130 Q270 100 280 150" stroke="#000" strokeWidth="10" fill="none" />
                    <path d="M200 110 Q200 50 180 80" stroke="#000" strokeWidth="10" fill="none" />
                    <path d="M220 115 Q240 60 260 90" stroke="#000" strokeWidth="10" fill="none" />

                    {/* Hands holding Card */}
                    <g transform="translate(260, 320) rotate(-20)">
                         {/* Card */}
                         <rect x="-10" y="-10" width="80" height="50" rx="5" fill="#3B82F6" stroke="white" strokeWidth="2" />
                         <rect x="0" y="5" width="10" height="8" fill="#FFD700" />
                         <text x="5" y="35" fontSize="5" fontFamily="monospace" fill="white">4200 6969 ...</text>
                         
                         {/* Fingers */}
                         <rect x="60" y="0" width="10" height="40" rx="5" fill="#8B4513" />
                         <rect x="45" y="0" width="10" height="42" rx="5" fill="#8B4513" />
                         <rect x="30" y="0" width="10" height="40" rx="5" fill="#8B4513" />
                    </g>
                    
                    {/* Speech Bubble */}
                    <g className="animate-bounce">
                        <path d="M280 180 L350 120 L380 120 L380 180 L350 180 Z" fill="white" stroke="black" strokeWidth="2" />
                        <text x="365" y="155" textAnchor="middle" fontSize="10" fontWeight="bold">"I SNITCH ON"</text>
                        <text x="365" y="165" textAnchor="middle" fontSize="10" fontWeight="bold">"MYSELF!"</text>
                    </g>
                </svg>

            </div>

        </div>
      </div>
    </section>
  );
};
