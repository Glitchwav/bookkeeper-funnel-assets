/** Paid offer: $19 Missing Docs Reminder Pack */

export const packCopy = {
  productName: 'Missing Docs Reminder Pack',
  priceDisplay: '$19',
  priceCents: 1900,
  headlines: [
    'Get clients to send missing docs the first time you ask',
    '$19 Reminder Pack for bookkeepers tired of month-end chases',
    'Scripts + checklists so bank statements show up before close',
  ],
  subheads: [
    'Self-serve templates: SMS/email reminders, a client checklist, and an exception log — so you stop rewriting the same chase email.',
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
  ],
  checkoutCta: 'Unlock the Reminder Pack — $19',
  guaranteeNote: 'One-time purchase. Instant download. No subscription.',
} as const;

export type PackCopy = typeof packCopy;
