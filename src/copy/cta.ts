/** CTA / micro-commitment labels */

export const ctaCopy = {
  microCommitment: [
    'Get the free spreadsheet',
    'Email me the tracker',
    'Send me the Missing-Docs sheet',
  ],
  makeTheAsk: [
    'Unlock Reminder Pack — $19',
    'Get the scripts',
    'Buy the pack',
  ],
  formLabels: {
    email: 'Work email',
    firstName: 'First name (optional)',
    firmName: 'Bookkeeping firm (optional)',
  },
  buttonHelpers: {
    magnet: 'Instant email delivery. No spam.',
    pack: 'One-time $19. Instant download.',
  },
} as const;

export type CtaCopy = typeof ctaCopy;
