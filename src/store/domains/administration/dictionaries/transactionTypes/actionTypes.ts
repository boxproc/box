import { DictionaryTransactionTypesData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_TRANSACTION_TYPES =
  'administration/transactionTypes/GET_DICTIONARY_TRANSACTION_TYPES',
  GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED =
  'administration/transactionTypes/GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED',
  GET_DICTIONARY_TRANSACTION_TYPES_REJECTED =
  'administration/transactionTypes/GET_DICTIONARY_TRANSACTION_TYPES_REJECTED',
}

export interface GetDictionaryTransactionTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES;
}

export interface GetDictionaryTransactionTypesFulfilledAction {
  readonly payload: DictionaryTransactionTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED;
}

export interface GetDictionaryTransactionTypesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES_REJECTED;
}

export type DictionaryTransactionTypesActionTypes =
  | GetDictionaryTransactionTypesFulfilledAction;
