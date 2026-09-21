/**
 * Structured funnel catalog for bookkeeper FB-ads GTM.
 * Framed with Codie Sanchez 6 Ms: Magnet, Message, Micro-commitment,
 * Make the ask, Money, Map.
 */

export type SixM =
  | 'magnet'
  | 'message'
  | 'micro_commitment'
  | 'make_the_ask'
  | 'money'
  | 'map';

export type FunnelAssetKind =
  | 'copy'
  | 'landing'
  | 'creative'
  | 'email'
  | 'offer';

export interface FunnelAssetRef {
  id: string;
  kind: FunnelAssetKind;
  sixM: SixM;
  title: string;
  /** Import path relative to package root (for agents). */
  module: string;
  summary: string;
}

export interface OfferSpec {
  id: string;
  name: string;
  priceCents: number | null;
  billing: 'free' | 'one_time';
  promise: string;
  delivery: string[];
}

export const OFFERS = {
  magnet: {
    id: 'month-end-missing-docs-spreadsheet',
    name: 'Month-End Missing-Docs Spreadsheet',
    priceCents: null,
    billing: 'free' as const,
    promise:
      'A single tracker bookkeepers use to chase every missing W-9, bank statement, and receipt before close — without another messy email thread.',
    delivery: [
      'Client × document matrix (Google Sheets / Excel compatible)',
      'Status columns: Requested / Received / Exception',
      'Month-end countdown checklist',
    ],
  },
  pack: {
    id: 'missing-docs-reminder-pack',
    name: 'Missing Docs Reminder Pack',
    priceCents: 1900,
    billing: 'one_time' as const,
    promise:
      'Self-serve reminder scripts + templates so clients send bank feeds, invoices, and payroll reports the first time you ask.',
    delivery: [
      '3 SMS / email reminder scripts (polite → firm)',
      'Client portal checklist one-pager',
      'Exception log template for stubborn gaps',
      'Month-end handoff note for the bookkeeper',
    ],
  },
} as const satisfies Record<string, OfferSpec>;

export const FUNNEL_CATALOG: FunnelAssetRef[] = [
  {
    id: 'copy.magnet',
    kind: 'copy',
    sixM: 'magnet',
    title: 'Magnet copy — spreadsheet lead magnet',
    module: './copy/magnet',
    summary: 'Opt-in headlines and bullets for the free Month-End Missing-Docs Spreadsheet.',
  },
  {
    id: 'copy.pack',
    kind: 'copy',
    sixM: 'money',
    title: 'Paid pack copy — $19 Reminder Pack',
    module: './copy/pack',
    summary: 'Offer page and checkout microcopy for the Missing Docs Reminder Pack.',
  },
  {
    id: 'copy.ads',
    kind: 'copy',
    sixM: 'message',
    title: 'FB ad headlines + primary text',
    module: './copy/ads',
    summary: 'Paid social angles aimed at bookkeepers drowning in month-end doc chases.',
  },
  {
    id: 'copy.cta',
    kind: 'copy',
    sixM: 'make_the_ask',
    title: 'CTA variants',
    module: './copy/cta',
    summary: 'Micro-commitment and hard-ask button / form labels.',
  },
  {
    id: 'landing.hero',
    kind: 'landing',
    sixM: 'message',
    title: 'Hero section',
    module: './landing/Hero',
    summary: 'React hero for the magnet landing page.',
  },
  {
    id: 'landing.offer',
    kind: 'landing',
    sixM: 'money',
    title: 'Offer section',
    module: './landing/Offer',
    summary: 'React section for the $19 pack.',
  },
  {
    id: 'landing.proof',
    kind: 'landing',
    sixM: 'micro_commitment',
    title: 'Proof stubs',
    module: './landing/Proof',
    summary: 'Placeholder social proof / outcome bullets (swap with real testimonials).',
  },
  {
    id: 'landing.cta',
    kind: 'landing',
    sixM: 'make_the_ask',
    title: 'CTA section',
    module: './landing/CtaBand',
    summary: 'Final ask band for email capture or pack checkout.',
  },
  {
    id: 'creatives.fb',
    kind: 'creative',
    sixM: 'message',
    title: 'FB ad creative templates',
    module: './creatives/fbAdTemplates',
    summary: 'JS objects + optional React frames for static / carousel ads.',
  },
  {
    id: 'email.welcome',
    kind: 'email',
    sixM: 'magnet',
    title: 'Welcome email',
    module: './email/welcome',
    summary: 'Delivers the spreadsheet + sets expectations.',
  },
  {
    id: 'email.nurture',
    kind: 'email',
    sixM: 'map',
    title: 'Nurture sequence stubs',
    module: './email/nurture',
    summary: '3-touch nurture mapping pain → pack.',
  },
  {
    id: 'email.purchase',
    kind: 'email',
    sixM: 'money',
    title: 'Purchase / receipt stubs',
    module: './email/purchase',
    summary: 'Post-purchase delivery for the Reminder Pack.',
  },
];

/** Codie Sanchez 6 Ms applied to this funnel (agent-readable map). */
export const SIX_MS_MAP: Record<
  SixM,
  { label: string; howWeUseIt: string; assetIds: string[] }
> = {
  magnet: {
    label: 'Magnet',
    howWeUseIt:
      'Free Month-End Missing-Docs Spreadsheet — high-intent lead magnet for bookkeepers mid-close.',
    assetIds: ['copy.magnet', 'email.welcome'],
  },
  message: {
    label: 'Message',
    howWeUseIt:
      'FB ads + hero copy about chasing W-9s, bank statements, and receipts every month-end.',
    assetIds: ['copy.ads', 'landing.hero', 'creatives.fb'],
  },
  micro_commitment: {
    label: 'Micro-commitment',
    howWeUseIt:
      'Email opt-in for the spreadsheet; proof stubs reduce risk before the $19 ask.',
    assetIds: ['landing.proof', 'copy.cta'],
  },
  make_the_ask: {
    label: 'Make the ask',
    howWeUseIt:
      'Clear CTAs: Get the spreadsheet (free) → Unlock Reminder Pack ($19).',
    assetIds: ['copy.cta', 'landing.cta'],
  },
  money: {
    label: 'Money',
    howWeUseIt:
      '$19 one-time Missing Docs Reminder Pack — self-serve, no sales call.',
    assetIds: ['copy.pack', 'landing.offer', 'email.purchase'],
  },
  map: {
    label: 'Map',
    howWeUseIt:
      'Nurture sequence: deliver magnet → show month-end cost of missing docs → pack offer → purchase onboarding.',
    assetIds: ['email.nurture'],
  },
};

export function getAssetsBySixM(sixM: SixM): FunnelAssetRef[] {
  return FUNNEL_CATALOG.filter((a) => a.sixM === sixM);
}

export function getAssetById(id: string): FunnelAssetRef | undefined {
  return FUNNEL_CATALOG.find((a) => a.id === id);
}
