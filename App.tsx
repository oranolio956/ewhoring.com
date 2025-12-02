import React, { useState, useEffect } from 'react';

const EMOJIS = ['💰', '🔥', '👑', '💎', '🚀', '💸', '🤑', '⚡'];

const App: React.FC = () => {
  const [memberCount, setMemberCount] = useState(42069);
  const [floatingEmojis, setFloatingEmojis] = useState<{id: number, emoji: string, x: number, delay: number}[]>([]);

  useEffect(() => {
    // Fake member count that slowly increases
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Create floating emojis
    const emojis = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      x: Math.random() * 100,
      delay: Math.random() * 5
    }));
    setFloatingEmojis(emojis);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a0a2e] to-[#0a0a0a] text-white overflow-hidden relative">
      {/* Floating emojis background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingEmojis.map((item) => (
          <div
            key={item.id}
            className="absolute text-4xl opacity-20 animate-float"
            style={{
              left: `${item.x}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[200px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        
        {/* Badge */}
        <div className="mb-6 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full text-sm font-medium text-yellow-400 backdrop-blur-sm animate-pulse">
          🏆 The #1 Community You're Not In... Yet
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-9xl font-black text-center mb-4 leading-none tracking-tighter">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl">
            OFM
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            CHAMPS
          </span>
        </h1>

        {/* Subtitle with typing effect vibe */}
        <p className="text-xl md:text-2xl text-gray-400 text-center max-w-2xl mb-8 font-light">
          Where legends share secrets,
          <br />
          <span className="text-white font-semibold">broke boys become bag chasers,</span>
          <br />
          and memes are <span className="text-cyan-400">top tier</span>. 
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
          <div className="group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 group-hover:scale-110 transition-transform">
              {memberCount.toLocaleString()}+
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-widest mt-1">Degens Inside</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-widest mt-1">Active Chat</div>
          </div>
          <div className="group">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:scale-110 transition-transform">
              ∞
            </div>
            <div className="text-gray-500 text-sm uppercase tracking-widest mt-1">Alpha Dropped</div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="https://t.me/OFMCHAMPS"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#0088cc] to-[#00c6ff] rounded-2xl font-bold text-xl uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Telegram icon */}
          <svg className="w-8 h-8 relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          
          <span className="relative z-10">Join The Champs</span>
          
          <span className="relative z-10 text-2xl group-hover:translate-x-1 transition-transform">→</span>
        </a>

        {/* Urgency text */}
        <p className="mt-6 text-gray-500 text-sm animate-pulse">
          ⚡ Free to join. Regret not joining = priceless.
        </p>

        {/* Funny testimonials */}
        <div className="mt-16 max-w-4xl w-full">
          <h3 className="text-center text-gray-500 uppercase tracking-widest text-sm mb-8">What The Homies Say</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { text: "Joined for memes, stayed for the alpha. Now my mom's proud. Kinda.", name: "Anonymous Champ 🏆" },
              { text: "This group taught me more than 4 years of university. And it's free??? Insane.", name: "Reformed Broke Boy 💸" },
              { text: "I was down bad. Now I'm just down. Progress.", name: "Still Learning 📈" }
            ].map((testimonial, i) => (
              <div 
                key={i} 
                className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-purple-400 text-sm font-medium">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-20 text-center">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">
            No gatekeeping. No BS. Just vibes.
          </p>
          <p className="text-gray-700 text-[10px]">
            © {new Date().getFullYear()} OFM CHAMPS • Built different, literally.
          </p>
        </div>
      </div>

      {/* Custom styles */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
