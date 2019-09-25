import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

export interface AdminCurrenciesItem {
  currency_code: string;
  numeric_code: number;
  name: string;
}

export interface AdminCurrenciesItemPrepared {
  currencyCode: string;
  numericCode: number;
  name: string;
}

export interface AdminCurrenciesData extends ResponseStatusType {
  currencies: Array<AdminCurrenciesItem>;
}

export interface AdminCurrenciesState {
  currencies: ImmutableArray<AdminCurrenciesItem>;
}
