import { ImmutableArray } from 'seamless-immutable';
import { ILimitAdjustmentFromData, ILimitAdjustmentResultData } from './typesLimitAdj';

import { stringsUtil } from 'utils';

export const prepareLimitAdjDataToSend = (data: Partial<ILimitAdjustmentFromData>) => {
  if (!data) {
    return null;
  }

  const {
    transactionType,
    balanceLimit,
    accountId,
    description,
    transactionDatetime,
  } = data;

  return {
    transaction_type_id: transactionType.value,
    account_id: stringsUtil.toNumber(accountId),
    balance_limit: stringsUtil.toNumber(balanceLimit),
    description,
    transaction_datetime: transactionDatetime && transactionDatetime.value,
  };
};

export const prepareResultLimitAdjDataToRender =
  (data: ImmutableArray<ILimitAdjustmentResultData>) => {
    if (!data || !data.length) {
      return null;
    }

    const {
      transaction_id,
      balance_limit,
    } = data[0];

    return {
      transactionId: transaction_id,
      balanceLimit: balance_limit,
    };
  };
