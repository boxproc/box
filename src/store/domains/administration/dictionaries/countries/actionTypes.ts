import { DictionaryCountriesData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_COUNTRIES = 'administration/countries/GET_DICTIONARY_COUNTRIES',
  GET_DICTIONARY_COUNTRIES_FULFILLED =
    'administration/countries/GET_DICTIONARY_COUNTRIES_FULFILLED',
  GET_DICTIONARY_COUNTRIES_REJECTED = 'administration/countries/GET_DICTIONARY_COUNTRIES_REJECTED',
}

export interface GetDictionaryCountriesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES;
}

export interface GetDictionaryCountriesFulfilledAction {
  readonly payload: DictionaryCountriesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES_FULFILLED;
}

export interface GetDictionaryCountriesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES_REJECTED;
}

export type DictionaryCountriesActionTypes =
  | GetDictionaryCountriesFulfilledAction;
