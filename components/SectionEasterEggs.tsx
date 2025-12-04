import React, { useState } from 'react';

// Triple-click Easter Egg Component
export const TripleClickEasterEgg: React.FC<{ children: React.ReactNode; message: string }> = ({ children, message }) => {
  const [showMessage, setShowMessage] = useState(false);
  const [lastClick, setLastClick] = useState(0);
  const clicksRef = React.useRef(0);

  const handleClick = () => {
    const now = Date.now();
    if (now - lastClick < 500) {
      clicksRef.current++;
      if (clicksRef.current === 3) {
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
          clicksRef.current = 0;
        }, 5000);
      }
    } else {
      clicksRef.current = 1;
    }
    setLastClick(now);
  };

  return (
    <div className="relative inline-block">
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>
      {showMessage && (
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-50 bg-black text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl animate-bounce-in border border-purple-400">
          <div className="text-xs font-mono">{message}</div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-black"></div>
        </div>
      )}
    </div>
  );
};

// Long Hover Easter Egg
export const LongHoverEasterEgg: React.FC<{ children: React.ReactNode; secret: string }> = ({ children, secret }) => {
  const [showSecret, setShowSecret] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<number | null>(null);

  const handleMouseEnter = () => {
    const timer = window.setTimeout(() => {
      setShowSecret(true);
    }, 3000);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    window.setTimeout(() => setShowSecret(false), 100);
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showSecret && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg text-xs font-mono shadow-2xl animate-fade-in-up whitespace-nowrap max-w-xs">
          💀 {secret}
        </div>
      )}
    </div>
  );
};

// Hidden Button Easter Egg
export const HiddenButton: React.FC<{ onClick: () => void; position: { top?: string; bottom?: string; left?: string; right?: string } }> = ({ onClick, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed w-4 h-4 rounded-full transition-all duration-300 ${
        isHovered ? 'bg-pink-500 scale-150 shadow-lg shadow-pink-500/50' : 'bg-transparent'
      }`}
      style={{
        ...position,
        zIndex: 9999,
        border: isHovered ? '2px solid white' : 'none',
      }}
      aria-label="Secret button"
    />
  );
};

// Shake on Hover
export const ShakeOnHover: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isShaking, setIsShaking] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsShaking(true)}
      onMouseLeave={() => setIsShaking(false)}
      className={isShaking ? 'animate-shake-crazy' : ''}
    >
      {children}
    </div>
  );
};

// Glitch Text Effect
export const GlitchText: React.FC<{ children: string; className?: string }> = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
      className={`relative inline-block ${className}`}
    >
      {children}
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-glitch-1">{children}</span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-glitch-2">{children}</span>
        </>
      )}
    </span>
  );
};

// Typing Reveal Easter Egg
export const TypingReveal: React.FC<{ hiddenText: string; trigger: string }> = ({ hiddenText, trigger }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [displayedText, setDisplayedText] = useState('');

  React.useEffect(() => {
    if (isRevealed) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < hiddenText.length) {
          setDisplayedText(hiddenText.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isRevealed, hiddenText]);

  return (
    <span
      onClick={() => setIsRevealed(!isRevealed)}
      className="cursor-pointer relative"
    >
      {isRevealed ? (
        <span className="text-pink-500 font-mono text-sm">
          {displayedText}
          <span className="animate-pulse">|</span>
        </span>
      ) : (
        <span className="underline decoration-dashed hover:text-purple-500 transition-colors">
          {trigger}
        </span>
      )}
    </span>
  );
};

// CSS for all Easter egg animations
export const EasterEggStyles = () => (
  <style>{`
    @keyframes shake-crazy {
      0%, 100% { transform: translateX(0) rotate(0deg); }
      10% { transform: translateX(-2px) rotate(-2deg); }
      20% { transform: translateX(2px) rotate(2deg); }
      30% { transform: translateX(-2px) rotate(-2deg); }
      40% { transform: translateX(2px) rotate(2deg); }
      50% { transform: translateX(-2px) rotate(-2deg); }
      60% { transform: translateX(2px) rotate(2deg); }
      70% { transform: translateX(-2px) rotate(-2deg); }
      80% { transform: translateX(2px) rotate(2deg); }
      90% { transform: translateX(-2px) rotate(-2deg); }
    }
    .animate-shake-crazy {
      animation: shake-crazy 0.5s ease-in-out infinite;
    }

    @keyframes glitch-1 {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
    }
    .animate-glitch-1 {
      animation: glitch-1 0.3s infinite;
    }

    @keyframes glitch-2 {
      0%, 100% { transform: translate(0); }
      20% { transform: translate(2px, -2px); }
      40% { transform: translate(2px, 2px); }
      60% { transform: translate(-2px, -2px); }
      80% { transform: translate(-2px, 2px); }
    }
    .animate-glitch-2 {
      animation: glitch-2 0.3s infinite reverse;
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(10px) translateX(-50%); }
      to { opacity: 1; transform: translateY(0) translateX(-50%); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.3s ease-out;
    }

    @keyframes bounce-in {
      0% { transform: translate(-50%, -100%); opacity: 0; }
      50% { transform: translate(-50%, 5px); }
      100% { transform: translate(-50%, 0); opacity: 1; }
    }
    .animate-bounce-in {
      animation: bounce-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  `}</style>
);
