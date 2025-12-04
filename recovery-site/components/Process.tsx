import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Book Consultation',
    description: 'Pay the $299 consultation fee (non-refundable). This covers our professional assessment and emotional support services.',
    icon: '📞'
  },
  {
    number: '02',
    title: 'Initial Assessment',
    description: 'Our certified specialist will listen to your story and help you understand what went wrong. Money recovery assessment: Not applicable.',
    icon: '📋'
  },
  {
    number: '03',
    title: 'Trauma Processing',
    description: 'We help you work through the 5 stages of grief: denial, anger, bargaining, depression, and acceptance. Your money is still gone.',
    icon: '💭'
  },
  {
    number: '04',
    title: 'Education & Support',
    description: 'Receive your PDF guide on red flags and scam patterns. Learn what you should have noticed. Money recovery: Still not happening.',
    icon: '📚'
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'Access to email support (if you purchased VIP package). We continue to help you feel better about losing your money.',
    icon: '🤝'
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">Our Recovery Process</h2>
          <p className="text-xl text-[#666]">
            A professional 5-step process to help you understand what happened
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#4ECDC4] to-[#FF6B6B] transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block bg-gradient-to-br from-[#FF6B6B] to-[#FF8E8E] text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                    Step {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A2540] mb-3">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed">{step.description}</p>
                </div>

                {/* Icon Circle */}
                <div className="relative z-10 w-24 h-24 bg-white rounded-full shadow-elegant flex items-center justify-center border-4 border-[#4ECDC4]">
                  <span className="text-4xl">{step.icon}</span>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-[#0A2540] rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery?</h3>
          <p className="text-gray-300 mb-6">
            Remember: We can help you feel better, but we cannot recover your money.
          </p>
          <button className="bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-elegant transition-all hover:scale-105">
            Book Your $299 Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
