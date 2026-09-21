/**
 * Five adapt-ready FB primary texts + headlines for the free magnet.
 * Pattern-sourced from Jev-kept long-runners — wording is original, not verbatim.
 * Primary CTA everywhere: Grab your free Missing-Docs Spreadsheet.
 */

import type { JevAngle } from './ingested.js';

export interface AdaptedAdVariant {
  id: string;
  angle: JevAngle;
  /** Meta Ad Library archive id used as pattern source (not to copy). */
  sourceAdArchiveId: string;
  sourceLibraryUrl: string;
  sourcePage: string;
  headlines: string[];
  primaryText: string;
  description: string;
  /** Always the Codie primary ask for magnet ads. */
  cta: 'Grab your free Missing-Docs Spreadsheet';
}

export const PRIMARY_CTA = 'Grab your free Missing-Docs Spreadsheet' as const;

export const adaptedAdVariants: AdaptedAdVariant[] = [
  {
    id: 'adapt.chaos-to-system.laura-pattern',
    angle: 'chaos_to_system',
    sourceAdArchiveId: '796087482831403',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=796087482831403',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Month-end still feels like chaos?',
      'From inbox chase → clear close',
      'Your free Missing-Docs Spreadsheet',
    ],
    primaryText:
      'If your close week still means reacting to “where’s my statement?” pings, you’re not alone.\n\nBookkeepers who get ahead stop hunting PDFs and start tracking gaps in one place.\n\nGrab your free Missing-Docs Spreadsheet — a named client × document matrix so you see what’s Requested, Received, or an Exception before you close.\n\nIdeal close first. Then the simple sheet that gets you there.',
    description: 'Free spreadsheet for bookkeepers',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.before-after.metrics-pattern',
    angle: 'before_after_metrics',
    sourceAdArchiveId: '1918627868698430',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1918627868698430',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Before: half-day doc chase. After: one matrix.',
      'Fewer follow-ups. Cleaner close file.',
      'Map every gap before you hit send',
    ],
    primaryText:
      'Before: spreadsheet tabs everywhere, status hunts in email, and close delayed for one missing bank feed.\n\nAfter you run a single Missing-Docs sheet: every client’s gaps visible, fewer “just checking in” pings, and a cleaner handoff into close.\n\nGrab your free Missing-Docs Spreadsheet — then decide if the $19 Reminder Pack scripts are worth a micro-yes later.\n\nNo group cold posts. This is for paid Meta traffic and your owned list only.',
    description: 'Track gaps → close cleaner',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.time-life.balance-pattern',
    angle: 'time_life_balance',
    sourceAdArchiveId: '1614645492842464',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1614645492842464',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Leave on time during close week',
      'Stop spending evenings chasing PDFs',
      'Your free sheet for missing docs',
    ],
    primaryText:
      'You didn’t build a bookkeeping practice so close week could steal dinner and preschool pickup.\n\nPicture this: docs requested early, status clear by mid-week, and you’re not rewriting the same chase email at 9pm.\n\nGrab your free Missing-Docs Spreadsheet — one tracker for W-9s, bank statements, receipts, and payroll reports.\n\nCustomer (you) is the hero. The sheet is just the mechanism.',
    description: 'Close without the evening chase',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.tool-overwhelm.half-built-pattern',
    angle: 'tool_overwhelm',
    sourceAdArchiveId: '675637575166635',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=675637575166635',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Too many half-built trackers?',
      'One sheet. Not another platform.',
      'Free Missing-Docs Spreadsheet',
    ],
    primaryText:
      'Bought the portal… started three trackers… never finished the setup because clients were already late.\n\nYou don’t need another stack. You need one named free gift you can use this close.\n\nGrab your free Missing-Docs Spreadsheet — Requested / Received / Exception columns, Google Sheets or Excel, ready today.\n\nWhen you’re ready for a $19 micro-commitment, the Reminder Pack adds polite→firm scripts. Not a monthly plan first.',
    description: 'Simple tracker — no new stack',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.chaos-growth.systems-broke-pattern',
    angle: 'chaos_to_system',
    sourceAdArchiveId: '1019731983575752',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1019731983575752',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Practice grew. Doc chase broke.',
      'Scale clients without scaling inbox chaos',
      'Grab your free Missing-Docs Spreadsheet',
    ],
    primaryText:
      'More clients should feel like a win — until the month-end doc chase scales with them.\n\nToo many threads. No single source of truth. You’re always reacting.\n\nGrab your free Missing-Docs Spreadsheet and put every gap in one matrix before close.\n\nPrimary ask (repeat it): Grab your free Missing-Docs Spreadsheet. Trade is clear — your email for the named sheet. Ads only; we don’t cold-post Facebook groups.',
    description: 'Systems for a growing book of business',
    cta: PRIMARY_CTA,
  },
];
