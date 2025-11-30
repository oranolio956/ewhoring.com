#!/usr/bin/env node

import https from 'node:https';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const MANIFEST_PATH = path.join(ROOT, 'public', 'generated', '_manifest.json');

const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'oranolio2025seokey';
const INDEXNOW_ENDPOINT = 'https://www.bing.com/indexnow';
const HOST = 'ewhoring.com';

const readUrls = async () => {
  const manifestRaw = await readFile(MANIFEST_PATH, 'utf-8');
  const manifest = JSON.parse(manifestRaw);
  return (manifest.generated || []).map((file) => `https://${HOST}/generated/${file}`);
};

const pingIndexNow = (urlList) =>
  new Promise((resolve, reject) => {
    const body = JSON.stringify({
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/oranolio2025seokey.txt`,
      urlList
    });

    const req = https.request(
      INDEXNOW_ENDPOINT,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(body)
        }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve({ statusCode: res.statusCode, body: data });
          } else {
            reject(new Error(`IndexNow failed (${res.statusCode}): ${data}`));
          }
        });
      }
    );

    req.on('error', reject);
    req.write(body);
    req.end();
  });

const main = async () => {
  const urls = await readUrls();
  if (!urls.length) {
    console.warn('[indexnow] no urls to submit');
    return;
  }
  const chunkSize = 10;
  for (let i = 0; i < urls.length; i += chunkSize) {
    const slice = urls.slice(i, i + chunkSize);
    const result = await pingIndexNow(slice);
    console.log(`[indexnow] submitted ${slice.length} URLs`, result);
  }
};

main().catch((err) => {
  console.error('[indexnow] error', err);
  process.exitCode = 1;
});

