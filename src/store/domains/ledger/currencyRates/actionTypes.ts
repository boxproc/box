import { ICurrencyRatesData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_CURRENCY_RATES = 'currencyRates/FILTER_CURRENCY_RATES',
  FILTER_CURRENCY_RATES_FULFILLED = 'currencyRates/FILTER_CURRENCY_RATES_FULFILLED',
  FILTER_CURRENCY_RATES_REJECTED = 'currencyRates/FILTER_CURRENCY_RATES_REJECTED',

  ADD_CURRENCY_RATE = 'currencyRates/ADD_CURRENCY_RATE',
  ADD_CURRENCY_RATE_FULFILLED = 'currencyRates/ADD_CURRENCY_RATE_FULFILLED',
  ADD_CURRENCY_RATE_REJECTED = 'currencyRates/ADD_CURRENCY_RATE_REJECTED',

  RESET_CURRENCY_RATES = 'currencyRates/RESET_CURRENCY_RATES',
}

/** Filter currency rates action interfaces */

export interface IFilterCurrencyRatesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_CURRENCY_RATES;
}

export interface IFilterCurrencyRatesFulfilledAction {
  readonly payload: ICurrencyRatesData;
  readonly type: ActionTypeKeys.FILTER_CURRENCY_RATES_FULFILLED;
}

export interface IFilterCurrencyRatesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_CURRENCY_RATES_REJECTED;
}

/** Add currency rate action interface */

export interface IAddCurrencyRateAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_CURRENCY_RATE;
}

export interface IAddCurrencyRateFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_CURRENCY_RATE_FULFILLED;
}

export interface IAddCurrencyRateRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_CURRENCY_RATE_REJECTED;
}

/** Reset currency rates action interfaces */

export interface IResetCarsAction {
  readonly type: ActionTypeKeys.RESET_CURRENCY_RATES;
}

export type TCurrencyRatesAction =
  | IFilterCurrencyRatesFulfilledAction
  | IAddCurrencyRateFulfilledAction
  | IResetCarsAction;
