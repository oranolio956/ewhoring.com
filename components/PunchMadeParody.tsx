
import React, { useState, useEffect, useRef } from 'react';

export const PunchMadeParody: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [clarenceMode, setClarenceMode] = useState<'hidden' | 'rapping' | 'interrupted' | 'yelling'>('hidden');
  const [swatState, setSwatState] = useState<'idle' | 'swatting' | 'arrested'>('idle');
  
  const animationContainerRef = useRef<HTMLDivElement>(null);

  const triggerClarence = () => {
      setClarenceMode('rapping');
      // Scroll to the animation so the user sees it
      setTimeout(() => {
        animationContainerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
  };

  useEffect(() => {
      if (clarenceMode === 'rapping') {
          // Sequence: 
          // 0s: Rapping
          // 3s: Mom Yells
          // 4s: Clarence Stops
          // 5s: Clarence Yells back
          const timer1 = setTimeout(() => setClarenceMode('interrupted'), 3000);
          const timer2 = setTimeout(() => setClarenceMode('yelling'), 5000);
          return () => { clearTimeout(timer1); clearTimeout(timer2); };
      }
  }, [clarenceMode]);

  const triggerSwat = () => {
      setSwatState('swatting');
      setTimeout(() => {
          setSwatState('arrested');
      }, 2500); // Chaos lasts 2.5s
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center py-12 px-4 md:px-12 bg-[#FDFBF7] relative overflow-hidden border-t border-[#1A2A3A]/5">
      
      {/* Glitchy Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden will-change-transform">
         <div className="absolute top-0 left-0 w-full h-1 bg-red-500 animate-[pulse_0.1s_infinite]"></div>
         <div className="absolute bottom-0 right-0 w-full h-1 bg-red-500 animate-[pulse_0.2s_infinite]"></div>
      </div>

      {/* Full Screen SWAT Chaos Overlay */}
      {swatState === 'swatting' && (
          <div className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden cursor-none pointer-events-none">
             <div className="absolute inset-0 animate-[police-strobe_0.1s_infinite]"></div>
             <div className="relative z-10 text-center animate-[shake-hard_0.1s_infinite]">
                 <h1 className="text-[15vw] font-black text-white leading-none uppercase drop-shadow-[10px_10px_0px_#FF0000] select-none">OH SHIT!!!</h1>
                 <h1 className="text-[15vw] font-black text-[#0000FF] leading-none uppercase mix-blend-difference absolute inset-0 select-none">OH SHIT!!!</h1>
                 <p className="text-white font-mono text-2xl bg-red-600 px-4 py-2 mt-8 inline-block">POLICE RAID IN PROGRESS</p>
             </div>
             <style>{`
                @keyframes police-strobe {
                    0% { background: #FF0000; }
                    50% { background: #0000FF; }
                    100% { background: #FF0000; }
                }
                @keyframes shake-hard {
                    0% { transform: translate(0,0) rotate(0deg); }
                    25% { transform: translate(-10px, 10px) rotate(-5deg); }
                    50% { transform: translate(10px, -10px) rotate(5deg); }
                    75% { transform: translate(-10px, -10px) rotate(-5deg); }
                    100% { transform: translate(0,0) rotate(0deg); }
                }
             `}</style>
          </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
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
                        <span className="bg-white text-black px-1 mx-1 font-bold">CLARENCE</span>.
                    </p>

                    <div className="space-y-3">
                        {clarenceMode !== 'hidden' ? (
                             <div className="bg-[#FF0000] text-white p-3 rounded font-bold text-center text-xs uppercase tracking-widest">
                                🚨 LIVE FEED: CLARENCE'S BEDROOM 🚨
                            </div>
                        ) : (
                            <button 
                                onClick={triggerClarence}
                                className="w-full bg-[#FDFBF7] text-[#1A2A3A] font-bold py-3 uppercase tracking-widest hover:bg-[#FF0000] hover:text-white transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                            >
                                <span>📥</span> DOWNLOAD FULL DOX (FREE)
                            </button>
                        )}

                        <button 
                            onClick={triggerSwat}
                            className="w-full bg-blue-600 text-white font-bold py-3 uppercase tracking-widest hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm shadow-lg"
                        >
                            <span>🚓</span> CALL THE FEDS (SWAT HIM)
                        </button>
                    </div>
                    
                    <p className="text-[10px] text-[#FDFBF7]/40 mt-3 text-center">
                        *Warning: This file contains embarrassing photos of him without the mask.
                    </p>
                </div>

            </div>

            {/* Right: The Animated Character */}
            <div ref={animationContainerRef} className="order-1 lg:order-2 relative flex flex-col items-center w-full min-h-[400px]">
                
                {clarenceMode !== 'hidden' ? (
                     // THE CLARENCE ANIMATION SCENE
                     <div className="w-full h-full bg-[#F0E68C] border-4 border-black rounded-xl overflow-hidden relative shadow-2xl flex flex-col items-center">
                        {/* Wallpaper */}
                        <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #BDB76B 2px, transparent 2.5px)', backgroundSize: '20px 20px'}}></div>
                        
                        {/* Bedroom Door */}
                        <div className="absolute top-10 left-4 w-16 h-32 bg-[#8B4513] border-2 border-black">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full absolute right-2 top-16"></div>
                        </div>

                        {/* Thug Life Poster (Crooked) */}
                        <div className="absolute top-4 right-10 w-20 h-24 bg-black transform rotate-6 border border-white">
                             <div className="text-white text-[8px] text-center mt-2 font-mono">2PAC</div>
                        </div>

                        {/* Clarence Character */}
                        <div className="mt-20 relative">
                             {/* Body */}
                             <svg width="200" height="250" viewBox="0 0 200 250" className={clarenceMode === 'rapping' ? 'animate-[bounce_0.4s_infinite]' : ''}>
                                 {/* Chair Back */}
                                 <rect x="40" y="100" width="120" height="100" fill="#333" rx="10" />

                                 {/* Head */}
                                 <circle cx="100" cy="50" r="40" fill="#8D5524" stroke="black" strokeWidth="2" />
                                 {/* Glasses */}
                                 <g>
                                     <circle cx="85" cy="50" r="12" stroke="black" strokeWidth="2" fillOpacity="0.5" fill="#FFF" />
                                     <circle cx="115" cy="50" r="12" stroke="black" strokeWidth="2" fillOpacity="0.5" fill="#FFF" />
                                     <line x1="97" y1="50" x2="103" y2="50" stroke="black" strokeWidth="2" />
                                 </g>
                                 {/* Mouth */}
                                 {clarenceMode === 'rapping' && <ellipse cx="100" cy="75" rx="5" ry="8" fill="black" className="animate-pulse" />}
                                 {clarenceMode === 'interrupted' && <line x1="90" y1="75" x2="110" y2="75" stroke="black" strokeWidth="2" />}
                                 {clarenceMode === 'yelling' && <path d="M90 75 Q100 90 110 75" stroke="black" strokeWidth="2" fill="none" />}

                                 {/* Hoodie */}
                                 <path d="M50 90 Q100 120 150 90 L160 220 L40 220 Z" fill="#555" stroke="black" strokeWidth="2" />
                                 
                                 {/* Arms */}
                                 <path d="M50 110 Q20 150 50 180" stroke="#555" strokeWidth="15" fill="none" className={clarenceMode === 'rapping' ? 'animate-[wave_0.5s_infinite]' : ''}/>
                                 <path d="M150 110 Q180 150 150 180" stroke="#555" strokeWidth="15" fill="none" className={clarenceMode === 'rapping' ? 'animate-[wave_0.5s_infinite_reverse]' : ''}/>
                                 
                                 {/* Mic */}
                                 {clarenceMode === 'rapping' && (
                                     <g transform="translate(130, 160)">
                                        <rect x="0" y="0" width="10" height="30" fill="gray" />
                                        <circle cx="5" cy="0" r="8" fill="black" />
                                     </g>
                                 )}
                             </svg>
                        </div>

                        {/* Speech Bubbles */}
                        {clarenceMode === 'rapping' && (
                             <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-2 py-1 rounded-xl text-[10px] font-bold whitespace-nowrap animate-bounce">
                                 "YEAH I'M IN THE TRENCHES" 🎵
                             </div>
                        )}

                        {clarenceMode === 'interrupted' && (
                             <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center animate-[shake-hard_0.1s_infinite]">
                                 <div className="bg-white border-4 border-red-600 text-red-600 font-black px-4 py-2 rounded-xl text-xl uppercase transform -rotate-6">
                                     CLARENCE! DINNER!
                                 </div>
                             </div>
                        )}

                        {clarenceMode === 'yelling' && (
                             <div className="absolute top-0 right-0 bg-white border-2 border-black px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap">
                                 MOM! I'M A GANGSTER NOW! <br/> GOSH!
                             </div>
                        )}
                        
                        <div className="absolute bottom-2 left-2 text-[8px] font-mono opacity-50">CAM_02 [REC]</div>

                     </div>
                ) : (
                    <>
                        {/* Arrested Lights Overlay */}
                        {swatState === 'arrested' && (
                             <div className="absolute inset-0 z-30 pointer-events-none mix-blend-overlay animate-[police_0.5s_steps(2)_infinite] rounded-full filter blur-xl"></div>
                        )}
                        <style>{`
                            @keyframes police {
                                0% { background: rgba(255,0,0,0.6); }
                                50% { background: rgba(0,0,255,0.6); }
                            }
                            @keyframes chain-drop {
                                0% { transform: translateY(-600px); }
                                70% { transform: translateY(0px); }
                                85% { transform: translateY(-50px); }
                                100% { transform: translateY(0px); }
                            }
                            @keyframes south-park-bounce {
                                0%, 100% { transform: rotate(-3deg) translateY(0); }
                                50% { transform: rotate(3deg) translateY(-5px); }
                            }
                            @keyframes wave {
                                0%, 100% { transform: rotate(0deg); }
                                50% { transform: rotate(20deg); }
                            }
                        `}</style>

                        {/* Fake Media Player */}
                        <div className="bg-[#000] text-white p-4 rounded-xl w-full max-w-xs mb-8 shadow-2xl relative z-20 border border-gray-800">
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

                        {/* South Park Character - Responsive SVG */}
                        <svg viewBox="0 0 400 500" className={`w-full max-w-[320px] h-auto md:w-80 md:h-[400px] drop-shadow-2xl overflow-visible ${swatState === 'idle' ? 'animate-[south-park-bounce_0.8s_steps(4)_infinite]' : ''}`}>
                            
                            {/* Character Group */}
                            <g transform="translate(0, 50)">
                                
                                {/* Legs/Feet */}
                                <ellipse cx="140" cy="400" rx="40" ry="15" fill="black" />
                                <ellipse cx="260" cy="400" rx="40" ry="15" fill="black" />

                                {/* Body - Big Rectangle/Trapezoid (Red Hoodie) */}
                                <path d="M120 400 L280 400 L270 280 L130 280 Z" fill="#CC0000" stroke="black" strokeWidth="3" />
                                
                                {/* Zipper */}
                                <line x1="200" y1="280" x2="200" y2="400" stroke="black" strokeWidth="2" opacity="0.3" />

                                {/* Arms */}
                                <path d="M130 300 L90 350" stroke="#CC0000" strokeWidth="25" strokeLinecap="round" />
                                <path d="M270 300 L310 350" stroke="#CC0000" strokeWidth="25" strokeLinecap="round" />
                                
                                {/* Hands */}
                                <circle cx="90" cy="350" r="15" fill="#8B4513" stroke="black" strokeWidth="2" />
                                <g transform="translate(310, 350)">
                                     <circle cx="0" cy="0" r="15" fill="#8B4513" stroke="black" strokeWidth="2" />
                                     {/* The Card */}
                                     <rect x="-10" y="-15" width="40" height="25" fill="#3B82F6" stroke="white" strokeWidth="2" rx="3" transform="rotate(-20)" />
                                     <rect x="-5" y="-10" width="8" height="6" fill="#FFD700" transform="rotate(-20)" />
                                </g>

                                {/* Head */}
                                <circle cx="200" cy="180" r="110" fill="#333" stroke="black" strokeWidth="3" />
                                
                                {/* Eye Holes */}
                                <ellipse cx="160" cy="170" rx="25" ry="30" fill="white" stroke="black" strokeWidth="2" />
                                <ellipse cx="240" cy="170" rx="25" ry="30" fill="white" stroke="black" strokeWidth="2" />
                                
                                {/* Pupils */}
                                <circle cx="165" cy="170" r="2" fill="black" />
                                <circle cx="235" cy="170" r="2" fill="black" />

                                {/* Mouth */}
                                <ellipse cx="200" cy="240" rx="15" ry="8" fill="#8B4513" />
                                <path d="M190 242 Q200 238 210 242" stroke="black" fill="none" strokeWidth="1" />

                                {/* Dreadlocks */}
                                <path d="M200 70 L180 30" stroke="black" strokeWidth="8" strokeLinecap="round" />
                                <path d="M220 75 L250 40" stroke="black" strokeWidth="8" strokeLinecap="round" />
                                <path d="M180 75 L150 40" stroke="black" strokeWidth="8" strokeLinecap="round" />
                                <path d="M150 100 L110 80" stroke="black" strokeWidth="8" strokeLinecap="round" />
                                <path d="M250 100 L290 80" stroke="black" strokeWidth="8" strokeLinecap="round" />

                            </g>
                            
                            {/* Speech Bubble (Hidden if arrested) */}
                            {swatState === 'idle' && (
                                <g className="animate-bounce" transform="translate(0, -20)">
                                    <path d="M280 140 L350 80 L380 80 L380 140 L350 140 Z" fill="white" stroke="black" strokeWidth="2" />
                                    <text x="365" y="115" textAnchor="middle" fontSize="10" fontWeight="bold">"I SNITCH ON"</text>
                                    <text x="365" y="125" textAnchor="middle" fontSize="10" fontWeight="bold">"MYSELF!"</text>
                                </g>
                            )}

                            {/* THE MASSIVE PUNCHMADE CHAIN */}
                            {swatState === 'arrested' && (
                                <g className="animate-[chain-drop_0.8s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]" style={{ transformOrigin: 'top center' }}>
                                    <path d="M120 -100 L160 300" stroke="#FFD700" strokeWidth="12" fill="none" strokeDasharray="20,5" />
                                    <path d="M280 -100 L240 300" stroke="#FFD700" strokeWidth="12" fill="none" strokeDasharray="20,5" />
                                    <rect x="100" y="300" width="200" height="80" rx="10" fill="#1A1A1A" stroke="#FFD700" strokeWidth="5" />
                                    <circle cx="110" cy="310" r="2" fill="white" className="animate-pulse" />
                                    <circle cx="290" cy="370" r="3" fill="white" className="animate-pulse delay-75" />
                                    <text x="200" y="350" textAnchor="middle" fontSize="28" fontWeight="bold" fontFamily="Impact, sans-serif" fill="#FFF" stroke="#000" strokeWidth="1" letterSpacing="2">
                                        PUNCHMADE
                                    </text>
                                </g>
                            )}
                        </svg>
                    </>
                )}

            </div>

        </div>
      </div>
    </section>
  );
};
