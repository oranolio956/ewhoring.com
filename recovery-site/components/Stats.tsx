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
    <section className="py-20 bg-gradient-to-br from-[#0A2540] to-[#1a3a5a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recovery Statistics</h2>
          <p className="text-xl text-gray-300">Real numbers from our certified recovery specialists</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl font-bold text-[#4ECDC4] mb-2">
              {stats.victims.toLocaleString()}+
            </div>
            <div className="text-lg font-semibold mb-2">Victims Helped*</div>
            <div className="text-sm text-gray-300 italic">*Helped = charged $299 consultation fee</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl font-bold text-[#FF6B6B] mb-2">
              ${stats.money.toLocaleString()}
            </div>
            <div className="text-lg font-semibold mb-2">Money Recovered</div>
            <div className="text-sm text-gray-300 italic">This is accurate, not a typo</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl font-bold text-[#FFE66D] mb-2">
              {stats.consultations.toLocaleString()}
            </div>
            <div className="text-lg font-semibold mb-2">Consultations Sold</div>
            <div className="text-sm text-gray-300 italic">At $299 each = ${(stats.consultations * 299).toLocaleString()}</div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl font-bold text-[#4ECDC4] mb-2">
              {stats.satisfaction}%
            </div>
            <div className="text-lg font-semibold mb-2">Satisfaction Rate**</div>
            <div className="text-sm text-gray-300 italic">**No chargebacks (yet)</div>
          </div>
        </div>

        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center">
          <p className="text-sm text-gray-300 leading-relaxed">
            <strong className="text-white">Important Note:</strong> These statistics are based on our internal metrics. 
            "Victims Helped" means they paid our consultation fee. "Money Recovered" is accurate - we have never recovered a single dollar. 
            "Satisfaction Rate" means no chargebacks (yet). All numbers are real, but the interpretation is up to you.
          </p>
        </div>
      </div>
    </section>
  );
};
