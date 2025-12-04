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
    <section className="relative py-32 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #0A1A2E 1px, transparent 1px), linear-gradient(-45deg, #0A1A2E 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[#00D9C0] uppercase tracking-[0.2em]">The Process</span>
          </div>
          <h2 className="text-headline font-black text-[#0A1A2E] mb-6 leading-none">
            Our Recovery Process
          </h2>
          <p className="text-subheadline text-[#4A4A4A] font-light">
            A professional 5-step process to help you understand what happened
          </p>
        </div>

        {/* Editorial Timeline Layout */}
        <div className="relative">
          {/* Vertical Timeline Line - More Sophisticated */}
          <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9C0] via-[#FFD93D] to-[#FF5757]"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8 lg:gap-12 group"
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-8 top-6 w-8 h-8 bg-white rounded-full border-4 border-[#00D9C0] shadow-layered z-10 group-hover:scale-125 transition-transform">
                  <div className="absolute inset-0 bg-[#00D9C0] rounded-full animate-pulse-slow opacity-20"></div>
                </div>

                {/* Step Number - Editorial Style */}
                <div className="flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#0A1A2E] to-[#1A2A4E] rounded-2xl flex items-center justify-center shadow-layered group-hover:scale-110 transition-transform">
                  <span className="text-3xl lg:text-4xl font-black text-white">{step.number}</span>
                </div>

                {/* Content - Editorial Layout */}
                <div className="flex-1 space-y-4 pt-2">
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-black text-[#0A1A2E] mb-4 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>

                  {/* Icon Badge */}
                  <div className="inline-flex items-center gap-3 bg-gradient-to-br from-[#00D9C0]/10 to-[#FF5757]/10 rounded-full px-4 py-2 border border-[#00D9C0]/20">
                    <span className="text-2xl">{step.icon}</span>
                    <span className="text-sm font-semibold text-[#0A1A2E]">Step {index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Editorial Style */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-br from-[#0A1A2E] to-[#1A2A4E] rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px',
              }}></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <h3 className="text-4xl lg:text-5xl font-black mb-4 leading-tight">Ready to Start Your Recovery?</h3>
              <p className="text-xl text-white/70 font-light leading-relaxed">
                Remember: We can help you feel better, but we cannot recover your money.
              </p>
              <button className="group/btn relative bg-gradient-to-r from-[#FF5757] to-[#FF8A8A] text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-layered transition-all hover:scale-105 overflow-hidden mt-8">
                <span className="relative z-10">Book Your $299 Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A8A] to-[#FF5757] opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
