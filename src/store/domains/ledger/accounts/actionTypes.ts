import { IAccountCardsData, IAccountsData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ACCOUNT_CARDS = 'ledger/accounts/GET_ACCOUNT_CARDS',
  GET_ACCOUNT_CARDS_FULFILLED = 'ledger/accounts/GET_ACCOUNT_CARDS_FULFILLED',
  GET_ACCOUNT_CARDS_REJECTED = 'ledger/accounts/GET_ACCOUNT_CARDS_REJECTED',

  ADD_ACCOUNT = 'ledger/accounts/ADD_ACCOUNT',
  ADD_ACCOUNT_FULFILLED = 'ledger/accounts/ADD_ACCOUNT_FULFILLED',
  ADD_ACCOUNT_REJECTED = 'ledger/accounts/ADD_ACCOUNT_REJECTED',

  UPDATE_ACCOUNT = 'ledger/accounts/UPDATE_ACCOUNT',
  UPDATE_ACCOUNT_FULFILLED = 'ledger/accounts/UPDATE_ACCOUNT_FULFILLED',
  UPDATE_ACCOUNT_REJECTED = 'ledger/accounts/UPDATE_ACCOUNT_REJECTED',

  ORDER_ACCOUNT_CARD = 'ledger/accounts/ORDER_ACCOUNT_CARD',
  ORDER_ACCOUNT_CARD_FULFILLED = 'ledger/accounts/ORDER_ACCOUNT_CARD_FULFILLED',
  ORDER_ACCOUNT_CARD_REJECTED = 'ledger/accounts/ORDER_ACCOUNT_CARD_REJECTED',

  FILTER_ACCOUNTS = 'ledger/accounts/FILTER_ACCOUNTS',
  FILTER_ACCOUNTS_FULFILLED = 'ledger/accounts/FILTER_ACCOUNTS_FULFILLED',
  FILTER_ACCOUNTS_REJECTED = 'ledger/accounts/FILTER_ACCOUNTS_REJECTED',

  ADD_PRODUCT_OVERRIDE = 'ledger/accounts/ADD_PRODUCT_OVERRIDE',
  ADD_PRODUCT_OVERRIDE_FULFILLED = 'ledger/accounts/ADD_PRODUCT_OVERRIDE_FULFILLED',
  ADD_PRODUCT_OVERRIDE_REJECTED = 'ledger/accounts/ADD_PRODUCT_OVERRIDE_REJECTED',

  FILTER_ACCOUNTS_BY_ID = 'ledger/accounts/FILTER_ACCOUNTS_BY_ID',
  FILTER_ACCOUNTS_BY_ID_FULFILLED = 'ledger/accounts/FILTER_ACCOUNTS_BY_ID_FULFILLED',
  FILTER_ACCOUNTS_BY_ID_REJECTED = 'ledger/accounts/FILTER_ACCOUNTS_BY_ID_REJECTED',

  RESET_ACCOUNTS = 'ledger/accounts/RESET_ACCOUNTS',
}

/** Get account cards action interfaces */

export interface IGetAccountCardsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ACCOUNT_CARDS;
}

export interface IGetAccountCardsFulfilledAction {
  readonly payload: IAccountCardsData;
  readonly type: ActionTypeKeys.GET_ACCOUNT_CARDS_FULFILLED;
}

export interface IGetAccountCardsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_ACCOUNT_CARDS_REJECTED;
}

/** Order account card action interfaces */

export interface IOrderAccountCardAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ORDER_ACCOUNT_CARD;
}

export interface IOrderAccountCardFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ORDER_ACCOUNT_CARD_FULFILLED;
}

export interface IOrderAccountCardRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ORDER_ACCOUNT_CARD_REJECTED;
}

/** Add account action interfaces */

export interface IAddAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ACCOUNT;
}

export interface IAddAccountFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_ACCOUNT_FULFILLED;
}

export interface IAddAccountRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_ACCOUNT_REJECTED;
}

/** Update account action interfaces */

export interface IUpdateAccountAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ACCOUNT;
}

export interface IUpdateAccountFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_ACCOUNT_FULFILLED;
}

export interface IUpdateAccountRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ACCOUNT_REJECTED;
}

/** Filter accounts action interfaces */

export interface IFilterAccountsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ACCOUNTS;
}

export interface IFilterAccountsFulfilledAction {
  readonly payload: IAccountsData;
  readonly type: ActionTypeKeys.FILTER_ACCOUNTS_FULFILLED;
}

export interface IFilterAccountsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_ACCOUNTS_REJECTED;
}

/** Add account override action interfaces */

export interface IAddProductOverrideAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE;
}

export interface IAddProductOverrideFulfilledAction {
  readonly payload: { id: number };
  readonly type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE_FULFILLED;
}

export interface IAddProductOverrideRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_PRODUCT_OVERRIDE_REJECTED;
}

/** Filter accounts by ID action interfaces */

export interface IFilterAccountsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ACCOUNTS_BY_ID;
}

export interface IFilterAccountsByIdFulfilledAction {
  readonly payload: IAccountsData;
  readonly type: ActionTypeKeys.FILTER_ACCOUNTS_BY_ID_FULFILLED;
}

export interface IFilterAccountsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_ACCOUNTS_BY_ID_REJECTED;
}

/** Reset accounts action interfaces */

export interface IResetAccountsAction {
  readonly type: ActionTypeKeys.RESET_ACCOUNTS;
}

export type TAccountsActionTypes =
  | IGetAccountCardsFulfilledAction
  | IOrderAccountCardFulfilledAction
  | IUpdateAccountFulfilledAction
  | IAddAccountFulfilledAction
  | IFilterAccountsFulfilledAction
  | IAddProductOverrideFulfilledAction
  | IFilterAccountsByIdFulfilledAction
  | IResetAccountsAction;
