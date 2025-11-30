# Off-Page Stack (Tiered + Parasite + Cloak)

## Tiered PBN Map
| Tier | Domains | Metrics | Purpose | Posting Cadence | Anchor Mix |
| --- | --- | --- | --- | --- | --- |
| T0 | `ewhoring.com` | DR 47 | Money site | 2x/week | 35% exact / 25% partial / 30% brand / 10% naked |
| T1 | `digitalmuse.ai`, `femprotocol.com`, `discordsirens.com`, `telesimp.io` | DR 22–31, 8+ yrs | Contextual pillow links, parasite support | 1 post / 4 days alternating | 20% exact / 30% partial / 35% brand / 15% URL |
| T2 | 25 aged blogs (`*.info`, `.org`, `.net`) | DR 10–18 | Power T1 with spun longform | 1 post / day (queue) | 40% exact / 30% partial / 30% generic |
| T3 | GSA/SAPE churn (2500 domains) | DR 0–10 | Velocity buffer, nofollow blending | Weekly blasts | 10% exact / 20% partial / 70% generic |

### Deployment Order
1. Warm T1 with refurbished content + 2 outbound authority links each.
2. Drip T2 → T1 links for 10 days before pointing T1 → money URLs.
3. Once GSC impressions climb 20%, layer T3 to URL/brand anchors to hide velocity.

## Parasite SEO Targets
| Platform | Target Keyword | CTA | Notes |
| --- | --- | --- | --- |
| Medium Publication (Top Writer) | "ewhoring guide" | Canonical to `/` | Use jump links mirroring site architecture |
| LinkedIn Newsletter | "discord monetization" | Link to `/discord-ewhoring-servers.html` | Upload PDF for syndication |
| Google Sites | "ewhoring scripts" | Link to `/ewhoring-scripts.html` | Embed generated script cards |
| Reddit (r/sidehustle write-up) | "faceless onlyfans" | Link to `/onlyfans-without-showing-face.html` | Pin mod-approved AMA |

## Cloaked Doorway Flow
1. **Edge worker** sniffs user agent + ASN. Bots receive pristine HTML (`public/generated/*.html`), humans get React SPA.
2. Doorway URLs live on subdomain `labs.ewhoring.com/?kw=discord-ewhoring-new-york`.
3. Rankings tested for 7 days; if URL sticks, publish clean HTML on root and retire doorway.

Deploy the worker in `edge/cloak-worker.js`:
```bash
wrangler deploy edge/cloak-worker.js --name ewhoring-cloak --var HUMAN_DESTINATION=https://ewhoring.com/#pricing
```

## Tracking & Alerts
- Store every parasite URL + index status in `data/parasites.json`.
- Monitor PBN uptime with UptimeRobot (keyword “Oranolio”).
- Use `scripts/offpage/ping-indexnow.mjs` to notify Bing/Yandex after each parasite goes live.

