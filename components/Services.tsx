import React from 'react';

const services = [
  {
    icon: '💬',
    title: 'Emotional Support Consultation',
    description: '30-minute call with our certified specialist to help you process the trauma of being scammed.',
    price: '$299',
    features: [
      'Professional listening',
      'Trauma processing guidance',
      'Red flag identification (PDF)',
      'What went wrong analysis',
      'Money recovery: NOT INCLUDED'
    ]
  },
  {
    icon: '📚',
    title: 'Educational Recovery Package',
    description: 'Comprehensive PDF guide teaching you about scams you already fell for.',
    price: '$299',
    features: [
      'Red flag identification guide',
      'Common scam patterns explained',
      'How to avoid future scams',
      'Emotional support email access',
      'Money recovery: STILL NOT INCLUDED'
    ]
  },
  {
    icon: '👥',
    title: 'VIP Recovery Program',
    description: 'Premium support package with weekly check-ins and priority email access.',
    price: '$999',
    features: [
      '2-hour consultation call',
      'Weekly check-ins (1 month)',
      'Advanced trauma processing',
      'Custom recovery plan (PDF)',
      'Priority email support',
      'Money recovery: DEFINITELY NOT INCLUDED'
    ]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-32 bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#00D9C0]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#FF5757]/5 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[#00D9C0] uppercase tracking-[0.2em]">Our Services</span>
          </div>
          <h2 className="text-headline font-black text-[#0A1A2E] mb-6 leading-none">
            Professional Recovery Services
          </h2>
          <p className="text-subheadline text-[#4A4A4A] font-light leading-relaxed">
            Support services designed to help you understand what happened.
            <span className="block mt-2 text-sm text-[#8A8A8A] italic">(Note: We cannot recover your money)</span>
          </p>
        </div>

        {/* Asymmetric Layout - Breaking Grid Pattern */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${
                index % 2 === 0 
                  ? 'flex flex-col lg:flex-row' 
                  : 'flex flex-col lg:flex-row-reverse'
              } gap-8 items-center bg-white rounded-3xl p-8 lg:p-12 shadow-soft hover:shadow-layered transition-all border border-[#E8E8E8] hover-lift`}
            >
              {/* Icon/Visual Section */}
              <div className="flex-shrink-0 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#00D9C0]/10 to-[#FF5757]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-6xl lg:text-7xl">{service.icon}</span>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <div className="inline-block mb-3">
                    <span className="text-xs font-bold text-[#00D9C0] uppercase tracking-wider">Service {index + 1}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-[#0A1A2E] mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>

                {/* Price - Editorial Style */}
                <div className="flex items-baseline gap-3 pb-6 border-b border-[#E8E8E8]">
                  <div className="text-5xl font-black text-[#FF5757]">{service.price}</div>
                  <div className="text-sm text-[#8A8A8A] font-medium">One-time fee (non-refundable)</div>
                </div>

                {/* Features - Editorial List */}
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`mt-1.5 text-lg ${
                        feature.includes('NOT INCLUDED') 
                          ? 'text-[#FF5757]' 
                          : 'text-[#00D9C0]'
                      }`}>
                        {feature.includes('NOT INCLUDED') ? '✗' : '✓'}
                      </span>
                      <span className={`text-base leading-relaxed ${
                        feature.includes('NOT INCLUDED')
                          ? 'text-[#FF5757] line-through'
                          : 'text-[#4A4A4A]'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="group/btn relative bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] text-white px-8 py-4 rounded-full font-semibold text-base hover:shadow-layered transition-all hover:scale-[1.02] overflow-hidden mt-6">
                  <span className="relative z-10">Choose This Plan</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#FF5757] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Disclaimer */}
        <div className="mt-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF5757] to-[#00D9C0] rounded-full"></div>
          <div className="ml-8 bg-gradient-to-br from-[#FFD93D]/5 to-[#FF5757]/5 rounded-2xl p-8 border border-[#FFD93D]/20">
            <div className="text-xs font-bold text-[#FF5757] uppercase tracking-wider mb-4">Important Disclaimer</div>
            <p className="text-base text-[#4A4A4A] leading-relaxed max-w-3xl">
              All consultation fees are non-refundable. We cannot and will not recover your money. 
              Our services provide emotional support, education, and trauma processing only. 
              By purchasing, you acknowledge that money recovery is not included and will not be provided.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
