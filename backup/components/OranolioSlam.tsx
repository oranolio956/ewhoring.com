
import React, { useEffect, useState, useRef } from 'react';

export const OranolioSlam: React.FC = () => {
  const [active, setActive] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayed) {
          setActive(true);
          setHasPlayed(true);
          
          // The sequence duration
          setTimeout(() => {
            setActive(false);
          }, 1800);
        }
      },
      { threshold: 0.5 }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [hasPlayed]);

  return (
    <>
      {/* Invisible Trigger Line - Removed vertical spacing to close gap */}
      <div ref={triggerRef} className="w-full h-0 pointer-events-none opacity-0" />

      {/* The Overlay */}
      {active && (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black overflow-hidden cursor-none pointer-events-none">
          
          <style>{`
            @keyframes slam-enter {
              0% { transform: scale(10); opacity: 0; }
              40% { transform: scale(1); opacity: 1; }
              45% { transform: scale(1.1); }
              50% { transform: scale(1); }
              100% { transform: scale(1); }
            }
            @keyframes violent-shake {
              0% { transform: translate(1px, 1px) rotate(0deg); }
              10% { transform: translate(-3px, -2px) rotate(-1deg); }
              20% { transform: translate(-6px, 0px) rotate(1deg); }
              30% { transform: translate(6px, 2px) rotate(0deg); }
              40% { transform: translate(1px, -1px) rotate(1deg); }
              50% { transform: translate(-1px, 2px) rotate(-1deg); }
              60% { transform: translate(-6px, 1px) rotate(0deg); }
              70% { transform: translate(6px, 1px) rotate(-1deg); }
              80% { transform: translate(-1px, -1px) rotate(1deg); }
              90% { transform: translate(1px, 2px) rotate(0deg); }
              100% { transform: translate(1px, -2px) rotate(-1deg); }
            }
            @keyframes flash-bg {
                0% { background-color: #000; }
                40% { background-color: #000; }
                41% { background-color: #FF8A75; }
                45% { background-color: #FDFBF7; }
                50% { background-color: #000; }
                100% { background-color: #000; }
            }
            @keyframes text-glitch {
                0% { clip-path: inset(50% 0 30% 0); transform: translate(-5px,0); }
                20% { clip-path: inset(20% 0 60% 0); transform: translate(5px,0); }
                40% { clip-path: inset(40% 0 40% 0); transform: translate(-5px,0); }
                60% { clip-path: inset(80% 0 5% 0); transform: translate(5px,0); }
                80% { clip-path: inset(10% 0 70% 0); transform: translate(-5px,0); }
                100% { clip-path: inset(30% 0 50% 0); transform: translate(5px,0); }
            }
          `}</style>

          <div className="absolute inset-0 w-full h-full animate-[flash-bg_1.5s_linear_forwards]"></div>
          
          <div className="relative z-10 animate-[slam-enter_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)_forwards]">
             <div className="animate-[violent-shake_0.5s_linear_infinite]">
                <h1 className="text-[12vw] leading-none font-black font-['Space_Grotesk'] text-[#FDFBF7] text-center tracking-tighter uppercase drop-shadow-[10px_10px_0px_#FF8A75] mix-blend-exclusion">
                    I'M F*CKING <br/>
                    ORANOLIO!!!
                </h1>
                
                {/* Glitch Layer 1 */}
                <h1 className="absolute inset-0 text-[12vw] leading-none font-black font-['Space_Grotesk'] text-[#2D9C8E] text-center tracking-tighter uppercase opacity-50 mix-blend-screen animate-[text-glitch_0.3s_infinite]" style={{ clipPath: 'inset(10% 0 60% 0)' }}>
                    I'M F*CKING <br/>
                    ORANOLIO!!!
                </h1>
                
                 {/* Glitch Layer 2 */}
                <h1 className="absolute inset-0 text-[12vw] leading-none font-black font-['Space_Grotesk'] text-[#FF0000] text-center tracking-tighter uppercase opacity-50 mix-blend-multiply animate-[text-glitch_0.3s_infinite_reverse]" style={{ clipPath: 'inset(80% 0 5% 0)', transform: 'translate(4px, -4px)' }}>
                    I'M F*CKING <br/>
                    ORANOLIO!!!
                </h1>
             </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <p className="text-[#FDFBF7] font-mono uppercase tracking-[1em] text-sm animate-pulse">
                SYSTEM OVERRIDE DETECTED
            </p>
          </div>

        </div>
      )}
    </>
  );
};
