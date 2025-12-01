#!/usr/bin/env node

import { execSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

console.log('🚀 Setting up ewhoring.com SEO acceleration...\n');

// Step 1: Install dependencies
console.log('📦 Installing dependencies...');
execSync('npm install', { cwd: ROOT, stdio: 'inherit' });

// Step 2: Generate initial content
console.log('📝 Generating landing pages...');
execSync('npm run generate:pages', { cwd: ROOT, stdio: 'inherit' });

// Step 3: Ping IndexNow
console.log('📡 Pinging IndexNow for instant indexing...');
execSync('npm run ping:indexnow', { cwd: ROOT, stdio: 'inherit' });

// Step 4: Create environment template
console.log('⚙️ Creating environment configuration...');
const envTemplate = `# Environment Variables for SEO Automation
# Copy this to .env and fill in your actual API keys

# SerpAPI for rank monitoring
SERPAPI_KEY=your_serpapi_key_here

# Ahrefs API for link monitoring
AHREFS_API_KEY=your_ahrefs_api_key_here

# Telegram bot for syndication and alerts
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
TELEGRAM_CHAT_ID=your_telegram_chat_id

# Discord webhook for alerts
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your_webhook_here

# Reddit API (optional)
REDDIT_CLIENT_ID=your_reddit_client_id
REDDIT_CLIENT_SECRET=your_reddit_client_secret
REDDIT_USERNAME=your_reddit_username
REDDIT_PASSWORD=your_reddit_password

# Cloudflare Worker API token (for deployments)
CLOUDFLARE_API_TOKEN=your_cf_token_here
CLOUDFLARE_ACCOUNT_ID=your_cf_account_id_here
CLOUDFLARE_ZONE_ID=your_cf_zone_id_here

# Email service for drip campaigns (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Human destination for cloak worker
HUMAN_DESTINATION=https://www.reddit.com/r/ewhoring/`;

await writeFile(path.join(ROOT, '.env.example'), envTemplate);

// Step 5: Build the project
console.log('🔨 Building production assets...');
execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });

// Step 6: Instructions
console.log('\n✅ Setup complete! Next steps:');
console.log('');
console.log('1. 🔑 Configure API keys:');
console.log('   cp .env.example .env');
console.log('   # Edit .env with your actual API keys');
console.log('');
console.log('2. 🚀 Deploy Cloudflare Worker (optional):');
console.log('   npm run deploy:worker');
console.log('');
console.log('3. 🤖 Enable GitHub Actions:');
console.log('   - Go to your repo Settings → Secrets and variables → Actions');
console.log('   - Add the secrets from your .env file');
console.log('');
console.log('4. 📊 Start monitoring:');
console.log('   npm run monitor:ranks');
console.log('   npm run monitor:links');
console.log('');
console.log('5. 📱 Run syndication campaigns:');
console.log('   npm run syndicate');
console.log('');
console.log('🎯 Your site is now optimized for rapid ranking!');
console.log('   Check monitoring/alerts.json for thresholds and monitoring/observability.md for dashboard setup.');


