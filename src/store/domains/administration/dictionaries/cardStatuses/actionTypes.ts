import { DictionaryCardStatusesData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_CARD_STATUSES = 'administration/cardStatuses/GET_DICTIONARY_CARD_STATUSES',
  GET_DICTIONARY_CARD_STATUSES_FULFILLED =
  'administration/cardStatuses/GET_DICTIONARY_CARD_STATUSES_FULFILLED',
  GET_DICTIONARY_CARD_STATUSES_REJECTED =
  'administration/cardStatuses/GET_DICTIONARY_CARD_STATUSES_REJECTED',
}

export interface GetDictionaryCardStatusesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES;
}

export interface GetDictionaryCardStatusesFulfilledAction {
  readonly payload: DictionaryCardStatusesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_FULFILLED;
}

export interface GetDictionaryCardStatusesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_REJECTED;
}

export type DictionaryCardStatusesActionTypes =
  | GetDictionaryCardStatusesFulfilledAction;
