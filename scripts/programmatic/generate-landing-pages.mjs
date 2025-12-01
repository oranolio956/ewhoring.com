#!/usr/bin/env node

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const SEED_PATH = path.join(ROOT, 'content', 'programmatic-seeds.json');
const OUTPUT_DIR = path.join(ROOT, 'public', 'generated');

const kebab = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const prettyJson = (data) =>
  JSON.stringify(data, null, 2)
    .replace(/<\/script>/gi, '<\\/script>');

const baseHead = (title, description, canonical) => `
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${canonical}"/>
  <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large" />
`;

const baseFooter = (schema) => `
  <script type="application/ld+json">
${prettyJson(schema)}
  </script>
</head>
<body>
  <main>${'{CONTENT}'}</main>
</body>
</html>`;

const renderCityLanding = (target) => {
  const canonical = `https://ewhoring.com/${target.slug}.html`;
  const title = `Ewhore Discord Servers in ${target.city} (${new Date().getFullYear()})`;
  const description = `Verified ${target.city} ewhoring servers + Telegram drops. ${target.metro_stat}. Entry scripts + payment stack included.`;
  const header = baseHead(title, description, canonical);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', position: 1, name: 'Ewhoring', item: 'https://ewhoring.com/' },
          { '@type': 'ListItem', position: 2, name: 'Discord Servers', item: 'https://ewhoring.com/discord-ewhoring-servers.html' },
          { '@type': 'ListItem', position: 3, name: target.city, item: canonical }
        ]
      },
      {
        '@type': 'Event',
        'name': `${target.city} Discord & Telegram Drops`,
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'eventStatus': 'https://schema.org/EventScheduled',
        'startDate': new Date().toISOString(),
        'endDate': `${new Date().getFullYear()}-12-31`,
        'location': {
          '@type': 'VirtualLocation',
          'url': canonical
        },
        'organizer': {
          '@type': 'Organization',
          'name': 'Oranolio Systems',
          'url': 'https://ewhoring.com/'
        }
      },
      {
        '@type': 'FAQPage',
        'mainEntity': (target.faq_seed || []).map((item) => ({
          '@type': 'Question',
          'name': item.q,
          'acceptedAnswer': { '@type': 'Answer', 'text': item.a }
        }))
      }
    ]
  };
  const serverRows = (target.server_examples || [])
    .map(
      (server) => `
        <tr>
          <td>${server.name}</td>
          <td>${server.platform}</td>
          <td>${server.gate}</td>
          <td>${server.hook}</td>
        </tr>`
    )
    .join('');
  const faqBlocks = (target.faq_seed || [])
    .map(
      (faq) => `
      <article>
        <h3>${faq.q}</h3>
        <p>${faq.a}</p>
      </article>`
    )
    .join('');
  const content = `
    <section>
      <h1>Ewhore Discord Servers in ${target.city}</h1>
      <p>${target.metro_stat} · Platforms: ${(target.platform_mix || []).join(', ')}</p>
    </section>
    <section>
      <h2>Server Intel</h2>
      <table>
        <thead><tr><th>Name</th><th>Platform</th><th>Gate</th><th>Hook</th></tr></thead>
        <tbody>${serverRows}</tbody>
      </table>
    </section>
    <section>
      <h2>Execution Stack</h2>
      <ol>
        <li>Clone persona with local slang + timestamped Stories.</li>
        <li>Run split SIM cards for ${target.city} area codes.</li>
        <li>Route payments via CashApp & crypto based on gate type.</li>
      </ol>
    </section>
    <section>
      <h2>FAQ</h2>
      ${faqBlocks}
    </section>
    <section>
      <a href="https://ewhoring.com/#pricing">Unlock the Oranolio Protocol</a>
    </section>`;
  return header + baseFooter(schema).replace('{CONTENT}', content);
};

const renderComparisonLanding = (target) => {
  const canonical = `https://ewhoring.com/${target.slug}.html`;
  const title = `Ewhoring Methods Compared (${new Date().getFullYear()})`;
  const description = 'Risk matrix + ticket size benchmarks for every viable ewhoring method.';
  const header = baseHead(title, description, canonical);
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        'itemListElement': (target.methods || []).map((m, idx) => ({
          '@type': 'ListItem',
          'position': idx + 1,
          'name': m.name,
          'additionalType': 'https://schema.org/HowTo',
          'description': `${m.risk} risk · setup ${m.setup_hours}h · ticket ${m.ticket}`
        }))
      }
    ]
  };
  const rows = (target.methods || [])
    .map(
      (method) => `
        <tr>
          <td>${method.name}</td>
          <td>${method.risk}</td>
          <td>${method.setup_hours}h</td>
          <td>${method.ticket}</td>
        </tr>`
    )
    .join('');
  const content = `
    <section>
      <h1>Ewhoring Methods Compared</h1>
      <p>Choose the play that matches your risk tolerance + time budget.</p>
      <table>
        <thead><tr><th>Method</th><th>Risk</th><th>Setup Time</th><th>Ticket Size</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </section>
    <section>
      <h2>Scenario Planning</h2>
      <ul>
        <li>Need fast cash? Run Discord sprint + AI voice dupe.</li>
        <li>Need safer cashflow? Faceless OnlyFans + upsell packs.</li>
        <li>Need whale hunting? AI persona rentals w/ manual screening.</li>
      </ul>
    </section>`;
  return header + baseFooter(schema).replace('{CONTENT}', content);
};

const renderScriptLanding = (targets) => {
  const byPlatform = targets.reduce((acc, cur) => {
    const slug = kebab(cur.platform);
    acc[slug] = acc[slug] || [];
    acc[slug].push(cur);
    return acc;
  }, {});

  return Object.entries(byPlatform).map(([platformSlug, scripts]) => {
    const canonical = `https://ewhoring.com/ewhoring-scripts-${platformSlug}.html`;
    const title = `${scripts[0].platform} Ewhoring Scripts (${new Date().getFullYear()})`;
    const description = `Copy-paste ${scripts[0].platform} ewhoring scripts w/ personas + objection handlers.`;
    const header = baseHead(title, description, canonical);
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CreativeWork',
          'name': `${scripts[0].platform} Script Vault`,
          'url': canonical,
          'creator': { '@type': 'Organization', 'name': 'Oranolio Systems' }
        },
        {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': `How to convert on ${scripts[0].platform}?`,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Open with persona hook, gate voice proof, demand instant payment screenshots.'
              }
            }
          ]
        }
      ]
    };
    const cards = scripts
      .map(
        (script) => `
        <article>
          <h2>${script.platform} · ${script.persona}</h2>
          <p><strong>Hook:</strong> ${script.hook}</p>
          <p><strong>Objection:</strong> ${script.objection}</p>
          <p><strong>CTA:</strong> ${script.cta}</p>
          <pre>${script.script}</pre>
        </article>`
      )
      .join('');
    const content = `
      <section>
        <h1>${scripts[0].platform} Script Vault</h1>
        <p>Swipe tested prompts + DM frameworks.</p>
      </section>
      ${cards}
      <section>
        <a href="https://ewhoring.com/#pricing">Unlock 200+ scripts inside the Protocol</a>
      </section>`;
    return {
      fileName: `ewhoring-scripts-${platformSlug}.html`,
      html: header + baseFooter(schema).replace('{CONTENT}', content)
    };
  });
};

const main = async () => {
  const seedRaw = await readFile(SEED_PATH, 'utf-8');
  const seeds = JSON.parse(seedRaw);
  await mkdir(OUTPUT_DIR, { recursive: true });
  const outputManifest = [];

  for (const city of seeds.city_targets || []) {
    const slug = city.slug || `discord-ewhoring-${kebab(city.city)}`;
    const fileName = `${slug}.html`;
    const html = renderCityLanding({ ...city, slug });
    await writeFile(path.join(OUTPUT_DIR, fileName), html, 'utf-8');
    outputManifest.push(fileName);
  }

  for (const comparison of seeds.comparison_targets || []) {
    const slug = comparison.slug || `ewhoring-compared-${kebab(comparison.methods?.[0]?.name || 'stack')}`;
    const fileName = `${slug}.html`;
    const html = renderComparisonLanding({ ...comparison, slug });
    await writeFile(path.join(OUTPUT_DIR, fileName), html, 'utf-8');
    outputManifest.push(fileName);
  }

  const scriptPages = renderScriptLanding(seeds.script_targets || []);
  for (const page of scriptPages) {
    await writeFile(path.join(OUTPUT_DIR, page.fileName), page.html, 'utf-8');
    outputManifest.push(page.fileName);
  }

  const manifestPath = path.join(OUTPUT_DIR, '_manifest.json');
  await writeFile(manifestPath, JSON.stringify({ generated: outputManifest, timestamp: new Date().toISOString() }, null, 2));
  console.log(`Generated ${outputManifest.length} landing pages → ${OUTPUT_DIR}`);
};

main().catch((err) => {
  console.error('[programmatic] generation failed', err);
  process.exitCode = 1;
});



