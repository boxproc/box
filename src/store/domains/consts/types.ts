import { ImmutableArray } from 'seamless-immutable';

import { KeyValuePair } from 'types';

export interface CurrencyCodesResp<T = Array<KeyValuePair>> {
  currency_options: T;
}

export interface ConstsState {
  currencyCodes: ImmutableArray<KeyValuePair>;
}
