/** Free magnet: Month-End Missing-Docs Spreadsheet */

import { PRIMARY_CTA } from './cta.js';

export const magnetCopy = {
  productName: 'Month-End Missing-Docs Spreadsheet',
  headlines: [
    'Close week where you leave on time — docs already in',
    'Your month-end, without the evening PDF hunt',
    'One named sheet. Every missing client doc. Before close.',
  ],
  subheads: [
    'You are the hero of close week: clients send what you asked, the file is complete, and you are not rewriting chase emails at 9pm. The mechanism is a simple client × document matrix.',
    'Built for bookkeepers who want evenings back during month-end — not another tool to configure.',
  ],
  bullets: [
    'Request → Received → Exception statuses per client',
    'Works in Google Sheets or Excel — no new stack',
    'Pairs later with polite-to-firm reminder scripts (the $19 pack)',
  ],
  optInLabel: PRIMARY_CTA,
  successNote:
    'Check your inbox — your Missing-Docs Spreadsheet is on the way. Reply with your biggest month-end doc headache if you want a tailored tip.',
} as const;

export type MagnetCopy = typeof magnetCopy;
