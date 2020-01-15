import { dateUtil } from 'utils';

export const illustrationInitialValuesLoan = {
  startDate: dateUtil.todayDate,
  amount: 1200,
};

export const illustrationInitialValuesRevolvingCredit = {
  startDate: dateUtil.todayDate,
  openBalance: 100,
  transactionDate1: dateUtil.todayDate,
  transactionDate2: dateUtil.todayDate,
  transactionDate3: dateUtil.todayDate,
  transactionAmount1: 200,
  transactionAmount2: 300,
  transactionAmount3: 400,
  limit: 1200,
};
