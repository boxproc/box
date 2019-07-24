import {
  AdminEventDataElemsDataResp, AdminEventDataElemsFilterParamsPrepared,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_EVENT_DATA_ELEMS = 'administration/eventDataElems/GET_ADMIN_EVENT_DATA_ELEMS',
  GET_ADMIN_EVENT_DATA_ELEMS_FULFILLED =
    'administration/eventDataElems/GET_ADMIN_EVENT_DATA_ELEMS_FULFILLED',
  GET_ADMIN_EVENT_DATA_ELEMS_REJECTED =
    'administration/eventDataElems/GET_ADMIN_EVENT_DATA_ELEMS_REJECTED',

  FILTER_ADMIN_EVENT_DATA_ELEMS = 'administration/eventDataElems/FILTER_ADMIN_EVENT_DATA_ELEMS',
  FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED =
    'administration/eventDataElems/FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED',
  FILTER_ADMIN_EVENT_DATA_ELEMS_REJECTED =
    'administration/eventDataElems/FILTER_ADMIN_EVENT_DATA_ELEMS_REJECTED',
}

// Get all event data elements
export interface GetAdminEventDataElemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMS;
}

export interface GetAdminEventDataElemsFulfilledAction {
  readonly payload: AdminEventDataElemsDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMS_FULFILLED;
}

export interface GetAdminEventDataElemsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMS_REJECTED;
}

// Filter event data elements by id
export interface FilterAdminEventDataElemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS;
}

export interface FilterAdminEventDataElemsFulfilledAction {
  readonly payload: AdminEventDataElemsDataResp;
  readonly type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED;
  readonly meta: AdminEventDataElemsFilterParamsPrepared;
}

export interface FilterAdminEventDataElemsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_REJECTED;
}

export type AdminEventDataElemsActionTypes =
  | GetAdminEventDataElemsFulfilledAction
  | FilterAdminEventDataElemsFulfilledAction;
