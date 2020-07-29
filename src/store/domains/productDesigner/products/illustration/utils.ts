import {
  ILoanIllustrationData,
  ILoanIllustrationReq,
  ILoanIllustrationReqToSend,
  IRevCreditIllustrationAprData,
  IRevCreditIllustrationReq,
  IRevCreditIllustrationReqToSend,
  IRevCreditIllustrationStatementData,
  IRevCreditIllustrationTransData,
} from './types';

import { stringsUtil } from 'utils';

export const prepareLoanToSend = (data: Partial<ILoanIllustrationReq>):
  ILoanIllustrationReqToSend => {
  if (!data) {
    return null;
  }

  const {
    productId,
    amount,
    defNumOfInstallments,
    defNumInterestFreeInstlmts,
    defNumDeferredInstlmts,
    startDate,
  } = data;

  return {
    product_id: productId,
    amount,
    nr_loan_cycles: stringsUtil.toNumber(defNumOfInstallments),
    num_of_interest_free_instllmnts: stringsUtil.toNumber(defNumInterestFreeInstlmts),
    num_deferred_instlmts: stringsUtil.toNumber(defNumDeferredInstlmts),
    start_date: startDate,
  };
};

export const prepareRevCreditToSend = (data: Partial<IRevCreditIllustrationReq>):
  IRevCreditIllustrationReqToSend => {
  if (!data) {
    return null;
  }

  const {
    productId,
    limit,
    openBalance,
    startDate,
    transactionAmount1,
    transactionAmount2,
    transactionAmount3,
    transactionDate1,
    transactionDate2,
    transactionDate3,
    transactionType1,
    transactionType2,
    transactionType3,
  } = data;

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

export const prepareStatementToRender = (data: IRevCreditIllustrationStatementData) => {
  if (!data) {
    return null;
  }

  return {
    statementId: data.statement_id,
    statementDate: data.statement_date,
    firstTransactionId: data.first_transaction_id,
    lastTransactionId: data.last_transaction_id,
    balanceOpen: stringsUtil.numberToFixed(data.balance_open, 2),
    balanceClose: stringsUtil.numberToFixed(data.balance_close, 2),
    repaymentMinimumAmountDue: stringsUtil.numberToFixed(data.repayment_minimum_amount_due, 2),
    minimumRepayment: stringsUtil.numberToFixed(data.minimum_repayment, 2),
    startDate: data.start_date,
    endDate: data.end_date,
  };
};

export const prepareAprToRender = (data: IRevCreditIllustrationAprData) => {
  if (!data) {
    return null;
  }

  return {
    description: data.description,
    currAccruedInterest: stringsUtil.numberToFixed(data.curr_accrued_interest, 4),
    rate: stringsUtil.numberToFixed(data.rate, 2),
  };
};

export const prepareTransToRender = (data: IRevCreditIllustrationTransData) => {
  if (!data) {
    return null;
  }

  return {
    transactionDatetime: data.transaction_datetime,
    debitCreditIndicator: data.debit_credit_indicator,
    amount: stringsUtil.numberToFixed(data.amount, 2),
    balanceSettledBefore: stringsUtil.numberToFixed(data.balance_authorised_before, 2),
    balanceSettledAfter: stringsUtil.numberToFixed(data.balance_authorised_after, 2),
    balanceAuthorisedBefore: stringsUtil.numberToFixed(data.balance_authorised_before, 2),
    balanceAuthorisedAfter: stringsUtil.numberToFixed(data.balance_authorised_after, 2),
    description: data.description,
    status: data.status,
    aprRate: stringsUtil.numberToFixed(data.apr_rate, 2),
    transactionType: data.transaction_type,
  };
};

export const prepareLoanToRender = (data: ILoanIllustrationData) => {
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
    balance_to_repay,
    start_date,
    end_date,
  } = data;

  return {
    statementId: statement_id,
    statementDate: statement_date,
    startDate: start_date,
    endDate: end_date,
    balanceToRepay: stringsUtil.numberToFixed(balance_to_repay, 2),
    installmentBalance: stringsUtil.numberToFixed(installment_balance, 2),
    fee: stringsUtil.numberToFixed(fee, 2),
    apr: stringsUtil.numberToFixed(apr, 2),
    minimumAmountDueRepayment: stringsUtil.numberToFixed(minimum_amount_due_repayment, 2),
  };
};
