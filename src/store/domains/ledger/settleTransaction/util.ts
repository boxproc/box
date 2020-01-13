import {
  RetrieveTransactionFormValues,
  SettleTransactionFormValues,
  SettleTransactionItem,
} from './types';

import { dateUtil, stringsUtil } from 'utils';

export const prepareRetrieveTransactionRequest = (data: Partial<RetrieveTransactionFormValues>) => {
  const { id } = data;

  return {
    id: stringsUtil.toNumber(id),
  };
};

export const prepareDataToSend = (data: Partial<SettleTransactionFormValues>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    amountSettled,
    settledDatetime,
  } = data;

  return {
    id: stringsUtil.toNumber(id),
    amount_settled: stringsUtil.toNumber(amountSettled),
    settled_datetime: settledDatetime,
  };
};

export const prepareDataToRender = (data: SettleTransactionItem): SettleTransactionFormValues => {
  if (!data) {
    return null;
  }

  const {
    id,
    amount_settled,
  } = data;

  return {
    id,
    amountSettled: amount_settled,
    settledDatetime: dateUtil.todayDateTime(),
  };
};
