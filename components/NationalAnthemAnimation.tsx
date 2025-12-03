import React, { useState, useEffect } from 'react';

interface NationalAnthemAnimationProps {
  isActive: boolean;
  onComplete: () => void;
}

export const NationalAnthemAnimation: React.FC<NationalAnthemAnimationProps> = ({ isActive, onComplete }) => {
  const [phase, setPhase] = useState<'entering' | 'saluting' | 'shushing' | 'exiting'>('entering');
  const [shushCount, setShushCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    // Phase 1: Characters enter and push content (0-2000ms)
    setPhase('entering');
    const enterTimer = setTimeout(() => {
      setPhase('saluting');
    }, 2000);

    // Phase 2: Saluting (2000-5000ms)
    const saluteTimer = setTimeout(() => {
      setPhase('shushing');
    }, 5000);

    // Phase 3: Shushing animation (5000-8000ms)
    const shushInterval = setInterval(() => {
      setShushCount(prev => prev + 1);
    }, 400);

    const shushTimer = setTimeout(() => {
      clearInterval(shushInterval);
      setPhase('exiting');
    }, 8000);

    // Phase 4: Exit (8000-10000ms)
    const exitTimer = setTimeout(() => {
      onComplete();
      setPhase('entering');
      setShushCount(0);
    }, 10000);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(saluteTimer);
      clearTimeout(shushTimer);
      clearTimeout(exitTimer);
      clearInterval(shushInterval);
    };
  }, [isActive, onComplete]);

  if (!isActive) return null;

  const characters = [
    { id: 1, x: 10, delay: 0, color: '#1A2A3A' },
    { id: 2, x: 25, delay: 0.1, color: '#2D9C8E' },
    { id: 3, x: 40, delay: 0.2, color: '#FF8A75' },
    { id: 4, x: 55, delay: 0.3, color: '#F4D35E' },
    { id: 5, x: 70, delay: 0.4, color: '#1A2A3A' },
    { id: 6, x: 85, delay: 0.5, color: '#2D9C8E' },
  ];

  const shusherIndex = 2; // Character 3 is the shusher

  return (
    <>
      {/* Overlay that pushes content off screen */}
      <div 
        className={`fixed inset-0 z-[99998] bg-[#FDFBF7] transition-transform duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive && phase !== 'exiting' ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          willChange: 'transform'
        }}
      />

      {/* Main animation container */}
      <div 
        className={`fixed inset-0 z-[99999] bg-[#FDFBF7] transition-opacity duration-500 ${
          phase === 'exiting' ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          transform: phase === 'entering' ? 'translateX(100%)' : 
                     phase === 'exiting' ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease-out',
          willChange: 'transform, opacity'
        }}
      >

        {/* Main content area */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Title */}
          <div 
            className={`text-center mb-12 transition-all duration-500 ${
              phase === 'entering' ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#1A2A3A] mb-4 uppercase tracking-wider">
              Moment of Silence
            </h2>
            <p className="text-xl md:text-2xl text-[#1A2A3A]/70 font-serif italic">
              for the National Anthem
            </p>
          </div>

          {/* Characters row */}
          <div className="relative w-full max-w-4xl px-8 flex items-end justify-center gap-4 md:gap-8">
            {characters.map((char, index) => (
              <div
                key={char.id}
                className="relative"
                style={{
                  transform: phase === 'entering' 
                    ? `translateX(${-100 + char.x}vw) scale(0.8) rotate(-5deg)` 
                    : 'translateX(0) scale(1) rotate(0deg)',
                  opacity: phase === 'entering' ? 0 : 1,
                  transition: `transform 2s cubic-bezier(0.4, 0, 0.2, 1) ${char.delay}s, opacity 1s ease-out ${char.delay}s`,
                  willChange: 'transform, opacity'
                }}
              >
                {/* Character SVG */}
                <svg
                  width="120"
                  height="200"
                  viewBox="0 0 120 200"
                  className="drop-shadow-lg"
                >
                  <defs>
                    <linearGradient id={`gradient-${char.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={char.color} />
                      <stop offset="100%" stopColor={char.color} stopOpacity="0.7" />
                    </linearGradient>
                  </defs>

                  {/* Body */}
                  <rect
                    x="30"
                    y="80"
                    width="60"
                    height="100"
                    rx="8"
                    fill={`url(#gradient-${char.id})`}
                    stroke="#1A2A3A"
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      transform: phase === 'saluting' || phase === 'shushing' 
                        ? 'translateY(-10px)' 
                        : 'translateY(0)',
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                  {/* Shirt detail */}
                  <rect
                    x="35"
                    y="85"
                    width="50"
                    height="30"
                    rx="4"
                    fill={char.color}
                    opacity="0.3"
                  />

                  {/* Head */}
                  <circle
                    cx="60"
                    cy="50"
                    r="30"
                    fill={char.color}
                    stroke="#1A2A3A"
                    strokeWidth="2"
                    className="transition-all duration-300"
                    style={{
                      transform: phase === 'saluting' || phase === 'shushing' 
                        ? 'translateY(-5px)' 
                        : 'translateY(0)',
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                  {/* Hair/hat detail */}
                  <ellipse
                    cx="60"
                    cy="25"
                    rx="28"
                    ry="12"
                    fill={char.color}
                    opacity="0.8"
                  />

                  {/* Eyes */}
                  <circle
                    cx="50"
                    cy="45"
                    r="5"
                    fill="#FDFBF7"
                    className={phase === 'shushing' && index === shusherIndex ? 'animate-pulse' : ''}
                  />
                  <circle
                    cx="70"
                    cy="45"
                    r="5"
                    fill="#FDFBF7"
                    className={phase === 'shushing' && index === shusherIndex ? 'animate-pulse' : ''}
                  />
                  {/* Eye pupils */}
                  <circle
                    cx={phase === 'shushing' && index === shusherIndex ? "48" : "50"}
                    cy="45"
                    r="2"
                    fill="#1A2A3A"
                    className="transition-all duration-200"
                  />
                  <circle
                    cx={phase === 'shushing' && index === shusherIndex ? "68" : "70"}
                    cy="45"
                    r="2"
                    fill="#1A2A3A"
                    className="transition-all duration-200"
                  />

                  {/* Mouth */}
                  {index === shusherIndex && phase === 'shushing' ? (
                    // Shushing mouth
                    <g>
                      <circle
                        cx="60"
                        cy="58"
                        r="6"
                        fill="#FDFBF7"
                        style={{
                          transform: `scale(${1 + Math.sin(shushCount * 2) * 0.2})`,
                          transition: 'transform 0.1s ease-out'
                        }}
                      />
                      <text
                        x="60"
                        y="62"
                        textAnchor="middle"
                        fontSize="12"
                        fill={char.color}
                        fontWeight="bold"
                        style={{
                          opacity: Math.abs(Math.sin(shushCount * 2)),
                          transition: 'opacity 0.1s ease-out'
                        }}
                      >
                        shh
                      </text>
                    </g>
                  ) : (
                    // Normal mouth
                    <ellipse
                      cx="60"
                      cy="58"
                      rx="8"
                      ry="4"
                      fill="#FDFBF7"
                    />
                  )}

                  {/* Arms - Saluting */}
                  {(phase === 'saluting' || phase === 'shushing') && index !== shusherIndex ? (
                    <>
                      {/* Right arm saluting */}
                      <line
                        x1="90"
                        y1="100"
                        x2="90"
                        y2="30"
                        stroke={char.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                        style={{
                          transform: 'rotate(-15deg)',
                          transformOrigin: '90px 100px'
                        }}
                      />
                      {/* Hand */}
                      <circle
                        cx="90"
                        cy="30"
                        r="8"
                        fill={char.color}
                      />
                    </>
                  ) : index === shusherIndex && phase === 'shushing' ? (
                    <>
                      {/* Shushing arm */}
                      <line
                        x1="90"
                        y1="100"
                        x2="110"
                        y2="50"
                        stroke={char.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                        style={{
                          transform: `rotate(${-20 + Math.sin(shushCount * 3) * 5}deg)`,
                          transformOrigin: '90px 100px',
                          transition: 'transform 0.2s ease-out'
                        }}
                      />
                      {/* Hand pointing */}
                      <circle
                        cx="110"
                        cy="50"
                        r="10"
                        fill={char.color}
                        style={{
                          transform: `scale(${1 + Math.sin(shushCount * 3) * 0.1})`,
                          transition: 'transform 0.2s ease-out'
                        }}
                      />
                      {/* Index finger extended */}
                      <line
                        x1="110"
                        y1="50"
                        x2="110"
                        y2="35"
                        stroke="#FDFBF7"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </>
                  ) : (
                    <>
                      {/* Normal arms */}
                      <line
                        x1="30"
                        y1="100"
                        x2="10"
                        y2="140"
                        stroke={char.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="90"
                        y1="100"
                        x2="110"
                        y2="140"
                        stroke={char.color}
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </>
                  )}

                  {/* Legs */}
                  <line
                    x1="45"
                    y1="180"
                    x2="45"
                    y2="200"
                    stroke={char.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="75"
                    y1="180"
                    x2="75"
                    y2="200"
                    stroke={char.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Shushing text bubble */}
                {index === shusherIndex && phase === 'shushing' && (
                  <div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 bg-[#1A2A3A] text-white px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap"
                    style={{
                      opacity: Math.abs(Math.sin(shushCount * 2)),
                      transform: `translateX(-50%) scale(${1 + Math.sin(shushCount * 2) * 0.1})`,
                      transition: 'opacity 0.1s ease-out, transform 0.1s ease-out'
                    }}
                  >
                    SHHH! 🤫
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Subtle instruction text */}
          {phase === 'shushing' && (
            <div
              className="mt-8 text-center text-sm text-[#1A2A3A]/50 italic"
              style={{
                opacity: Math.abs(Math.sin(shushCount * 1.5)),
                transition: 'opacity 0.2s ease-out'
              }}
            >
              (Someone's being too loud...)
            </div>
          )}
        </div>
      </div>

      {/* Push main content off screen - using a more targeted approach */}
      <style>{`
        body {
          overflow: ${isActive && phase !== 'exiting' ? 'hidden' : 'auto'};
        }
        /* Push the main app container off screen */
        body > div:first-child {
          transform: ${isActive && (phase === 'entering' || phase === 'saluting' || phase === 'shushing')
            ? 'translateX(-100%)' 
            : 'translateX(0)'};
          transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform;
        }
      `}</style>
    </>
  );
};
