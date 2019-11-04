import { ImmutableArray } from 'seamless-immutable';

export interface DictionaryCountriesItem {
  country_code: string;
  numeric_code: number;
  name: string;
}

export interface DictionaryCountriesItemPrepared {
  countryCode: string;
  numericCode: number;
  name: string;
}

export interface DictionaryCountriesData {
  countries: Array<DictionaryCountriesItem>;
}

export interface DictionaryCountriesState {
  countries: ImmutableArray<DictionaryCountriesItem>;
}
