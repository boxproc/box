import { LedgerLimitAdjustmentFromData, LedgerLimitAdjustmentResult } from './types';

export const prepareDataToSend = (data: Partial<LedgerLimitAdjustmentFromData>) => {
  if (!data) {
    return null;
  }

  const {
    transactionType,
    balanceLimit,
    accountId,
    balanceLimitShared,
    description,
    transactionDatetime,
  } = data;

  return {
    transaction_type_id: transactionType.value,
    balance_limit_shared: balanceLimitShared,
    account_id: Number(accountId),
    balance_limit: Number(balanceLimit),
    description,
    transaction_datetime: transactionDatetime && transactionDatetime.value,
  };
};

export const prepareResultDataToRender = (data: Array<LedgerLimitAdjustmentResult>) => {
  if (!data || !data.length) {
    return null;
  }

  const {
    transaction_id,
    balance_limit,
    balance_limit_shared,
  } = data[0];

  return {
    transactionId: transaction_id,
    balanceLimit: balance_limit,
    balanceLimitShared: balance_limit_shared,
  };
};
