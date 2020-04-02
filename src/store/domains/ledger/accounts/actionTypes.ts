import { IAccountCardsData, IAccountsData } from './types';
import { ILimitAdjustmentResultResponse } from './typesLimitAdj';
import { IManualTransactionResultResponse } from './typesManualTr';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ACCOUNT_CARDS = 'accounts/GET_ACCOUNT_CARDS',
  GET_ACCOUNT_CARDS_FULFILLED = 'accounts/GET_ACCOUNT_CARDS_FULFILLED',
  GET_ACCOUNT_CARDS_REJECTED = 'accounts/GET_ACCOUNT_CARDS_REJECTED',

  ADD_ACCOUNT = 'accounts/ADD_ACCOUNT',
  ADD_ACCOUNT_FULFILLED = 'accounts/ADD_ACCOUNT_FULFILLED',
  ADD_ACCOUNT_REJECTED = 'accounts/ADD_ACCOUNT_REJECTED',

  UPDATE_ACCOUNT = 'accounts/UPDATE_ACCOUNT',
  UPDATE_ACCOUNT_FULFILLED = 'accounts/UPDATE_ACCOUNT_FULFILLED',
  UPDATE_ACCOUNT_REJECTED = 'accounts/UPDATE_ACCOUNT_REJECTED',

  ORDER_ACCOUNT_CARD = 'accounts/ORDER_ACCOUNT_CARD',
  ORDER_ACCOUNT_CARD_FULFILLED = 'accounts/ORDER_ACCOUNT_CARD_FULFILLED',
  ORDER_ACCOUNT_CARD_REJECTED = 'accounts/ORDER_ACCOUNT_CARD_REJECTED',

  FILTER_ACCOUNTS = 'accounts/FILTER_ACCOUNTS',
  FILTER_ACCOUNTS_FULFILLED = 'accounts/FILTER_ACCOUNTS_FULFILLED',
  FILTER_ACCOUNTS_REJECTED = 'accounts/FILTER_ACCOUNTS_REJECTED',

  ADD_PRODUCT_OVERRIDE = 'accounts/ADD_PRODUCT_OVERRIDE',
  ADD_PRODUCT_OVERRIDE_FULFILLED = 'accounts/ADD_PRODUCT_OVERRIDE_FULFILLED',
  ADD_PRODUCT_OVERRIDE_REJECTED = 'accounts/ADD_PRODUCT_OVERRIDE_REJECTED',

  FILTER_ACCOUNTS_BY_ID = 'accounts/FILTER_ACCOUNTS_BY_ID',
  FILTER_ACCOUNTS_BY_ID_FULFILLED = 'accounts/FILTER_ACCOUNTS_BY_ID_FULFILLED',
  FILTER_ACCOUNTS_BY_ID_REJECTED = 'accounts/FILTER_ACCOUNTS_BY_ID_REJECTED',

  RESET_ACCOUNTS = 'accounts/RESET_ACCOUNTS',

  MAKE_TRANSACTION = 'manualTransaction/MAKE_TRANSACTION',
  MAKE_TRANSACTION_FULFILLED = 'manualTransaction/MAKE_TRANSACTION_FULFILLED',
  MAKE_TRANSACTION_REJECTED = 'manualTransaction/MAKE_TRANSACTION_REJECTED',

  LIMIT_ADJUSTMENT = 'limitAdjustment/LIMIT_ADJUSTMENT',
  LIMIT_ADJUSTMENT_FULFILLED = 'limitAdjustment/LIMIT_ADJUSTMENT_FULFILLED',
  LIMIT_ADJUSTMENT_REJECTED = 'limitAdjustment/LIMIT_ADJUSTMENT_REJECTED',
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

/**
 * Make manual transaction action interfaces
 */

export interface IMakeTransactionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.MAKE_TRANSACTION;
}

export interface IMakeTransactionFulfilledAction {
  readonly payload: IManualTransactionResultResponse;
  readonly type: ActionTypeKeys.MAKE_TRANSACTION_FULFILLED;
  readonly meta: { accId: number };
}

export interface IMakeTransactionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.MAKE_TRANSACTION_REJECTED;
}

/** Limit adjustment action interfaces */

export interface IMakeLimitAdjustmentAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.LIMIT_ADJUSTMENT;
}

export interface IMakeLimitAdjustmentFulfilledAction {
  readonly payload: ILimitAdjustmentResultResponse;
  readonly type: ActionTypeKeys.LIMIT_ADJUSTMENT_FULFILLED;
  readonly meta: { accId: number };
}

export interface IMakeLimitAdjustmentRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.LIMIT_ADJUSTMENT_REJECTED;
}

export type TAccountsAction =
  | IGetAccountCardsFulfilledAction
  | IOrderAccountCardFulfilledAction
  | IUpdateAccountFulfilledAction
  | IAddAccountFulfilledAction
  | IFilterAccountsFulfilledAction
  | IAddProductOverrideFulfilledAction
  | IFilterAccountsByIdFulfilledAction
  | IResetAccountsAction
  | IMakeTransactionFulfilledAction
  | IMakeLimitAdjustmentFulfilledAction;
