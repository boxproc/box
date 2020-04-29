import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface ICurrencyRateData {
  id: number;
  institution_id: number;
  institution_name: string;
  provider: string;
  from_currency: string;
  from_currency_num_code: number;
  to_currency: string;
  to_currency_num_code: number;
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
  fromCurrencyNumCode: number;
  toCurrencyNumCode: number;
  spotRate: string;
  buyRate: string;
  sellRate: string;
  providerDatetime: string;
  createdDatetime: string;
}

export interface ICurrencyRate extends ICurrencyRatePlain {
  institutionId: number;
  institutionName: string;
  provider: string;
  fromCurrency: string;
  toCurrency: string;
}

export interface ICurrencyRateEditable extends ICurrencyRatePlain {
  institutionId: ISelectValue;
  provider: ISelectValue;
  fromCurrency: ISelectValue;
  toCurrency: ISelectValue;
}

/** Currency rates filter interfaces */

export interface ICurrencyRatesFilter {
  institutionId: ISelectValue;
  provider: ISelectValue;
  providerDateFrom: string;
  providerDateTo: string;
  createdDateFrom: string;
  createdDateTo: string;
  fromCurrency: ISelectValue;
  toCurrency: ISelectValue;
}

export interface ICurrencyRatesFilterToSend {
  institution_id: number | string;
  provider: number | string;
  provider_date_from: string;
  provider_date_to: string;
  created_date_from: string;
  created_date_to: string;
  from_currency: number | string;
  to_currency: number | string;
}

/** Currency rates state interface */
export interface ICurrencyRatesState {
  currencyRates: ImmutableArray<ICurrencyRateData>;
}
