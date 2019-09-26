import { DictionaryEventDataElemsDataResp } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_ADMIN_EVENT_DATA_ELEMS = 'administration/eventDataElems/FILTER_ADMIN_EVENT_DATA_ELEMS',
  FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED =
  'administration/eventDataElems/FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED',
  FILTER_ADMIN_EVENT_DATA_ELEMS_REJECTED =
  'administration/eventDataElems/FILTER_ADMIN_EVENT_DATA_ELEMS_REJECTED',
}

export interface FilterDictionaryEventDataElemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS;
}

export interface FilterDictionaryEventDataElemsFulfilledAction {
  readonly payload: DictionaryEventDataElemsDataResp;
  readonly type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED;
}

export interface FilterDictionaryEventDataElemsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_REJECTED;
}

export type DictionaryEventDataElemsActionTypes =
  | FilterDictionaryEventDataElemsFulfilledAction;
