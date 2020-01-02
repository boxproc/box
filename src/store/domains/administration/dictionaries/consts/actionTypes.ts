import {
  DictionaryCardStatusesData,
  DictionaryEndpointTypesData,
  DictionaryInterfaceTypesData,
  DictionaryStatementCycleTypesData,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_CARD_STATUSES = 'administration/consts/GET_DICTIONARY_CARD_STATUSES',
  GET_DICTIONARY_CARD_STATUSES_FULFILLED =
  'administration/consts/GET_DICTIONARY_CARD_STATUSES_FULFILLED',
  GET_DICTIONARY_CARD_STATUSES_REJECTED =
  'administration/consts/GET_DICTIONARY_CARD_STATUSES_REJECTED',

  GET_DICTIONARY_ENDPOINT_TYPES = 'administration/consts/GET_DICTIONARY_ENDPOINT_TYPES',
  GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED =
  'administration/consts/GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED',
  GET_DICTIONARY_ENDPOINT_TYPES_REJECTED =
  'administration/consts/GET_DICTIONARY_ENDPOINT_TYPES_REJECTED',

  GET_DICTIONARY_INTERFACE_TYPES = 'administration/consts/GET_DICTIONARY_INTERFACE_TYPES',
  GET_DICTIONARY_INTERFACE_TYPES_FULFILLED =
  'administration/consts/GET_DICTIONARY_INTERFACE_TYPES_FULFILLED',
  GET_DICTIONARY_INTERFACE_TYPES_REJECTED =
  'administration/consts/GET_DICTIONARY_INTERFACE_TYPES_REJECTED',

  GET_DICTIONARY_STATEMENT_CYCLE_TYPES =
  'administration/consts/GET_DICTIONARY_STATEMENT_CYCLE_TYPES',
  GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED =
  'administration/consts/GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED',
  GET_DICTIONARY_STATEMENT_CYCLE_TYPES_REJECTED =
  'administration/consts/GET_DICTIONARY_STATEMENT_CYCLE_TYPES_REJECTED',
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

export interface GetDictionaryEndpointTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES;
}

export interface GetDictionaryEndpointTypesFulfilledAction {
  readonly payload: DictionaryEndpointTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED;
}

export interface GetDictionaryEndpointTypesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES_REJECTED;
}

export interface GetDictionaryInterfaceTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES;
}

export interface GetDictionaryInterfaceTypesFulfilledAction {
  readonly payload: DictionaryInterfaceTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES_FULFILLED;
}

export interface GetDictionaryInterfaceTypesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES_REJECTED;
}

export interface GetDictionaryStatementCycleTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES;
}

export interface GetDictionaryStatementCycleTypesFulfilledAction {
  readonly payload: DictionaryStatementCycleTypesData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED;
}

export interface GetDictionaryStatementCycleTypesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES_REJECTED;
}

export type DictionaryConstsActionTypes =
  | GetDictionaryCardStatusesFulfilledAction
  | GetDictionaryEndpointTypesFulfilledAction
  | GetDictionaryInterfaceTypesFulfilledAction
  | GetDictionaryStatementCycleTypesFulfilledAction;
