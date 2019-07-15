import {
  CurrencyCodesResp,
} from './types';

import { ApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_CURRENCY_CODES = 'const/GET_CURRENCY_CODES',
  GET_CURRENCY_CODES_FULFILLED = 'const/GET_CURRENCY_CODES_FULFILLED',
  GET_CURRENCY_CODES_REJECTED = 'const/GET_CURRENCY_CODES_REJECTED',
}

export interface GetCurrencyCodesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_CURRENCY_CODES;
}

export interface GetCurrencyCodesFulfilledAction {
  readonly payload: CurrencyCodesResp;
  readonly type: ActionTypeKeys.GET_CURRENCY_CODES_FULFILLED;
}

export interface GetCurrencyCodesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_CURRENCY_CODES_REJECTED;
}

export type ConstsActionTypes =
  | GetCurrencyCodesFulfilledAction;
