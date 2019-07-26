import {
  AdminUserDataResp,
  AdminUserEditableItemPrepared,
} from './types';

import { ApiResponse, SuccessResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_USER = 'administration/permissions/users/GET_ADMIN_USER',
  GET_ADMIN_USER_FULFILLED =
  'administration/permissions/users/GET_ADMIN_USER_FULFILLED',
  GET_ADMIN_USER_REJECTED = 'administration/permissions/users/GET_ADMIN_USER_REJECTED',

  ADD_ADMIN_USER = 'administration/permissions/users/ADD_ADMIN_USER',
  ADD_ADMIN_USER_FULFILLED =
  'administration/permissions/users/ADD_ADMIN_USER_FULFILLED',
  ADD_ADMIN_USER_REJECTED =
  'administration/permissions/users/ADD_ADMIN_USER_REJECTED',

  UPDATE_ADMIN_USER = 'administration/permissions/users/UPDATE_ADMIN_USER',
  UPDATE_ADMIN_USER_FULFILLED =
  'administration/permissions/users/UPDATE_ADMIN_USER_FULFILLED',
  UPDATE_ADMIN_USER_REJECTED =
  'administration/permissions/users/UPDATE_ADMIN_USER_REJECTED',
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
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_USER_FULFILLED;
  readonly meta: AdminUserEditableItemPrepared;
}

export interface AddAdminUserRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_USER_REJECTED;
}

export interface UpdateAdminUserAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USER;
}

export interface UpdateAdminUserFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USER_FULFILLED;
  readonly meta: AdminUserEditableItemPrepared;
}

export interface UpdateAdminUserRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USER_REJECTED;
}

export type AdminUserActionTypes =
  | GetAdminUserFulfilledAction
  | AddAdminUserFulfilledAction
  | UpdateAdminUserFulfilledAction;
