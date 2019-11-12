import { ImmutableArray } from 'seamless-immutable';

export interface DictionaryCurrenciesItem {
  currency_code: string;
  numeric_code: number;
  name: string;
}

export interface DictionaryCurrenciesItemPrepared {
  currencyCode: string;
  numericCode: string;
  name: string;
}

export interface DictionaryCurrenciesData {
  currencies: Array<DictionaryCurrenciesItem>;
}

export interface DictionaryCurrenciesState {
  currencies: ImmutableArray<DictionaryCurrenciesItem>;
}
