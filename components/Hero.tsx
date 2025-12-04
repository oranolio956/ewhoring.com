import React from 'react';
import { ScamIllustration } from './Illustration';
import { GradientOrb } from './DecorativeElements';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-40 overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#F5F5F5]">
      
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0A1A2E 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Animated Gradient Orbs - More Sophisticated */}
      <GradientOrb color="teal" size="md" className="top-20 right-10" />
      <GradientOrb color="red" size="lg" className="bottom-20 left-10" style={{ animationDelay: '2s' }} />
      <GradientOrb color="yellow" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Editorial Layout */}
          <div className="lg:col-span-7 space-y-8">
            {/* Badge - More Editorial */}
            <div className="inline-flex items-center space-x-3 glass-effect px-5 py-2.5 rounded-full shadow-soft mb-4 animate-fadeInUp stagger-1">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-[#00D9C0] rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-[#FF5757] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-[#FFD93D] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
              </div>
              <span className="text-xs font-semibold text-[#0A1A2E] uppercase tracking-wider">Certified Recovery Specialists</span>
              <span className="text-xs text-[#8A8A8A]">Since 2024</span>
            </div>

            {/* Main Headline - Editorial Typography */}
            <h1 className="text-display font-black text-[#0A1A2E] leading-none animate-fadeInUp stagger-2">
              Got Scammed by an
              <br />
              <span className="relative inline-block">
                <span className="gradient-text">Online Romance?</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-[#FF5757]/20 via-[#00D9C0]/20 to-[#FF5757]/20 blur-xl"></span>
              </span>
            </h1>

            {/* Subheadline - Editorial Style */}
            <div className="space-y-4 animate-fadeInUp stagger-3">
              <p className="text-subheadline text-[#4A4A4A] font-light leading-relaxed max-w-2xl">
                Professional recovery services for victims of ewhoring, catfishing, and online romance scams.
              </p>
              <p className="text-lg text-[#FF5757] font-semibold">
                We help you process the trauma.
              </p>
              <p className="text-sm text-[#8A8A8A] italic font-light">
                (Money recovery not included)
              </p>
            </div>

            {/* Key Stats - Editorial Cards */}
            <div className="grid grid-cols-3 gap-4 animate-fadeInUp stagger-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-soft border border-[#E8E8E8] hover-lift">
                <div className="text-2xl font-black text-[#FF5757] mb-1">12,847+</div>
                <div className="text-xs font-medium text-[#4A4A4A] mb-1">Victims Helped*</div>
                <div className="text-[9px] text-[#8A8A8A] italic leading-tight">*Helped = charged consultation fee</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-soft border border-[#E8E8E8] hover-lift">
                <div className="text-2xl font-black text-[#00D9C0] mb-1">$0</div>
                <div className="text-xs font-medium text-[#4A4A4A] mb-1">Money Recovered</div>
                <div className="text-[9px] text-[#8A8A8A] italic leading-tight">This is not a typo</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-soft border border-[#E8E8E8] hover-lift">
                <div className="text-2xl font-black text-[#FFD93D] mb-1">100%</div>
                <div className="text-xs font-medium text-[#4A4A4A] mb-1">Satisfaction**</div>
                <div className="text-[9px] text-[#8A8A8A] italic leading-tight">**No chargebacks yet</div>
              </div>
            </div>

            {/* CTA Buttons - Sophisticated */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-fadeInUp stagger-5">
              <button className="group relative bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-layered transition-all hover:scale-[1.02] overflow-hidden">
                <span className="relative z-10">Start Recovery Consultation ($299)</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#FF5757] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              <button className="group bg-white border-2 border-[#0A1A2E] text-[#0A1A2E] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#0A1A2E] hover:text-white transition-all hover:shadow-soft">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center animate-fadeInUp stagger-3">
            <div className="relative w-full max-w-md">
              <ScamIllustration className="w-full" />
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-layered border border-[#E8E8E8] animate-float">
                <div className="text-xs font-bold text-[#0A1A2E] mb-1">Consultation Fee</div>
                <div className="text-2xl font-black text-[#FF5757]">$299</div>
                <div className="text-[9px] text-[#8A8A8A] italic">Non-refundable</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Editorial Footer */}
        <div className="mt-16 pt-8 border-t border-[#E8E8E8] flex flex-wrap items-center justify-center gap-8 text-sm text-[#4A4A4A] animate-fadeInUp">
          <div className="flex items-center space-x-2">
            <span className="text-[#00D9C0] font-bold">✓</span>
            <span className="font-medium">Certified Specialists</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00D9C0] font-bold">✓</span>
            <span className="font-medium">Professional Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#00D9C0] font-bold">✓</span>
            <span className="font-medium">Non-Refundable Fee</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - More Sophisticated */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs font-semibold text-[#8A8A8A] uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5 text-[#0A1A2E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};
