/**
 * Jev-selected IMAGE/static Meta Ad Library examples for magnet creative patterns.
 * Bodies are provenance only — adapt into original copy (see adaptedAdVariants).
 */

import normalJson from '../../data/meta-ad-library-normal-selected.json' with { type: 'json' };

export interface NormalAdExample {
  ad_archive_id: string;
  page: string;
  display_format: string;
  days_running: number;
  title: string;
  body: string;
  cta: string;
  link: string;
  ad_library_url: string;
  named_testimonial_flag: boolean;
  jev_keep: string;
  jev_conf: number;
}

export interface NormalAdBundle {
  source: string;
  selected_at: string;
  format_preference: string;
  notes: string;
  selected_normal_examples: NormalAdExample[];
  other_kept: NormalAdExample[];
  jev: Record<string, unknown>;
}

/** Full normal-selected bundle from data/meta-ad-library-normal-selected.json */
export const NORMAL_AD_EXAMPLES = normalJson as NormalAdBundle;

/** Primary IMAGE template IDs (Financial Cents first). */
export const PRIMARY_IMAGE_TEMPLATE_IDS = [
  '914432501713212', // Financial Cents — one portal / every doc (PRIMARY)
  '1094014579789282', // TaxDome — named lead-magnet guide
  '3765554656920393', // TaxDome — insight headline
  '1649956189164177', // Social Accountant — free gift magnet frame
] as const;

export interface ImageAdPatternCard {
  id: string;
  label: string;
  howWeAdapt: string;
  sourceAdArchiveId: string;
  sourceLibraryUrl: string;
  sourcePage: string;
}

/**
 * Agent-readable IMAGE pattern cards for default spin-up.
 * Prefer these over legacy Workflows video-testimonial LONG_RUNNING_PATTERNS.
 */
export const IMAGE_AD_PATTERNS: ImageAdPatternCard[] = [
  {
    id: 'image.one_place_every_doc',
    label: 'One place / every doc (PRIMARY)',
    howWeAdapt:
      'Benefit headline naming one sheet for every missing client doc. Short pain line about texts/email chains. CTA = Grab your free Missing-Docs Spreadsheet. Static IMAGE, not UGC video.',
    sourceAdArchiveId: '914432501713212',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=914432501713212',
    sourcePage: 'Financial Cents',
  },
  {
    id: 'image.named_lead_magnet',
    label: 'Named free asset',
    howWeAdapt:
      'Title the free gift itself (Month-End Missing-Docs Spreadsheet). 2–3 concrete bullets of what it covers. Download / Learn more. No testimonial names.',
    sourceAdArchiveId: '1094014579789282',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1094014579789282',
    sourcePage: 'TaxDome',
  },
  {
    id: 'image.insight_hook',
    label: 'Insight headline',
    howWeAdapt:
      'One counterintuitive early move (map gaps before scramble). Curiosity without a story arc. Point to the free sheet as the habit tool.',
    sourceAdArchiveId: '3765554656920393',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=3765554656920393',
    sourcePage: 'TaxDome',
  },
  {
    id: 'image.free_gift_magnet',
    label: 'Free gift magnet frame',
    howWeAdapt:
      'Lead with FREE + named asset. Empathy for busy month-end. Clear Download ask. Magnet pattern only — not a software demo.',
    sourceAdArchiveId: '1649956189164177',
    sourceLibraryUrl: 'https://www.facebook.com/ads/library/?id=1649956189164177',
    sourcePage: 'Social Accountant',
  },
];
