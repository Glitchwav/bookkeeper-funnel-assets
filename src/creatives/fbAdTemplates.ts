import type { CSSProperties, ReactNode } from 'react';
import { createElement } from 'react';
import { PRIMARY_CTA } from '../ads/adaptedVariants.js';

/**
 * Static IMAGE creative templates (data + optional React frame).
 * Default spin-up is IMAGE/static — not UGC video testimonials.
 */

export interface AdCreativeTemplate {
  id: string;
  format: 'single_image' | 'carousel';
  primaryText: string;
  headline: string;
  description: string;
  ctaButton: 'SIGN_UP' | 'LEARN_MORE' | 'DOWNLOAD';
  /** Suggested on-image text (design brief, not rendered pixels). */
  overlayLines: string[];
  cards?: Array<{ headline: string; description: string; overlayLines: string[] }>;
  /** Pattern provenance (Ad Library id) — adapt only. */
  patternSourceAdArchiveId?: string;
}

export const fbAdTemplates: AdCreativeTemplate[] = [
  {
    id: 'creative.image.one-place',
    format: 'single_image',
    primaryText:
      'Still hunting W-9s and bank statements across texts and email? Put every missing client doc in one place.\n\nGrab your free Missing-Docs Spreadsheet.',
    headline: 'One Sheet. Every Missing Client Doc.',
    description: 'Free tracker for bookkeepers',
    ctaButton: 'LEARN_MORE',
    overlayLines: ['One sheet', 'Every missing doc', 'Free for bookkeepers'],
    patternSourceAdArchiveId: '914432501713212',
  },
  {
    id: 'creative.image.named-magnet',
    format: 'single_image',
    primaryText:
      'Who still owes what — on one page. Grab your free Missing-Docs Spreadsheet, the named month-end tracker for solo bookkeepers.',
    headline: 'The Month-End Missing-Docs Spreadsheet',
    description: 'Named free gift',
    ctaButton: 'DOWNLOAD',
    overlayLines: ['FREE', 'Missing-Docs Spreadsheet', 'Download'],
    patternSourceAdArchiveId: '1094014579789282',
  },
  {
    id: 'creative.image.insight',
    format: 'single_image',
    primaryText:
      'Most bookkeepers chase docs the week of close. A few map every gap the week before. Grab your free Missing-Docs Spreadsheet.',
    headline: 'The early move that pays off at close',
    description: 'Make the early request',
    ctaButton: 'LEARN_MORE',
    overlayLines: ['Request early', 'Close calmer', PRIMARY_CTA],
    patternSourceAdArchiveId: '3765554656920393',
  },
  {
    id: 'creative.pack',
    format: 'single_image',
    primaryText:
      'Already have the free sheet? Reminder scripts that get bank feeds on the first ask. $19 self-serve pack — secondary ask only.',
    headline: 'Missing Docs Reminder Pack — $19',
    description: 'Instant download',
    ctaButton: 'LEARN_MORE',
    overlayLines: ['$19', 'Scripts that get replies', 'After the free sheet'],
  },
  {
    id: 'creative.carousel-close',
    format: 'carousel',
    primaryText:
      'A cleaner month-end in three slides: track gaps → remind once → close on time. Start with the free sheet.',
    headline: 'Close without the chase',
    description: 'Bookkeeper GTM',
    ctaButton: 'LEARN_MORE',
    overlayLines: [],
    cards: [
      {
        headline: '1. Track gaps',
        description: 'Client × doc matrix',
        overlayLines: ['Who still owes what?'],
      },
      {
        headline: '2. Remind once',
        description: 'Polite → firm scripts ($19 later)',
        overlayLines: ['First-ask replies'],
      },
      {
        headline: '3. Close on time',
        description: 'Exception log + handoff',
        overlayLines: ['Fewer reopenings'],
      },
    ],
  },
];

export interface AdFrameProps {
  template: AdCreativeTemplate;
  width?: number;
  style?: CSSProperties;
}

/** Tiny React preview frame — not a production ad renderer. IMAGE/static only. */
export function AdCreativeFrame({ template, width = 320, style }: AdFrameProps): ReactNode {
  return createElement(
    'div',
    {
      role: 'img',
      'aria-label': template.headline,
      style: {
        width,
        border: '1px solid #ddd',
        borderRadius: 12,
        padding: 16,
        fontFamily: 'system-ui, sans-serif',
        background: '#111',
        color: '#fff',
        ...style,
      },
    },
    createElement(
      'div',
      { style: { fontSize: 12, opacity: 0.7, marginBottom: 8 } },
      `${template.format.toUpperCase()} · IMAGE/static`,
    ),
    createElement('strong', { style: { fontSize: 18 } }, template.headline),
    createElement(
      'ul',
      { style: { margin: '12px 0', paddingLeft: 18, fontSize: 14 } },
      ...(template.overlayLines.length
        ? template.overlayLines
        : template.cards?.map((c) => c.headline) ?? []
      ).map((line) => createElement('li', { key: line }, line)),
    ),
    createElement('p', { style: { fontSize: 12, opacity: 0.8 } }, template.description),
  );
}
