#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..', '..');
const QUEUE_PATH = path.join(ROOT, 'engagement', 'syndication-queue.json');

const redditSubmit = async (job) => {
  const token = process.env.REDDIT_TOKEN;
  const userAgent = process.env.REDDIT_UA || 'ewhoring-syndicator/1.0';
  if (!token) throw new Error('Missing REDDIT_TOKEN');

  const body = new URLSearchParams({
    sr: job.subreddit,
    kind: 'link',
    resubmit: 'true',
    title: job.title,
    url: job.url
  });

  const res = await fetch('https://oauth.reddit.com/api/submit', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': userAgent,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body
  });
  if (!res.ok) {
    throw new Error(`Reddit error: ${res.status} ${await res.text()}`);
  }
  return res.json();
};

const telegramPost = async (job) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHANNEL_ID;
  if (!token || !chatId) throw new Error('Missing Telegram env vars');
  const text = `🔥 ${job.title}\n${job.url}`;
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: false })
  });
  if (!res.ok) {
    throw new Error(`Telegram error: ${res.status} ${await res.text()}`);
  }
  return res.json();
};

const tiktokPlaceholder = async (job) => {
  // Real upload requires TikTok Business API with signed uploads.
  console.log('[tiktok] render job queued → upload via CapCut automation', job.asset);
  return { status: 'queued' };
};

const handlers = {
  reddit: redditSubmit,
  telegram: telegramPost,
  tiktok: tiktokPlaceholder
};

const main = async () => {
  const queueRaw = await readFile(QUEUE_PATH, 'utf-8');
  const queue = JSON.parse(queueRaw);
  let dirty = false;

  for (const job of queue) {
    if (job.status === 'published') continue;
    const handler = handlers[job.platform];
    if (!handler) {
      console.warn(`[syndicate] no handler for ${job.platform}`);
      continue;
    }
    try {
      const response = await handler(job);
      console.log(`[syndicate] ${job.platform} → ${job.title}`, response);
      job.status = job.platform === 'tiktok' ? 'render' : 'published';
      job.published_at = new Date().toISOString();
      dirty = true;
    } catch (err) {
      console.error(`[syndicate] failed for ${job.id}`, err.message);
      job.status = 'error';
      job.error = err.message;
      dirty = true;
    }
  }

  if (dirty) {
    await writeFile(QUEUE_PATH, JSON.stringify(queue, null, 2) + '\n');
  }
};

main().catch((err) => {
  console.error('[syndicate] fatal', err);
  process.exitCode = 1;
});

