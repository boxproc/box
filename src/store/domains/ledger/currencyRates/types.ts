import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface ICurrencyRateData {
  id: number;
  institution_id: number | string;
  institution_name: string;
  rate_provider: number | string;
  source_currency: number | string;
  target_currency: number | string;
  spot_rate: number;
  buy_rate: number;
  sell_rate: number;
  provider_datetime: string;
  created_datetime: string;
}

export interface ICurrencyRatesData {
  currency_rates: Array<ICurrencyRateData>;
}

interface ICurrencyRatePlain {
  id: number;
  spotRate: string;
  buyRate: string;
  sellRate: string;
  providerDatetime: string;
  createdDatetime: string;
}

export interface ICurrencyRate extends ICurrencyRatePlain {
  institutionId: number | string;
  institutionName: string;
  rateProvider: number | string;
  fromCurrency: number | string;
  toCurrency: number | string;
}

export interface ICurrencyRateEditable extends ICurrencyRatePlain {
  institutionId: ISelectValue;
  rateProvider: ISelectValue;
  fromCurrency: ISelectValue;
  toCurrency: ISelectValue;
}

/** Currency rates filter interfaces */

export interface ICurrencyRatesFilter {
  institutionId: ISelectValue;
  rateProvider: ISelectValue;
  providerDateFrom: string;
  providerDateTo: string;
  createdDateFrom: string;
  createdDateTo: string;
  fromCurrency: ISelectValue;
  toCurrency: ISelectValue;
}

export interface ICurrencyRatesFilterToSend {
  institution_id: number | string;
  rateProvider: number | string;
  provider_date_from: string;
  provider_date_to: string;
  created_date_from: string;
  created_date_to: string;
  source_currency: number | string;
  target_currency: number | string;
}

/** Currency rates state interface */
export interface ICurrencyRatesState {
  currencyRates: ImmutableArray<ICurrencyRateData>;
}
