export interface EmailStub {
  id: string;
  subject: string;
  previewText: string;
  bodyMarkdown: string;
}

export const welcomeEmail: EmailStub = {
  id: 'email.welcome',
  subject: 'Your Month-End Missing-Docs Spreadsheet',
  previewText: 'Track every W-9, bank statement, and receipt before close.',
  bodyMarkdown: `Hi {{first_name|there}},

Here’s your **Month-End Missing-Docs Spreadsheet**.

1. Duplicate the sheet for this close period  
2. List each client across the top (or rows — your call)  
3. Mark Requested → Received → Exception as docs arrive  

If a client goes quiet after two nudges, log it as an Exception and keep closing the rest of the file.

Tomorrow I’ll send one tip that cuts chase time for bank statements.

— The Glitchwav bookkeeper tools crew

P.S. When you’re ready for polite→firm reminder scripts, the **Missing Docs Reminder Pack** is $19 self-serve.
`,
};
