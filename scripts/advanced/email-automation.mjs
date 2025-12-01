#!/usr/bin/env node

import { readFile, writeFile } from 'node:fs/promises';
import { config } from 'dotenv';

// Load environment variables
config();

/**
 * Email Marketing Automation System
 * Lead capture, nurturing sequences, abandoned cart recovery
 */
class EmailAutomation {
  constructor() {
    this.sequences = {};
    this.templates = {};
    this.apiKey = process.env.EMAIL_API_KEY;
    this.service = process.env.EMAIL_SERVICE || 'sendgrid'; // sendgrid, mailchimp, etc.
  }

  /**
   * Setup complete email automation system
   */
  async setupEmailAutomation() {
    console.log('📧 Setting up email marketing automation...');

    await this.createLeadCaptureForms();
    await this.setupNurturingSequences();
    await this.implementAbandonedCartRecovery();
    await this.createWelcomeSeries();
    await this.setupEmailAnalytics();

    console.log('✅ Email automation system complete');
  }

  /**
   * Create lead capture forms and popups
   */
  async createLeadCaptureForms() {
    console.log('📝 Creating lead capture forms...');

    const leadCaptureScript = `
// Advanced Lead Capture System
class LeadCapture {
  constructor() {
    this.leads = [];
    this.forms = [];
  }

  init() {
    this.createExitIntentForm();
    this.createScrollPopup();
    this.createTimedPopup();
    this.trackFormSubmissions();
  }

  createExitIntentForm() {
    const formHTML = \`
      <div id="exit-popup" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 10000; align-items: center; justify-content: center; font-family: system-ui, sans-serif;">
        <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 500px; position: relative;">
          <button onclick="document.getElementById('exit-popup').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>

          <h3 style="color: #333; margin-bottom: 1rem;">🎁 FREE Sugar Daddy Targeting Guide</h3>
          <p style="color: #666; margin-bottom: 1.5rem;">Get the exact strategies I used to go from $0 to $12K/month. No spam, unsubscribe anytime.</p>

          <form id="exit-lead-form" style="display: flex; flex-direction: column; gap: 1rem;">
            <input type="email" placeholder="Your email address" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px; font-size: 16px;">
            <button type="submit" style="background: #ff6b6b; color: white; padding: 0.75rem; border: none; border-radius: 5px; font-size: 16px; cursor: pointer;">Get FREE Guide Now</button>
          </form>

          <p style="color: #999; font-size: 12px; margin-top: 1rem; text-align: center;">🔒 Privacy protected. We hate spam too.</p>
        </div>
      </div>
    \`;

    // Add to page
    document.body.insertAdjacentHTML('beforeend', formHTML);

    // Show on exit intent
    let shown = false;
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && !shown) {
        shown = true;
        document.getElementById('exit-popup').style.display = 'flex';

        if (typeof gtag !== 'undefined') {
          gtag('event', 'exit_popup_shown');
        }
      }
    });
  }

  createScrollPopup() {
    const scrollFormHTML = \`
      <div id="scroll-popup" style="display: none; position: fixed; bottom: 20px; right: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 10px; max-width: 350px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); z-index: 1000;">
        <button onclick="document.getElementById('scroll-popup').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: none; border: none; color: white; font-size: 20px; cursor: pointer;">×</button>

        <h4 style="margin-bottom: 0.5rem;">📈 Ready to Transform Your Income?</h4>
        <p style="margin-bottom: 1rem; font-size: 14px;">Join 12,000+ students who've mastered sugar daddy targeting. Get weekly strategies delivered to your inbox.</p>

        <form id="scroll-lead-form" style="display: flex; gap: 0.5rem;">
          <input type="email" placeholder="Email" required style="flex: 1; padding: 0.5rem; border: none; border-radius: 3px; font-size: 14px;">
          <button type="submit" style="background: #ff6b6b; color: white; padding: 0.5rem 1rem; border: none; border-radius: 3px; cursor: pointer;">Join</button>
        </form>
      </div>
    \`;

    document.body.insertAdjacentHTML('beforeend', scrollFormHTML);

    // Show after 50% scroll
    let shown = false;
    window.addEventListener('scroll', () => {
      if (!shown && window.scrollY > document.body.scrollHeight * 0.5) {
        shown = true;
        document.getElementById('scroll-popup').style.display = 'block';

        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_popup_shown');
        }
      }
    });
  }

  createTimedPopup() {
    const timedFormHTML = \`
      <div id="timed-popup" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 2rem; border-radius: 10px; max-width: 450px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); z-index: 10000;">
        <button onclick="document.getElementById('timed-popup').style.display='none'" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>

        <h3 style="color: #333; margin-bottom: 1rem;">⏰ Your FREE Success Blueprint</h3>
        <p style="color: #666; margin-bottom: 1.5rem;">Most people struggle with sugar dating because they don't have a proven system. Get my exact blueprint that generated $500-$5000/week.</p>

        <form id="timed-lead-form" style="display: flex; flex-direction: column; gap: 1rem;">
          <input type="text" placeholder="Your name" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
          <input type="email" placeholder="Your email" required style="padding: 0.75rem; border: 1px solid #ddd; border-radius: 5px;">
          <button type="submit" style="background: #ff6b6b; color: white; padding: 0.75rem; border: none; border-radius: 5px; font-size: 16px; cursor: pointer;">Send Me the Blueprint</button>
        </form>

        <p style="color: #999; font-size: 12px; margin-top: 1rem; text-align: center;">📧 We respect your privacy. Unsubscribe anytime.</p>
      </div>
    \`;

    document.body.insertAdjacentHTML('beforeend', timedFormHTML);

    // Show after 30 seconds
    setTimeout(() => {
      if (!sessionStorage.getItem('timed_popup_shown')) {
        document.getElementById('timed-popup').style.display = 'block';
        sessionStorage.setItem('timed_popup_shown', 'true');

        if (typeof gtag !== 'undefined') {
          gtag('event', 'timed_popup_shown');
        }
      }
    }, 30000);
  }

  trackFormSubmissions() {
    // Track all lead form submissions
    document.addEventListener('submit', (e) => {
      if (e.target.id.includes('lead-form')) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const leadData = {
          name: formData.get('name') || '',
          email: formData.get('email'),
          source: e.target.id.replace('-lead-form', '').replace('-form', ''),
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        };

        // Send to email service
        this.submitLead(leadData);

        // Hide popup
        e.target.closest('[id*="-popup"]').style.display = 'none';

        // Show success message
        alert('Thanks! Check your email for the free guide.');

        if (typeof gtag !== 'undefined') {
          gtag('event', 'lead_capture', {
            source: leadData.source,
            value: 97 // Estimated lead value
          });
        }
      }
    });
  }

  async submitLead(leadData) {
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(leadData)
      });

      if (!response.ok) {
        console.warn('Lead submission failed:', response.status);
      }
    } catch (error) {
      console.warn('Lead submission error:', error.message);
      // Store locally for retry
      this.storeLeadLocally(leadData);
    }
  }

  storeLeadLocally(leadData) {
    const leads = JSON.parse(localStorage.getItem('pending_leads') || '[]');
    leads.push(leadData);
    localStorage.setItem('pending_leads', JSON.stringify(leads));
  }
}

// Initialize lead capture
const leadCapture = new LeadCapture();
leadCapture.init();`;

    const indexHtml = await readFile('index.html', 'utf-8');
    const updatedHtml = indexHtml.replace(
      /<\/body>/,
      `    <script>${leadCaptureScript}</script>\n  </body>`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Lead capture forms implemented');
  }

  /**
   * Setup email nurturing sequences
   */
  async setupNurturingSequences() {
    console.log('📧 Setting up email nurturing sequences...');

    this.sequences = {
      welcome: {
        name: 'Welcome Series',
        trigger: 'new_lead',
        emails: [
          {
            delay: 0,
            subject: 'Welcome to the Sugar Daddy Protocol! 🎉',
            content: 'Thanks for joining! Here\'s your free targeting guide...',
            goal: 'deliver_value'
          },
          {
            delay: 2,
            subject: 'The #1 Mistake Killing Your Results',
            content: 'Most beginners make this critical error...',
            goal: 'build_credibility'
          },
          {
            delay: 5,
            subject: 'How to Get Your First $500 Payment',
            content: 'Step-by-step guide to your first sugar arrangement...',
            goal: 'show_results'
          },
          {
            delay: 7,
            subject: 'Ready for the Complete System?',
            content: 'Get 50+ scripts, templates, and strategies for $97...',
            goal: 'convert_to_sale'
          }
        ]
      },
      cart_recovery: {
        name: 'Cart Recovery',
        trigger: 'abandoned_cart',
        emails: [
          {
            delay: 1,
            subject: 'Your Protocol is Waiting! ⏰',
            content: 'Complete your purchase and start earning tonight...',
            goal: 'immediate_recovery'
          },
          {
            delay: 24,
            subject: 'Last Chance: Don\'t Miss Out',
            content: 'Your spot in the masterclass is reserved for 24 hours...',
            goal: 'urgency_recovery'
          },
          {
            delay: 72,
            subject: 'Special Discount Inside 🎁',
            content: 'Thanks for your interest. Here\'s 30% off your order...',
            goal: 'discount_recovery'
          }
        ]
      },
      re_engagement: {
        name: 'Re-engagement',
        trigger: 'inactive_30_days',
        emails: [
          {
            delay: 0,
            subject: 'We Miss You! 👋',
            content: 'See what\'s new in the sugar dating world...',
            goal: 'reconnect'
          },
          {
            delay: 7,
            subject: 'New Success Stories Inside',
            content: 'Students making $10K+ monthly with updated strategies...',
            goal: 'show_social_proof'
          }
        ]
      }
    };

    await writeFile('content/email-sequences.json', JSON.stringify(this.sequences, null, 2));
    console.log('✅ Email nurturing sequences configured');
  }

  /**
   * Implement abandoned cart recovery
   */
  async implementAbandonedCartRecovery() {
    console.log('🛒 Implementing abandoned cart recovery...');

    const cartRecoveryScript = `
// Abandoned Cart Recovery System
class CartRecovery {
  constructor() {
    this.cartData = {};
    this.recoveryAttempts = {};
  }

  init() {
    this.trackCartActions();
    this.setupRecoveryTriggers();
  }

  trackCartActions() {
    // Track when someone views pricing
    const pricingSections = document.querySelectorAll('[data-pricing]');
    pricingSections.forEach(section => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.cartData.lastPricingView = Date.now();
            this.cartData.pricingViewed = true;
            this.saveCartData();
          }
        });
      });
      observer.observe(section);
    });

    // Track CTA clicks
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-cta]')) {
        this.cartData.lastCtaClick = Date.now();
        this.cartData.ctaClicked = true;
        this.saveCartData();
      }
    });

    // Track payment modal opens
    document.addEventListener('click', (e) => {
      if (e.target.closest('[data-payment]')) {
        this.cartData.lastPaymentAttempt = Date.now();
        this.cartData.paymentAttempted = true;
        this.saveCartData();
      }
    });
  }

  setupRecoveryTriggers() {
    // Recovery trigger 1: Exit intent after pricing view
    let pricingViewed = false;
    document.addEventListener('mouseleave', (e) => {
      if (e.clientY <= 0 && pricingViewed && !this.recoveryAttempts.exitIntent) {
        this.triggerRecovery('exit_intent');
      }
    });

    // Recovery trigger 2: Timed popup after CTA click
    setTimeout(() => {
      if (this.cartData.ctaClicked && !this.cartData.converted) {
        this.triggerRecovery('timed_recovery');
      }
    }, 300000); // 5 minutes

    // Recovery trigger 3: Scroll away after payment attempt
    window.addEventListener('blur', () => {
      if (this.cartData.paymentAttempted && !this.cartData.converted) {
        setTimeout(() => this.triggerRecovery('tab_switch'), 5000);
      }
    });
  }

  triggerRecovery(type) {
    if (this.recoveryAttempts[type]) return;

    this.recoveryAttempts[type] = true;

    // Show recovery popup
    this.showRecoveryPopup(type);

    // Track recovery attempt
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cart_recovery_attempt', {
        recovery_type: type,
        cart_value: 97
      });
    }
  }

  showRecoveryPopup(type) {
    const messages = {
      exit_intent: {
        title: 'Wait! Complete Your Order',
        content: 'Get instant access to 50+ proven scripts and safety templates.',
        cta: 'Complete Purchase - $97'
      },
      timed_recovery: {
        title: 'Ready to Transform Your Income?',
        content: 'Your success blueprint is just one click away.',
        cta: 'Get Instant Access'
      },
      tab_switch: {
        title: 'Don\'t Lose Your Progress!',
        content: 'Complete your order now and start earning tonight.',
        cta: 'Finish Order'
      }
    };

    const msg = messages[type];
    const popup = document.createElement('div');
    popup.innerHTML = \`
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10000; display: flex; align-items: center; justify-content: center; font-family: system-ui, sans-serif;">
        <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 500px; text-align: center; position: relative;">
          <button onclick="this.closest('div').parentElement.remove()" style="position: absolute; top: 10px; right: 10px; background: none; border: none; font-size: 24px; cursor: pointer;">×</button>

          <h2 style="color: #333; margin-bottom: 1rem;">\${msg.title}</h2>
          <p style="color: #666; margin-bottom: 1.5rem;">\${msg.content}</p>

          <a href="#pricing" onclick="this.closest('div').parentElement.remove()" style="background: #ff6b6b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin-bottom: 1rem;">\${msg.cta}</a>

          <p style="color: #999; font-size: 12px;">⏰ Limited time offer</p>
        </div>
      </div>
    \`;

    document.body.appendChild(popup);
  }

  saveCartData() {
    localStorage.setItem('cart_data', JSON.stringify(this.cartData));
  }

  loadCartData() {
    const data = localStorage.getItem('cart_data');
    if (data) {
      this.cartData = JSON.parse(data);
    }
  }
}

// Initialize cart recovery
const cartRecovery = new CartRecovery();
cartRecovery.init();`;

    const indexHtml = await readFile('index.html', 'utf-8');
    const updatedHtml = indexHtml.replace(
      /<\/body>/,
      `    <script>${cartRecoveryScript}</script>\n  </body>`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Abandoned cart recovery implemented');
  }

  /**
   * Create welcome email series
   */
  async createWelcomeSeries() {
    console.log('🎊 Creating welcome email series...');

    const welcomeSeries = {
      series: [
        {
          day: 0,
          subject: '🎉 Welcome to the Sugar Daddy Protocol!',
          content: {
            greeting: 'Welcome to the family!',
            main_content: 'Thanks for joining 12,000+ students who\'ve transformed their income with sugar dating.',
            value_prop: 'Inside your welcome kit: FREE targeting guide, conversation starters, and safety checklist.',
            cta: 'Download Your Welcome Kit',
            cta_link: '/welcome-kit.pdf'
          }
        },
        {
          day: 1,
          subject: 'Your First Step to $500/Month 💰',
          content: {
            greeting: 'Ready to get started?',
            main_content: 'Most beginners make the same mistake: they target the wrong men. Here\'s how to find sugar daddies who actually pay.',
            value_prop: 'Today\'s lesson: The 3 types of sugar daddies and where to find them.',
            cta: 'Read Today\'s Lesson',
            cta_link: '/lesson-1'
          }
        },
        {
          day: 3,
          subject: 'The Conversation That Closes $1,000 Arrangements',
          content: {
            greeting: 'Let\'s talk about money 💸',
            main_content: 'The key to successful sugar arrangements isn\'t just finding the right man - it\'s knowing how to discuss terms professionally.',
            value_prop: 'Master the art of the "arrangement conversation" with proven scripts.',
            cta: 'Get the Conversation Scripts',
            cta_link: '/conversation-scripts'
          }
        },
        {
          day: 7,
          subject: 'Your Complete Success System Awaits',
          content: {
            greeting: 'You\'ve learned the basics...',
            main_content: 'Now it\'s time to put it all together. The complete Sugar Daddy Protocol includes 50+ scripts, safety templates, and weekly strategy updates.',
            value_prop: 'Join students earning $5K-$15K monthly with the full system.',
            cta: 'Get the Complete Protocol - $97',
            cta_link: '#pricing'
          }
        }
      ],
      settings: {
        from_name: 'Oranolio',
        from_email: 'oranolio@sugardaddyprotocol.com',
        reply_to: 'support@sugardaddyprotocol.com',
        send_time: '14:00', // 2 PM local time
        timezone: 'America/New_York'
      }
    };

    await writeFile('content/welcome-series.json', JSON.stringify(welcomeSeries, null, 2));
    console.log('✅ Welcome email series created');
  }

  /**
   * Setup email analytics and tracking
   */
  async setupEmailAnalytics() {
    console.log('📊 Setting up email analytics...');

    const analyticsScript = `
// Email Marketing Analytics
class EmailAnalytics {
  constructor() {
    this.events = [];
  }

  trackEmailEvent(eventType, data) {
    const event = {
      type: eventType,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      ...data
    };

    this.events.push(event);

    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'email_' + eventType, data);
    }

    // Store for batch processing
    this.batchEvents();
  }

  batchEvents() {
    if (this.events.length >= 10) {
      fetch('/api/email-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ events: this.events.splice(0) })
      }).catch(() => {
        // Silently fail
      });
    }
  }

  trackUtmParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {};

    ['source', 'medium', 'campaign', 'term', 'content'].forEach(param => {
      const value = urlParams.get('utm_' + param);
      if (value) {
        utmData['utm_' + param] = value;
      }
    });

    if (Object.keys(utmData).length > 0) {
      this.trackEmailEvent('utm_detected', utmData);
    }

    return utmData;
  }
}

// Initialize email analytics
const emailAnalytics = new EmailAnalytics();

// Track UTM parameters on page load
document.addEventListener('DOMContentLoaded', () => {
  emailAnalytics.trackUtmParameters();
});

// Track email link clicks
document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link && link.href.includes('utm_')) {
    emailAnalytics.trackEmailEvent('link_click', {
      href: link.href,
      text: link.textContent?.trim()
    });
  }
});`;

    const indexHtml = await readFile('index.html', 'utf-8');
    const updatedHtml = indexHtml.replace(
      /<\/body>/,
      `    <script>${analyticsScript}</script>\n  </body>`
    );

    await writeFile('index.html', updatedHtml);
    console.log('✅ Email analytics and tracking setup');
  }
}

/**
 * Main email automation function
 */
async function setupEmailMarketingAutomation() {
  console.log('🚀 Setting up complete email marketing automation...');

  const emailAutomation = new EmailAutomation();
  await emailAutomation.setupEmailAutomation();

  console.log('🎉 Email marketing automation complete!');
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'leads':
    const emailAuto = new EmailAutomation();
    await emailAuto.createLeadCaptureForms();
    break;
  case 'sequences':
    const emailAuto2 = new EmailAutomation();
    await emailAuto2.setupNurturingSequences();
    break;
  case 'cart':
    const emailAuto3 = new EmailAutomation();
    await emailAuto3.implementAbandonedCartRecovery();
    break;
  case 'welcome':
    const emailAuto4 = new EmailAutomation();
    await emailAuto4.createWelcomeSeries();
    break;
  case 'all':
    await setupEmailMarketingAutomation();
    break;
  default:
    console.log('Usage: node email-automation.mjs [leads|sequences|cart|welcome|all]');
    console.log('  leads - Setup lead capture forms and popups');
    console.log('  sequences - Configure email nurturing sequences');
    console.log('  cart - Implement abandoned cart recovery');
    console.log('  welcome - Create welcome email series');
    console.log('  all - Setup complete email automation system');
    break;
}
