import { repaymentStatusTypesOptions } from 'consts';

import {
  LedgerAccountStatementItem,
  LedgerStatementAprItem,
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItem,
  LedgerStatementFeeItemPrepared,
  LedgerStatementItem,
  LedgerStatementRewardItem,
  LedgerStatementRewardItemPrepared,
  LedgerStatementsFilter,
  LedgerStatementTransactionsItem
} from './types';

export const prepareDataToRender = (data: Partial<LedgerStatementItem>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    account_id,
    first_transaction_id,
    last_transaction_id,
    statement_date,
    balance_open,
    balance_close,
    minimum_amount_due_repayment,
    statement_cycle_description,
    repayment_status,
    date_of_last_update,
    account_alias,
    product_name,
    first_name,
    last_name,
  } = data;

  const repaymentStatus = repaymentStatusTypesOptions
    .find(status => status.value === repayment_status);

  return {
    id,
    accountId: account_id,
    firstTransactionId: first_transaction_id,
    lastTransactionId: last_transaction_id,
    statementDate: statement_date,
    balanceOpen: balance_open && balance_open.toFixed(2),
    balanceClose: balance_close && balance_close.toFixed(2),
    minimumAmountDueRepayment: minimum_amount_due_repayment
      && minimum_amount_due_repayment.toFixed(2),
    statementCycleName: statement_cycle_description,
    repaymentStatus: repaymentStatus && repaymentStatus.label,
    dateOfLastUpdate: date_of_last_update,
    accountAlias: account_alias,
    productName: product_name,
    firstName: first_name,
    lastName: last_name,
  };
};

export const prepareTransactionsDataToRender = (data: Partial<LedgerStatementTransactionsItem>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    transaction_datetime,
    amount,
    amount_in_original_currency,
    balance_available_before,
    balance_available_after,
    balance_settled_before,
    balance_settled_after,
    description,
    apr_id,
    apr_rate,
  } = data;

  return {
    id,
    transactionDatetime: transaction_datetime,
    amount: amount && amount.toFixed(2),
    amountInOriginalCurrency: amount_in_original_currency
      && amount_in_original_currency.toFixed(2),
    balanceAvailableBefore: balance_available_before
      && balance_available_before.toFixed(2),
    balanceAvailableAfter: balance_available_after
      && balance_available_after.toFixed(2),
    balanceSettledBefore: balance_settled_before
      && balance_settled_before.toFixed(2),
    balanceSettledAfter: balance_settled_after
      && balance_settled_after.toFixed(2),
    description,
    aprId: apr_id,
    aprRate: apr_rate && apr_rate.toFixed(2),
  };
};

export const preparedFilterToSend = (data: Partial<LedgerStatementsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    accountId,
    institutionId,
    firstName,
    lastName,
    accountAlias,
    product,
    statementsDateFrom,
    statementsDateTo,
  } = data;

  return {
    account_id: accountId ? accountId : null,
    institution_id: institutionId ? institutionId.value : null,
    first_name: firstName ? firstName : null,
    last_name: lastName ? lastName : null,
    product: (product && product.length) ? product.map(name => name.value) : null,
    account_alias: accountAlias ? accountAlias : null,
    date_from: statementsDateFrom ? statementsDateFrom : null,
    date_to: statementsDateTo ? statementsDateTo : null,
  };
};

export const prepareAccountStatementsDataToRender = (data: LedgerAccountStatementItem) => {
  if (!data) {
    return null;
  }

  const {
    accrued_interest_total,
    accrued_fee_total,
    accrued_reward_total,
  } = data;

  return {
    ...prepareDataToRender(data),
    accruedInterestTotal: accrued_interest_total,
    accruedFeeTotal: accrued_fee_total,
    accruedRewardTotal: accrued_reward_total,
  };
};

export const prepareStatementAprToRender = (data: LedgerStatementAprItem):
  LedgerStatementAprItemPrepared => {
  if (!data) {
    return null;
  }

  const {
    statement_id,
    product_apr_id,
    accrued_interest,
  } = data;

  return {
    statementId: statement_id,
    productAprId: product_apr_id,
    accruedInterest: accrued_interest,
  };
};

export const prepareStatementFeeToRender = (data: LedgerStatementFeeItem):
  LedgerStatementFeeItemPrepared => {
  if (!data) {
    return null;
  }

  const {
    statement_id,
    product_fee_id,
    accrued_fee,
  } = data;

  return {
    statementId: statement_id,
    productFeeId: product_fee_id,
    accruedFee: accrued_fee,
  };
};

export const prepareStatementRewardToRender = (data: LedgerStatementRewardItem):
  LedgerStatementRewardItemPrepared => {
  if (!data) {
    return null;
  }

  const {
    statement_id,
    product_reward_id,
    accrued_reward,
  } = data;

  return {
    statementId: statement_id,
    productRewardId: product_reward_id,
    accruedReward: accrued_reward,
  };
};
