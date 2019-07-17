import { ImmutableArray } from 'seamless-immutable';

import { KeyValuePair } from 'types';

export interface CurrencyCodesResp<T = Array<KeyValuePair>> {
  currency_options: T;
}

export interface InstitutionItemResp {
  id: number;
  institution_name: string;
  status: string;
}

export interface InstitutionItem {
  id: number;
  institutionName: string;
  status: string;
}

export interface InstitutionItemWithStatusLabel extends InstitutionItem {
  statusLabel: string;
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
