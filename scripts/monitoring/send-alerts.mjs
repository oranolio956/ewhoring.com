#!/usr/bin/env node

import { readFile } from 'node:fs/promises';
import https from 'node:https';
import { config } from 'dotenv';

// Load environment variables
config();

const ALERTS_PATH = 'monitoring/alerts.json';

async function sendTelegramAlert(message) {
  const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log('Telegram not configured, skipping...');
    return;
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const postData = JSON.stringify({
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: 'HTML'
  });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log('📱 Telegram alert sent:', data);
        resolve(data);
      });
    });

    req.on('error', (err) => {
      console.error('❌ Telegram alert failed:', err.message);
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

async function sendDiscordAlert(message) {
  const { DISCORD_WEBHOOK_URL } = process.env;

  if (!DISCORD_WEBHOOK_URL) {
    console.log('Discord not configured, skipping...');
    return;
  }

  const postData = JSON.stringify({
    content: message,
    username: 'SEO Monitor',
    avatar_url: 'https://ewhoring.com/favicon.ico'
  });

  const url = new URL(DISCORD_WEBHOOK_URL);
  const options = {
    hostname: url.hostname,
    path: url.pathname,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        console.log('🎮 Discord alert sent:', data);
        resolve(data);
      });
    });

    req.on('error', (err) => {
      console.error('❌ Discord alert failed:', err.message);
      reject(err);
    });

    req.write(postData);
    req.end();
  });
}

async function sendAlerts() {
  try {
    // Read alerts data
    const alertsData = await readFile(ALERTS_PATH, 'utf-8');
    const alerts = JSON.parse(alertsData);

    if (!alerts || alerts.length === 0) {
      console.log('📊 No alerts to send');
      return;
    }

    // Format alert message
    const alertMessage = `🚨 <b>SEO Alerts</b> - ${new Date().toLocaleDateString()}

${alerts.map(alert => `• ${alert.type}: ${alert.message}`).join('\n')}

📈 <a href="https://github.com/oranolio956/ewhoring.com/actions">View Dashboard</a>`;

    // Send to all configured channels
    const promises = [
      sendTelegramAlert(alertMessage),
      sendDiscordAlert(alertMessage)
    ];

    await Promise.allSettled(promises);

  } catch (error) {
    console.error('❌ Alert sending failed:', error.message);
  }
}

// Command line interface
const [,, platform] = process.argv;

if (platform === 'telegram') {
  // Send alerts to Telegram only
  sendTelegramAlert(`🚀 <b>SEO Monitor</b> - Rank check completed\n\nCheck GitHub Actions for detailed results.`)
    .catch(err => console.error('Telegram send failed:', err));
} else if (platform === 'discord') {
  // Send alerts to Discord only
  sendDiscordAlert(`🚀 **SEO Monitor** - Rank check completed\n\nCheck GitHub Actions for detailed results.`)
    .catch(err => console.error('Discord send failed:', err));
} else {
  // Send all alerts
  sendAlerts();
}


