import React from 'react';
import { Analytics } from '@vercel/analytics/react';

const highlights = [
  {
    title: 'Plug & Play Scripts',
    detail: 'Copy-paste prompts, polished persona kits, and daily drops straight from the server.',
  },
  {
    title: 'Premium Filters',
    detail: 'Only verified hustlers inside. Zero lurkers, zero tourists, just people ready to cash out.',
  },
  {
    title: '24/7 Signal',
    detail: 'Live chatrooms, rapid-fire updates, and accountability threads so you never stall.',
  },
];

const perks = [
  'Step-by-step ewhoring playbook built for Discord and Telegram.',
  'Ready-made assets so you can go live in under an hour.',
  'Weekly live calls with hosts who actually run numbers.',
  'Custom bots to automate replies, upsells, and follow-ups.',
  'Private vault with receipts, rebuttals, and recovery lines.',
];

const guarantees = [
  'You learn by doing, not lurking.',
  'No fluff, no filler, no recycled guru slides.',
  'Refund policy: if you do the reps and see zero traction, we own it.',
];

const CTAButton: React.FC<{ label: string; href?: string }> = ({ label, href = '#join' }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 via-pink-500 to-purple-600 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_10px_40px_-12px_rgba(255,140,91,0.7)] transition-transform duration-200 hover:scale-[1.02]"
  >
    <span className="text-xs md:text-sm">{label}</span>
    <span className="text-lg">⚡</span>
  </a>
);

const Card: React.FC<{ title: string; detail: string }> = ({ title, detail }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-pink-900/20 backdrop-blur">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-slate-200/80">{detail}</p>
  </div>
);

const SectionShell: React.FC<{ title: string; eyebrow?: string; children: React.ReactNode }> = ({
  title,
  eyebrow,
  children,
}) => (
  <section className="relative mx-auto max-w-6xl px-5 py-16 md:py-24">
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/5 via-slate-900 to-purple-700/10 blur-3xl" />
    {eyebrow && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200/70">{eyebrow}</p>
    )}
    <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
    <div className="mt-6 space-y-6 text-slate-200/80 md:space-y-8">{children}</div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,115,179,0.12)_0,_transparent_35%),radial-gradient(circle_at_20%_20%,_rgba(94,234,212,0.08)_0,_transparent_30%),radial-gradient(circle_at_80%_0,_rgba(255,214,102,0.08)_0,_transparent_25%)]" />

      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 via-pink-500 to-purple-600 text-slate-950 font-black">
              EW
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-100/70">Ewhoring HQ</p>
              <p className="text-sm font-semibold text-white">Sugar Server Syndicate</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 text-sm font-medium text-slate-200/90 md:flex">
            <span className="rounded-full bg-white/5 px-3 py-1 text-amber-100">100% original drop</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-pink-100">1 page, zero fluff</span>
            <CTAButton label="Join the server" />
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/5">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 pb-16 pt-20 md:flex-row md:items-center md:gap-16">
            <div className="space-y-6 text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-100">Premium • Fun • No recycled slides</p>
              <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
                Your new favorite ewhoring server.
                <span className="block bg-gradient-to-r from-amber-300 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                  Learn fast. Sell faster. Keep it playful.
                </span>
              </h1>
              <p className="text-lg text-slate-200/80 md:text-xl">
                One-page portal with everything you need to start, scale, and stay ahead. Fresh scripts, live rooms,
                automated plays, and a crew that actually responds.
              </p>
              <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                <CTAButton label="Enter the server" />
                <p className="text-sm text-slate-200/70">Membership capped weekly. Grab a slot before we lock intake.</p>
              </div>
              <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-3">
                {[
                  ['7.5k+', 'members winning'],
                  ['4m+', 'weekly impressions tracked'],
                  ['98%', 'say the vibe is unmatched'],
                ].map(([stat, caption]) => (
                  <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-amber-500/5">
                    <p className="text-2xl font-black text-white">{stat}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-200/70">{caption}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-1/2">
              <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-pink-400/40 blur-3xl" />
              <div className="absolute -right-10 bottom-4 h-24 w-24 rounded-full bg-amber-300/30 blur-3xl" />
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-purple-900/30 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-100">Inside the server</p>
                <div className="mt-4 space-y-3 text-sm text-slate-100/90">
                  <div className="rounded-2xl bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-200">Live scripts</p>
                    <p className="mt-1 font-semibold">"Drop the sugar emoji when they bite. Works like a charm."</p>
                  </div>
                  <div className="rounded-2xl bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-pink-200">Automation</p>
                    <p className="mt-1 font-semibold">Multi-platform bot templates, fully documented and ready to run.</p>
                  </div>
                  <div className="rounded-2xl bg-black/40 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-purple-200">Receipts</p>
                    <p className="mt-1 font-semibold">Real screenshots, rebuttals, and recovery lines for every curveball.</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-amber-400/90 via-pink-500/90 to-purple-600/90 p-4 text-slate-950">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em]">Weekly sprint</p>
                    <p className="text-sm font-bold">Hit 3 new conversions this week or we coach you 1:1.</p>
                  </div>
                  <span className="text-3xl">🎯</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell eyebrow="Highlights" title="What makes this server different?">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} title={item.title} detail={item.detail} />
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="The Play" title="Everything you need in one page">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-pink-900/20">
              <p className="text-sm text-slate-100/80">
                We built this portal for speed. Tap the CTA, join the server, and you land inside a curated set of rooms: scripts,
                persona labs, automation drops, and a premium lounge for bigger numbers. Everything is organized, tagged, and updated
                daily so you never wonder what to do next.
              </p>
              <div className="space-y-3 text-sm text-slate-100/90">
                {perks.map((perk) => (
                  <div key={perk} className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✨</span>
                    <p>{perk}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
                <CTAButton label="Grab your invite" />
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">Low key. High touch. 100% unique layout.</p>
              </div>
            </div>
            <div className="space-y-4 rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-900 to-black p-8 shadow-xl shadow-purple-900/20">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.25em] text-amber-200">Guarantees</p>
                <span className="text-2xl">🛡️</span>
              </div>
              <div className="space-y-3 text-sm text-slate-100/90">
                {guarantees.map((line) => (
                  <div key={line} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    {line}
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/5 bg-gradient-to-r from-amber-400/20 via-pink-500/20 to-purple-600/20 px-4 py-3 text-sm text-slate-100/80">
                Our vibe: fun, premium, simple. We keep the culture light while staying dialed on numbers. If that sounds like your lane, this is it.
              </div>
              <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-xs text-slate-100/80">
                <span>Next audit: every Sunday • We purge inactive users</span>
                <span className="text-lg">🧹</span>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell eyebrow="Roadmap" title="Four steps to get inside">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {[
              ['1', 'Tap the CTA and answer the intake form honestly.'],
              ['2', 'Grab the starter kit and fire off your first test convo.'],
              ['3', 'Post your results in #receipts — get direct feedback.'],
              ['4', 'Scale with automation, upsells, and community challenges.'],
            ].map(([step, text]) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-100/85">
                <p className="text-xs uppercase tracking-[0.28em] text-amber-100">Step {step}</p>
                <p className="mt-2 font-semibold text-white">{text}</p>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell eyebrow="Join" title="Ready to play?">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-400/10 via-pink-500/10 to-purple-600/15 p-8 shadow-2xl shadow-pink-900/25 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-200">Only on this page</p>
              <p className="mt-2 text-2xl font-bold text-white md:text-3xl">One invite link. One community. 100% unique drop.</p>
              <p className="mt-3 text-sm text-slate-100/80">No recycled templates. No bland landing pages. Just the vibe you were looking for.</p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <CTAButton label="Join the server" />
              <p className="text-xs uppercase tracking-[0.28em] text-amber-100/80">Spots refresh every Monday</p>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/80 py-6 text-center text-xs text-slate-200/60 backdrop-blur">
        <p>© {new Date().getFullYear()} ewhoring.com • Built for the community, not the copycats.</p>
        <p className="mt-1">This page is intentionally simple, premium, and fun — just like the server.</p>
      </footer>

      <Analytics />
    </div>
  );
};

export default App;
