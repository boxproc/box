import { DictionaryEventsData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_EVENTS = 'administration/events/GET_DICTIONARY_EVENTS',
  GET_DICTIONARY_EVENTS_FULFILLED = 'administration/events/GET_DICTIONARY_EVENTS_FULFILLED',
  GET_DICTIONARY_EVENTS_REJECTED = 'administration/events/GET_DICTIONARY_EVENTS_REJECTED',
}

export interface GetDictionaryEventsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_EVENTS;
}

export interface GetDictionaryEventsFulfilledAction {
  readonly payload: DictionaryEventsData;
  readonly type: ActionTypeKeys.GET_DICTIONARY_EVENTS_FULFILLED;
}

export interface GetDictionaryEventsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_EVENTS_REJECTED;
}

export type DictionaryEventsActionTypes =
  | GetDictionaryEventsFulfilledAction;
