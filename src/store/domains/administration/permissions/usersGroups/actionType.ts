import {
    AdminUsersGroupDataResp,
    AdminUsersGroupEditableItemPrepared,
  } from './types';

import { ApiResponse, SuccessResponseStatusType } from 'types';

export enum ActionTypeKeys {
    GET_ADMIN_USERS_GROUP = 'administration/permissions/usersGroup/GET_ADMIN_USERS_GROUP',
    GET_ADMIN_USERS_GROUP_FULFILLED =
    'administration/permissions/users/GET_ADMIN_USERS_GROUP_FULFILLED',
    GET_ADMIN_USERS_GROUP_REJECTED =
        'administration/permissions/usersGroup/GET_ADMIN_USERS_GROUP_REJECTED',

    ADD_ADMIN_USERS_GROUP = 'administration/permissions/usersGroup/ADD_ADMIN_USERS_GROUP',
    ADD_ADMIN_USERS_GROUP_FULFILLED =
    'administration/permissions/usersGroup/ADD_ADMIN_USERS_GROUP_FULFILLED',
    ADD_ADMIN_USERS_GROUP_REJECTED =
    'administration/permissions/usersGroup/ADD_ADMIN_USERS_GROUP_REJECTED',

    // FILTER_USERS_GROUP = 'administration/permissions/usersGroup/FILTER_USERS_GROUP',
    // FILTER_USERS_GROUP_FULFILLED =
    // 'administration/permissions/usersGroup/FILTER_USERS_GROUP_FULFILLED',
    // FILTER_USERS_GROUP_REJECTED =
    // 'administration/permissions/usersGroup/FILTER_USERS_GROUP_REJECTED',

    UPDATE_ADMIN_USERS_GROUP = 'administration/permissions/usersGroup/UPDATE_ADMIN_USERS_GROUP',
    UPDATE_ADMIN_USERS_GROUP_FULFILLED =
    'administration/permissions/usersGroup/UPDATE_ADMIN_USERS_GROUP_FULFILLED',
    UPDATE_ADMIN_USERS_GROUP_REJECTED =
    'administration/permissions/usersGroup/UPDATE_ADMIN_USERS_GROUP_REJECTED',
  }

export interface GetAdminUsersGroupAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_ADMIN_USERS_GROUP;
  }

export interface GetAdminUsersGroupFulfilledAction {
    readonly payload: AdminUsersGroupDataResp;
    readonly type: ActionTypeKeys.GET_ADMIN_USERS_GROUP_FULFILLED;
  }

export interface GetAdminUsersGroupRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.GET_ADMIN_USERS_GROUP_REJECTED;
  }

export interface AddAdminUsersGroupAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP;
  }

export interface AddAdminUsersGroupFulfilledAction {
    readonly payload: SuccessResponseStatusType;
    readonly type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP_FULFILLED;
    readonly meta: AdminUsersGroupEditableItemPrepared;
  }

export interface AddAdminUsersGroupRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP_REJECTED;
  }

// export interface FilterUsersAction {
//     readonly payload: Promise<object>;
//     readonly type: ActionTypeKeys.FILTER_USERS;
//   }

// export interface FilterUsersFulfilledAction {
//     readonly payload: AdminUserDataResp;
//     readonly type: ActionTypeKeys.FILTER_USERS_FULFILLED;
//     meta: UsersFilterParams;
//   }
// export interface FilterUsersRejectedAction {
//     readonly payload: ApiResponse;
//     readonly type: ActionTypeKeys.FILTER_USERS_REJECTED;
//   }

export interface UpdateAdminUsersGroupAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP;
  }

export interface UpdateAdminUsersGroupFulfilledAction {
    readonly payload: SuccessResponseStatusType;
    readonly type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP_FULFILLED;
    readonly meta: AdminUsersGroupEditableItemPrepared;
  }

export interface UpdateAdminUsersGroupRejectedAction {
    readonly payload: ApiResponse;
    readonly type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP_REJECTED;
  }

export type AdminUserActionTypes =
    | GetAdminUsersGroupFulfilledAction
    | AddAdminUsersGroupFulfilledAction
   // | FilterUsersFulfilledAction
    | UpdateAdminUsersGroupFulfilledAction;
