# Programmatic Template Specs

## 1. City + Platform Takeover (`/discord-{city}.html`)
- **Goal**: Rank for `ewhore discord servers {city}` + `telegram ewhoring {city}` variations.
- **Data Source**: `content/programmatic-seeds.json` → `city_targets`.
- **Hero Block**: h1 `Ewhore Discord Servers in {city}`, subcopy with local stat (use `%CITY_STAT%` token).
- **Modules**:
  1. **Signal Stack** – bullet list of 3 local pain points (latency, time zone, payment apps).
  2. **Server Table** – `ItemList` schema with Name, Platform, Gate Type, Conversion Hook.
  3. **Action CTA** – canonical CTA linking to `/`.
  4. **FAQ** – 4 entries auto-generated from `faq_seed`.
- **Schema**: `City`, `Event`, `FAQPage`, `BreadcrumbList`.
- **Internal Links**: `/discord-ewhoring-servers.html`, `/ewhoring-telegram-groups.html`, nearest city page.

## 2. Method Comparison Matrix (`/ewhoring-compared-{modifier}.html`)
- **Goal**: Dominate “best ewhoring method”, “ewhoring vs X” keywords.
- **Data**: `comparison_targets` array (method name, risk score, setup time, ticket size).
- **Content Blocks**:
  - **Matrix Table** (ARIA roles + sticky header) with color-coded risk.
  - **Scenario Cards** describing when to use each method.
  - **Playbook Download** CTA for email capture.
- **Schema**: `ItemList`, `HowTo`, `SoftwareApplication`.
- **Internal Links**: `/ewhoring-methods-2025.html`, `/onlyfans-without-showing-face.html`.

## 3. Script Vault (`/ewhoring-scripts-{platform}.html`)
- **Goal**: Rank long-tail “ewhoring scripts for {platform}” and drive opt-ins.
- **Data**: `script_targets` array (platform, persona, hook, objection, CTA).
- **Content Blocks**:
  1. **Intro** – highlight platform-specific constraints.
  2. **Script Cards** – `<pre>` blocks with copy button, tag chips for persona + tone.
  3. **Automation Flow** – embed mermaid diagram showing DM funnel.
  4. **UGC Slot** – placeholder for user-submitted script (moderated).
- **Schema**: `CreativeWork`, `SoftwareApplication`, `FAQPage`.
- **Internal Links**: `/ewhoring-scripts.html`, `/reddit-ewhoring.html`, `/ewhoring-methods-2025.html`.

### Build Process
1. Update `content/programmatic-seeds.json`.
2. Run `npm run generate:pages` (script wires to `scripts/programmatic/generate-landing-pages.mjs`).
3. Generated files land in `public/generated/` with ready-made meta blocks + schema.
4. Upload XML diff to `sitemap.xml` and ping IndexNow API.


