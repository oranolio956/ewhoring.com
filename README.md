# ScamVictimRecovery.com

A completely new, standalone satirical website for "helping" victims of ewhoring scams.

## Design Philosophy

This is a **completely separate site** from the original, with:
- **Unique color scheme**: Navy blue (#0A2540), coral red (#FF6B6B), teal (#4ECDC4), yellow (#FFE66D)
- **Different typography**: Inter + Playfair Display (elegant, professional)
- **Modern design**: Card-based layouts, gradients, soft shadows
- **New branding**: ScamVictimRecovery.com with shield logo
- **Satirical content**: Professional-looking site that charges $299 for services that can't recover money

## Features

- Responsive design
- Smooth animations
- Professional but satirical tone
- Multiple pricing tiers ($299, $599, $999)
- Detailed FAQ section
- Testimonials from "victims"
- Recovery process explanation
- Stats showing $0 recovered

## Installation

```bash
cd recovery-site
npm install
```

## Development

```bash
npm run dev
```

Visit http://localhost:3001

## Build

```bash
npm run build
```

Output will be in `dist-recovery/`

## Structure

```
recovery-site/
├── components/       # All React components
├── styles/          # Global CSS and Tailwind
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.html       # HTML template
```

## Key Components

- **Header**: Navigation with mobile menu
- **Hero**: Main landing section with CTA
- **Stats**: Animated statistics (showing $0 recovered)
- **Services**: Three service tiers
- **Testimonials**: Victim stories
- **Process**: 5-step recovery process
- **Pricing**: Detailed pricing plans
- **FAQ**: Common questions with satirical answers
- **Footer**: Links and disclaimers
- **UrgencyBanner**: Rotating warning messages

## Design System

### Colors
- Primary: #0A2540 (Navy)
- Secondary: #FF6B6B (Coral Red)
- Accent: #4ECDC4 (Teal)
- Warning: #FFE66D (Yellow)

### Typography
- Headings: Playfair Display (serif, elegant)
- Body: Inter (sans-serif, modern)

### Spacing
- Consistent 8px grid system
- Generous whitespace
- Card-based layouts

## Satirical Elements

The site maintains a professional appearance while being obviously satirical:
- "$0 Money Recovered" prominently displayed
- "12,847+ Victims Helped*" with asterisk explaining it means "charged consultation fee"
- "100% Satisfaction**" with "**No chargebacks yet"
- Multiple disclaimers that money recovery is NOT included
- FAQ answers that are honest but satirical
- Testimonials showing net losses including consultation fees
