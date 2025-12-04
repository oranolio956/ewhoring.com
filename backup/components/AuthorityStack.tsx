import React from 'react';

const PRESS_HITS = [
  {
    outlet: 'Vice',
    url: 'https://www.vice.com/en/article/ewhoring-economy',
    summary: 'Profiled the Oranolio protocol for reversing catfish economics.'
  },
  {
    outlet: 'Motherboard',
    url: 'https://www.vice.com/en/topic/catfishing',
    summary: 'Covered our AI persona lab stress-testing Discord moderation.'
  },
  {
    outlet: 'X/Twitter',
    url: 'https://twitter.com/oranolio',
    summary: '43k followers tracking our public case studies.'
  }
];

export const AuthorityStack: React.FC = () => (
  <section id="authority" className="bg-[#FDFBF7] text-[#1A2A3A] py-16 md:py-24 border-t border-[#1A2A3A]/5 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20 bg-subliminal pointer-events-none" />
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-12">
        <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#2D9C8E]">E-E-A-T / Receipts</p>
        <h2 className="text-3xl md:text-5xl font-['Space_Grotesk'] font-bold tracking-tight">Real operator. Real infrastructure.</h2>
        <p className="text-base md:text-xl text-[#1A2A3A]/70 mt-4">Google wants provable experience. Here is the paper trail.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article
          className="rounded-3xl border border-[#1A2A3A]/10 p-6 bg-white shadow-[0_20px_60px_rgba(26,42,58,0.08)]"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-[#1A2A3A] text-white flex items-center justify-center font-mono text-xl">
              OR
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#FF8A75]">Founder</p>
              <h3 className="text-2xl font-semibold" itemProp="name">Oranolio</h3>
              <p className="text-sm text-[#1A2A3A]/60">Digital persona engineer since 2014</p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#1A2A3A]/70 mb-4" itemProp="description">
            Built the first Discord gender-arbitrage farm in 2014, scaled to 12,000+ students, publishes quarterly teardown decks and open-source scripts.
          </p>
          <ul className="text-xs space-y-2 text-[#1A2A3A]/70">
            <li>⚙ <span itemProp="knowsAbout">Discord & Telegram monetization</span></li>
            <li>🧠 <span itemProp="alumniOf">Former threat-intel contractor</span></li>
            <li>📍 <span itemProp="homeLocation">SF / EU hybrid team</span></li>
          </ul>
          <meta itemProp="url" content="https://ewhoring.com/#authority" />
          <meta itemProp="sameAs" content="https://twitter.com/oranolio" />
          <meta itemProp="sameAs" content="https://discord.gg/oranolio" />
        </article>

        <article className="rounded-3xl border border-[#1A2A3A]/10 p-6 bg-white">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#2D9C8E] mb-3">Press kit</p>
          <h3 className="text-2xl font-semibold mb-4">Verification dossier</h3>
          <ul className="space-y-3 text-sm text-[#1A2A3A]/70">
            <li>• Corporate registration, EIN letter, and brand guidelines</li>
            <li>• Headshots + b-roll for journalists</li>
            <li>• Timeline of public speaking and case study releases</li>
            <li>• GSC screenshots proving 7-figure impressions (redacted)</li>
          </ul>
          <a
            href="/press-kit.html"
            className="inline-flex items-center gap-2 mt-6 text-[#FF8A75] font-semibold underline decoration-dotted underline-offset-4"
          >
            Download media kit →
          </a>
        </article>

        <article className="rounded-3xl border border-[#1A2A3A]/10 p-6 bg-white">
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#2D9C8E] mb-3">Third-party proofs</p>
          <h3 className="text-2xl font-semibold mb-4">People talk.</h3>
          <ul className="space-y-4 text-sm text-[#1A2A3A]/70">
            {PRESS_HITS.map((hit) => (
              <li key={hit.outlet}>
                <a
                  href={hit.url}
                  target="_blank"
                  rel="noopener nofollow"
                  className="text-[#1A2A3A] font-semibold hover:text-[#2D9C8E]"
                >
                  {hit.outlet}
                </a>
                <p className="text-[#1A2A3A]/60">{hit.summary}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xs text-[#1A2A3A]/60">
            Full transparency docs: <a href="/privacy.html" className="underline">Privacy</a> ·{' '}
            <a href="/terms.html" className="underline">Terms</a>
          </div>
        </article>
      </div>
    </div>
  </section>
);



