import { repaymentStatusOptions, repaymentTypesOptions } from 'consts';

import {
  LedgerAccountStatementItem,
  LedgerStatementAprItem,
  LedgerStatementAprItemPrepared,
  LedgerStatementItem,
  LedgerStatementsFilter,
  LedgerStatementTransactionsItem,
  LedgerStatementTransactionsItemPrepared
} from './types';

import { SelectValue } from 'types';
import { stringsUtil } from 'utils';

export const prepareStatementDataToRender = (
  data: Partial<LedgerStatementItem>,
  institution?: SelectValue
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
    repayment_status,
    account_alias,
    product_name,
    first_name,
    last_name,
    account_alias_additional,
    address_line1,
    address_line2,
    address_line3,
    address_line4,
    address_town,
    address_post_code,
    address_country_code,
    previous_statement_id,
  } = data;

  const repaymentStatus = repaymentStatusOptions
    .find(status => status.value === repayment_status);

  return {
    account: {
      accountId: account_id,
      accountAlias: account_alias,
      accountAliasAdditional: account_alias_additional,
      firstName: first_name,
      lastName: last_name,
      institutionId: institution && institution.label,
      addressLine1: address_line1,
      addressLine2: address_line2,
      addressLine3: address_line3,
      addressLine4: address_line4,
      addressTown: address_town,
      addressPostCode: address_post_code,
      addressCountryCode: address_country_code,
    },
    statement: {
      id,
      statementDate: statement_date,
      productName: product_name,
      firstTransactionId: first_transaction_id,
      lastTransactionId: last_transaction_id,
      balanceOpen: stringsUtil.numberToFixed(balance_open, 2),
      balanceClose: stringsUtil.numberToFixed(balance_close, 2),
      minimumAmountDueRepayment: stringsUtil.numberToFixed(minimum_amount_due_repayment, 2),
      repaymentStatus: repaymentStatus && repaymentStatus.label,
      previousStatementId: previous_statement_id,
    },
  };
};

export const prepareDataToRender = (
  data: Partial<LedgerStatementItem>,
  institution?: SelectValue
) => {
  const preparedData = prepareStatementDataToRender(data, institution);

  return {
    ...preparedData.account,
    ...preparedData.statement,
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
    original_currency,
    grace_period,
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
    amount: stringsUtil.numberToFixed(amount, 2),
    originalCurrency: original_currency,
    amountInOriginalCurrency: stringsUtil.numberToFixed(amount_in_original_currency, 2),
    balanceAvailableBefore: stringsUtil.numberToFixed(balance_available_before, 2),
    balanceAvailableAfter: stringsUtil.numberToFixed(balance_available_after, 2),
    balanceSettledBefore: stringsUtil.numberToFixed(balance_settled_before, 2),
    balanceSettledAfter: stringsUtil.numberToFixed(balance_settled_after, 2),
    description,
    aprId: apr_id,
    aprRate: stringsUtil.numberToFixed(apr_rate, 2),
    gracePeriod: grace_period,
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
    start_date,
    repayment_type,
  } = data;

  const repaymentType = repaymentTypesOptions.find(el => el.value === repayment_type);

  return {
    ...prepareDataToRender(data),
    accruedInterestTotal: stringsUtil.numberToFixed(accrued_interest_total, 5),
    accruedFeeTotal: stringsUtil.numberToFixed(accrued_fee_total, 5),
    accruedRewardTotal: stringsUtil.numberToFixed(accrued_reward_total, 5),
    startDate: start_date,
    repaymentType: repaymentType && repaymentType.label,
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
    accruedInterest: stringsUtil.numberToFixed(accrued_interest, 5),
    description,
    rate: stringsUtil.numberToFixed(rate, 2),
  };
};

export const prepareStatementTransactionsForReport =
  (transactions: Array<LedgerStatementTransactionsItem>):
    Array<Partial<LedgerStatementTransactionsItemPrepared>> => {
    if (transactions.length) {
      return transactions.map(transaction => {
        const preparedData = prepareTransactionsDataToRender(transaction);
        const clonedTransactions = { ...preparedData };

        delete clonedTransactions.id;
        delete clonedTransactions.aprId;

        return clonedTransactions;
      });
    } else {
      return [{
        transactionDatetime: null,
        originalCurrency: null,
        amount: null,
        amountInOriginalCurrency: null,
        balanceAvailableBefore: null,
        balanceAvailableAfter: null,
        balanceSettledBefore: null,
        balanceSettledAfter: null,
        description: null,
        aprRate: null,
        gracePeriod: null,
      }];
    }
  };

export const prepareStatementAprsForReport = (aprs: Array<LedgerStatementAprItem>) => {
  if (aprs.length) {
    return aprs.map(apr => {
      const { description, rate, accrued_interest } = apr;

      return {
        description,
        rate,
        accruedInterest: stringsUtil.numberToFixed(accrued_interest, 5),
      };
    });
  } else {
    return [{
      description: null,
      rate: null,
      accruedInterest: null,
    }];
  }
};
