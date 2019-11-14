import { AdminUserDataResp } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  ADD_ADMIN_USER = 'administration/permissions/users/ADD_ADMIN_USER',
  ADD_ADMIN_USER_FULFILLED = 'administration/permissions/users/ADD_ADMIN_USER_FULFILLED',
  ADD_ADMIN_USER_REJECTED = 'administration/permissions/users/ADD_ADMIN_USER_REJECTED',

  FILTER_USERS = 'administration/permissions/users/FILTER_USERS',
  FILTER_USERS_FULFILLED = 'administration/permissions/users/FILTER_USERS_FULFILLED',
  FILTER_USERS_REJECTED = 'administration/permissions/users/FILTER_USERS_REJECTED',

  UPDATE_ADMIN_USER = 'administration/permissions/users/UPDATE_ADMIN_USER',
  UPDATE_ADMIN_USER_FULFILLED = 'administration/permissions/users/UPDATE_ADMIN_USER_FULFILLED',
  UPDATE_ADMIN_USER_REJECTED = 'administration/permissions/users/UPDATE_ADMIN_USER_REJECTED',

  GET_ADMIN_ACCESS_USERS = 'administration/permissions/users/GET_ADMIN_ACCESS_USERS',
  GET_ADMIN_ACCESS_USERS_FULFILLED =
  'administration/permissions/users/GET_ADMIN_ACCESS_USERS_FULFILLED',
  GET_ADMIN_ACCESS_USERS_REJECTED =
  'administration/permissions/users/GET_ADMIN_ACCESS_USERS_REJECTED',

  RESET_USERS = 'administration/permissions/users/RESET_USERS',
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

export interface GetAccessUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_ACCESS_USERS;
}

export interface GetAccessUsersFulfilledAction {
  readonly payload: Partial<AdminUserDataResp>;
  readonly type: ActionTypeKeys.GET_ADMIN_ACCESS_USERS_FULFILLED;
}

export interface GetAccessUsersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_ACCESS_USERS_REJECTED;
}

export interface ResetUsersAction {
  readonly type: ActionTypeKeys.RESET_USERS;
}

export type AdminUserActionTypes =
  | AddAdminUserFulfilledAction
  | FilterUsersFulfilledAction
  | UpdateAdminUserFulfilledAction
  | GetAccessUsersFulfilledAction
  | ResetUsersAction;
