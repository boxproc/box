import { ImmutableArray } from 'seamless-immutable';

export interface CurrencyItem {
  currency_code: string;
  name: string;
  number_digits_after_dec_point: number;
  numeric_code: number;
}

export interface InstitutionItemPlain {
  id: number;
  status: string;
}

export interface InstitutionItemResp extends InstitutionItemPlain {
  institution_name: string;
  master_institution_flag: string;
}

export interface InstitutionItem {
  id: number;
  institutionName: string;
  masterInstitutionFlag: boolean;
}

export interface InstitutionsDataResp {
  institutions: Array<InstitutionItemResp>;
}

export interface InstitutionsData {
  institutions: Array<InstitutionItem>;
}

export interface InstitutionsState {
  institutions: ImmutableArray<InstitutionItemResp>;
}
