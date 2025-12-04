import React from 'react';

const plans = [
  {
    name: 'Basic Recovery',
    price: '$299',
    period: 'One-time',
    description: 'Essential recovery support for scam victims',
    features: [
      '30-minute consultation call',
      'Emotional support (via email)',
      'Red flag identification guide (PDF)',
      '"What Went Wrong" analysis',
      'Email support (7 days)',
      'Money recovery: NOT INCLUDED'
    ],
    popular: false
  },
  {
    name: 'Premium Recovery',
    price: '$599',
    period: 'One-time',
    description: 'Enhanced support with extended access',
    features: [
      '1-hour consultation call',
      'Weekly check-ins (2 weeks)',
      'Advanced trauma processing',
      'Custom recovery plan (PDF)',
      'Priority email support (30 days)',
      'Scam pattern analysis',
      'Money recovery: STILL NOT INCLUDED'
    ],
    popular: true
  },
  {
    name: 'VIP Recovery',
    price: '$999',
    period: 'One-time',
    description: 'Comprehensive recovery program with ongoing support',
    features: [
      '2-hour consultation call',
      'Weekly check-ins (1 month)',
      'Advanced trauma processing',
      'Custom recovery plan (PDF)',
      'Priority email support (90 days)',
      'Monthly follow-up calls',
      'Exclusive support group access',
      'Money recovery: DEFINITELY NOT INCLUDED'
    ],
    popular: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Recovery Service Pricing</h2>
          <p className="text-xl text-[#666]">
            Choose the support level that's right for you
            <br />
            <span className="text-sm text-[#999] italic">(All fees are non-refundable)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-soft hover:shadow-elegant transition-all ${
                plan.popular
                  ? 'border-4 border-[#4ECDC4] scale-105 relative'
                  : 'border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#0A2540] mb-2">{plan.name}</h3>
                <p className="text-[#666] mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-[#FF6B6B]">{plan.price}</span>
                </div>
                <div className="text-sm text-[#999]">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className={`mt-1 ${feature.includes('NOT INCLUDED') ? 'text-[#FF6B6B]' : 'text-[#4ECDC4]'}`}>
                      {feature.includes('NOT INCLUDED') ? '✗' : '✓'}
                    </span>
                    <span className={`text-sm ${feature.includes('NOT INCLUDED') ? 'text-[#FF6B6B] line-through' : 'text-[#666]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition-all hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white hover:shadow-elegant'
                    : 'bg-[#0A2540] text-white hover:bg-[#1a3a5a]'
                }`}
              >
                Choose This Plan
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#FFE66D]/10 border-2 border-dashed border-[#FFE66D] rounded-2xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#0A2540] mb-3">Important Disclaimer</h3>
            <p className="text-sm text-[#666] leading-relaxed max-w-3xl mx-auto">
              All consultation fees are <strong>non-refundable</strong>. We cannot and will not recover your money. 
              Our services provide emotional support, education, and trauma processing only. 
              By purchasing any plan, you acknowledge that money recovery is not included and will not be provided. 
              Results may vary. Satisfaction not guaranteed (but we hope you're satisfied with the emotional support).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
