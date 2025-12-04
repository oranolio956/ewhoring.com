import React, { useState, useEffect } from 'react';

const messages = [
  "⚠️ Limited Time: Consultation fee increases to $399 next week! (Just kidding, it stays $299)",
  "⚠️ 12,847+ victims have trusted us. Money recovered: Still $0.",
  "⚠️ Professional recovery services available now. Money recovery: NOT INCLUDED.",
  "⚠️ Don't let embarrassment stop you from paying us $299 for emotional support.",
  "⚠️ Our certified specialists (certified by us) are standing by to help you.",
];

export const UrgencyBanner: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#FF5757] via-[#FF8A8A] to-[#FF5757] text-white py-3 px-4 text-center text-sm font-semibold shadow-layered border-b-2 border-[#FF5757]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span className="animate-pulse-slow inline-block text-lg">🔔</span>
        <span key={currentMessage} className="inline-block animate-fadeInUp font-medium">
          {messages[currentMessage]}
        </span>
        <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-white/20">
          <span className="text-xs opacity-80">Limited Time</span>
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};
