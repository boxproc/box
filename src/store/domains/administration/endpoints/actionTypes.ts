import { ApiResponse, ResponseStatusType } from 'types';
import { AdminEndpointItems } from './types';

export enum ActionTypeKeys {
    GET_ADMIN_ENDPOINT = 'administration/endpoints/GET_ADMIN_ENDPOINT',
    GET_ADMIN_ENDPOINT_FULFILLED =
    'administration/endpoints/GET_ADMIN_ENDPOINT_FULFILLED',
    GET_ADMIN_ENDPOINT_REJECTED = 'administration/endpoints/GET_ADMIN_ENDPOINT_REJECTED',

    ADD_ADMIN_ENDPOINT = 'administration/endpoints/ADD_ADMIN_ENDPOINT',
    ADD_ADMIN_ENDPOINT_FULFILLED =
    'administration/endpoints/ADD_ADMIN_ENDPOINT_FULFILLED',
    ADD_ADMIN_ENDPOINT_REJECTED =
    'administration/endpoints/ADD_ADMIN_ENDPOINT_REJECTED',

    DELETE_ADMIN_ENDPOINT = 'administration/endpoints/DELETE_ADMIN_ENDPOINT',
    DELETE_ADMIN_ENDPOINT_FULFILLED =
    'administration/endpoints/DELETE_ADMIN_ENDPOINT_FULFILLED',
    DELETE_ADMIN_ENDPOINT_REJECTED =
    'administration/endpoints/DELETE_ADMIN_ENDPOINT_REJECTED',

    SET_ADMIN_ENDPOINT_ID = 'administration/endpoints/SET_ADMIN_ENDPOINT_ID',

    UPDATE_ADMIN_ENDPOINT = 'administration/endpoints/UPDATE_ADMIN_ENDPOINT',
    UPDATE_ADMIN_ENDPOINT_FULFILLED =
    'administration/endpoints/UPDATE_ADMIN_ENDPOINT_FULFILLED',
    UPDATE_ADMIN_ENDPOINT_REJECTED =
    'administration/endpoints/UPDATE_ADMIN_ENDPOINT_REJECTED',

    FILTER_ADMIN_ENDPOINT = 'administration/endpoints/FILTER_ADMIN_ENDPOINT',
    FILTER_ADMIN_ENDPOINT_FULFILLED = 'administration/endpoints/FILTER_ADMIN_ENDPOINT_FULFILLED',
    FILTER_ADMIN_ENDPOINT_REJECTED = 'administration/endpoints/FILTER_ADMIN_ENDPOINT_REJECTED',
}
export interface GetAdminEndpointAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_ADMIN_ENDPOINT;
}

export interface GetAdminEndpointFulfilledAction {
    readonly payload: AdminEndpointItems;
    readonly type: ActionTypeKeys.GET_ADMIN_ENDPOINT_FULFILLED;
}

export interface GetAdminEndpointRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.GET_ADMIN_ENDPOINT_REJECTED;
}

export interface SetEndpointIdAction {
    readonly payload: number;
    readonly type: ActionTypeKeys.SET_ADMIN_ENDPOINT_ID;
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
    meta: number;
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

export interface FilterAdminEndpointAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.FILTER_ADMIN_ENDPOINT;
  }

export interface FilterAdminEndpointFulfilledAction {
    readonly payload: AdminEndpointItems;
    readonly type: ActionTypeKeys.FILTER_ADMIN_ENDPOINT_FULFILLED;
  }

export interface FilterAdminEndpointRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.FILTER_ADMIN_ENDPOINT_REJECTED;
  }

export type AdminEndpointActionTypes =
    | GetAdminEndpointFulfilledAction
    | AddAdminEndpointFulfilledAction
    | DeleteAdminEndpointFulfilledAction
    | SetEndpointIdAction
    | FilterAdminEndpointFulfilledAction
    | UpdateAdminEndpointFulfilledAction;
