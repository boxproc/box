import { ImmutableArray } from 'seamless-immutable';

import { SelectValue } from 'types';

export interface LedgerManualTransactionRequest {
  transaction_type_id: number | string;
  currency_num_code: number | string;
  account_id: number;
  amount: number;
  description: string;
}

export interface LedgerManualTransactionFromData {
  transactionType: SelectValue;
  currencyCode: SelectValue;
  accountId: string;
  amount: string;
  description: string;
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
