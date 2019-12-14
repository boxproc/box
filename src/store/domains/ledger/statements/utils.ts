import { feeTypesOptions, repaymentStatusTypesOptions, rewardsTypesOptions } from 'consts';

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

import { SelectValues } from 'types';
import { stringsUtil } from 'utils';

export const prepareDataToRender = (
  data: Partial<LedgerStatementItem>,
  institution?: SelectValues
) => {
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
    institutionId: institution && institution.label,
    productName: product_name,
    accountId: account_id,
    accountAlias: account_alias,
    firstName: first_name,
    lastName: last_name,
    firstTransactionId: first_transaction_id,
    lastTransactionId: last_transaction_id,
    statementDate: statement_date,
    balanceOpen: stringsUtil.checkNumberToFixed(balance_open) && balance_open.toFixed(2),
    balanceClose: stringsUtil.checkNumberToFixed(balance_close) && balance_close.toFixed(2),
    minimumAmountDueRepayment: stringsUtil.checkNumberToFixed(minimum_amount_due_repayment)
      && minimum_amount_due_repayment.toFixed(2),
    statementCycle: statement_cycle_description,
    repaymentStatus: repaymentStatus && repaymentStatus.label,
    dateOfLastUpdate: date_of_last_update,
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
    amount: stringsUtil.checkNumberToFixed(amount) && amount.toFixed(2),
    amountInOriginalCurrency: stringsUtil.checkNumberToFixed(amount_in_original_currency)
      && amount_in_original_currency.toFixed(2),
    balanceAvailableBefore: stringsUtil.checkNumberToFixed(balance_available_before)
      && balance_available_before.toFixed(2),
    balanceAvailableAfter: stringsUtil.checkNumberToFixed(balance_available_after)
      && balance_available_after.toFixed(2),
    balanceSettledBefore: stringsUtil.checkNumberToFixed(balance_settled_before)
      && balance_settled_before.toFixed(2),
    balanceSettledAfter: stringsUtil.checkNumberToFixed(balance_settled_after)
      && balance_settled_after.toFixed(2),
    description,
    aprId: apr_id,
    aprRate: stringsUtil.checkNumberToFixed(apr_rate) && apr_rate.toFixed(2),
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
    accruedInterestTotal: stringsUtil.checkNumberToFixed(accrued_interest_total)
      && accrued_interest_total.toFixed(5),
    accruedFeeTotal: stringsUtil.checkNumberToFixed(accrued_fee_total)
      && accrued_fee_total.toFixed(5),
    accruedRewardTotal: stringsUtil.checkNumberToFixed(accrued_reward_total)
      && accrued_reward_total.toFixed(5),
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
    description,
    rate,
  } = data;

  return {
    statementId: statement_id,
    productAprId: product_apr_id,
    accruedInterest: stringsUtil.checkNumberToFixed(accrued_interest)
      && accrued_interest.toFixed(5),
    description,
    rate: stringsUtil.checkNumberToFixed(rate) && rate.toFixed(2),
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
    description,
    rate,
    amount,
    fee_application_condition,
  } = data;

  const feeApplicationCondition = feeTypesOptions
    .find(item => item.value === fee_application_condition);

  return {
    statementId: statement_id,
    productFeeId: product_fee_id,
    accruedFee: stringsUtil.checkNumberToFixed(accrued_fee) && accrued_fee.toFixed(5),
    description,
    rate: stringsUtil.checkNumberToFixed(rate) && rate.toFixed(2),
    amount: stringsUtil.checkNumberToFixed(amount) && amount.toFixed(2),
    feeApplicationCondition: feeApplicationCondition && feeApplicationCondition.label,
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
    description,
    rate,
    amount,
    reward_application_condition,
  } = data;

  const rewardApplicationCondition = rewardsTypesOptions
    .find(item => item.value === reward_application_condition);

  return {
    statementId: statement_id,
    productRewardId: product_reward_id,
    accruedReward: stringsUtil.checkNumberToFixed(accrued_reward) && accrued_reward.toFixed(5),
    description,
    rate: stringsUtil.checkNumberToFixed(rate) && rate.toFixed(2),
    amount: stringsUtil.checkNumberToFixed(amount) && amount.toFixed(2),
    rewardApplicationCondition: rewardApplicationCondition && rewardApplicationCondition.label,
  };
};
