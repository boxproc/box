import { dateUtil } from 'utils';

export const accountInitialFormValues = {
  balanceSettled: '0.00',
  balanceAuthorised: '0.00',
  balanceLimit: '0.00',
  repaymentAmountDue: '0.00',
  accruedInterest: '0.00',
  auxCounter1: '0.00',
  auxCounter2: '0.00',
  auxCounter3: '0.00',
  amountOverdue: '0.00',
  numberOfTimesOverdueCycles: '0',
  loanStartDate: dateUtil.todayDate(),
  numOfInstallments: 0,
  numOfInterestFreeInstllmnts: 0,
  numDeferredInstlmts: 0,
};
