/**
 * Shows import paths agents / Grok Bot / Coder can use.
 * Run: npm run example:import
 */
import {
  FUNNEL_CATALOG,
  OFFERS,
  SIX_MS_MAP,
  magnetCopy,
  packCopy,
  adVariants,
  welcomeEmail,
  nurtureSequence,
  fbAdTemplates,
} from '../src/index.js';

console.log('Offers:', OFFERS.magnet.name, '/', OFFERS.pack.name, OFFERS.pack.priceCents);
console.log('6 Ms:', Object.keys(SIX_MS_MAP).join(', '));
console.log('Catalog assets:', FUNNEL_CATALOG.length);
console.log('Magnet headline:', magnetCopy.headlines[0]);
console.log('Pack CTA:', packCopy.checkoutCta);
console.log('Ad variants:', adVariants.map((a) => a.id).join(', '));
console.log('Creatives:', fbAdTemplates.map((t) => t.id).join(', '));
console.log('Welcome subject:', welcomeEmail.subject);
console.log('Nurture touches:', nurtureSequence.length);
