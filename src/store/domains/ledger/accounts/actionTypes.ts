import { LedgerAccountItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_LEDGER_ACCOUNTS = 'ledger/accounts/GET_LEDGER_ACCOUNTS',
  GET_LEDGER_ACCOUNTS_FULFILLED = 'ledger/accounts/GET_LEDGER_ACCOUNTS_FULFILLED',
  GET_LEDGER_ACCOUNTS_REJECTED = 'ledger/accounts/GET_LEDGER_ACCOUNTS_REJECTED',

  GET_LEDGER_ACCOUNT_ID = 'ledger/accounts/GET_LEDGER_ACCOUNT_ID',

  UPDATE_LEDGER_ACCOUNT = 'ledger/accounts/UPDATE_LEDGER_ACCOUNTS',
  UPDATE_LEDGER_ACCOUNT_FULFILLED = 'ledger/accounts/UPDATE_LEDGER_ACCOUNTS_FULFILLED',
  UPDATE_LEDGER_ACCOUNT_REJECTED = 'ledger/accounts/UPDATE_LEDGER_ACCOUNTS_REJECTED',

  FILTER_LEDGER_ACCOUNTS = 'ledger/accounts/FILTER_LEDGER_ACCOUNTS',
  FILTER_LEDGER_ACCOUNTS_FULFILLED = 'ledger/accounts/FILTER_LEDGER_ACCOUNTS_FULFILLED',
  FILTER_LEDGER_ACCOUNTS_REJECTED = 'ledger/accounts/FILTER_LEDGER_ACCOUNTS_REJECTED',
}

// Get all accounts
export interface GetLedgerAccountsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNTS;
}

export interface GetLedgerAccountsFulfilledAction {
  readonly payload: LedgerAccountItems;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNTS_FULFILLED;
}

export interface GetLedgerAccountsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNTS_REJECTED;
}

// Set current account Id
export interface SetLedgerAccountIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_ID;
}

// Edit account
export interface UpdateLedgerAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT;
}

export interface UpdateLedgerAccountFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT_FULFILLED;
}

export interface UpdateLedgerAccountRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT_REJECTED;
}

// Filter accounts
export interface FilterLedgerAccountsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS;
}

export interface FilterLedgerAccountsFulfilledAction {
  readonly payload: LedgerAccountItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_FULFILLED;
}

export interface FilterLedgerAccountsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_REJECTED;
}

export type LedgerAccountsActionTypes =
  | GetLedgerAccountsFulfilledAction
  | UpdateLedgerAccountFulfilledAction
  | FilterLedgerAccountsFulfilledAction
  | SetLedgerAccountIdAction;
