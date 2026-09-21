import type { EmailStub } from './welcome.js';

/** Compressed Map: magnet delivered → $19 micro-yes. Ads-only acquisition. */
export const nurtureSequence: EmailStub[] = [
  {
    id: 'email.nurture.1',
    subject: 'The close where you leave on time',
    previewText: 'Ideal week first — then one doc that usually stalls it.',
    bodyMarkdown: `Hi {{first_name|there}},

Picture close week with every bank statement already in and your evening free.

Quick question while you’re in **your** spreadsheet: **which doc stalls you most** — bank statements, receipts, or payroll reports?

Tip: request statements with a date range + PDF preference in the same ask. One clear ask beats three vague follow-ups.

Reply with your #1 gap and I’ll send a short script.

`,
  },
  {
    id: 'email.nurture.2',
    subject: 'Polite → firm: a reminder ladder that works',
    previewText: 'Three touches. No awkwardness. $19 if you want them written.',
    bodyMarkdown: `Hi {{first_name|there}},

Here’s a simple ladder for missing docs:

1. **Polite** — “Looping back on [doc] for [month] close.”  
2. **Specific** — Exact file name + due date.  
3. **Firm** — “We’ll close with an Exception note if this isn’t in by [date].”

The **Missing Docs Reminder Pack** is the $19 micro-yes after the free sheet — ready-to-paste versions of all three, plus a client checklist. Not $39/mo.

`,
  },
  {
    id: 'email.nurture.3',
    subject: 'Your $19 yes: close the loop on missing docs',
    previewText: 'Reminder Pack: scripts, checklist, exception log. One-time Stripe.',
    bodyMarkdown: `Hi {{first_name|there}},

If the free spreadsheet helped you *see* the gaps, the **Missing Docs Reminder Pack** helps you *close* them.

- 3 reminder scripts  
- Client checklist  
- Exception log + handoff note  

One-time **$19** via Stripe. Instant download. Owned by you. No Facebook group pitches — we only run ads + this list.

{{pack_checkout_url}}

`,
  },
];
