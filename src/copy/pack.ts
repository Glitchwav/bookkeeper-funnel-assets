/** Paid offer: $19 Missing Docs Reminder Pack — the micro-yes, not the first ask. */

export const packCopy = {
  productName: 'Missing Docs Reminder Pack',
  priceDisplay: '$19',
  priceCents: 1900,
  headlines: [
    'Your $19 yes: clients send missing docs the first time you ask',
    'Reminder Pack for bookkeepers who already grabbed the free sheet',
    'Scripts + checklists so bank statements show up before close',
  ],
  subheads: [
    'After the free spreadsheet shows the gaps, this one-time pack gives you the scripts to close them. Not a $39/mo plan. Not a sales call.',
  ],
  includes: [
    '3 reminder scripts (polite → firm) for email or SMS',
    'Client portal checklist one-pager (PDF-ready copy)',
    'Exception log for stubborn gaps',
    'Month-end handoff note you can paste into your close file',
  ],
  objections: [
    {
      q: 'I already have templates.',
      a: 'These are scoped to month-end missing docs (bank, W-9, receipts, payroll) — not generic “please send stuff” emails.',
    },
    {
      q: 'Will this work for multiple clients?',
      a: 'Yes. Copy once, swap the client name and doc list. The pack is built for portfolio use.',
    },
    {
      q: 'Is this a subscription?',
      a: 'No. One-time $19 via Stripe to your checkout. Own the files.',
    },
  ],
  checkoutCta: 'Unlock your Reminder Pack — $19',
  guaranteeNote: 'One-time purchase. Instant download. No subscription. Email + Stripe owned by you.',
} as const;

export type PackCopy = typeof packCopy;
