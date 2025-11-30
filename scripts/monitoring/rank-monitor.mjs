#!/usr/bin/env node

import { config } from 'dotenv';
import { readFile, appendFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment variables from .env file
config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '.env') });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const KEYWORDS_PATH = path.join(ROOT, 'monitoring', 'keywords.json');
const LOG_PATH = path.join(ROOT, 'monitoring', 'rank-log.jsonl');

const SERP_API_KEY = process.env.SERPAPI_KEY;
if (!SERP_API_KEY) {
  console.error('Missing SERPAPI_KEY env var');
  process.exit(1);
}

const fetchRank = async ({ keyword, device, gl, hl }) => {
  const params = new URLSearchParams({
    engine: 'google',
    q: keyword,
    device: device || 'desktop',
    gl: gl || 'us',
    hl: hl || 'en',
    api_key: SERP_API_KEY
  });
  const res = await fetch(`https://serpapi.com/search.json?${params.toString()}`);
  if (!res.ok) {
    throw new Error(`SerpAPI error ${res.status}: ${await res.text()}`);
  }
  const json = await res.json();
  const organic = json.organic_results || [];
  const hit = organic.find((result) => (result.link || '').includes('ewhoring.com'));
  const parasiteHit = organic.find((result) => (result.link || '').includes('medium.com') || (result.link || '').includes('linkedin.com'));
  return {
    keyword,
    device,
    rank: hit?.position ?? null,
    url: hit?.link ?? null,
    parasiteRank: parasiteHit?.position ?? null,
    parasiteUrl: parasiteHit?.link ?? null,
    fetched_at: new Date().toISOString()
  };
};

const main = async () => {
  const keywordsRaw = await readFile(KEYWORDS_PATH, 'utf-8');
  const keywords = JSON.parse(keywordsRaw);
  for (const kw of keywords) {
    try {
      const result = await fetchRank(kw);
      await appendFile(LOG_PATH, JSON.stringify(result) + '\n');
      console.log('[rank-monitor]', result);
    } catch (err) {
      console.error('[rank-monitor] error', kw.keyword, err.message);
    }
  }
};

main();

