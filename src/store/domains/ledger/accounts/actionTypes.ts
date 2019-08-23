import { LedgerAccountCardsItems, LedgerAccountItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_LEDGER_ACCOUNTS = 'ledger/accounts/GET_LEDGER_ACCOUNTS',
  GET_LEDGER_ACCOUNTS_FULFILLED = 'ledger/accounts/GET_LEDGER_ACCOUNTS_FULFILLED',
  GET_LEDGER_ACCOUNTS_REJECTED = 'ledger/accounts/GET_LEDGER_ACCOUNTS_REJECTED',

  GET_LEDGER_ACCOUNT_CARDS = 'ledger/accounts/GET_LEDGER_ACCOUNT_CARDS',
  GET_LEDGER_ACCOUNT_CARDS_FULFILLED = 'ledger/accounts/GET_LEDGER_ACCOUNT_CARDS_FULFILLED',
  GET_LEDGER_ACCOUNT_CARDS_REJECTED = 'ledger/accounts/GET_LEDGER_ACCOUNT_CARDS_REJECTED',

  SET_LEDGER_ACCOUNT_ID = 'ledger/accounts/SET_LEDGER_ACCOUNT_ID',

  ADD_LEDGER_ACCOUNT = 'ledger/accounts/ADD_LEDGER_ACCOUNT',
  ADD_LEDGER_ACCOUNT_FULFILLED = 'ledger/accounts/ADD_LEDGER_ACCOUNT_FULFILLED',
  ADD_LEDGER_ACCOUNT_REJECTED = 'ledger/accounts/ADD_LEDGER_ACCOUNT_REJECTED',

  UPDATE_LEDGER_ACCOUNT = 'ledger/accounts/UPDATE_LEDGER_ACCOUNT',
  UPDATE_LEDGER_ACCOUNT_FULFILLED = 'ledger/accounts/UPDATE_LEDGER_ACCOUNT_FULFILLED',
  UPDATE_LEDGER_ACCOUNT_REJECTED = 'ledger/accounts/UPDATE_LEDGER_ACCOUNT_REJECTED',

  ORDER_LEDGER_ACCOUNT_CARD = 'ledger/accounts/ORDER_LEDGER_ACCOUNT_CARD',
  ORDER_LEDGER_ACCOUNT_CARD_FULFILLED = 'ledger/accounts/ORDER_LEDGER_ACCOUNT_CARD_FULFILLED',
  ORDER_LEDGER_ACCOUNT_CARD_REJECTED = 'ledger/accounts/ORDER_LEDGER_ACCOUNT_CARD_REJECTED',

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
// Get all cards
export interface GetLedgerAccountCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS;
}

export interface GetLedgerAccountCardsFulfilledAction {
  readonly payload: LedgerAccountCardsItems;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS_FULFILLED;
}

export interface GetLedgerAccountCardsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS_REJECTED;
}

// Order card
export interface OrderLedgerAccountCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD;
}

export interface OrderLedgerAccountCardFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD_FULFILLED;
}

export interface OrderLedgerAccountCardRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD_REJECTED;
}

// Set current account Id
export interface SetLedgerAccountIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_LEDGER_ACCOUNT_ID;
}

// Add new account
export interface AddLedgerAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_LEDGER_ACCOUNT;
}

export interface AddLedgerAccountFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_LEDGER_ACCOUNT_FULFILLED;
}

export interface AddLedgerAccountRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_LEDGER_ACCOUNT_REJECTED;
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
  | GetLedgerAccountCardsFulfilledAction
  | OrderLedgerAccountCardFulfilledAction
  | UpdateLedgerAccountFulfilledAction
  | AddLedgerAccountFulfilledAction
  | FilterLedgerAccountsFulfilledAction
  | SetLedgerAccountIdAction;
