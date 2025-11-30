#!/usr/bin/env node

import { config } from 'dotenv';
import https from 'node:https';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Load environment variables from .env file
config({ path: path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '.env') });

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');

// Use Moz API or Ahrefs API for link monitoring
const API_KEY = process.env.AHREFS_API_KEY || process.env.MOZ_API_KEY;
const API_ENDPOINT = process.env.AHREFS_API_KEY
  ? 'https://api.ahrefs.com/v2/site-explorer/backlinks'
  : 'https://lsapi.seomoz.com/v2/links';

const TARGET_URL = 'https://ewhoring.com';

const fetchLinkData = () =>
  new Promise((resolve, reject) => {
    const url = new URL(API_ENDPOINT);
    url.searchParams.set('target', TARGET_URL);
    url.searchParams.set('mode', 'domain');
    url.searchParams.set('limit', '1000');

    const headers = {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    };

    const req = https.request(
      url.toString(),
      { headers },
      (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) {
            resolve(JSON.parse(data));
          } else {
            reject(new Error(`API failed (${res.statusCode}): ${data}`));
          }
        });
      }
    );

    req.on('error', reject);
    req.end();
  });

const calculateVelocity = (current, previous) => {
  if (!previous || !previous.length) return { new: current.length, lost: 0, velocity: 0 };

  const currentUrls = new Set(current.map(link => link.url));
  const previousUrls = new Set(previous.map(link => link.url));

  const newLinks = current.filter(link => !previousUrls.has(link.url));
  const lostLinks = previous.filter(link => !currentUrls.has(link.url));

  const velocity = ((newLinks.length - lostLinks.length) / previous.length) * 100;

  return {
    new: newLinks.length,
    lost: lostLinks.length,
    velocity: Math.round(velocity * 100) / 100,
    total: current.length
  };
};

const loadPreviousData = async () => {
  try {
    const data = await readFile(path.join(ROOT, 'monitoring', 'link-history.json'), 'utf-8');
    return JSON.parse(data);
  } catch {
    return null;
  }
};

const saveData = async (data) => {
  await writeFile(
    path.join(ROOT, 'monitoring', 'link-history.json'),
    JSON.stringify(data, null, 2)
  );
};

const checkAlerts = (velocity) => {
  const alerts = [];
  const ALERT_THRESHOLDS = {
    velocity_drop: -15,  // 15% drop triggers alert
    velocity_spike: 50,  // 50% increase triggers alert
    total_drop: -20      // 20% total link loss triggers alert
  };

  if (velocity.velocity <= ALERT_THRESHOLDS.velocity_drop) {
    alerts.push(`🚨 Link velocity dropped ${velocity.velocity}%`);
  }

  if (velocity.velocity >= ALERT_THRESHOLDS.velocity_spike) {
    alerts.push(`🚀 Link velocity spiked ${velocity.velocity}%`);
  }

  if (velocity.lost > Math.abs(velocity.total * ALERT_THRESHOLDS.total_drop / 100)) {
    alerts.push(`⚠️ Lost ${velocity.lost} backlinks (${Math.round(velocity.lost/velocity.total*100)}% of total)`);
  }

  return alerts;
};

const main = async () => {
  if (!API_KEY) {
    console.warn('[link-monitor] No API key found - skipping link monitoring');
    return;
  }

  try {
    const currentData = await fetchLinkData();
    const previousData = await loadPreviousData();

    const velocity = calculateVelocity(currentData.backlinks || [], previousData?.backlinks || []);

    console.log(`[link-monitor] ${velocity.total} backlinks (+${velocity.new} -${velocity.lost}, ${velocity.velocity}% velocity)`);

    // Save current data for next run
    await saveData({
      timestamp: new Date().toISOString(),
      backlinks: currentData.backlinks || [],
      summary: velocity
    });

    // Check for alerts
    const alerts = checkAlerts(velocity);
    if (alerts.length > 0) {
      console.log('[link-monitor] ALERTS:', alerts.join(', '));

      // Send Discord alert if webhook configured
      if (process.env.DISCORD_WEBHOOK_URL) {
        const alertBody = {
          content: `**SEO Alert - Link Monitoring**\n${alerts.join('\n')}\n\nCurrent: ${velocity.total} backlinks (${velocity.velocity}% velocity)`,
          username: 'SEO Monitor'
        };

        await fetch(process.env.DISCORD_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(alertBody)
        });
      }
    }

  } catch (err) {
    console.error('[link-monitor] error', err.message);
    process.exitCode = 1;
  }
};

main();
