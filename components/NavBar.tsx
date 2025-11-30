
import React, { useState, useEffect } from 'react';
import { usePayment } from '../contexts/PaymentContext';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { openPayment } = usePayment();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openHackForums = () => {
      window.open('https://hackforums.net', '_blank');
  };

  return (
    <>
      {/* Unified Header Container - Fluid Flexbox Layout */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${
          scrolled ? 'bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#1A2A3A]/5 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="w-full h-[calc(4rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] px-6 md:px-8 lg:px-12 flex items-center justify-between max-w-[1920px] mx-auto pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))]">
            
            {/* Branding - Always Visible, Shrinks if needed but stays readable */}
            <a 
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="block shrink-0 relative z-50 mr-4"
                aria-label="Oranolio Homepage"
            >
                <span className="font-['Space_Grotesk'] font-bold text-[#1A2A3A] text-base md:text-xl tracking-tighter hover:italic cursor-pointer transition-all select-none whitespace-nowrap">
                ORANOLIO ©
                </span>
            </a>

            {/* Actions Container */}
            <div className="flex gap-2 md:gap-4 items-center shrink-0">
                {/* 'Methods Leaked' - Hidden on mobile, visible on tablet+ */}
                <button onClick={openHackForums} className="hidden sm:flex items-center gap-2 bg-[#FDFBF7]/50 px-3 py-1 rounded-full border border-[#1A2A3A]/5 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer">
                    <div className="w-1.5 h-1.5 bg-[#FF8A75] rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-mono uppercase text-[#1A2A3A]/60 tracking-widest whitespace-nowrap">Methods Leaked</span>
                </button>
                
                {/* Secondary Button - Hides on small phones (<450px) to ensure Main CTA fits */}
                <button 
                  onClick={openHackForums}
                  className="hidden min-[450px]:block px-3 py-1.5 md:px-4 md:py-2 border border-[#1A2A3A] text-[#1A2A3A] text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-colors rounded-sm whitespace-nowrap active:scale-95 duration-100"
                >
                  Join The Harem
                </button>
                
                {/* Primary CTA - Always Visible, prioritizes screen space */}
                <button
                  onClick={openPayment}
                  className="group relative px-4 py-2 md:px-6 md:py-2 bg-[#1A2A3A] text-[#FDFBF7] text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-all shadow-lg shadow-[#2D9C8E]/20 whitespace-nowrap rounded-sm overflow-hidden btn-glitch shrink-0 active:scale-95 duration-100"
                >
                  <span className="relative z-10 group-hover:-translate-y-[150%] transition-transform duration-300 block">DOWNLOAD THE BRAIN</span>
                  <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-[150%] group-hover:translate-y-0 transition-transform duration-300 font-mono text-[#1A2A3A]">
                    INITIATE
                  </span>
                </button>
            </div>
        </div>
      </header>

      {/* Vertical Navigation (Desktop Only) - Semantic Links */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8 mix-blend-darken pl-[env(safe-area-inset-left)]">
        {[
          { label: 'The Hook', id: 'hero' },
          { label: 'The Money', id: 'money-printer' },
          { label: 'The Process', id: 'manifesto' },
          { label: 'The Price', id: 'pricing' }
        ].map((item, index) => (
          <a 
            key={item.label} 
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            className="group flex items-center gap-4 cursor-pointer"
            aria-label={`Scroll to ${item.label}`}
          >
             <span className="text-[10px] font-mono text-[#1A2A3A]/40 font-bold">0{index + 1}</span>
             <span className="text-sm uppercase tracking-widest text-[#1A2A3A] font-bold relative overflow-hidden">
               <span className="block group-hover:-translate-y-full transition-transform duration-300">{item.label}</span>
               <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-300 text-[#FF8A75]">{item.label}</span>
             </span>
          </a>
        ))}
      </nav>
    </>
  );
};
