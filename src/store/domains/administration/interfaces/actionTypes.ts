import { ApiResponse, ResponseStatusType } from 'types';
import { AdminInterfaceItems } from './types';

export enum ActionTypeKeys {
    GET_ADMIN_INTERFACE = 'administration/interfaces/GET_ADMIN_INTERFACE',
    GET_ADMIN_INTERFACE_FULFILLED =
    'administration/interfaces/GET_ADMIN_INTERFACE_FULFILLED',
    GET_ADMIN_INTERFACE_REJECTED = 'administration/interfaces/GET_ADMIN_INTERFACE_REJECTED',

    ADD_ADMIN_INTERFACE = 'administration/interfaces/ADD_ADMIN_INTERFACE',
    ADD_ADMIN_INTERFACE_FULFILLED =
    'administration/interfaces/ADD_ADMIN_ENDPOINT_FULFILLED',
    ADD_ADMIN_INTERFACE_REJECTED =
    'administration/interfaces/ADD_ADMIN_INTERFACE_REJECTED',

    DELETE_ADMIN_INTERFACE = 'administration/interfaces/DELETE_ADMIN_INTERFACE',
    DELETE_ADMIN_INTERFACE_FULFILLED =
    'administration/interfaces/DELETE_ADMIN_INTERFACE_FULFILLED',
    DELETE_ADMIN_INTERFACE_REJECTED =
    'administration/interfaces/DELETE_ADMIN_INTERFACE_REJECTED',

    SET_ADMIN_INTERFACE_ID = 'administration/interfaces/SET_ADMIN_ENDPOINT_ID',

    UPDATE_ADMIN_INTERFACE = 'administration/interfaces/UPDATE_ADMIN_INTERFACE',
    UPDATE_ADMIN_INTERFACE_FULFILLED =
    'administration/interfaces/UPDATE_ADMIN_INTERFACE_FULFILLED',
    UPDATE_ADMIN_INTERFACE_REJECTED =
    'administration/interfaces/UPDATE_ADMIN_INTERFACE_REJECTED',

    FILTER_ADMIN_INTERFACE = 'administration/interfaces/FILTER_ADMIN_INTERFACE',
    FILTER_ADMIN_INTERFACE_FULFILLED = 'administration/interfaces/FILTER_ADMIN_INTERFACE_FULFILLED',
    FILTER_ADMIN_INTERFACE_REJECTED = 'administration/interfaces/FILTER_ADMIN_INTERFACE_REJECTED',
}
export interface GetAdminInterfaceAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_ADMIN_INTERFACE;
}

export interface GetAdminInterfaceFulfilledAction {
    readonly payload: AdminInterfaceItems;
    readonly type: ActionTypeKeys.GET_ADMIN_INTERFACE_FULFILLED;
}

export interface GetAdminInterfaceRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.GET_ADMIN_INTERFACE_REJECTED;
}

export interface SetInterfaceIdAction {
    readonly payload: number;
    readonly type: ActionTypeKeys.SET_ADMIN_INTERFACE_ID;
  }

export interface AddAdminInterfaceAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE;
}

export interface AddAdminInterfaceFulfilledAction {
    readonly payload: ResponseStatusType;
    readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE_FULFILLED;
}

export interface AddAdminInterfaceRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.ADD_ADMIN_INTERFACE_REJECTED;
}

export interface DeleteAdminInterfaceAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE;
}

export interface DeleteAdminInterfaceFulfilledAction {
    readonly payload: ResponseStatusType;
    readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE_FULFILLED;
    meta: number;
}

export interface DeleteAdminInterfaceRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.DELETE_ADMIN_INTERFACE_REJECTED;
}

export interface UpdateAdminInterfaceAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE;
}

export interface UpdateAdminInterfaceFulfilledAction {
    readonly payload: ResponseStatusType;
    readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE_FULFILLED;
}

export interface UpdateAdminInterfaceRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.UPDATE_ADMIN_INTERFACE_REJECTED;
}

export interface FilterAdminInterfaceAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE;
  }

export interface FilterAdminInterfaceFulfilledAction {
    readonly payload: AdminInterfaceItems;
    readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE_FULFILLED;
  }

export interface FilterAdminInterfaceRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.FILTER_ADMIN_INTERFACE_REJECTED;
  }

export type AdminInterfacesActionTypes =
    | GetAdminInterfaceFulfilledAction
    | AddAdminInterfaceFulfilledAction
    | DeleteAdminInterfaceFulfilledAction
    | SetInterfaceIdAction
    | FilterAdminInterfaceFulfilledAction
    | UpdateAdminInterfaceFulfilledAction;
