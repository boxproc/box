export const rulesInitialFormValues = {
  transactionApproveDeny: `
/*  This rule approves or denies transactions. In an event of transaction you can approve or deny trasanction by implementing 'function run()'.
The function must return 'true' if you need to approve transaction or 'false' if you need to deny transaction.
Operate the dta from database. Use right-click menu to see and insert available data elements.
*/
/*
function run()
{
  return true;
}
*/
//Write your javaScript code here
`,
  transactionSetTransactionApr: `
/*  This rule sets transaction APR. In an event of transaction you can choose what APR should be assigned to the trasanction by implementing run() function.
The function must return id of one of the APRs defined in the corresponding product.
Operate the data from database. Use right-click menu 'APRs' to see available APR ID values.
*/
/*
function run()
{
  return 2;
}
*/
//Write your rule using javaScript code here
`,
};
