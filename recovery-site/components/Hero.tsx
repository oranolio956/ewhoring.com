import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-gradient-to-br from-[#F8F9FA] via-white to-[#F0F4F8]">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-[#4ECDC4] rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#FF6B6B] rounded-full opacity-10 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-soft mb-8 animate-fadeInUp">
          <span className="w-2 h-2 bg-[#4ECDC4] rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-[#0A2540]">Certified Recovery Specialists Since 2024</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0A2540] mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Got Scammed by an
          <br />
          <span className="gradient-text">Online Romance?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-[#666] max-w-3xl mx-auto mb-8 font-light animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Professional recovery services for victims of ewhoring, catfishing, and online romance scams.
          <br />
          <span className="text-[#FF6B6B] font-semibold">We help you process the trauma.</span>
          <br />
          <span className="text-sm text-[#999] italic">(Money recovery not included)</span>
        </p>

        {/* Key Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-soft">
            <div className="text-3xl font-bold text-[#FF6B6B]">12,847+</div>
            <div className="text-sm text-[#666]">Victims Helped*</div>
            <div className="text-[10px] text-[#999] italic mt-1">*Helped = charged consultation fee</div>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-soft">
            <div className="text-3xl font-bold text-[#4ECDC4]">$0</div>
            <div className="text-sm text-[#666]">Money Recovered</div>
            <div className="text-[10px] text-[#999] italic mt-1">This is not a typo</div>
          </div>
          <div className="bg-white rounded-2xl px-6 py-4 shadow-soft">
            <div className="text-3xl font-bold text-[#FFE66D]">100%</div>
            <div className="text-sm text-[#666]">Satisfaction**</div>
            <div className="text-[10px] text-[#999] italic mt-1">**No chargebacks yet</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant transition-all hover:scale-105 w-full sm:w-auto">
            Start Recovery Consultation ($299)
          </button>
          <button className="bg-white border-2 border-[#0A2540] text-[#0A2540] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#0A2540] hover:text-white transition-all w-full sm:w-auto">
            Learn More
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-[#666] animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center space-x-2">
            <span className="text-[#4ECDC4]">✓</span>
            <span>Certified Specialists</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4ECDC4]">✓</span>
            <span>Professional Support</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#4ECDC4]">✓</span>
            <span>Non-Refundable Fee</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
