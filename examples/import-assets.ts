/**
 * Shows import paths agents / Grok Bot / Coder can use.
 * Run: npm run example:import
 */
import {
  FUNNEL_CATALOG,
  OFFERS,
  SIX_MS_MAP,
  PRIMARY_CTA,
  magnetCopy,
  packCopy,
  adVariants,
  adaptedAdVariants,
  deprecatedVideoTestimonialVariants,
  NORMAL_AD_EXAMPLES,
  IMAGE_AD_PATTERNS,
  INGESTED_ADS,
  LONG_RUNNING_PATTERNS,
  welcomeEmail,
  nurtureSequence,
  fbAdTemplates,
} from '../src/index.js';

console.log('Offers:', OFFERS.magnet.name, '/', OFFERS.pack.name, OFFERS.pack.priceCents);
console.log('6 Ms:', Object.keys(SIX_MS_MAP).join(', '));
console.log('Catalog assets:', FUNNEL_CATALOG.length);
console.log('Primary CTA:', PRIMARY_CTA);
console.log('Magnet headline:', magnetCopy.headlines[0]);
console.log('Magnet opt-in:', magnetCopy.optInLabel);
console.log('Pack CTA:', packCopy.checkoutCta);
console.log('Legacy ad variants:', adVariants.map((a) => a.id).join(', '));
console.log(
  'Adapted IMAGE variants:',
  adaptedAdVariants.map((a) => `${a.id} [${a.pattern}/${a.format}] #${a.sourceAdArchiveId}`).join(', '),
);
console.log('Adapted CTAs unique:', [...new Set(adaptedAdVariants.map((a) => a.cta))].join('|'));
console.log(
  'Deprecated video testimonials:',
  deprecatedVideoTestimonialVariants.map((a) => a.id).join(', '),
);
console.log(
  'Normal IMAGE examples:',
  NORMAL_AD_EXAMPLES.selected_normal_examples.map((e) => `${e.page}:${e.ad_archive_id}`).join(', '),
);
console.log('IMAGE patterns:', IMAGE_AD_PATTERNS.map((p) => p.id).join(', '));
console.log('Ingested kept:', INGESTED_ADS.kept.length, 'discarded:', INGESTED_ADS.discarded.length);
console.log('Long-running patterns (legacy):', LONG_RUNNING_PATTERNS.map((p) => p.angle).join(', '));
console.log('Creatives:', fbAdTemplates.map((t) => t.id).join(', '));
console.log('Welcome subject:', welcomeEmail.subject);
console.log('Nurture touches:', nurtureSequence.length);
