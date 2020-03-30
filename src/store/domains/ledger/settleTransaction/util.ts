import { ImmutableArray } from 'seamless-immutable';
import {
  IRetrieveTrFormValues,
  ISettleTransaction,
  ISettleTrFormValues,
} from './types';

import { dateUtil, stringsUtil } from 'utils';

export const prepareRetrieveTransactionRequest = (data: Partial<IRetrieveTrFormValues>) => {
  const { id } = data;

  return {
    transaction_id: stringsUtil.toNumber(id),
  };
};

export const prepareDataToSend = (data: Partial<ISettleTrFormValues>) => {
  if (!data) {
    return null;
  }

  const { transactionId, amountSettled, settledDatetime } = data;

  return {
    transaction_id: stringsUtil.toNumber(transactionId),
    amount_settled: stringsUtil.toNumber(amountSettled),
    settled_datetime: settledDatetime,
  };
};

export const prepareDataToRender = (data: ImmutableArray<ISettleTransaction>):
  ISettleTrFormValues => {
  if (!data || !data.length) {
    return null;
  }

  const { transaction_id, amount_settled } = data[0];

  return {
    transactionId: transaction_id,
    amountSettled: amount_settled,
    settledDatetime: dateUtil.todayDateTime(),
  };
};
