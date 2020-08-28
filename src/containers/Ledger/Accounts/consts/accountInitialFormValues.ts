import { dateUtil } from 'utils';

export const accountInitialFormValues = {
  balanceSettled: '0.00',
  balanceAuthorised: '0.00',
  balanceLimit: '0.00',
  balanceLimitShared: '0.00',
  repaymentAmountDue: '0.00',
  accruedInterest: '0.00',
  auxCounter1: '0.00',
  auxCounter2: '0.00',
  auxCounter3: '0.00',
  amountOverdue: '0.00',
  amountOverdue1Cycle: '0.00',
  amountOverdue2Cycles: '0.00',
  amountOverdue3Cycles: '0.00',
  amountOverdue4Cycles: '0.00',
  amountOverdue5Cycles: '0.00',
  amountOverdue6Cycles: '0.00',
  amountOverdue7Cycles: '0.00',
  numberOfTimesOverdueTotal: '0',
  numberOfTimesOverdue1Cycle: '0',
  numberOfTimesOverdue2Cycles: '0',
  numberOfTimesOverdue3Cycles: '0',
  numberOfTimesOverdue4Cycles: '0',
  numberOfTimesOverdue5Cycles: '0',
  numberOfTimesOverdue6Cycles: '0',
  numberOfTimesOverdue7Cycles: '0',
  loanStartDate: dateUtil.todayDate(),
  numOfInstallments: 0,
  numOfInterestFreeInstllmnts: 0,
  numDeferredInstlmts: 0,
};
