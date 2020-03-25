import { LedgerAccountCardsItems, LedgerAccountItems } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_LEDGER_ACCOUNT_CARDS = 'ledger/accounts/GET_LEDGER_ACCOUNT_CARDS',
  GET_LEDGER_ACCOUNT_CARDS_FULFILLED = 'ledger/accounts/GET_LEDGER_ACCOUNT_CARDS_FULFILLED',
  GET_LEDGER_ACCOUNT_CARDS_REJECTED = 'ledger/accounts/GET_LEDGER_ACCOUNT_CARDS_REJECTED',

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

  ADD_PRODUCT_OVERRIDE = 'ledger/accounts/ADD_PRODUCT_OVERRIDE',
  ADD_PRODUCT_OVERRIDE_FULFILLED = 'ledger/accounts/ADD_PRODUCT_OVERRIDE_FULFILLED',
  ADD_PRODUCT_OVERRIDE_REJECTED = 'ledger/accounts/ADD_PRODUCT_OVERRIDE_REJECTED',

  FILTER_LEDGER_ACCOUNTS_BY_ID = 'ledger/accounts/FILTER_LEDGER_ACCOUNTS_BY_ID',
  FILTER_LEDGER_ACCOUNTS_BY_ID_FULFILLED = 'ledger/accounts/FILTER_LEDGER_ACCOUNTS_BY_ID_FULFILLED',
  FILTER_LEDGER_ACCOUNTS_BY_ID_REJECTED = 'ledger/accounts/FILTER_LEDGER_ACCOUNTS_BY_ID_REJECTED',

  RESET_ACCOUNTS = 'ledger/accounts/RESET_ACCOUNTS',
}

export interface GetLedgerAccountCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS;
}

export interface GetLedgerAccountCardsFulfilledAction {
  readonly payload: LedgerAccountCardsItems;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS_FULFILLED;
}

export interface GetLedgerAccountCardsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_LEDGER_ACCOUNT_CARDS_REJECTED;
}

export interface OrderLedgerAccountCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD;
}

export interface OrderLedgerAccountCardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD_FULFILLED;
}

export interface OrderLedgerAccountCardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ORDER_LEDGER_ACCOUNT_CARD_REJECTED;
}

export interface AddLedgerAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_LEDGER_ACCOUNT;
}

export interface AddLedgerAccountFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_LEDGER_ACCOUNT_FULFILLED;
}

export interface AddLedgerAccountRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_LEDGER_ACCOUNT_REJECTED;
}

export interface UpdateLedgerAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT;
}

export interface UpdateLedgerAccountFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT_FULFILLED;
}

export interface UpdateLedgerAccountRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_LEDGER_ACCOUNT_REJECTED;
}

export interface FilterLedgerAccountsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS;
}

export interface FilterLedgerAccountsFulfilledAction {
  readonly payload: LedgerAccountItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_FULFILLED;
}

export interface FilterLedgerAccountsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_REJECTED;
}

export interface AddProductOverrideAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE;
}

export interface AddProductOverrideFulfilledAction {
  readonly payload: { id: number };
  readonly type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE_FULFILLED;
}

export interface AddProductOverrideRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE_REJECTED;
}
export interface FilterLedgerAccountsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_BY_ID;
}

export interface FilterLedgerAccountsByIdFulfilledAction {
  readonly payload: LedgerAccountItems;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_BY_ID_FULFILLED;
}

export interface FilterLedgerAccountsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_LEDGER_ACCOUNTS_BY_ID_REJECTED;
}

export interface ResetAccountsAction {
  readonly type: ActionTypeKeys.RESET_ACCOUNTS;
}

export type LedgerAccountsActionTypes =
  | GetLedgerAccountCardsFulfilledAction
  | OrderLedgerAccountCardFulfilledAction
  | UpdateLedgerAccountFulfilledAction
  | AddLedgerAccountFulfilledAction
  | FilterLedgerAccountsFulfilledAction
  | AddProductOverrideFulfilledAction
  | FilterLedgerAccountsByIdFulfilledAction
  | ResetAccountsAction;
