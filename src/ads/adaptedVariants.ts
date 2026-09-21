/**
 * Default FB magnet creatives: IMAGE / static patterns (benefit headline, short pain,
 * named free asset). Pattern-sourced from Jev-selected normal Ad Library examples.
 * Wording is original — cite archive IDs as provenance only; never paste competitor text.
 *
 * Workflows-For-Tax-Pros video-testimonial story angles are demoted to
 * `deprecatedVideoTestimonialVariants` and must NOT be the default spin-up set.
 *
 * Primary CTA everywhere: Grab your free Missing-Docs Spreadsheet.
 */

export type ImageAdPattern =
  | 'one_place_every_doc' // Financial Cents–style benefit headline
  | 'named_lead_magnet' // TaxDome guide–style named free asset
  | 'insight_hook' // TaxDome insight headline
  | 'free_gift_magnet'; // Social Accountant–style free giveaway frame

export type CreativeFormat = 'IMAGE' | 'VIDEO_TESTIMONIAL';

export interface AdaptedAdVariant {
  id: string;
  /** Creative format this variant is written for. Default set = IMAGE. */
  format: CreativeFormat;
  pattern: ImageAdPattern | 'deprecated_video_testimonial';
  angle: string;
  /** Meta Ad Library archive id used as pattern source (not to copy). */
  sourceAdArchiveId: string;
  sourceLibraryUrl: string;
  sourcePage: string;
  headlines: string[];
  primaryText: string;
  description: string;
  /** Suggested Meta CTA button for IMAGE ads. */
  linkCta: 'Learn more' | 'Download' | 'Sign up';
  /** Always the Codie primary ask for magnet ads. */
  cta: 'Grab your free Missing-Docs Spreadsheet';
  /** When true, do not use in default spin-up ads. */
  deprecated?: boolean;
}

export const PRIMARY_CTA = 'Grab your free Missing-Docs Spreadsheet' as const;

/**
 * Default spin-up set — IMAGE/static only.
 * Primary template: Financial Cents–style “one place / every doc” benefit headline.
 */
export const adaptedAdVariants: AdaptedAdVariant[] = [
  {
    id: 'adapt.image.one-place.every-doc',
    format: 'IMAGE',
    pattern: 'one_place_every_doc',
    angle: 'one_place_docs',
    sourceAdArchiveId: '914432501713212',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=914432501713212',
    sourcePage: 'Financial Cents',
    headlines: [
      'One Sheet. Every Missing Client Doc.',
      'Stop the text-and-email doc chase',
      'Your free Missing-Docs Spreadsheet',
    ],
    primaryText:
      'Still hunting W-9s, bank statements, and receipts across texts and email threads?\n\nPut every missing client document in one place — Requested, Received, or Exception — before close.\n\nGrab your free Missing-Docs Spreadsheet. Named gift for bookkeepers. No new portal to configure.',
    description: 'Free Missing-Docs Spreadsheet for bookkeepers',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.image.named-magnet.month-end-guide',
    format: 'IMAGE',
    pattern: 'named_lead_magnet',
    angle: 'named_free_asset',
    sourceAdArchiveId: '1094014579789282',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1094014579789282',
    sourcePage: 'TaxDome',
    headlines: [
      'The Month-End Missing-Docs Spreadsheet',
      'Who still owes what — on one page',
      'Grab your free tracker',
    ],
    primaryText:
      'Who still owes a W-9. Which bank feed never arrived. What you already logged as an Exception.\n\nAll on one sheet so nothing gets shuffled at close.\n\nGrab your free Missing-Docs Spreadsheet — the named month-end tracker for solo bookkeepers.',
    description: 'Named free month-end tracker',
    linkCta: 'Download',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.image.insight.early-close-move',
    format: 'IMAGE',
    pattern: 'insight_hook',
    angle: 'insight_hook',
    sourceAdArchiveId: '3765554656920393',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=3765554656920393',
    sourcePage: 'TaxDome',
    headlines: [
      'The early move that pays off at close',
      'Request docs before the scramble',
      'Free Missing-Docs Spreadsheet',
    ],
    primaryText:
      'Most bookkeepers chase missing docs the week of close. A few map every gap the week before — on purpose.\n\nThe habit is worth stealing: one matrix, clear statuses, fewer last-minute pings.\n\nGrab your free Missing-Docs Spreadsheet and make the early move this month.',
    description: 'Early-request habit + free sheet',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.image.magnet.free-named-gift',
    format: 'IMAGE',
    pattern: 'free_gift_magnet',
    angle: 'free_gift_magnet',
    sourceAdArchiveId: '1649956189164177',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1649956189164177',
    sourcePage: 'Social Accountant',
    headlines: [
      'FREE: Month-End Missing-Docs Spreadsheet',
      'Your free tracker for W-9s & bank feeds',
      'Click to grab the sheet',
    ],
    primaryText:
      'Bookkeepers — month-end close, client meetings, clean-ups. Chasing PDFs is probably the last thing you want on your plate.\n\nKeep it that way.\n\nGrab your free Missing-Docs Spreadsheet: a ready-to-use client × document matrix so you stop rewriting the same chase email.',
    description: 'Free named gift for bookkeepers',
    linkCta: 'Download',
    cta: PRIMARY_CTA,
  },
  {
    id: 'adapt.image.one-place.stop-threads',
    format: 'IMAGE',
    pattern: 'one_place_every_doc',
    angle: 'stop_doc_threads',
    sourceAdArchiveId: '914432501713212',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=914432501713212',
    sourcePage: 'Financial Cents',
    headlines: [
      'One place for every missing doc',
      'End the client-document email chain',
      'Grab your free Missing-Docs Spreadsheet',
    ],
    primaryText:
      'No more waiting on texts and email chains for the same bank statement.\n\nOne sheet. Every client. Every gap. Simple for you — clear for close.\n\nGrab your free Missing-Docs Spreadsheet. Then, if you want polite→firm reminder scripts, the $19 Reminder Pack is a later micro-yes — not this ad’s ask.',
    description: 'One sheet instead of email chains',
    linkCta: 'Sign up',
    cta: PRIMARY_CTA,
  },
];

/**
 * Former Workflows-For-Tax-Pros video / named-person testimonial story angles.
 * Kept for reference only. Do NOT use as default spin-up creatives.
 */
export const deprecatedVideoTestimonialVariants: AdaptedAdVariant[] = [
  {
    id: 'deprecated.video.chaos-to-system.laura-pattern',
    format: 'VIDEO_TESTIMONIAL',
    pattern: 'deprecated_video_testimonial',
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
      '[DEPRECATED — video UGC/testimonial template. Prefer adaptedAdVariants IMAGE set.]\n\nIf your close week still means reacting to “where’s my statement?” pings, you’re not alone.\n\nGrab your free Missing-Docs Spreadsheet — a named client × document matrix so you see what’s Requested, Received, or an Exception before you close.',
    description: 'Deprecated video-testimonial pattern',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
    deprecated: true,
  },
  {
    id: 'deprecated.video.before-after.metrics-pattern',
    format: 'VIDEO_TESTIMONIAL',
    pattern: 'deprecated_video_testimonial',
    angle: 'before_after_metrics',
    sourceAdArchiveId: '1918627868698430',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1918627868698430',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Before: half-day doc chase. After: one matrix.',
      'Fewer follow-ups. Cleaner close file.',
    ],
    primaryText:
      '[DEPRECATED — video UGC/testimonial template. Prefer IMAGE variants.]\n\nBefore: tabs everywhere and close delayed for one missing bank feed.\n\nGrab your free Missing-Docs Spreadsheet — then decide later if the $19 Reminder Pack is a micro-yes.',
    description: 'Deprecated video-testimonial pattern',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
    deprecated: true,
  },
  {
    id: 'deprecated.video.time-life.balance-pattern',
    format: 'VIDEO_TESTIMONIAL',
    pattern: 'deprecated_video_testimonial',
    angle: 'time_life_balance',
    sourceAdArchiveId: '1614645492842464',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1614645492842464',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Leave on time during close week',
      'Stop spending evenings chasing PDFs',
    ],
    primaryText:
      '[DEPRECATED — video UGC/testimonial template. Prefer IMAGE variants.]\n\nYou didn’t build a practice so close week could steal dinner.\n\nGrab your free Missing-Docs Spreadsheet — one tracker for W-9s, bank statements, receipts, and payroll reports.',
    description: 'Deprecated video-testimonial pattern',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
    deprecated: true,
  },
  {
    id: 'deprecated.video.tool-overwhelm.half-built-pattern',
    format: 'VIDEO_TESTIMONIAL',
    pattern: 'deprecated_video_testimonial',
    angle: 'tool_overwhelm',
    sourceAdArchiveId: '675637575166635',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=675637575166635',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Too many half-built trackers?',
      'One sheet. Not another platform.',
    ],
    primaryText:
      '[DEPRECATED — video UGC/testimonial template. Prefer IMAGE variants.]\n\nYou don’t need another stack. Grab your free Missing-Docs Spreadsheet — Requested / Received / Exception, ready today.',
    description: 'Deprecated video-testimonial pattern',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
    deprecated: true,
  },
  {
    id: 'deprecated.video.chaos-growth.systems-broke-pattern',
    format: 'VIDEO_TESTIMONIAL',
    pattern: 'deprecated_video_testimonial',
    angle: 'chaos_to_system',
    sourceAdArchiveId: '1019731983575752',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1019731983575752',
    sourcePage: 'Workflows For Tax Pros',
    headlines: [
      'Practice grew. Doc chase broke.',
      'Grab your free Missing-Docs Spreadsheet',
    ],
    primaryText:
      '[DEPRECATED — video UGC/testimonial template. Prefer IMAGE variants.]\n\nMore clients should feel like a win — until the doc chase scales with them.\n\nGrab your free Missing-Docs Spreadsheet and put every gap in one matrix before close.',
    description: 'Deprecated video-testimonial pattern',
    linkCta: 'Learn more',
    cta: PRIMARY_CTA,
    deprecated: true,
  },
];
