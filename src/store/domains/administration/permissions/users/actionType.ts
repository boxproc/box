import { AdminUserDataResp } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_USER = 'administration/permissions/users/GET_ADMIN_USER',
  GET_ADMIN_USER_FULFILLED = 'administration/permissions/users/GET_ADMIN_USER_FULFILLED',
  GET_ADMIN_USER_REJECTED = 'administration/permissions/users/GET_ADMIN_USER_REJECTED',

  ADD_ADMIN_USER = 'administration/permissions/users/ADD_ADMIN_USER',
  ADD_ADMIN_USER_FULFILLED = 'administration/permissions/users/ADD_ADMIN_USER_FULFILLED',
  ADD_ADMIN_USER_REJECTED = 'administration/permissions/users/ADD_ADMIN_USER_REJECTED',

  FILTER_USERS = 'administration/permissions/users/FILTER_USERS',
  FILTER_USERS_FULFILLED = 'administration/permissions/users/FILTER_USERS_FULFILLED',
  FILTER_USERS_REJECTED = 'administration/permissions/users/FILTER_USERS_REJECTED',

  UPDATE_ADMIN_USER = 'administration/permissions/users/UPDATE_ADMIN_USER',
  UPDATE_ADMIN_USER_FULFILLED = 'administration/permissions/users/UPDATE_ADMIN_USER_FULFILLED',
  UPDATE_ADMIN_USER_REJECTED = 'administration/permissions/users/UPDATE_ADMIN_USER_REJECTED',

  SET_ADMIN_USER_ID = 'administration/permissions/SET_ADMIN_USER_ID',
}

export interface GetAdminUserAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_USER;
}

export interface GetAdminUserFulfilledAction {
  readonly payload: AdminUserDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_USER_FULFILLED;
}

export interface GetAdminUserRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_USER_REJECTED;
}

export interface AddAdminUserAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_USER;
}

export interface AddAdminUserFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_USER_FULFILLED;
}

export interface AddAdminUserRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_USER_REJECTED;
}

export interface FilterUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_USERS;
}

export interface FilterUsersFulfilledAction {
  readonly payload: Partial<AdminUserDataResp>;
  readonly type: ActionTypeKeys.FILTER_USERS_FULFILLED;
}
export interface FilterUsersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_USERS_REJECTED;
}

export interface UpdateAdminUserAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USER;
}

export interface UpdateAdminUserFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USER_FULFILLED;
}

export interface UpdateAdminUserRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USER_REJECTED;
}

export interface SetAdminUserIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_ADMIN_USER_ID;
}

export type AdminUserActionTypes =
  | GetAdminUserFulfilledAction
  | AddAdminUserFulfilledAction
  | FilterUsersFulfilledAction
  | UpdateAdminUserFulfilledAction
  | SetAdminUserIdAction;
