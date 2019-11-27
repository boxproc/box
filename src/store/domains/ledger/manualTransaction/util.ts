import { LedgerManualTransactionFromData, LedgerManualTransactionResult } from './types';

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
    account_id: Number(accountId),
    amount: Number(amount),
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

  return {
    transactionId: transaction_id,
    status,
    balanceSettledBefore: balance_settled_before,
    balanceSettledAfter: balance_settled_after,
    balanceAvailableBefore: balance_available_before,
    balanceAvailableAfter: balance_available_after,
  };
};
