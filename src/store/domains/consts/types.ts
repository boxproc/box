import { ImmutableArray } from 'seamless-immutable';

import { KeyValuePair } from 'types';

export interface CurrencyCodesResp<T = Array<KeyValuePair>> {
  currency_options: T;
}

export interface InstitutionItem {
  id: number;
  name: string;
  status: string;
}

export interface InstitutionsDataResp {
  institutions: Array<InstitutionItem>;
}

export interface InstitutionsData {
  institutions: Array<InstitutionItem>;
}

export interface ConstsState {
  currencyCodes: ImmutableArray<KeyValuePair>;
  institutions: ImmutableArray<InstitutionItem>;
}
