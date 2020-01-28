import {
  IllustrationProductAprRevolvingCreditResp,
  IllustrationProductFeeRevolvingCreditResp,
  IllustrationProductLoanResp,
  IllustrationProductRewardRevolvingCreditResp,
  IllustrationProductStatementsRevolvingCreditResp,
  IllustrationProductTransactionsRevolvingCreditResp,
  LoanProductIllustrate,
  LoanProductIllustratePrepared,
  RevolvingCreditProductIllustrate,
  RevolvingCreditProductIllustratePrepared,
} from './types';

import { stringsUtil } from 'utils';

export const prepareProductLoanIllustrateDataToSend =
  (data: Partial<LoanProductIllustrate>): Partial<LoanProductIllustratePrepared> => {
    const { productId, amount, defNumOfInstallments, defNumOfIntrstFreeInstlmts, startDate } = data;

    return {
      product_id: productId,
      amount,
      nr_loan_cycles: stringsUtil.toNumber(defNumOfInstallments),
      nr_interest_free: stringsUtil.toNumber(defNumOfIntrstFreeInstlmts),
      start_date: startDate,
    };
  };

export const prepareProductRevolvingCreditIllustrateDataToSend =
  (data: Partial<RevolvingCreditProductIllustrate>):
    Partial<RevolvingCreditProductIllustratePrepared> => {
    const { productId, limit, openBalance, startDate, transactionAmount1, transactionAmount2,
      transactionAmount3, transactionDate1, transactionDate2, transactionDate3, transactionType1,
      transactionType2, transactionType3 } = data;

    return {
      product_id: productId,
      limit,
      open_balance: openBalance,
      transaction_amount_1: transactionAmount1,
      transaction_amount_2: transactionAmount2,
      transaction_amount_3: transactionAmount3,
      transaction_date_1: transactionDate1,
      transaction_date_2: transactionDate2,
      transaction_date_3: transactionDate3,
      transaction_type_1: transactionType1 && transactionType1.value,
      transaction_type_2: transactionType2 && transactionType2.value,
      transaction_type_3: transactionType3 && transactionType3.value,
      start_date: startDate,
    };
  };

export const prepareProductIllustrationStatementsItem = (
  item: IllustrationProductStatementsRevolvingCreditResp
) => {
  return {
    statementId: item.statement_id,
    statementDate: item.statement_date,
    firstTransactionId: item.first_transaction_id,
    lastTransactionId: item.last_transaction_id,
    balanceOpen: stringsUtil.numberToFixed(item.balance_open, 2),
    balanceClose: stringsUtil.numberToFixed(item.balance_close, 2),
    minimumAmountDueRepayment: stringsUtil.numberToFixed(item.minimum_amount_due_repayment, 2),
    minimumRepayment: stringsUtil.numberToFixed(item.minimum_repayment, 2),
    startDate: item.start_date,
    endDate: item.end_date,
  };
};

export const prepareProductIllustrationAprsItem = (
  item: IllustrationProductAprRevolvingCreditResp
) => {
  return {
    description: item.description,
    accruedInterest: stringsUtil.numberToFixed(item.accrued_interest, 4),
    rate: stringsUtil.numberToFixed(item.rate, 2),
  };
};

export const prepareProductIllustrationFeesItem = (
  item: IllustrationProductFeeRevolvingCreditResp
) => {
  return {
    description: item.description,
    accruedFee: stringsUtil.numberToFixed(item.accrued_fee, 2),
  };
};

export const prepareProductIllustrationRewardsItem = (
  item: IllustrationProductRewardRevolvingCreditResp
) => {
  return {
    description: item.description,
    accruedReward: stringsUtil.numberToFixed(item.accrued_reward, 2),
  };
};

export const prepareProductIllustrationTransactionsItem = (
  item: IllustrationProductTransactionsRevolvingCreditResp
) => {
  return {
    transactionDatetime: item.transaction_datetime,
    debitCreditIndicator: item.debit_credit_indicator,
    amount: stringsUtil.numberToFixed(item.amount, 2),
    balanceSettledBefore: stringsUtil.numberToFixed(item.balance_available_before, 2),
    balanceSettledAfter: stringsUtil.numberToFixed(item.balance_available_after, 2),
    balanceAvailableBefore: stringsUtil.numberToFixed(item.balance_available_before, 2),
    balanceAvailableAfter: stringsUtil.numberToFixed(item.balance_available_after, 2),
    description: item.description,
    status: item.status,
    aprRate: stringsUtil.numberToFixed(item.apr_rate, 2),
    transactionType: item.transaction_type,
  };
};

export const prepareProductIllustrationData = (data: IllustrationProductLoanResp) => {
  if (!data) {
    return null;
  }

  const {
    statement_id,
    statement_date,
    installment_balance,
    fee,
    apr,
    minimum_amount_due_repayment,
    amount,
    start_date,
    end_date,
  } = data;

  return {
    statementId: statement_id,
    statementDate: statement_date,
    startDate: start_date,
    endDate: end_date,
    amount: stringsUtil.numberToFixed(amount, 2),
    installmentBalance: stringsUtil.numberToFixed(installment_balance, 2),
    fee: stringsUtil.numberToFixed(fee, 2),
    apr: stringsUtil.numberToFixed(apr, 2),
    minimumAmountDueRepayment: stringsUtil.numberToFixed(minimum_amount_due_repayment, 2),
  };
};
