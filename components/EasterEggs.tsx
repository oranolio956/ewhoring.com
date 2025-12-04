import React, { useState, useEffect } from 'react';

export const EasterEggs: React.FC = React.memo(() => {
  const [konamiProgress, setKonamiProgress] = useState(0);
  const [showKonamiReward, setShowKonamiReward] = useState(false);
  const [showDevMessage, setShowDevMessage] = useState(false);
  const [scrollDepth, setScrollDepth] = useState(0);
  const [mouseIdleTime, setMouseIdleTime] = useState(0);
  const [showRageQuit, setShowRageQuit] = useState(false);
  const [showSecretMenu, setShowSecretMenu] = useState(false);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  useEffect(() => {
    // Console ASCII Art
    console.log(`
%c
▓█████ █     █░ ██░ ██  ▒█████   ██▀███   ██▓ ███▄    █   ▄████ 
▓█   ▀ ▓█░ █ ░█░▓██░ ██▒▒██▒  ██▒▓██ ▒ ██▒▓██▒ ██ ▀█   █  ██▒ ▀█▒
▒███   ▒█░ █ ░█ ▒██▀▀██░▒██░  ██▒▓██ ░▄█ ▒▒██▒▓██  ▀█ ██▒▒██░▄▄▄░
▒▓█  ▄ ░█░ █ ░█ ░▓█ ░██ ▒██   ██░▒██▀▀█▄  ░██░▓██▒  ▐▌██▒░▓█  ██▓
░▒████▒░░██▒██▓ ░▓█▒░██▓░ ████▓▒░░██▓ ▒██▒░██░▒██░   ▓██░░▒▓███▀▒
░░ ▒░ ░░ ▓░▒ ▒   ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒▓ ░▒▓░░▓  ░ ▒░   ▒ ▒  ░▒   ▒ 
 ░ ░  ░  ▒ ░ ░   ▒ ░▒░ ░  ░ ▒ ▒░   ░▒ ░ ▒░ ▒ ░░ ░░   ░ ▒░  ░   ░ 
   ░     ░   ░   ░  ░░ ░░ ░ ░ ▒    ░░   ░  ▒ ░   ░   ░ ░ ░ ░   ░ 
   ░  ░    ░     ░  ░  ░    ░ ░     ░      ░           ░       ░ 

%c🍺 Congrats, you opened the console!
%c⚠️  WARNING: If you're trying to steal this code...
%c😂 It's literally just satire about getting simps to send you money
%c💀 But hey, at least view-source the rambling sequences
%c🎭 Each crypto tells a different tragic story
%c📱 Also I'm dead serious about the Telegram resources
%c🔥 This site cost me $3000 drunk. HELP.
    `, 
      'font-family: monospace; color: #FF8A75; font-size: 10px;',
      'font-size: 16px; color: #2D9C8E; font-weight: bold;',
      'font-size: 14px; color: #FF6347;',
      'font-size: 14px; color: #FFD700;',
      'font-size: 14px; color: #FF69B4;',
      'font-size: 14px; color: #87CEEB;',
      'font-size: 14px; color: #98FB98;',
      'font-size: 14px; color: #DDA0DD;',
      'font-size: 14px; color: #FF4444; font-weight: bold;'
    );

    // Detect if DevTools opened
    const devToolsCheck = setInterval(() => {
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      if (widthThreshold || heightThreshold) {
        setShowDevMessage(true);
      }
    }, 1000);

    return () => clearInterval(devToolsCheck);
  }, []);

  // Konami Code Handler
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === konamiCode[konamiProgress]) {
        const newProgress = konamiProgress + 1;
        setKonamiProgress(newProgress);
        
        if (newProgress === konamiCode.length) {
          setShowKonamiReward(true);
          setKonamiProgress(0);
          setTimeout(() => setShowKonamiReward(false), 10000);
        }
      } else {
        setKonamiProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiProgress]);

  // Scroll Depth Tracker
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollDepth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse Idle Detector
  useEffect(() => {
    let timeout: number;
    const resetTimer = () => {
      clearTimeout(timeout);
      setMouseIdleTime(0);
      timeout = window.setTimeout(() => {
        setMouseIdleTime(5);
      }, 5000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('click', resetTimer);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('click', resetTimer);
    };
  }, []);

  // Global Click Counter
  useEffect(() => {
    let localClickCount = 0;
    const handleClick = () => {
      localClickCount++;
      if (localClickCount === 100) {
        setShowRageQuit(true);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Midnight Easter Egg
  const [isMidnight, setIsMidnight] = useState(false);
  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours();
      setIsMidnight(hour === 0 || hour === 1);
    };
    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Prevent Right Click with Message
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      setShowSecretMenu(true);
      setTimeout(() => setShowSecretMenu(false), 3000);
    };

    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <>
      {/* Konami Code Reward */}
      {showKonamiReward && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-lg animate-fade-in">
          <div className="text-center space-y-6 px-8">
            <div className="text-8xl animate-bounce">🎮</div>
            <h2 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-gradient-flow">
              KONAMI CODE ACTIVATED
            </h2>
            <p className="text-2xl text-white font-mono">
              Congrats, you're a true gamer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl">
              Fun fact: I spent 6 hours building these Easter eggs instead of actually learning how to ewhore properly. 
              My priorities are clearly in order.
            </p>
            <div className="text-xl text-pink-400 font-bold">
              💀 Secret Unlocked: You're now emotionally invested in this satirical mess
            </div>
          </div>
        </div>
      )}

      {/* DevTools Detective */}
      {showDevMessage && (
        <div className="fixed top-24 right-4 z-[9999] bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-lg shadow-2xl max-w-sm animate-slide-in-right">
          <div className="flex items-start gap-3">
            <span className="text-3xl">👨‍💻</span>
            <div>
              <h3 className="font-bold text-lg mb-1">I SEE YOU</h3>
              <p className="text-sm opacity-90">
                Inspecting my code? Respect. But this whole site is just a drunk domain purchase. 
                The real value is in the stories. And maybe therapy.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Depth Messages */}
      {scrollDepth > 50 && scrollDepth < 51 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm shadow-xl animate-bounce-in">
          🎉 Halfway there! You're actually reading this mess. Impressive.
        </div>
      )}

      {scrollDepth > 99 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-gradient-to-r from-green-400 to-emerald-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl animate-bounce-in">
          🏆 You scrolled to the bottom. You're either very bored or very invested. Either way... thank you? ❤️
        </div>
      )}

      {/* Mouse Idle Easter Egg */}
      {mouseIdleTime === 5 && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] text-center animate-fade-in">
          <div className="text-6xl mb-4">😴</div>
          <p className="text-2xl text-white font-bold drop-shadow-lg">
            Still there?
          </p>
          <p className="text-lg text-gray-300 drop-shadow-lg">
            You've been idle for 5 seconds. That's like, forever in internet time.
          </p>
        </div>
      )}

      {/* Midnight Mode */}
      {isMidnight && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] bg-gradient-to-r from-indigo-900 to-purple-900 text-white px-6 py-3 rounded-lg shadow-xl border border-purple-400 animate-pulse-slow">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌙</span>
            <div>
              <p className="font-bold text-sm">MIDNIGHT SPECIAL</p>
              <p className="text-xs opacity-80">It's past midnight. Go to bed. Or keep reading about ewhoring. Your call.</p>
            </div>
          </div>
        </div>
      )}

      {/* 100 Clicks Achievement */}
      {showRageQuit && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-red-900/95 backdrop-blur-lg animate-shake">
          <div className="text-center space-y-6 px-8 max-w-2xl">
            <div className="text-8xl animate-spin-slow">🤯</div>
            <h2 className="text-5xl font-black text-white">
              100 CLICKS DETECTED
            </h2>
            <p className="text-2xl text-yellow-300 font-bold">
              RAGE QUIT MODE ACTIVATED
            </p>
            <p className="text-lg text-white">
              You've clicked 100 times. That's either dedication or madness. 
              Probably both. Here's your reward:
            </p>
            <div className="text-3xl text-pink-400 font-mono">
              Nothing. Absolutely nothing. 😈
            </div>
            <button
              onClick={() => setShowRageQuit(false)}
              className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all"
            >
              I HATE YOU
            </button>
          </div>
        </div>
      )}

      {/* Right Click Menu */}
      {showSecretMenu && (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[99999] bg-gradient-to-br from-red-600 to-pink-600 text-white px-8 py-6 rounded-lg shadow-2xl border-4 border-white animate-scale-in">
          <div className="text-center space-y-3">
            <div className="text-5xl">🚫</div>
            <h3 className="text-2xl font-black">NICE TRY</h3>
            <p className="text-sm">
              Right-clicking? Really? What are you trying to do, inspect the blockchain of my trauma dumps?
            </p>
            <p className="text-xs opacity-80">
              (jk you can still inspect, I'm not a monster)
            </p>
          </div>
        </div>
      )}

      {/* Hidden Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes bounce-in {
          0% { transform: translate(-50%, 100%); opacity: 0; }
          50% { transform: translate(-50%, -20px); }
          100% { transform: translate(-50%, 0); opacity: 1; }
        }
        @keyframes scale-in {
          from { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .animate-scale-in {
          animation: scale-in 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradient-flow 3s ease infinite;
        }
        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </>
  );
});

EasterEggs.displayName = 'EasterEggs';
