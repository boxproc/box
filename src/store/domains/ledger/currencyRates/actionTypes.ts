import { TApiResponse } from 'types';
import { ICurrencyRatesData } from './types';

export enum ActionTypeKeys {
  FILTER_CURRENCY_RATES = 'currencyRates/FILTER_CURRENCY_RATES',
  FILTER_CURRENCY_RATES_FULFILLED = 'currencyRates/FILTER_CURRENCY_RATES_FULFILLED',
  FILTER_CURRENCY_RATES_REJECTED = 'currencyRates/FILTER_CURRENCY_RATES_REJECTED',

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

/** Reset currency rates action interfaces */

export interface IResetCarsAction {
  readonly type: ActionTypeKeys.RESET_CURRENCY_RATES;
}

export type TCurrencyRatesAction =
  | IFilterCurrencyRatesFulfilledAction
  | IResetCarsAction;
