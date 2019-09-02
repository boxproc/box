import {
  CountryCodes,
  CurrencyCodes,
  InstitutionsDataResp,
} from './types';

import { ApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_CURRENCY_CODES = 'const/GET_CURRENCY_CODES',
  GET_CURRENCY_CODES_FULFILLED = 'const/GET_CURRENCY_CODES_FULFILLED',
  GET_CURRENCY_CODES_REJECTED = 'const/GET_CURRENCY_CODES_REJECTED',

  GET_COUNTRY_CODES = 'const/GET_COUNTRY_CODES',
  GET_COUNTRY_CODES_FULFILLED = 'const/GET_COUNTRY_CODES_FULFILLED',
  GET_COUNTRY_CODES_REJECTED = 'const/GET_COUNTRY_CODES_REJECTED',

  GET_INSTITUTIONS = 'const/GET_INSTITUTIONS',
  GET_INSTITUTIONS_FULFILLED = 'const/GET_INSTITUTIONS_FULFILLED',
  GET_INSTITUTIONS_REJECTED = 'const/GET_INSTITUTIONS_REJECTED',

  SET_ACTIVE_TABLE_ROW_INDEX = 'const/SET_ACTIVE_TABLE_ROW_INDEX',
}

export interface GetCurrencyCodesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_CURRENCY_CODES;
}

export interface GetCurrencyCodesFulfilledAction {
  readonly payload: CurrencyCodes;
  readonly type: ActionTypeKeys.GET_CURRENCY_CODES_FULFILLED;
}

export interface GetCurrencyCodesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_CURRENCY_CODES_REJECTED;
}

export interface GetCountryCodesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_COUNTRY_CODES;
}

export interface GetCountryCodesFulfilledAction {
  readonly payload: CountryCodes;
  readonly type: ActionTypeKeys.GET_COUNTRY_CODES_FULFILLED;
}

export interface GetCountryCodesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_COUNTRY_CODES_REJECTED;
}

export interface GetInstitutionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS;
}

export interface GetInstitutionsFulfilledAction {
  readonly payload: InstitutionsDataResp;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS_FULFILLED;
}

export interface GetInstitutionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS_REJECTED;
}

export interface SetActiveTableRowIndexAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX;
}

export type ConstsActionTypes =
  | GetCurrencyCodesFulfilledAction
  | GetInstitutionsFulfilledAction
  | GetCountryCodesFulfilledAction
  | SetActiveTableRowIndexAction;
