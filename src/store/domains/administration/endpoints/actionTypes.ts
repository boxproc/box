import { AdminEndpointItems, AdminEndpointNameItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  ADD_ADMIN_ENDPOINT = 'administration/endpoints/ADD_ADMIN_ENDPOINT',
  ADD_ADMIN_ENDPOINT_FULFILLED = 'administration/endpoints/ADD_ADMIN_ENDPOINT_FULFILLED',
  ADD_ADMIN_ENDPOINT_REJECTED = 'administration/endpoints/ADD_ADMIN_ENDPOINT_REJECTED',

  DELETE_ADMIN_ENDPOINT = 'administration/endpoints/DELETE_ADMIN_ENDPOINT',
  DELETE_ADMIN_ENDPOINT_FULFILLED = 'administration/endpoints/DELETE_ADMIN_ENDPOINT_FULFILLED',
  DELETE_ADMIN_ENDPOINT_REJECTED = 'administration/endpoints/DELETE_ADMIN_ENDPOINT_REJECTED',

  UPDATE_ADMIN_ENDPOINT = 'administration/endpoints/UPDATE_ADMIN_ENDPOINT',
  UPDATE_ADMIN_ENDPOINT_FULFILLED = 'administration/endpoints/UPDATE_ADMIN_ENDPOINT_FULFILLED',
  UPDATE_ADMIN_ENDPOINT_REJECTED = 'administration/endpoints/UPDATE_ADMIN_ENDPOINT_REJECTED',

  FILTER_ADMIN_ENDPOINTS = 'administration/endpoints/FILTER_ADMIN_ENDPOINTS',
  FILTER_ADMIN_ENDPOINTS_FULFILLED = 'administration/endpoints/FILTER_ADMIN_ENDPOINTS_FULFILLED',
  FILTER_ADMIN_ENDPOINTS_REJECTED = 'administration/endpoints/FILTER_ADMIN_ENDPOINTS_REJECTED',

  GET_ENDPOINTS_BY_INSTITUTION_ID = 'administration/endpoints/GET_ENDPOINTS_BY_INSTITUTION_ID',
  GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED =
  'administration/endpoints/GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED',
  GET_ENDPOINTS_BY_INSTITUTION_ID_REJECTED =
  'administration/endpoints/GET_ENDPOINTS_BY_INSTITUTION_ID_REJECTED',

  RESET_ENDPOINTS = 'administration/endpoints/RESET_ENDPOINTS',
}

export interface AddAdminEndpointAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_ENDPOINT;
}

export interface AddAdminEndpointFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_ENDPOINT_FULFILLED;
}

export interface AddAdminEndpointRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_ENDPOINT_REJECTED;
}

export interface DeleteAdminEndpointAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_ENDPOINT;
}

export interface DeleteAdminEndpointFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_ENDPOINT_FULFILLED;
  meta: { id: number };
}

export interface DeleteAdminEndpointRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_ENDPOINT_REJECTED;
}

export interface UpdateAdminEndpointAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_ENDPOINT;
}

export interface UpdateAdminEndpointFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_ENDPOINT_FULFILLED;
}

export interface UpdateAdminEndpointRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_ENDPOINT_REJECTED;
}

export interface FilterAdminEndpointsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_ENDPOINTS;
}

export interface FilterAdminEndpointsFulfilledAction {
  readonly payload: AdminEndpointItems;
  readonly type: ActionTypeKeys.FILTER_ADMIN_ENDPOINTS_FULFILLED;
}

export interface FilterAdminEndpointsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_ENDPOINTS_REJECTED;
}
export interface GetEndpointsByInstitutionIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID;
}

export interface GetEndpointsByInstitutionIdFulfilledAction {
  readonly payload: AdminEndpointNameItems;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID_FULFILLED;
}

export interface GetEndpointsByInstitutionIdRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID_REJECTED;
}

export interface ResetEndpointsAction {
  readonly type: ActionTypeKeys.RESET_ENDPOINTS;
}

export type AdminEndpointActionTypes =
  | AddAdminEndpointFulfilledAction
  | DeleteAdminEndpointFulfilledAction
  | FilterAdminEndpointsFulfilledAction
  | UpdateAdminEndpointFulfilledAction
  | GetEndpointsByInstitutionIdFulfilledAction
  | ResetEndpointsAction;
