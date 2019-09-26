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
  institutions: ImmutableArray<InstitutionItemResp>;
}
