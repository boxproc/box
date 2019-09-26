import { DictionaryCurrenciesData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_CURRENCIES = 'administration/currencies/GET_DICTIONARY_CURRENCIES',
  GET_DICTIONARY_CURRENCIES_FULFILLED =
    'administration/currencies/GET_DICTIONARY_CURRENCIES_FULFILLED',
  GET_DICTIONARY_CURRENCIES_REJECTED =
    'administration/currencies/GET_DICTIONARY_CURRENCIES_REJECTED',
}

export interface GetDictionaryCurrenciesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES;
}

export interface GetDictionaryCurrenciesFulfilledAction {
  readonly payload: DictionaryCurrenciesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES_FULFILLED;
}

export interface GetDictionaryCurrenciesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES_REJECTED;
}

export type DictionaryCurrenciesActionTypes =
  | GetDictionaryCurrenciesFulfilledAction;
