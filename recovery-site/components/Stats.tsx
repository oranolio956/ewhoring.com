import React, { useState, useEffect } from 'react';

export const Stats: React.FC = () => {
  const [stats, setStats] = useState({
    victims: 0,
    money: 0,
    consultations: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        victims: Math.floor(12847 * progress),
        money: 0, // Always stays at 0
        consultations: Math.floor(12847 * progress),
        satisfaction: Math.floor(100 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats({
          victims: 12847,
          money: 0,
          consultations: 12847,
          satisfaction: 100
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#0A1A2E] via-[#1A2A4E] to-[#0A1A2E] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#00D9C0] to-[#00B8A3] rounded-full opacity-10 blur-[150px] animate-float"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF5757] to-[#FF8A8A] rounded-full opacity-8 blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="mb-20">
          <div className="inline-block mb-6">
            <span className="text-xs font-bold text-[#00D9C0] uppercase tracking-[0.2em]">Recovery Metrics</span>
          </div>
          <h2 className="text-headline font-black mb-6 leading-none">Real Numbers from Our<br />Certified Specialists</h2>
          <p className="text-subheadline text-white/60 font-light max-w-2xl">Professional statistics based on our internal metrics. All numbers are accurate, but interpretation may vary.</p>
        </div>

        {/* Editorial Stats Layout - Breaking Grid Pattern */}
        <div className="space-y-8">
          {/* Large Featured Stat */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 hover-lift">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="text-xs font-bold text-[#00D9C0] uppercase tracking-wider mb-3">Primary Metric</div>
                  <div className="text-7xl md:text-8xl font-black text-white mb-4 leading-none">
                    {stats.victims.toLocaleString()}+
                  </div>
                  <div className="text-xl font-semibold mb-2">Victims Helped*</div>
                  <div className="text-sm text-white/50 italic leading-relaxed">*Helped = charged $299 consultation fee. This is our primary revenue metric.</div>
                </div>
                <div className="w-32 h-32 bg-gradient-to-br from-[#00D9C0] to-[#00B8A3] rounded-2xl flex items-center justify-center opacity-20">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Column Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Money Recovered - Featured Negative Stat */}
            <div className="bg-gradient-to-br from-[#FF5757]/10 to-[#FF8A8A]/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#FF5757]/20 hover-lift">
              <div className="text-xs font-bold text-[#FF5757] uppercase tracking-wider mb-3">Financial Recovery</div>
              <div className="text-6xl font-black text-[#FF5757] mb-3 leading-none">
                ${stats.money.toLocaleString()}
              </div>
              <div className="text-lg font-semibold mb-2">Money Recovered</div>
              <div className="text-sm text-white/50 italic leading-relaxed">This is accurate, not a typo. We have never recovered a single dollar.</div>
            </div>

            {/* Consultations */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-lift">
              <div className="text-xs font-bold text-[#00D9C0] uppercase tracking-wider mb-3">Revenue Metric</div>
              <div className="text-6xl font-black text-white mb-3 leading-none">
                {stats.consultations.toLocaleString()}
              </div>
              <div className="text-lg font-semibold mb-2">Consultations Sold</div>
              <div className="text-sm text-white/50 italic leading-relaxed">At $299 each = <span className="text-[#00D9C0] font-bold">${(stats.consultations * 299).toLocaleString()}</span></div>
            </div>

            {/* Satisfaction */}
            <div className="bg-gradient-to-br from-[#FFD93D]/10 to-[#FFC107]/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#FFD93D]/20 hover-lift">
              <div className="text-xs font-bold text-[#FFD93D] uppercase tracking-wider mb-3">Quality Metric</div>
              <div className="text-6xl font-black text-[#FFD93D] mb-3 leading-none">
                {stats.satisfaction}%
              </div>
              <div className="text-lg font-semibold mb-2">Satisfaction Rate**</div>
              <div className="text-sm text-white/50 italic leading-relaxed">**No chargebacks (yet). This may change.</div>
            </div>
          </div>
        </div>

          {/* Editorial Disclaimer */}
          <div className="mt-12 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00D9C0] to-[#FF5757] rounded-full"></div>
            <div className="ml-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-xs font-bold text-[#00D9C0] uppercase tracking-wider mb-4">Important Note</div>
              <p className="text-base text-white/70 leading-relaxed max-w-3xl">
                These statistics are based on our internal metrics. "Victims Helped" means they paid our consultation fee. 
                "Money Recovered" is accurate - we have never recovered a single dollar. "Satisfaction Rate" means no chargebacks (yet). 
                All numbers are real, but the interpretation is up to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
