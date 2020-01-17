import { DictionaryAccountStatuses } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_ACCOUNT_STATUSES =
  'administration/accountStatuses/GET_DICTIONARY_ACCOUNT_STATUSES',
  GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED =
  'administration/accountStatuses/GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED',
  GET_DICTIONARY_ACCOUNT_STATUSES_REJECTED =
  'administration/accountStatuses/GET_DICTIONARY_ACCOUNT_STATUSES_REJECTED',
}

export interface GetDictionaryAccountStatusesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES;
}

export interface GetDictionaryAccountStatusesFulfilledAction {
  readonly payload: DictionaryAccountStatuses;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED;
}

export interface GetDictionaryAccountStatusesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES_REJECTED;
}

export type DictionaryAccountStatusesActionTypes =
  | GetDictionaryAccountStatusesFulfilledAction;
