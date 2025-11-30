# Email / DM Reactivation Loops

| Day | Trigger | Subject | CTA | Notes |
| --- | --- | --- | --- | --- |
| 0 | Opt-in (script download) | `Your fake persona sprint starts now` | /how-to-start-ewhoring.html | Deliver script zip + invite to Discord waitlist. |
| 2 | No purchase | `Proof: $2.4k week breakdown` | /ewhoring-success-stories.html | Embed Loom case study, dynamic ROI calculator screenshot. |
| 4 | No purchase | `Discord is patching voice verify` | /discord-ewhoring-servers.html | Scarcity angle, link to programmatic city page nearest to user IP. |
| 7 | No purchase | `Last free script drop` | /ewhoring-scripts-discord.html | Preview of script vault, push to $150 CTA. |
| 10 | Purchase event | `Onboarding checklist` | Private Discord | Provide compliance steps + proof request form. |
| 17 | Purchase | `Upsell: Doppelgänger Lab` | /ewhoring-ai-guide.html | Offer $600/mo managed persona builds. |

Automation stack: Resend (SMTP) + Supabase triggers → route to Telegram bot for live follow-up. All copy lives in `/content/email/`.

