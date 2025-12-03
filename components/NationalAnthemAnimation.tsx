import React, { useState, useEffect } from 'react';

interface NationalAnthemAnimationProps {
  isActive: boolean;
  onComplete: () => void;
}

export const NationalAnthemAnimation: React.FC<NationalAnthemAnimationProps> = ({ isActive, onComplete }) => {
  const [phase, setPhase] = useState<'entering' | 'saluting' | 'shushing' | 'exiting'>('entering');
  const [shushCount, setShushCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setPhase('entering');
      setShushCount(0);
      return;
    }

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
    { id: 1, x: 10, delay: 0, color: '#1A2A3A', personality: 'serious', hat: true },
    { id: 2, x: 25, delay: 0.1, color: '#2D9C8E', personality: 'proud', hat: false },
    { id: 3, x: 40, delay: 0.2, color: '#FF8A75', personality: 'shusher', hat: false },
    { id: 4, x: 55, delay: 0.3, color: '#F4D35E', personality: 'eager', hat: true },
    { id: 5, x: 70, delay: 0.4, color: '#1A2A3A', personality: 'stoic', hat: false },
    { id: 6, x: 85, delay: 0.5, color: '#2D9C8E', personality: 'enthusiastic', hat: true },
  ];

  const shusherIndex = 2; // Character 3 is the shusher

  return (
    <>
      {/* Overlay that pushes content off screen - slides in from right */}
      <div 
        className={`fixed inset-0 z-[99998] bg-[#FDFBF7] transition-transform duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isActive && phase !== 'exiting' ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          willChange: 'transform',
          transform: isActive && phase !== 'exiting' ? 'translateX(0)' : 'translateX(100%)'
        }}
      />

      {/* Main animation container - slides in from right */}
      {isActive && (
        <div 
          className={`fixed inset-0 z-[99999] bg-[#FDFBF7] ${
            phase === 'exiting' ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          style={{
            transform: phase === 'entering' 
              ? 'translateX(100%)' 
              : phase === 'exiting'
              ? 'translateX(-100%)' 
              : 'translateX(0)',
            transition: 'transform 2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1s ease-out',
            willChange: 'transform, opacity'
          }}
        >

        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle stars/particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#1A2A3A] rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main content area */}
        <div className="relative w-full h-full flex flex-col items-center justify-center">
          {/* Title with more dramatic entrance */}
          <div 
            className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
              phase === 'entering' ? 'opacity-0 translate-y-10 scale-95' : 'opacity-100 translate-y-0 scale-100'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1A2A3A] mb-2 md:mb-4 uppercase tracking-wider relative z-10">
                Moment of Silence
              </h2>
              {/* Decorative underline */}
              <div 
                className="h-1 bg-gradient-to-r from-transparent via-[#2D9C8E] to-transparent mx-auto"
                style={{
                  width: phase === 'entering' ? '0%' : '80%',
                  transition: 'width 1s ease-out 1s'
                }}
              />
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-[#1A2A3A]/70 font-serif italic mt-2 md:mt-4">
              for the National Anthem
            </p>
            {/* Subtle flag emoji decoration */}
            <div className="text-2xl md:text-4xl mt-2 opacity-50">
              🇺🇸
            </div>
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
                  {char.hat ? (
                    // Hat
                    <g>
                      <ellipse
                        cx="60"
                        cy="25"
                        rx="28"
                        ry="8"
                        fill={char.color}
                        opacity="0.9"
                      />
                      <rect
                        x="32"
                        y="25"
                        width="56"
                        height="8"
                        rx="4"
                        fill={char.color}
                        opacity="0.7"
                      />
                      {/* Hat band */}
                      <rect
                        x="35"
                        y="28"
                        width="50"
                        height="3"
                        fill="#1A2A3A"
                        opacity="0.5"
                      />
                    </g>
                  ) : (
                    // Hair
                    <g>
                      <ellipse
                        cx="60"
                        cy="25"
                        rx="28"
                        ry="12"
                        fill={char.color}
                        opacity="0.8"
                      />
                      {/* Hair texture */}
                      {[...Array(5)].map((_, i) => (
                        <line
                          key={i}
                          x1={45 + i * 5}
                          y1="20"
                          x2={45 + i * 5}
                          y2="30"
                          stroke={char.color}
                          strokeWidth="1"
                          opacity="0.4"
                        />
                      ))}
                    </g>
                  )}

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
                  {/* Eye pupils with more expression */}
                  <circle
                    cx={
                      phase === 'shushing' && index === shusherIndex 
                        ? "48" 
                        : phase === 'saluting' || phase === 'shushing'
                        ? "52"
                        : "50"
                    }
                    cy={
                      phase === 'shushing' && index === shusherIndex
                        ? "43"
                        : phase === 'saluting' || phase === 'shushing'
                        ? "44"
                        : "45"
                    }
                    r="2.5"
                    fill="#1A2A3A"
                    className="transition-all duration-300"
                  />
                  <circle
                    cx={
                      phase === 'shushing' && index === shusherIndex 
                        ? "68" 
                        : phase === 'saluting' || phase === 'shushing'
                        ? "72"
                        : "70"
                    }
                    cy={
                      phase === 'shushing' && index === shusherIndex
                        ? "43"
                        : phase === 'saluting' || phase === 'shushing'
                        ? "44"
                        : "45"
                    }
                    r="2.5"
                    fill="#1A2A3A"
                    className="transition-all duration-300"
                  />
                  {/* Eye highlights */}
                  <circle
                    cx="52"
                    cy="43"
                    r="1"
                    fill="#FDFBF7"
                    opacity="0.8"
                  />
                  <circle
                    cx="72"
                    cy="43"
                    r="1"
                    fill="#FDFBF7"
                    opacity="0.8"
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

                  {/* Arms - Saluting with more detail */}
                  {(phase === 'saluting' || phase === 'shushing') && index !== shusherIndex ? (
                    <>
                      {/* Right arm saluting - more dynamic */}
                      <line
                        x1="90"
                        y1="100"
                        x2="90"
                        y2="25"
                        stroke={char.color}
                        strokeWidth="9"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                        style={{
                          transform: `rotate(${-12 + (index % 2 === 0 ? 2 : -2)}deg)`,
                          transformOrigin: '90px 100px',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                      />
                      {/* Hand with fingers */}
                      <circle
                        cx="90"
                        cy="25"
                        r="9"
                        fill={char.color}
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                      />
                      {/* Fingers detail */}
                      <line x1="88" y1="20" x2="88" y2="15" stroke="#FDFBF7" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                      <line x1="90" y1="20" x2="90" y2="14" stroke="#FDFBF7" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                      <line x1="92" y1="20" x2="92" y2="15" stroke="#FDFBF7" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                    </>
                  ) : index === shusherIndex && phase === 'shushing' ? (
                    <>
                      {/* Shushing arm - more animated */}
                      <line
                        x1="90"
                        y1="100"
                        x2="115"
                        y2="45"
                        stroke={char.color}
                        strokeWidth="9"
                        strokeLinecap="round"
                        className="transition-all duration-300"
                        style={{
                          transform: `rotate(${-18 + Math.sin(shushCount * 3) * 6}deg)`,
                          transformOrigin: '90px 100px',
                          transition: 'transform 0.15s ease-out',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                      />
                      {/* Hand pointing - more expressive */}
                      <circle
                        cx="115"
                        cy="45"
                        r="11"
                        fill={char.color}
                        style={{
                          transform: `scale(${1 + Math.sin(shushCount * 3) * 0.15})`,
                          transition: 'transform 0.15s ease-out',
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                        }}
                      />
                      {/* Index finger extended - animated */}
                      <line
                        x1="115"
                        y1="45"
                        x2="115"
                        y2={30 + Math.sin(shushCount * 3) * 3}
                        stroke="#FDFBF7"
                        strokeWidth="4"
                        strokeLinecap="round"
                        style={{
                          transition: 'y2 0.15s ease-out'
                        }}
                      />
                      {/* Thumb */}
                      <line
                        x1="115"
                        y1="45"
                        x2="120"
                        y2="40"
                        stroke="#FDFBF7"
                        strokeWidth="3"
                        strokeLinecap="round"
                        opacity="0.8"
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

                  {/* Legs with feet */}
                  <line
                    x1="45"
                    y1="180"
                    x2="45"
                    y2="195"
                    stroke={char.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <line
                    x1="75"
                    y1="180"
                    x2="75"
                    y2="195"
                    stroke={char.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  {/* Feet */}
                  <ellipse
                    cx="45"
                    cy="195"
                    rx="6"
                    ry="4"
                    fill={char.color}
                  />
                  <ellipse
                    cx="75"
                    cy="195"
                    rx="6"
                    ry="4"
                    fill={char.color}
                  />
                  {/* Shoe detail */}
                  <line
                    x1="39"
                    y1="195"
                    x2="51"
                    y2="195"
                    stroke="#1A2A3A"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="69"
                    y1="195"
                    x2="81"
                    y2="195"
                    stroke="#1A2A3A"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                </svg>

                {/* Shushing text bubble - enhanced */}
                {index === shusherIndex && phase === 'shushing' && (
                  <div
                    className="absolute -top-20 left-1/2 -translate-x-1/2 bg-[#1A2A3A] text-white px-5 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap shadow-xl"
                    style={{
                      opacity: Math.abs(Math.sin(shushCount * 2)),
                      transform: `translateX(-50%) scale(${1 + Math.sin(shushCount * 2) * 0.15}) rotate(${Math.sin(shushCount * 2) * 3}deg)`,
                      transition: 'opacity 0.1s ease-out, transform 0.1s ease-out',
                      border: '2px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    <span className="inline-block animate-pulse">SHHH!</span> 🤫
                    {/* Speech bubble tail */}
                    <div 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-[#1A2A3A]"
                    />
                  </div>
                )}
                
                {/* Saluting characters get a subtle glow */}
                {(phase === 'saluting' || phase === 'shushing') && index !== shusherIndex && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${char.color}20 0%, transparent 70%)`,
                      animation: 'pulse-glow 2s ease-in-out infinite',
                      animationDelay: `${index * 0.1}s`
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Subtle instruction text with more humor */}
          {phase === 'shushing' && (
            <div
              className="mt-6 md:mt-8 text-center text-xs md:text-sm text-[#1A2A3A]/60 italic font-serif"
              style={{
                opacity: Math.abs(Math.sin(shushCount * 1.5)),
                transition: 'opacity 0.2s ease-out'
              }}
            >
              <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>👀</span>
              <span className="mx-2">(Someone's being too loud...)</span>
              <span className="inline-block animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.5s' }}>👀</span>
            </div>
          )}
          
          {/* Countdown or status indicator */}
          {phase === 'saluting' && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm text-[#1A2A3A]/40 font-mono">
                <div className="w-2 h-2 bg-[#2D9C8E] rounded-full animate-pulse" />
                <span>Standing at attention...</span>
                <div className="w-2 h-2 bg-[#2D9C8E] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          )}
        </div>
        </div>
      )}

      {/* Push main content off screen - using a more targeted approach */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        body {
          overflow: ${isActive && phase !== 'exiting' ? 'hidden' : 'auto'};
        }
        /* Push the main app container off screen - only when animation is active */
        body > div:first-child {
          transform: ${isActive && (phase === 'entering' || phase === 'saluting' || phase === 'shushing')
            ? 'translateX(-100%)' 
            : 'translateX(0)'};
          transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: ${isActive ? 'transform' : 'auto'};
        }
      `}</style>
    </>
  );
};
