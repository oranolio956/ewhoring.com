# 2025-11-30 Technical Audit — ewhoring.com

## Crawl & Indexation
- **Static articles lack canonical/self-referencing tags**. Every HTML file inside `public/` is indexable but none declares a canonical, opening the door to duplicates when CDN parameters or translations are launched. Patch each template with `<link rel="canonical" ...>` and ensure `hreflang` tags are mirrored across equivalents.
- **No pagination or discovery cues from the React shell**. The single-page app exposes all offers via JS; crawlers without rendering rely on the `noscript` block, which currently covers only a subset of sections. Expand the noscript payload (FAQ, testimonials, internal links) and publish an HTML snapshot under `/index-rendered.html` for backup indexing.
- **Sitemap gaps**. `sitemap.xml` lists only 20 URLs even though the `public/` folder carries 18+ topical hubs. Autogenerate sitemap(s) during build via a manifest file to keep parity with the actual number of landing pages and include `<lastmod>` stamps from git.
- **IndexNow key is registered but not automated**. The token `oranolio2025seokey.txt` is exposed, yet nothing pings the API. Wire a post-deploy hook that POSTs newly published URLs to the IndexNow endpoint.

## Structured Data & Metadata
- The React shell injects a monolithic 12-type schema array, but the static HTML landers include none. Move shared schema into partials for reuse and emit page-specific schema (FAQPage, HowTo, Product) on every article.
- Verification placeholders (`google-site-verification`, `msvalidate.01`, `yandex-verification`) still use `ADD_YOUR_*` tokens; bots distrust unverified properties. Replace with real keys or strip the tags until ready.
- OG/Twitter images point to `placehold.co`, which occasionally 302s; host creatives locally inside `public/og/` and reference cache-busted URLs.

## Performance & Delivery
- **Remote React runtime**. `index.html` imports React 19 from `aistudiocdn.com` while `package.json` ships React 18.3.1. This mismatched hydration path can produce CLS and replayed renders. Align versions and self-host the runtime via the Vite bundle.
- **Blocking third parties**. Tailwind CDN script, Lenis, and Google Fonts all block first paint. Inline the Tailwind build with PostCSS, vendor Lenis locally, and switch to font-display:swap with a local font subset to keep LCP under 1.2s.
- **No cache headers defined**. Deploying via static hosting today serves default cache-control. Add edge rules (sample Nginx config below) forcing immutable assets to 1 year, HTML to 5 minutes, and enable Brotli level 5.

```nginx
location ~* \.(js|css|svg|webp|jpg|png)$ {
  add_header Cache-Control "public,max-age=31536000,immutable";
  brotli on;
  brotli_comp_level 5;
}
location = /sw.js { add_header Cache-Control "public,max-age=3600"; }
location / {
  add_header Cache-Control "public,max-age=300";
}
```

## Security & Trust
- No explicit `Content-Security-Policy`, referrer policy, or permissions policy. Harden headers to reduce cloaking detection vectors.
- Cookie consent exists, but there is no surfaced privacy policy or data controller info. Deploy `/privacy`, `/terms`, and `/press-kit` landers (see E-E-A-T task) and link them in the footer schema.

## Log & Monitoring Hooks
- Cloudflare/NGINX logs are not referenced anywhere in the repo. Spin up a `logs/README.md` describing how to ship access logs into BigQuery (fields: `host, url, status, cfCacheStatus, botScore`) and schedule hourly craw budget alerts (≥20% spikes in 5xx/4xx or sudden drops in Googlebot hits).
- Enable GA4 + GSC APIs to push the following KPIs into a Looker Studio dashboard: impressions, avg position, CWV per template, backlink velocity, manual-action flags.

## Action Items
| Priority | Issue | Fix |
| --- | --- | --- |
| P0 | React CDN mismatch & blocking scripts | Bundle React/Tailwind locally, lazy-load optional JS |
| P0 | Canonical & sitemap desync | Generate canonical tags + auto sitemaps during build |
| P1 | Missing verification tokens | Capture real DNS/HTML verifications before next crawl |
| P1 | No cache/Brotli | Apply edge config above; validate via `curl -I` |
| P2 | Schema uneven across static landers | Add `schema-data.ts` helpers and inject into every HTML |
| P2 | Missing trust pages | Publish `/privacy`, `/terms`, `/press-kit` and link sitewide |

Document updated: 2025-11-30



