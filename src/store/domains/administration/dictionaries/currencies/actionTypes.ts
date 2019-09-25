import { AdminCurrenciesData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_CURRENCIES = 'administration/currencies/GET_ADMIN_CURRENCIES',
  GET_ADMIN_CURRENCIES_FULFILLED = 'administration/currencies/GET_ADMIN_CURRENCIES_FULFILLED',
  GET_ADMIN_CURRENCIES_REJECTED = 'administration/currencies/GET_ADMIN_CURRENCIES_REJECTED',
}

export interface GetAdminCurrenciesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_CURRENCIES;
}

export interface GetAdminCurrenciesFulfilledAction {
  readonly payload: AdminCurrenciesData;
  readonly type: ActionTypeKeys.GET_ADMIN_CURRENCIES_FULFILLED;
}

export interface GetAdminCurrenciesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_CURRENCIES_REJECTED;
}

export type AdminCurrenciesActionTypes =
  | GetAdminCurrenciesFulfilledAction;
