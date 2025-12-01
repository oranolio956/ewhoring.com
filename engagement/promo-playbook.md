# Promo + Retention Loops

## Dark Social Syndication
1. Draft hook + CTA → add to `engagement/syndication-queue.json`.
2. Run `npm run syndicate` after exporting env tokens:
   ```bash
   REDDIT_TOKEN=xxx TELEGRAM_BOT_TOKEN=yyy TELEGRAM_CHANNEL_ID=@oranolio npm run syndicate
   ```
3. Watch `engagement/syndication-queue.json` for status updates (`published`, `error`).

## Push + Email Pairing
- Push campaigns live in `engagement/push-campaigns.json` and get injected into SW fallback.
- Email drip (see `engagement/email-drip-series.md`) references the same drops so segments get consistent CTAs.

## Viral Hooks
- **Simp Map**: City heatmap linking to `/discord-ewhoring-{city}.html`.
- **Automation Leak**: Short screen recording of script generator writing DMs in real time.
- **Legal Trap**: Clip of the LegalModal disclaimers to spark debate in comments.

Track KPIs: UTMs `utm_source=syndicate&utm_medium={platform}&utm_campaign={id}` and log inside GA4 custom dimension “syndication_id”.



