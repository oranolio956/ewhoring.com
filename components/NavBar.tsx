
import React, { useState, useEffect } from 'react';
import { usePayment } from '../contexts/PaymentContext';
import { TripleClickEasterEgg } from './SectionEasterEggs';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="w-full h-[calc(4rem+env(safe-area-inset-top))] pt-[env(safe-area-inset-top)] px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between max-w-7xl mx-auto pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]">
            
            {/* Branding - Always Visible, Shrinks if needed but stays readable */}
            <a 
                href="#"
                onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="block shrink-0 relative z-50 mr-4"
                aria-label="Oranolio Homepage"
            >
                <TripleClickEasterEgg message="💀 You found the secret! This domain cost $3k drunk. Send help.">
                  <span className="font-['Space_Grotesk'] font-bold text-[#1A2A3A] text-base md:text-xl tracking-tighter hover:italic cursor-pointer transition-all select-none whitespace-nowrap">
                  ORANOLIO ©
                  </span>
                </TripleClickEasterEgg>
            </a>

            {/* Actions Container */}
            <div className="flex gap-2 md:gap-4 items-center shrink-0">
                {/* Mobile Menu Button */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 text-[#1A2A3A] hover:bg-[#1A2A3A]/5 rounded transition-colors"
                  aria-label="Toggle navigation menu"
                  aria-expanded={mobileMenuOpen}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>

                {/* 'Community' - Hidden on mobile, visible on tablet+ */}
                <button onClick={openHackForums} className="hidden sm:flex items-center gap-2 bg-[#FDFBF7]/50 px-3 py-1 rounded-full border border-[#1A2A3A]/5 backdrop-blur-sm hover:bg-white transition-colors cursor-pointer">
                    <span className="text-[10px] font-mono uppercase text-[#1A2A3A]/60 tracking-widest whitespace-nowrap">Community</span>
                </button>
                
                {/* Secondary Button - Hides on small phones (<450px) to ensure Main CTA fits */}
                <button
                  onClick={openHackForums}
                  className="hidden min-[450px]:block px-3 py-1.5 md:px-4 md:py-2 border border-[#1A2A3A] text-[#1A2A3A] text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-colors rounded-sm whitespace-nowrap active:scale-95 duration-100"
                >
                  Forum
                </button>
                
                {/* Primary CTA - Always Visible, prioritizes screen space */}
                <button
                  onClick={openPayment}
                  aria-label="Download the brain - access the complete ewhoring protocol"
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

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[calc(4rem+env(safe-area-inset-top))] left-0 right-0 bg-white/95 backdrop-blur-md border-b border-[#1A2A3A]/10 z-40 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <button onClick={openHackForums} className="w-full flex items-center gap-2 bg-[#FDFBF7]/50 px-4 py-3 rounded-lg border border-[#1A2A3A]/5 hover:bg-white transition-colors">
              <div className="w-2 h-2 bg-[#FF8A75] rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Methods Leaked</span>
            </button>

            <button
              onClick={openHackForums}
              className="w-full px-4 py-3 border border-[#1A2A3A] text-[#1A2A3A] text-sm font-bold uppercase tracking-widest hover:bg-[#1A2A3A] hover:text-[#FDFBF7] transition-colors rounded"
            >
              Join The Harem
            </button>

            <button
              onClick={openPayment}
              className="w-full group relative px-6 py-3 bg-[#1A2A3A] text-[#FDFBF7] text-sm font-bold uppercase tracking-widest hover:bg-[#FF8A75] transition-all shadow-lg rounded overflow-hidden btn-glitch"
            >
              DOWNLOAD THE BRAIN
            </button>
          </div>
        </div>
      )}

      {/* Vertical Navigation (Desktop Only) - Clean Links */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6 pl-[env(safe-area-inset-left)]">
        {[
          { label: 'Hook', id: 'hero' },
          { label: 'Money', id: 'money-printer' },
          { label: 'Process', id: 'manifesto' },
          { label: 'Price', id: 'pricing' }
        ].map((item, index) => (
          <a
            key={item.label}
            href={`#${item.id}`}
            onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
            className="group flex items-center gap-3 cursor-pointer hover:text-[#FF8A75] transition-colors"
            aria-label={`Scroll to ${item.label}`}
          >
             <span className="text-[10px] font-mono text-[#1A2A3A]/40 font-bold">{String(index + 1).padStart(2, '0')}</span>
             <span className="text-xs uppercase tracking-widest text-[#1A2A3A] font-bold group-hover:text-[#FF8A75]">
               {item.label}
             </span>
          </a>
        ))}
      </nav>
    </>
  );
};
