import React from 'react';

const highlights = [
  {
    title: 'Static by design',
    detail: 'No feeds, no distractions. NARO loads fast and stays predictable everywhere you open it.',
  },
  {
    title: 'Domain-forward',
    detail: 'The entire experience revolves around the NARO name — simple, memorable, and ready to point anywhere.',
  },
  {
    title: 'Hello notlexzi',
    detail: 'We kept a dedicated greeting just for you to make sure this page always feels personal.',
  },
];

const sections = [
  {
    eyebrow: 'What this is',
    title: 'A single static homepage for NARO',
    copy:
      'Everything you see here lives on one page. No endless navigation, no hidden feeds. Just the NARO domain speaking clearly everywhere it appears.',
  },
  {
    eyebrow: 'Moving everywhere',
    title: 'A motion line that never stops',
    copy:
      'The marquee below loops forever to broadcast the NARO name across the layout, so the brand is always in motion even though the content is static.',
  },
  {
    eyebrow: 'Built to stay',
    title: 'A calm place to land',
    copy:
      'Static means stable. Bookmark the page, set it as a start tab, or mirror it elsewhere — NARO will look the same wherever you load it.',
  },
];

const movingWords = ['NARO domain', 'Static forever', 'Hi notlexzi', 'Everywhere online', 'Fast by default', 'One-page home'];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <style>{`
        @keyframes softShift {
          0% { transform: translateY(0px) scale(1); opacity: 0.8; }
          50% { transform: translateY(-12px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0px) scale(1); opacity: 0.8; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .floating-blob {
          animation: softShift 10s ease-in-out infinite;
          filter: blur(72px);
        }

        .marquee-track {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          width: max-content;
          animation: marquee 16s linear infinite;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.08),transparent_40%),radial-gradient(circle_at_80%_0,rgba(251,191,36,0.08),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_35%)]" />

      <div className="floating-blob absolute -left-32 top-10 h-64 w-64 rounded-full bg-pink-500/30" />
      <div className="floating-blob absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-purple-500/20" />

      <header className="relative border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-pink-500 to-purple-600 text-xl font-black text-slate-950">
              N
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-amber-100/70">NARO domain</p>
              <p className="text-lg font-semibold text-white">Static home that moves everywhere</p>
            </div>
          </div>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-100/80">
            Hi notlexzi
          </span>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-12 px-6 pb-20 pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-100/80">Static • Lightweight • Everywhere</p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
              NARO is the domain.
              <span className="block bg-gradient-to-r from-amber-200 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                This page is its permanent home.
              </span>
            </h1>
            <p className="text-lg text-slate-200/85">
              No feeds to chase, no dashboards to learn. Just a calm landing that keeps the NARO name up front and keeps saying hello to notlexzi.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-200/80">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Built for fast redirects</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Safe to mirror or cache</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Nothing to configure</span>
            </div>
            <div className="flex flex-col gap-3 text-sm text-slate-200/75">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-pink-900/15">
                  <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">{item.title}</p>
                  <p className="mt-1 text-white/90">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-950 to-black p-8 shadow-2xl shadow-purple-900/30">
            <div className="mb-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.32em] text-amber-100/80">Always moving</p>
              <p className="text-2xl font-bold text-white">The NARO signal scrolls forever so the name is visible in every frame.</p>
              <p className="text-sm text-slate-200/80">Even though the page is static, the motion line keeps the brand alive.</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-4">
              <div className="marquee-track">
                {[...movingWords, ...movingWords].map((word, index) => (
                  <span key={`${word}-${index}`} className="rounded-full bg-gradient-to-r from-amber-300/80 via-pink-400/80 to-purple-500/80 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-pink-900/20">
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200/85">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">Static assurance</p>
              <p className="mt-2 text-white/90">Nothing here depends on remote feeds. Save it, host it, or point the NARO domain straight at it.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-pink-900/20">
              <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">{section.eyebrow}</p>
              <h2 className="mt-2 text-xl font-bold text-white">{section.title}</h2>
              <p className="mt-3 text-sm text-slate-200/80">{section.copy}</p>
            </div>
          ))}
        </section>

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400/15 via-pink-500/15 to-purple-600/20 p-8 shadow-2xl shadow-purple-900/25">
          <p className="text-xs uppercase tracking-[0.32em] text-amber-100/85">Final word</p>
          <h3 className="mt-2 text-2xl font-bold text-white">This is the entire NARO homepage.</h3>
          <p className="mt-3 text-sm text-slate-200/85">It is static, deliberate, and ready to be the one place the domain lands. Share it, frame it, or forward every other link here.</p>
        </section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 py-6 text-center text-xs text-slate-200/60 backdrop-blur">
        <p>Hi notlexzi. You are always welcome at the NARO homepage.</p>
        <p className="mt-1">Made to stay simple, made to move everywhere by name.</p>
      </footer>
    </div>
  );
};

export default App;
