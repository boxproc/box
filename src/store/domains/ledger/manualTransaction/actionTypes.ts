import { LedgerManualTransactionResultResponse } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  MAKE_LEDGER_TRANSACTION = 'ledger/manualTransaction/MAKE_LEDGER_TRANSACTION',
  MAKE_LEDGER_TRANSACTION_FULFILLED =
  'ledger/manualTransaction/MAKE_LEDGER_TRANSACTION_FULFILLED',
  MAKE_LEDGER_TRANSACTION_REJECTED =
  'ledger/manualTransaction/MAKE_LEDGER_TRANSACTION_REJECTED',
}

export interface MakeLedgerTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.MAKE_LEDGER_TRANSACTION;
}

export interface MakeLedgerTransactionFulfilledAction {
  readonly payload: LedgerManualTransactionResultResponse;
  readonly type: ActionTypeKeys.MAKE_LEDGER_TRANSACTION_FULFILLED;
}

export interface MakeLedgerTransactionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.MAKE_LEDGER_TRANSACTION_REJECTED;
}

export type LedgerManualTransactionActionTypes =
  | MakeLedgerTransactionFulfilledAction;
