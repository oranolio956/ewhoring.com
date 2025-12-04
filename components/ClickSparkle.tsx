
import React, { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export const ClickSparkle: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const id = Date.now();
      setSparkles(prev => [...prev, { id, x: e.clientX, y: e.clientY }]);
      
      // Cleanup
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== id));
      }, 1000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {sparkles.map(s => (
        <div key={s.id} className="absolute" style={{ left: s.x, top: s.y }}>
            {/* Burst Particles */}
            {[...Array(6)].map((_, i) => (
                <div 
                    key={i}
                    className="absolute w-1 h-1 bg-[#2D9C8E] rounded-full animate-sparkle"
                    style={{
                        transform: `rotate(${i * 60}deg)`,
                        animationDelay: '0s'
                    }}
                ></div>
            ))}
            {/* Dollar Sign */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 text-[#FF8A75] font-bold text-xl animate-float-up opacity-0">
                $
            </div>
        </div>
      ))}
      <style>{`
        @keyframes sparkle {
            0% { transform: rotate(var(--rot)) translate(0,0) scale(1); opacity: 1; }
            100% { transform: rotate(var(--rot)) translate(20px, 0) scale(0); opacity: 0; }
        }
        @keyframes float-up {
            0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
            100% { transform: translate(-50%, -150%) scale(1.5); opacity: 0; }
        }
        .animate-sparkle {
            animation: sparkle 0.5s ease-out forwards;
            --rot: 0deg; /* Overridden inline */
        }
        .animate-float-up {
            animation: float-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
