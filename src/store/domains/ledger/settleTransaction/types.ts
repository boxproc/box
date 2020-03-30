import { ImmutableArray } from 'seamless-immutable';

/**
 * Retrieve transaction interfaces
 */

export interface IRetrieveTrFormValues {
  id: string;
}

export interface IRetrieveTrReq {
  transaction_id: number;
}

/**
 * Settle transaction interfaces
 */

export interface ISettleTransaction {
  transaction_id: number;
  amount_settled: number;
  settled_datetime: string;
}

export interface ISettleTransactionData {
  transaction: Array<ISettleTransaction>;
}

export interface ISettleTrFormValues {
  transactionId: number;
  amountSettled: number;
  settledDatetime: string;
}

/**
 * Settle transaction state interfaces
 */
export interface ISettleTransactionState {
  transaction: ImmutableArray<ISettleTransaction>;
}
