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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🛡️</span>
            </div>
            <div>
              <div className="text-lg font-bold text-[#0A2540]">ScamVictimRecovery</div>
              <div className="text-[10px] text-[#666] uppercase tracking-wider">Certified Specialists</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#0A2540] hover:text-[#FF6B6B] transition-colors font-medium">
              Services
            </a>
            <a href="#testimonials" className="text-[#0A2540] hover:text-[#FF6B6B] transition-colors font-medium">
              Success Stories
            </a>
            <a href="#pricing" className="text-[#0A2540] hover:text-[#FF6B6B] transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-[#0A2540] hover:text-[#FF6B6B] transition-colors font-medium">
              FAQ
            </a>
            <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
              Start Recovery
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
