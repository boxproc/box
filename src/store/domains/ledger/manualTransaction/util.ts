import { transactionStatusOptions } from 'consts';

import { LedgerManualTransactionFromData, LedgerManualTransactionResult } from './types';

import { stringsUtil } from 'utils';

export const prepareDataToSend = (data: Partial<LedgerManualTransactionFromData>) => {
  if (!data) {
    return null;
  }

  const {
    transactionType,
    currencyCode,
    accountId,
    amount,
    description,
  } = data;

  return {
    transaction_type_id: transactionType.value,
    currency_num_code: currencyCode.value,
    account_id: stringsUtil.toNumber(accountId),
    amount: stringsUtil.toNumber(amount),
    description,
  };
};

export const prepareResultDataToRender = (data: Array<LedgerManualTransactionResult>) => {
  if (!data || !data.length) {
    return null;
  }

  const {
    transaction_id,
    status,
    balance_settled_before,
    balance_settled_after,
    balance_available_before,
    balance_available_after,
  } = data[0];

  const transactionStatus = transactionStatusOptions.find(el => el.value === status);

  return {
    transactionId: transaction_id,
    status: transactionStatus && transactionStatus.label,
    balanceSettledBefore: balance_settled_before,
    balanceSettledAfter: balance_settled_after,
    balanceAvailableBefore: balance_available_before,
    balanceAvailableAfter: balance_available_after,
  };
};
