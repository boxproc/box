import { ImmutableArray } from 'seamless-immutable';

export interface DictionaryCountriesItem {
  country_code: string;
  numeric_code: number;
  alpha2_code: string;
  name: string;
}

export interface DictionaryCountriesItemPrepared {
  countryCode: string;
  numericCode: string;
  alpha2Code: string;
  name: string;
}

export interface DictionaryCountriesData {
  countries: Array<DictionaryCountriesItem>;
}

export interface DictionaryCountriesState {
  countries: ImmutableArray<DictionaryCountriesItem>;
}
