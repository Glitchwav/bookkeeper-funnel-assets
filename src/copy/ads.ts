/** Facebook / Meta ad copy — bookkeepers, missing docs, month-end close.
 *  Use for paid ads only. Do not cold-post into FB groups.
 *  Prefer adaptedAdVariants in src/ads for Jev-mapped long-runners.
 */

import { PRIMARY_CTA } from './cta.js';

export interface AdVariant {
  id: string;
  angle: string;
  headlines: string[];
  primaryText: string[];
  description?: string;
  cta?: string;
}

export const adVariants: AdVariant[] = [
  {
    id: 'fb.chase-hours',
    angle: 'Time sink',
    headlines: [
      'Still chasing bank statements at close?',
      'Month-end shouldn’t mean inbox archaeology',
      'Your free tracker for missing client docs',
    ],
    primaryText: [
      'If you’re a bookkeeper who loses half a day every month-end hunting W-9s, receipts, and bank feeds — grab your free Missing-Docs Spreadsheet. One matrix. Clear status. Fewer follow-ups.',
      'Bookkeepers: stop rewriting the same “still need your statements” email. Grab your free Missing-Docs Spreadsheet to track every gap before close.',
    ],
    description: 'Free spreadsheet for bookkeepers',
    cta: PRIMARY_CTA,
  },
  {
    id: 'fb.first-ask',
    angle: 'First-ask compliance',
    headlines: [
      'Get docs on the first ask',
      'Clients ghost your doc requests?',
      'Start with your free spreadsheet',
    ],
    primaryText: [
      'Start with the named free gift — Grab your free Missing-Docs Spreadsheet. After you can see the gaps, a $19 Reminder Pack has polite → firm scripts so bank statements and payroll reports arrive before close. Ads only; no Facebook group cold posts.',
    ],
    description: 'Free sheet first; $19 pack later',
    cta: PRIMARY_CTA,
  },
  {
    id: 'fb.close-risk',
    angle: 'Close risk',
    headlines: [
      'Don’t close with holes in the file',
      'Missing docs = delayed close',
      'Map every gap before you hit send',
    ],
    primaryText: [
      'A clean month-end needs a clean doc list. Grab your free Missing-Docs Spreadsheet for bookkeepers — then decide if reminder scripts ($19) are a micro-yes later.',
    ],
    cta: PRIMARY_CTA,
  },
];

export const adAudienceNotes = {
  targetingHint:
    'Interest / job title: bookkeeper, bookkeeping, QuickBooks ProAdvisor, Xero advisor. Exclude generic “small business owner” cold audiences for v1.',
  compliance:
    'Paid ads only. No FB group cold posts. No spend automation in this package.',
  primaryCta: PRIMARY_CTA,
} as const;
