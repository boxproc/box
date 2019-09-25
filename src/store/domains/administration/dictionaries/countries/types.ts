import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType } from 'types';

export interface AdminCountriesItem {
  country_code: string;
  numeric_code: number;
  name: string;
}

export interface AdminCountriesItemPrepared {
  countryCode: string;
  numericCode: number;
  name: string;
}

export interface AdminCountriesData extends ResponseStatusType {
  countries: Array<AdminCountriesItem>;
}

export interface AdminCountriesState {
  countries: ImmutableArray<AdminCountriesItem>;
}
