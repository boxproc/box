import { ImmutableArray } from 'seamless-immutable';

export interface RetrieveTransactionFormValues {
  id: string;
}

export interface RetrieveTransactionRequest {
  transaction_id: number;
}

export interface SettleTransactionItem {
  transaction_id: number;
  amount_settled: number;
  settled_datetime: string;
}

export interface SettleTransactionData {
  transaction: Array<SettleTransactionItem>;
}

export interface SettleTransactionFormValues {
  transactionId: number;
  amountSettled: number;
  settledDatetime: string;
}

export interface LedgerSettleTransactionState {
  transaction: ImmutableArray<SettleTransactionItem>;
}
