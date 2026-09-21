import type { CSSProperties, ReactNode } from 'react';
import { createElement } from 'react';

/** Static / carousel ad creative templates (data + optional React frame). */

export interface AdCreativeTemplate {
  id: string;
  format: 'single_image' | 'carousel';
  primaryText: string;
  headline: string;
  description: string;
  ctaButton: 'SIGN_UP' | 'LEARN_MORE' | 'SHOP_NOW';
  /** Suggested on-image text (design brief, not rendered pixels). */
  overlayLines: string[];
  cards?: Array<{ headline: string; description: string; overlayLines: string[] }>;
}

export const fbAdTemplates: AdCreativeTemplate[] = [
  {
    id: 'creative.matrix',
    format: 'single_image',
    primaryText:
      'Bookkeepers: map every missing W-9, bank statement, and receipt before close. Free Month-End Missing-Docs Spreadsheet.',
    headline: 'Grab your free Missing-Docs Spreadsheet',
    description: 'Built for month-end close',
    ctaButton: 'SIGN_UP',
    overlayLines: ['Month-end', 'Missing docs?', 'Grab your free sheet'],
  },
  {
    id: 'creative.pack',
    format: 'single_image',
    primaryText:
      'Reminder scripts that get bank feeds and payroll reports on the first ask. $19 self-serve pack for bookkeepers.',
    headline: 'Missing Docs Reminder Pack — $19',
    description: 'Instant download',
    ctaButton: 'LEARN_MORE',
    overlayLines: ['$19', 'Scripts that get replies', 'For bookkeepers'],
  },
  {
    id: 'creative.carousel-close',
    format: 'carousel',
    primaryText:
      'A cleaner month-end in three slides: track gaps → remind once → close on time.',
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
        description: 'Polite → firm scripts',
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

/** Tiny React preview frame for designers/agents — not a production ad renderer. */
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
      template.format.toUpperCase(),
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
