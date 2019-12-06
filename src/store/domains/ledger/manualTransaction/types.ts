import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

export interface LedgerManualTransactionRequest {
  transaction_type_id: number | string;
  currency_num_code: number | string;
  account_id: number;
  amount: number;
  description: string;
  transaction_datetime: string | number;
}

export interface LedgerManualTransactionFromData {
  transactionType: SelectValues;
  currencyCode: SelectValues;
  accountId: string;
  amount: string;
  description: string;
  transactionDatetime: SelectValues;
}

export interface LedgerManualTransactionResult {
  transaction_id: number;
  status: string;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_available_before: number;
  balance_available_after: number;
}

export interface LedgerManualTransactionResultPrepared {
  transactionId: number;
  status: string;
  balanceSettledBefore: number;
  balanceSettledAfter: number;
  balanceAvailableBefore: number;
  balanceAvailableAfter: number;
}

export interface LedgerManualTransactionResultResponse {
  transaction_result: Array<LedgerManualTransactionResult>;
}

export interface LedgerManualTransactionState {
  transactionResult: ImmutableArray<LedgerManualTransactionResult>;
}
