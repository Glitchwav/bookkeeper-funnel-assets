/** Free magnet: Month-End Missing-Docs Spreadsheet */

export const magnetCopy = {
  productName: 'Month-End Missing-Docs Spreadsheet',
  headlines: [
    'Stop closing the books with half the docs still missing',
    'The month-end tracker bookkeepers use to chase W-9s and bank statements',
    'One spreadsheet. Every missing client doc. Before close.',
  ],
  subheads: [
    'A simple client × document matrix so you know who still owes bank feeds, receipts, and payroll reports — without another messy inbox thread.',
    'Built for bookkeepers who lose hours every month-end hunting PDFs.',
  ],
  bullets: [
    'Request → Received → Exception statuses per client',
    'Works in Google Sheets or Excel',
    'Pairs with polite-to-firm reminder scripts (in the $19 pack)',
  ],
  optInLabel: 'Email me the free spreadsheet',
  successNote:
    'Check your inbox — the spreadsheet link is on the way. Reply with your biggest month-end doc headache if you want a tailored tip.',
} as const;

export type MagnetCopy = typeof magnetCopy;
