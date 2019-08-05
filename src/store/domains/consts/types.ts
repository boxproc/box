import { ImmutableArray } from 'seamless-immutable';

import { KeyValuePair } from 'types';

export interface CurrencyCodesResp<T = Array<KeyValuePair>> {
  currency_options: T;
}

interface InstitutionItemPlain {
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
  currencyCodes: ImmutableArray<KeyValuePair>;
  institutions: ImmutableArray<InstitutionItemResp>;
}
