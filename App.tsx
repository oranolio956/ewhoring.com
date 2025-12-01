import React, { useState, useEffect, useRef } from 'react';

const DISCORD_LINK = "https://discord.gg/ovrtime";

// THE RIDICULOUS HATER SONG LYRICS
const HATER_SONG_LYRICS = [
  "🎤 OH YOU'RE A HATER? 🎤",
  "Yeah you mad, yeah you big mad! 😤",
  "Scrolling through my page, making you so sad! 😢",
  "You ain't got the sauce, you ain't got the drip! 💧",
  "While I'm making moves, you just sit and trip! 🚶",
  "",
  "🔥 CHORUS: HATER HATER HATER! 🔥",
  "See you later, alligator! 🐊",
  "You're a spectator, I'm the creator! 🎨",
  "OVERTIME got me feeling greater! 💪",
  "",
  "🎵 VERSE 2: 🎵",
  "You clicked on my site, now you're stuck in the vibe! 🌊",
  "discord.gg/ovrtime - join the tribe! 👥",
  "BUY! SELL! REPEAT! That's the way we roll! 🎲",
  "Haters gonna hate but we got that SOUL! 👻",
  "",
  "💜 BRIDGE: 💜",
  "Dunkaroos in my veins, cookies for days! 🍪",
  "This website so fire, setting haters ablaze! 🔥",
  "Respect the drip or get out the way! 💦",
  "OVERTIME GANG - we don't play! 🎮",
  "",
  "🚀 FINAL CHORUS: 🚀",
  "HATER HATER, why you gotta hate? 😠",
  "Join the Discord, it's never too late! ⏰",
  "discord.gg/ovrtime - that's the spot! 📍",
  "OVERTIME crew - WE'RE TOO HOT! 🌶️",
  "",
  "🎤 *mic drop* 🎤",
  "~ Produced by Dunkaroos Gang ~"
];

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [clicks, setClicks] = useState<{ x: number; y: number; id: number }[]>([]);
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [showSong, setShowSong] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-play the hater song lyrics
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentLyricIndex(prev => {
          if (prev >= HATER_SONG_LYRICS.length - 1) {
            return 0; // Loop back
          }
          return prev + 1;
        });
      }, 1500); // Change lyric every 1.5 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  // Show song after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSong(true);
      setIsPlaying(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const newClick = { x: e.clientX, y: e.clientY, id: Date.now() };
    setClicks(prev => [...prev, newClick]);
    setTimeout(() => {
      setClicks(prev => prev.filter(c => c.id !== newClick.id));
    }, 1000);
  };

  const goToDiscord = () => {
    window.open(DISCORD_LINK, '_blank');
  };

  return (
    <div 
      ref={containerRef}
      onClick={handleClick}
      className="min-h-screen w-full overflow-hidden relative cursor-pointer"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 25%, #0f0f23 50%, #0a1628 75%, #0a0a0a 100%)',
      }}
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-bg" />
      </div>

      {/* Floating Discord Links Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="floating-link absolute text-white/10 font-mono text-xs whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {DISCORD_LINK}
          </div>
        ))}
      </div>

      {/* Pulsing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="pulse-orb absolute rounded-full"
            style={{
              left: `${10 + (i * 12)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#ff00ff' : '#00ffff'}22 0%, transparent 70%)`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Scan Lines */}
      <div className="scan-lines absolute inset-0 pointer-events-none" />

      {/* Mouse Follow Glow */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 transition-all duration-100"
        style={{
          left: mousePos.x - 192,
          top: mousePos.y - 192,
          background: 'radial-gradient(circle, rgba(255,0,255,0.15) 0%, rgba(0,255,255,0.1) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Click Explosions */}
      {clicks.map(click => (
        <div
          key={click.id}
          className="click-explosion fixed pointer-events-none z-50"
          style={{ left: click.x, top: click.y }}
        >
          <div className="explosion-ring" />
          <div className="explosion-ring delay-1" />
          <div className="explosion-ring delay-2" />
          <span className="explosion-text">{DISCORD_LINK}</span>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        
        {/* Top Discord Links Rain */}
        <div className="absolute top-0 left-0 right-0 overflow-hidden h-32">
          <div className="discord-rain">
            {[...Array(20)].map((_, i) => (
              <span 
                key={i} 
                className="rain-drop"
                style={{ animationDelay: `${i * 0.2}s`, left: `${i * 5}%` }}
              >
                {DISCORD_LINK}
              </span>
            ))}
          </div>
        </div>

        {/* OVERTIME Title */}
        <div className="text-center mb-8 relative">
          <h1 className="overtime-title text-[8vw] md:text-[12vw] font-black tracking-tighter leading-none">
            <span className="glitch-text" data-text="OVERTIME">OVERTIME</span>
          </h1>
          
          {/* Subtitle with animation */}
          <div className="buy-sell-repeat mt-4 md:mt-8">
            <span className="word buy">BUY</span>
            <span className="word sell">SELL</span>
            <span className="word repeat">REPEAT</span>
          </div>
        </div>

        {/* Center Discord Link - Giant */}
        <button
          onClick={goToDiscord}
          className="discord-button group relative overflow-hidden px-8 py-6 md:px-16 md:py-8 rounded-2xl font-bold text-lg md:text-3xl tracking-wider uppercase transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <span className="relative z-10 flex items-center gap-4">
            <svg className="w-8 h-8 md:w-12 md:h-12 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            discord.gg/ovrtime
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#7289da] to-[#5865F2] opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
        </button>

        {/* 🎤 THE RIDICULOUS HATER SONG 🎤 */}
        {showSong && (
          <div className="hater-song-container mt-8 md:mt-12 w-full max-w-2xl mx-auto">
            <div className="song-header text-center mb-4">
              <h2 className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#ffff00] to-[#00ffff] animate-pulse">
                🎵 THE HATER SONG 🎵
              </h2>
              <p className="text-white/60 text-sm mt-2">~ A Musical Journey for All You Haters ~</p>
            </div>
            
            <div className="lyrics-display relative overflow-hidden rounded-2xl p-6 md:p-8" style={{
              background: 'linear-gradient(135deg, rgba(88,101,242,0.3) 0%, rgba(255,0,255,0.2) 50%, rgba(0,255,255,0.3) 100%)',
              border: '2px solid rgba(255,255,255,0.2)',
              boxShadow: '0 0 40px rgba(255,0,255,0.3), inset 0 0 60px rgba(88,101,242,0.2)'
            }}>
              {/* Bouncing Music Notes */}
              <div className="absolute top-2 left-4 text-2xl music-note">🎵</div>
              <div className="absolute top-2 right-4 text-2xl music-note delay-1">🎶</div>
              <div className="absolute bottom-2 left-8 text-2xl music-note delay-2">🎤</div>
              <div className="absolute bottom-2 right-8 text-2xl music-note delay-3">🔥</div>
              
              {/* Current Lyric Display */}
              <div className="lyric-text text-center min-h-[80px] flex items-center justify-center">
                <p className={`text-xl md:text-3xl font-bold text-white lyric-bounce ${HATER_SONG_LYRICS[currentLyricIndex] === '' ? 'opacity-0' : ''}`}>
                  {HATER_SONG_LYRICS[currentLyricIndex] || '♪ ♫ ♪'}
                </p>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#ff00ff] via-[#5865F2] to-[#00ffff] transition-all duration-300"
                  style={{ width: `${((currentLyricIndex + 1) / HATER_SONG_LYRICS.length) * 100}%` }}
                />
              </div>
              
              {/* Visualizer Bars */}
              <div className="flex justify-center gap-1 mt-4">
                {[...Array(20)].map((_, i) => (
                  <div 
                    key={i}
                    className="visualizer-bar w-2 bg-gradient-to-t from-[#5865F2] to-[#ff00ff] rounded-full"
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      height: `${10 + Math.random() * 30}px`
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Play/Pause Button */}
            <div className="flex justify-center mt-4 gap-4">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ff00ff] to-[#5865F2] text-white font-bold hover:scale-110 transition-transform"
              >
                {isPlaying ? '⏸️ PAUSE THE HEAT' : '▶️ DROP THE BEAT'}
              </button>
            </div>
          </div>
        )}

        {/* Scattered Discord Links */}
        <div className="scattered-links absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="scattered-link absolute text-white/30 font-mono text-sm md:text-base whitespace-nowrap animate-pulse"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `rotate(${-30 + Math.random() * 60}deg)`,
              }}
            >
              {DISCORD_LINK}
            </div>
          ))}
        </div>

        {/* Bottom Ticker */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 bg-gradient-to-r from-[#5865F2] via-[#7289da] to-[#5865F2]">
          <div className="ticker-wrapper">
            <div className="ticker-content">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="mx-8 text-white font-black text-xl md:text-2xl tracking-wider">
                  OVERTIME • BUY • SELL • REPEAT • {DISCORD_LINK} •
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Corner Discord Links */}
        <div className="fixed top-4 left-4 text-[#5865F2] font-mono text-xs md:text-sm animate-pulse">{DISCORD_LINK}</div>
        <div className="fixed top-4 right-4 text-[#ff00ff] font-mono text-xs md:text-sm animate-pulse">{DISCORD_LINK}</div>
        <div className="fixed bottom-20 left-4 text-[#00ffff] font-mono text-xs md:text-sm animate-pulse">{DISCORD_LINK}</div>
        <div className="fixed bottom-20 right-4 text-[#5865F2] font-mono text-xs md:text-sm animate-pulse">{DISCORD_LINK}</div>
      </div>

      {/* Crazy Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@700&display=swap');

        * {
          font-family: 'Orbitron', sans-serif;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(88, 101, 242, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(88, 101, 242, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }

        .scan-lines {
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.1) 0px,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px,
            transparent 2px
          );
          animation: scanMove 0.1s linear infinite;
        }

        @keyframes scanMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(2px); }
        }

        .floating-link {
          animation: floatAround 20s linear infinite;
        }

        @keyframes floatAround {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.1; }
          25% { transform: translateY(-50px) rotate(5deg); opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(-5deg); opacity: 0.15; }
          75% { transform: translateY(-80px) rotate(3deg); opacity: 0.2; }
        }

        .pulse-orb {
          animation: pulseGlow 3s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.5); opacity: 0.6; }
        }

        .overtime-title {
          background: linear-gradient(
            90deg,
            #fff 0%,
            #5865F2 25%,
            #ff00ff 50%,
            #00ffff 75%,
            #fff 100%
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 3s linear infinite;
          text-shadow: 0 0 80px rgba(88, 101, 242, 0.5);
          filter: drop-shadow(0 0 30px rgba(255, 0, 255, 0.5));
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        .glitch-text {
          position: relative;
          animation: glitch 2s infinite;
        }

        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: inherit;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glitch-text::before {
          animation: glitchTop 1s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }

        .glitch-text::after {
          animation: glitchBottom 1.5s linear infinite;
          clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
        }

        @keyframes glitchTop {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-3px, 3px); }
          40% { transform: translate(3px, -3px); }
          60% { transform: translate(-3px, 0); }
          80% { transform: translate(3px, 0); }
        }

        @keyframes glitchBottom {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(3px, 0); }
          40% { transform: translate(-3px, 3px); }
          60% { transform: translate(3px, -3px); }
          80% { transform: translate(-3px, 0); }
        }

        .buy-sell-repeat {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .word {
          font-size: 3vw;
          font-weight: 900;
          padding: 0.5rem 2rem;
          border-radius: 8px;
          animation: wordPop 0.5s ease-out forwards;
          opacity: 0;
          transform: scale(0) rotate(-10deg);
        }

        .word.buy {
          background: linear-gradient(135deg, #00ff88 0%, #00cc66 100%);
          color: #000;
          animation-delay: 0.2s;
          box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
        }

        .word.sell {
          background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
          color: #fff;
          animation-delay: 0.4s;
          box-shadow: 0 0 30px rgba(255, 68, 68, 0.5);
        }

        .word.repeat {
          background: linear-gradient(135deg, #5865F2 0%, #7289da 100%);
          color: #fff;
          animation-delay: 0.6s;
          box-shadow: 0 0 30px rgba(88, 101, 242, 0.5);
        }

        @keyframes wordPop {
          0% { opacity: 0; transform: scale(0) rotate(-10deg); }
          50% { opacity: 1; transform: scale(1.2) rotate(5deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        .discord-button {
          color: white;
          border: 3px solid transparent;
          background-clip: padding-box;
          position: relative;
          animation: buttonPulse 2s ease-in-out infinite;
        }

        .discord-button::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 18px;
          background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff);
          background-size: 200% 100%;
          animation: borderGlow 2s linear infinite;
          z-index: -1;
        }

        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(88, 101, 242, 0.5), 0 0 40px rgba(88, 101, 242, 0.3); }
          50% { box-shadow: 0 0 40px rgba(88, 101, 242, 0.8), 0 0 80px rgba(88, 101, 242, 0.5); }
        }

        @keyframes borderGlow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .animate-gradient {
          background-size: 200% 100%;
          animation: gradientMove 2s linear infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .discord-rain {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .rain-drop {
          position: absolute;
          font-size: 10px;
          color: #5865F2;
          font-family: monospace;
          animation: rainFall 3s linear infinite;
          opacity: 0;
        }

        @keyframes rainFall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }

        .ticker-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }

        .ticker-content {
          display: inline-block;
          animation: ticker 30s linear infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .click-explosion {
          transform: translate(-50%, -50%);
        }

        .explosion-ring {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 3px solid #ff00ff;
          border-radius: 50%;
          animation: explode 0.8s ease-out forwards;
          transform: translate(-50%, -50%);
        }

        .explosion-ring.delay-1 {
          animation-delay: 0.1s;
          border-color: #00ffff;
        }

        .explosion-ring.delay-2 {
          animation-delay: 0.2s;
          border-color: #5865F2;
        }

        @keyframes explode {
          0% { width: 20px; height: 20px; opacity: 1; }
          100% { width: 200px; height: 200px; opacity: 0; }
        }

        .explosion-text {
          position: absolute;
          white-space: nowrap;
          color: #fff;
          font-size: 14px;
          font-weight: bold;
          animation: explodeText 1s ease-out forwards;
          transform: translate(-50%, -50%);
        }

        @keyframes explodeText {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -100%) scale(1.5); }
        }

        .scattered-link {
          animation: scatter 4s ease-in-out infinite alternate;
        }

        @keyframes scatter {
          0% { opacity: 0.1; transform: translateY(0) rotate(var(--rotate, 0deg)); }
          50% { opacity: 0.4; }
          100% { opacity: 0.1; transform: translateY(-20px) rotate(var(--rotate, 0deg)); }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .word {
            font-size: 5vw;
            padding: 0.3rem 1rem;
          }
          
          .scattered-link {
            font-size: 8px !important;
          }
        }

        /* Neon Flicker */
        @keyframes neonFlicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
            text-shadow: 
              0 0 10px #ff00ff,
              0 0 20px #ff00ff,
              0 0 30px #ff00ff,
              0 0 40px #ff00ff;
          }
          20%, 24%, 55% {
            text-shadow: none;
          }
        }

        /* 🎤 HATER SONG STYLES 🎤 */
        .hater-song-container {
          animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .music-note {
          animation: bounce 0.6s ease-in-out infinite;
        }

        .music-note.delay-1 { animation-delay: 0.15s; }
        .music-note.delay-2 { animation-delay: 0.3s; }
        .music-note.delay-3 { animation-delay: 0.45s; }

        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }

        .lyric-bounce {
          animation: lyricPop 0.5s ease-out;
        }

        @keyframes lyricPop {
          0% { transform: scale(0.5); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        .visualizer-bar {
          animation: visualize 0.5s ease-in-out infinite alternate;
        }

        @keyframes visualize {
          0% { transform: scaleY(0.3); }
          100% { transform: scaleY(1); }
        }

        /* Karaoke glow effect */
        .lyrics-display::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff, #5865F2);
          background-size: 400% 400%;
          border-radius: inherit;
          z-index: -1;
          animation: borderRotate 3s linear infinite;
          filter: blur(10px);
        }

        @keyframes borderRotate {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Spinning record effect */
        .song-header h2 {
          animation: textShine 2s linear infinite;
          background-size: 200% auto;
        }

        @keyframes textShine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        body {
          margin: 0;
          overflow-x: hidden;
          background: #0a0a0a;
        }
      `}</style>
    </div>
  );
};

export default App;
