import { dateUtil } from 'utils';

export const illustrationInitialValuesLoan = {
  startDate: dateUtil.todayDate,
  amount: 1200,
};

export const illustrationInitialValuesRevolvingCredit = {
  startDate: dateUtil.todayDate,
  transactionDate1: dateUtil.todayDate,
  transactionDate2: dateUtil.todayDate,
  transactionDate3: dateUtil.todayDate,
  transactionAmount1: 200,
  transactionAmount2: 200,
  transactionAmount3: 200,
  limit: 1200,

};
