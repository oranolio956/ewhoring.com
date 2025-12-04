import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-[#E8E8E8]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - More Sophisticated */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF5757] to-[#00D9C0] rounded-xl flex items-center justify-center shadow-soft group-hover:shadow-layered transition-all group-hover:scale-105">
                <span className="text-white font-bold text-xl">🛡️</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#FFD93D] rounded-full border-2 border-white animate-pulse-slow"></div>
            </div>
            <div>
              <div className="text-lg font-black text-[#0A1A2E] tracking-tight">ScamVictimRecovery</div>
              <div className="text-[9px] text-[#8A8A8A] uppercase tracking-[0.15em] font-semibold">Certified Specialists</div>
            </div>
          </a>

          {/* Desktop Navigation - More Sophisticated */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#services" className="px-4 py-2 text-[#0A1A2E] hover:text-[#FF5757] transition-colors font-medium text-sm relative group">
              Services
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF5757] to-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#testimonials" className="px-4 py-2 text-[#0A1A2E] hover:text-[#FF5757] transition-colors font-medium text-sm relative group">
              Stories
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF5757] to-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#pricing" className="px-4 py-2 text-[#0A1A2E] hover:text-[#FF5757] transition-colors font-medium text-sm relative group">
              Pricing
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF5757] to-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <a href="#faq" className="px-4 py-2 text-[#0A1A2E] hover:text-[#FF5757] transition-colors font-medium text-sm relative group">
              FAQ
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF5757] to-[#00D9C0] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </a>
            <button className="ml-4 group/btn relative bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-layered transition-all hover:scale-105 overflow-hidden">
              <span className="relative z-10">Start Recovery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#FF5757] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#0A2540]"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <a href="#services" className="block text-[#0A2540] hover:text-[#FF6B6B] py-2">Services</a>
            <a href="#testimonials" className="block text-[#0A2540] hover:text-[#FF6B6B] py-2">Success Stories</a>
            <a href="#pricing" className="block text-[#0A2540] hover:text-[#FF6B6B] py-2">Pricing</a>
            <a href="#faq" className="block text-[#0A2540] hover:text-[#FF6B6B] py-2">FAQ</a>
            <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-6 py-2.5 rounded-full font-semibold">
              Start Recovery
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
