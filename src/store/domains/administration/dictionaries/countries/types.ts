import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

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

export interface DictionaryCountriesData extends ResponseStatusType {
  countries: Array<DictionaryCountriesItem>;
}

export interface DictionaryCountriesState {
  countries: ImmutableArray<DictionaryCountriesItem>;
}
