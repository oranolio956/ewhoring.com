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
    <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white py-2 px-4 text-center text-sm font-medium shadow-lg">
      <div className="max-w-7xl mx-auto">
        <span className="animate-pulse inline-block mr-2">🔔</span>
        <span key={currentMessage} className="inline-block animate-fadeInUp">
          {messages[currentMessage]}
        </span>
      </div>
    </div>
  );
};
