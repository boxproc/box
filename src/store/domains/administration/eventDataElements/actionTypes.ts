import {
  AdminEventDataElementsDataResp,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_EVENT_DATA_ELEMENTS =
    'administration/eventDataElements/GET_ADMIN_EVENT_DATA_ELEMENTS',
  GET_ADMIN_EVENT_DATA_ELEMENTS_FULFILLED =
    'administration/eventDataElements/GET_ADMIN_EVENT_DATA_ELEMENTS_FULFILLED',
  GET_ADMIN_EVENT_DATA_ELEMENTS_REJECTED =
    'administration/eventDataElements/GET_ADMIN_EVENT_DATA_ELEMENTS_REJECTED',
}

// Get all event data elements
export interface GetAdminEventDataElementsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMENTS;
}

export interface GetAdminEventDataElementsFulfilledAction {
  readonly payload: AdminEventDataElementsDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMENTS_FULFILLED;
}

export interface GetAdminEventDataElementsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMENTS_REJECTED;
}

export type AdminEventDataElementsActionTypes =
  | GetAdminEventDataElementsFulfilledAction;
