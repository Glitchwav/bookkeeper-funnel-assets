/** Facebook / Meta ad copy — bookkeepers, missing docs, month-end close.
 *  Use for paid ads only. Do not cold-post into FB groups.
 */

export interface AdVariant {
  id: string;
  angle: string;
  headlines: string[];
  primaryText: string[];
  description?: string;
}

export const adVariants: AdVariant[] = [
  {
    id: 'fb.chase-hours',
    angle: 'Time sink',
    headlines: [
      'Still chasing bank statements at close?',
      'Month-end shouldn’t mean inbox archaeology',
      'Free tracker for missing client docs',
    ],
    primaryText: [
      'If you’re a bookkeeper who loses half a day every month-end hunting W-9s, receipts, and bank feeds — grab the free Month-End Missing-Docs Spreadsheet. One matrix. Clear status. Fewer follow-ups.',
      'Bookkeepers: stop rewriting the same “still need your statements” email. Free spreadsheet to track every missing doc before close.',
    ],
    description: 'Free spreadsheet for bookkeepers',
  },
  {
    id: 'fb.first-ask',
    angle: 'First-ask compliance',
    headlines: [
      'Get docs on the first ask',
      'Clients ghost your doc requests?',
      '$19 scripts that actually get replies',
    ],
    primaryText: [
      'Polite → firm reminder scripts + a client checklist so bank statements and payroll reports arrive before close. Built for bookkeepers. $19 self-serve pack.',
    ],
    description: 'Missing Docs Reminder Pack — $19',
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
      'A clean month-end needs a clean doc list. Free Missing-Docs Spreadsheet for bookkeepers — then upgrade to reminder scripts if you want clients to respond faster.',
    ],
  },
];

export const adAudienceNotes = {
  targetingHint:
    'Interest / job title: bookkeeper, bookkeeping, QuickBooks ProAdvisor, Xero advisor. Exclude generic “small business owner” cold audiences for v1.',
  compliance:
    'Paid ads only. No FB group cold posts. No spend automation in this package.',
} as const;
