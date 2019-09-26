import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

export interface DictionaryCurrenciesItem {
  currency_code: string;
  numeric_code: number;
  name: string;
}

export interface DictionaryCurrenciesItemPrepared {
  currencyCode: string;
  numericCode: number;
  name: string;
}

export interface DictionaryCurrenciesData extends ResponseStatusType {
  currencies: Array<DictionaryCurrenciesItem>;
}

export interface DictionaryCurrenciesState {
  currencies: ImmutableArray<DictionaryCurrenciesItem>;
}
