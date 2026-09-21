/** CTA / micro-commitment labels — Codie: ONE primary ask, repeated. */

export const PRIMARY_CTA = 'Grab your free Missing-Docs Spreadsheet' as const;

export const ctaCopy = {
  /** Primary ask everywhere cold traffic lands. */
  primary: PRIMARY_CTA,
  trade: 'Your work email for the named Month-End Missing-Docs Spreadsheet.',
  microCommitment: [
    PRIMARY_CTA,
    'Email me the tracker',
    'Send me the Missing-Docs sheet',
  ],
  /** Secondary ask — only after magnet delivery / retarget. */
  makeTheAsk: [
    'Unlock your Reminder Pack — $19',
    'Get your reminder scripts',
    'Yes — send the $19 pack',
  ],
  formLabels: {
    email: 'Work email',
    firstName: 'First name (optional)',
    firmName: 'Bookkeeping firm (optional)',
  },
  buttonHelpers: {
    magnet: 'Instant email delivery. Named sheet, not a newsletter bait-and-switch.',
    pack: 'One-time $19. Instant download. No monthly plan.',
  },
} as const;

export type CtaCopy = typeof ctaCopy;
