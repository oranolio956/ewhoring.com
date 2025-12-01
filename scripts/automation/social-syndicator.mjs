#!/usr/bin/env node

import { config } from 'dotenv';
import https from 'node:https';

// Load environment variables
config();

/**
 * Reddit API integration for automated posting
 */
class RedditSyndicator {
  constructor() {
    this.clientId = process.env.REDDIT_CLIENT_ID;
    this.clientSecret = process.env.REDDIT_CLIENT_SECRET;
    this.username = process.env.REDDIT_USERNAME;
    this.password = process.env.REDDIT_PASSWORD;
  }

  async postToSubreddit(subreddit, title, content, link) {
    if (!this.clientId || !this.clientSecret) {
      console.log('🔴 Reddit not configured, skipping...');
      return;
    }

    try {
      // Get access token
      const token = await this.getAccessToken();

      // Prepare post data
      const postData = {
        sr: subreddit,
        title: title,
        kind: link ? 'link' : 'self',
        text: link ? undefined : content,
        url: link
      };

      const response = await this.makeRequest('/api/submit', 'POST', token, postData);
      console.log('✅ Reddit post submitted:', response);
      return response;
    } catch (error) {
      console.error('❌ Reddit posting failed:', error.message);
    }
  }

  async getAccessToken() {
    const auth = Buffer.from(`${this.clientId}:${this.clientSecret}`).toString('base64');

    const postData = new URLSearchParams({
      grant_type: 'password',
      username: this.username,
      password: this.password
    });

    const response = await this.makeRequest('/api/v1/access_token', 'POST', auth, postData, true);
    return response.access_token;
  }

  makeRequest(endpoint, method, auth, data, isBasic = false) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'www.reddit.com',
        path: endpoint,
        method: method,
        headers: {
          'Authorization': isBasic ? `Basic ${auth}` : `Bearer ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'EwhoringBot/1.0'
        }
      };

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            resolve(body);
          }
        });
      });

      req.on('error', reject);

      if (data) {
        req.write(typeof data === 'string' ? data : new URLSearchParams(data).toString());
      }

      req.end();
    });
  }
}

/**
 * Telegram Bot integration
 */
class TelegramSyndicator {
  constructor() {
    this.botToken = process.env.TELEGRAM_BOT_TOKEN;
    this.chatId = process.env.TELEGRAM_CHAT_ID;
  }

  async sendMessage(message) {
    if (!this.botToken || !this.chatId) {
      console.log('🔴 Telegram not configured, skipping...');
      return;
    }

    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;

    const postData = JSON.stringify({
      chat_id: this.chatId,
      text: message,
      parse_mode: 'HTML',
      disable_web_page_preview: false
    });

    return new Promise((resolve, reject) => {
      const req = https.request(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          console.log('✅ Telegram message sent');
          resolve(JSON.parse(body));
        });
      });

      req.on('error', reject);
      req.write(postData);
      req.end();
    });
  }
}

/**
 * Discord Webhook integration
 */
class DiscordSyndicator {
  constructor() {
    this.webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  }

  async sendMessage(message, embed = null) {
    if (!this.webhookUrl) {
      console.log('🔴 Discord not configured, skipping...');
      return;
    }

    const postData = JSON.stringify({
      content: message,
      embeds: embed ? [embed] : undefined,
      username: 'Oranolio Protocol'
    });

    return new Promise((resolve, reject) => {
      const req = https.request(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => {
          console.log('✅ Discord message sent');
          resolve(JSON.parse(body));
        });
      });

      req.on('error', reject);
      req.write(postData);
      req.end();
    });
  }
}

/**
 * Main syndication function
 */
async function syndicateContent(content, platforms = ['reddit', 'telegram', 'discord']) {
  console.log('📢 Starting content syndication...');

  const reddit = new RedditSyndicator();
  const telegram = new TelegramSyndicator();
  const discord = new DiscordSyndicator();

  // Default content if none provided
  const defaultContent = {
    title: 'Sugar Daddy Protocol - Target Wealthy Men',
    message: '🚀 Just released: Complete guide to targeting wealthy sugar daddies and high-net-worth individuals. Learn how to secure $5K-10K monthly arrangements.\n\nLink: https://ewhoring.com',
    link: 'https://ewhoring.com'
  };

  const post = content || defaultContent;

  const promises = [];

  if (platforms.includes('reddit')) {
    promises.push(
      reddit.postToSubreddit('ewhoring', post.title, post.message, post.link)
    );
  }

  if (platforms.includes('telegram')) {
    promises.push(
      telegram.sendMessage(`${post.title}\n\n${post.message}`)
    );
  }

  if (platforms.includes('discord')) {
    const embed = {
      title: post.title,
      description: post.message,
      url: post.link,
      color: 0xFF8A75,
      footer: {
        text: 'Oranolio Protocol'
      }
    };

    promises.push(
      discord.sendMessage('', embed)
    );
  }

  try {
    await Promise.allSettled(promises);
    console.log('🎉 Syndication completed!');
  } catch (error) {
    console.error('❌ Syndication failed:', error.message);
  }
}

/**
 * Automated weekly syndication
 */
async function weeklySyndication() {
  console.log('📅 Running weekly syndication...');

  const weeklyContent = [
    {
      title: 'LinkedIn Sugar Daddies: How to Target Executives',
      message: '💼 Learn how to find and approach wealthy LinkedIn executives. Position yourself as the perfect sugar baby for high-powered men.\n\nhttps://ewhoring.com',
      link: 'https://ewhoring.com'
    },
    {
      title: 'Crypto Whales on Telegram: The Ultimate Guide',
      message: '₿ Discover how to mine crypto whales on Telegram. These guys tip $500+ and send Lambos as gifts.\n\nhttps://ewhoring.com',
      link: 'https://ewhoring.com'
    },
    {
      title: 'Seeking.com Sugar Daddy Arrangements',
      message: '💰 Seeking.com is where serious sugar daddy arrangements happen. Learn the psychology and approach.\n\nhttps://ewhoring.com',
      link: 'https://ewhoring.com'
    }
  ];

  // Rotate content weekly
  const weekNumber = Math.floor(Date.now() / (7 * 24 * 60 * 60 * 1000)) % weeklyContent.length;
  const content = weeklyContent[weekNumber];

  await syndicateContent(content);
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'weekly':
    await weeklySyndication();
    break;
  case 'reddit':
    await syndicateContent(null, ['reddit']);
    break;
  case 'telegram':
    await syndicateContent(null, ['telegram']);
    break;
  case 'discord':
    await syndicateContent(null, ['discord']);
    break;
  default:
    // Test all platforms
    await syndicateContent();
    break;
}

