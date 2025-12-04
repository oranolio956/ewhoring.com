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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Our Recovery Services</h2>
          <p className="text-xl text-[#666] max-w-2xl mx-auto">
            Professional support services designed to help you understand what happened.
            <br />
            <span className="text-sm text-[#999] italic">(Note: We cannot recover your money)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-[#F8F9FA] rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-6xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">{service.title}</h3>
              <p className="text-[#666] mb-6 leading-relaxed">{service.description}</p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-[#FF6B6B] mb-2">{service.price}</div>
                <div className="text-sm text-[#999]">One-time fee (non-refundable)</div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-[#4ECDC4] mt-1">✓</span>
                    <span className="text-[#666] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105">
                Choose This Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFE66D]/10 border-2 border-dashed border-[#FFE66D] rounded-2xl p-6 text-center">
          <p className="text-sm text-[#666] leading-relaxed">
            <strong className="text-[#0A2540]">Important:</strong> All consultation fees are non-refundable. 
            We cannot and will not recover your money. Our services provide emotional support, education, and trauma processing only. 
            By purchasing, you acknowledge that money recovery is not included and will not be provided.
          </p>
        </div>
      </div>
    </section>
  );
};
