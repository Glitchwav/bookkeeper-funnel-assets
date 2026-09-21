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
  | 'offer'
  | 'plan'
  | 'ads';

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

export const PRIMARY_CTA_LABEL =
  'Grab your free Missing-Docs Spreadsheet' as const;

export const OFFERS = {
  magnet: {
    id: 'month-end-missing-docs-spreadsheet',
    name: 'Month-End Missing-Docs Spreadsheet',
    priceCents: null,
    billing: 'free' as const,
    promise:
      'Your named free gift: one tracker so you chase every missing W-9, bank statement, and receipt before close — without another messy email thread.',
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
      'The $19 micro-yes after the free sheet: self-serve reminder scripts so clients send bank feeds, invoices, and payroll reports the first time you ask.',
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
    id: 'plan.funnel',
    kind: 'plan',
    sixM: 'map',
    title: 'Funnel plan — Codie 6 Ms + ads-only GTM',
    module: './plans/FUNNEL.md',
    summary:
      'Magnet → $19 pack → later upsell. FB ads only. 6 Ms checklist. No group cold posts.',
  },
  {
    id: 'copy.magnet',
    kind: 'copy',
    sixM: 'magnet',
    title: 'Magnet copy — spreadsheet lead magnet',
    module: './copy/magnet',
    summary: 'Opt-in headlines; primary CTA is Grab your free Missing-Docs Spreadsheet.',
  },
  {
    id: 'copy.pack',
    kind: 'copy',
    sixM: 'money',
    title: 'Paid pack copy — $19 Reminder Pack',
    module: './copy/pack',
    summary: 'Micro-paid yes after the free magnet — not a monthly first offer.',
  },
  {
    id: 'copy.ads',
    kind: 'copy',
    sixM: 'message',
    title: 'FB ad headlines + primary text (legacy variants)',
    module: './copy/ads',
    summary: 'Older angles; prefer src/ads adaptedAdVariants for Jev-mapped keepers.',
  },
  {
    id: 'ads.adapted',
    kind: 'ads',
    sixM: 'message',
    title: 'Adapted FB variants from long-running keepers',
    module: './ads/adaptedVariants',
    summary:
      'Five original primary texts mapped to chaos_to_system, before_after_metrics, time_life_balance, tool_overwhelm.',
  },
  {
    id: 'ads.ingested',
    kind: 'ads',
    sixM: 'map',
    title: 'INGESTED_ADS + LONG_RUNNING_PATTERNS',
    module: './ads/ingested',
    summary: 'Jev-ingested Meta Ad Library keepers (provenance only — do not paste bodies).',
  },
  {
    id: 'copy.cta',
    kind: 'copy',
    sixM: 'make_the_ask',
    title: 'CTA variants',
    module: './copy/cta',
    summary: 'One primary CTA, repeated; $19 is the secondary micro-paid ask.',
  },
  {
    id: 'landing.hero',
    kind: 'landing',
    sixM: 'message',
    title: 'Hero section',
    module: './landing/Hero',
    summary: 'React hero: ideal close first, spreadsheet second, primary CTA.',
  },
  {
    id: 'landing.offer',
    kind: 'landing',
    sixM: 'money',
    title: 'Offer section',
    module: './landing/Offer',
    summary: 'React section for the $19 pack (after magnet).',
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
    summary: 'Repeats Grab your free Missing-Docs Spreadsheet.',
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
    summary: 'Delivers the spreadsheet + sets expectations. Soft $19 later.',
  },
  {
    id: 'email.nurture',
    kind: 'email',
    sixM: 'map',
    title: 'Nurture sequence stubs',
    module: './email/nurture',
    summary: 'Compressed map: magnet delivered → $19 micro-yes. Ads-only reminder.',
  },
  {
    id: 'email.purchase',
    kind: 'email',
    sixM: 'money',
    title: 'Purchase / receipt stubs',
    module: './email/purchase',
    summary: 'Post-purchase delivery for the Reminder Pack (Stripe, owned email).',
  },
];

/** Codie Sanchez 6 Ms applied to this funnel (agent-readable map). */
export const SIX_MS_MAP: Record<
  SixM,
  { label: string; howWeUseIt: string; checklist: string; assetIds: string[] }
> = {
  magnet: {
    label: 'Magnet',
    howWeUseIt:
      'Specific named free gift: Month-End Missing-Docs Spreadsheet — before any paid ask.',
    checklist: 'Named gift, not a vague “guide”. Delivered to owned email.',
    assetIds: ['copy.magnet', 'email.welcome'],
  },
  message: {
    label: 'Message',
    howWeUseIt:
      'Customer is the hero. Ideal life first (on-time close, evenings back). Mechanism (sheet / scripts) second. Adapt long-running keeper angles; never plagiarize.',
    checklist: 'Hero copy + adapted ads use ideal-state first. One story, bookkeeper ICP.',
    assetIds: ['copy.ads', 'ads.adapted', 'landing.hero', 'creatives.fb'],
  },
  micro_commitment: {
    label: 'Micro-commitment',
    howWeUseIt:
      'Free magnet opt-in, then $19 Reminder Pack — never $39/mo as the first paid yes.',
    checklist: 'Free → $19 one-time. Proof stubs reduce risk before checkout.',
    assetIds: ['landing.proof', 'copy.cta', 'copy.pack'],
  },
  make_the_ask: {
    label: 'Make the ask',
    howWeUseIt:
      'ONE primary CTA: “Grab your free Missing-Docs Spreadsheet”. Personal “your”, strong verb, explicit trade (email for the named sheet). Repeat on ads, hero, CTA band.',
    checklist: 'Primary CTA only on cold ads. $19 is a later, separate ask.',
    assetIds: ['copy.cta', 'landing.cta', 'ads.adapted'],
  },
  money: {
    label: 'Money',
    howWeUseIt:
      'Own email + Stripe. FB ads only (no group cold posts). Margin target ≥ 2–3× CAC before scaling. This package never spends.',
    checklist: 'Ads-only cold. Owned list. $19 micro-paid. Later upsell out of v1 scope.',
    assetIds: ['copy.pack', 'landing.offer', 'email.purchase'],
  },
  map: {
    label: 'Map',
    howWeUseIt:
      'Compressed launch: weekend scaffold → Meta ads on magnet → retarget engagers to $19 pack. Nurture sequence is the email map.',
    checklist: 'Do not skip magnet. Do not lead with retainer. Do not post groups.',
    assetIds: ['plan.funnel', 'email.nurture', 'ads.ingested'],
  },
};

export function getAssetsBySixM(sixM: SixM): FunnelAssetRef[] {
  return FUNNEL_CATALOG.filter((a) => a.sixM === sixM);
}

export function getAssetById(id: string): FunnelAssetRef | undefined {
  return FUNNEL_CATALOG.find((a) => a.id === id);
}
