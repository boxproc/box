import { ImmutableArray } from 'seamless-immutable';

export interface CurrencyItem {
  currency_code: string;
  name: string;
  number_digits_after_dec_point: number;
  numeric_code: number;
}

export interface CurrencyCodes {
  currencies: Array<CurrencyItem>;
}

export interface CountryItem {
  name: string;
  country_code: string;
  numeric_code: number;
}

export interface CountryCodes {
  countries: Array<CountryItem>;
}

export interface InstitutionItemPlain {
  id: number;
  status: string;
}

export interface InstitutionItemResp extends InstitutionItemPlain {
  institution_name: string;
}

export interface InstitutionItem {
  id: number;
  institutionName: string;
}

export interface InstitutionsDataResp {
  institutions: Array<InstitutionItemResp>;
}

export interface InstitutionsData {
  institutions: Array<InstitutionItem>;
}

export interface ConstsState {
  currencies: ImmutableArray<CurrencyItem>;
  countries: ImmutableArray<CountryItem>;
  institutions: ImmutableArray<InstitutionItemResp>;
  activeTableRowIndex: number;
}
