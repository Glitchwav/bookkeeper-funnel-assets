import type { EmailStub } from './welcome.js';

/** 3-touch nurture mapping Magnet → Message → Money (Codie Sanchez Map). */
export const nurtureSequence: EmailStub[] = [
  {
    id: 'email.nurture.1',
    subject: 'The doc that usually stalls your close',
    previewText: 'Bank statements and why they slip.',
    bodyMarkdown: `Hi {{first_name|there}},

Quick question while you’re in the spreadsheet: **which doc stalls you most** — bank statements, receipts, or payroll reports?

For most bookkeepers we talk to, it’s bank statements that arrive late or incomplete.

Tip: request statements with a date range + PDF preference in the same ask. One clear ask beats three vague follow-ups.

Reply with your #1 gap and I’ll send a short script.

`,
  },
  {
    id: 'email.nurture.2',
    subject: 'Polite → firm: a reminder ladder that works',
    previewText: 'Three touches. No awkwardness.',
    bodyMarkdown: `Hi {{first_name|there}},

Here’s a simple ladder for missing docs:

1. **Polite** — “Looping back on [doc] for [month] close.”  
2. **Specific** — Exact file name + due date.  
3. **Firm** — “We’ll close with an Exception note if this isn’t in by [date].”

The **Missing Docs Reminder Pack** ($19) has ready-to-paste versions of all three, plus a client checklist.

`,
  },
  {
    id: 'email.nurture.3',
    subject: 'Close the loop on missing docs — $19',
    previewText: 'Reminder Pack: scripts, checklist, exception log.',
    bodyMarkdown: `Hi {{first_name|there}},

If the free spreadsheet helped you *see* the gaps, the **Missing Docs Reminder Pack** helps you *close* them.

- 3 reminder scripts  
- Client checklist  
- Exception log + handoff note  

One-time **$19**. Instant download. No subscription.

{{pack_checkout_url}}

`,
  },
];
