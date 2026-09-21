import type { EmailStub } from './welcome.js';

export const purchaseEmails: EmailStub[] = [
  {
    id: 'email.purchase.receipt',
    subject: 'Your Missing Docs Reminder Pack',
    previewText: 'Download links + how to use this week’s close.',
    bodyMarkdown: `Hi {{first_name|there}},

Thanks for grabbing the **Missing Docs Reminder Pack**.

**Downloads**  
- Reminder scripts (polite / specific / firm)  
- Client checklist one-pager  
- Exception log  
- Month-end handoff note  

**This week:** pick one client who’s usually late, send the polite script today, and schedule the firm script for 48 hours later.

Questions? Just reply to this email.

`,
  },
];
