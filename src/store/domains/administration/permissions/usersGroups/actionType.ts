import {
  AdminUserGroupMemberDataResp,
  AdminUsersGroupDataResp,
  AdminUsersGroupEditableItemPrepared,
} from './types';

import { ApiResponse, SuccessResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_USERS_GROUP = 'administration/permissions/usersGroups/GET_ADMIN_USERS_GROUP',
  GET_ADMIN_USERS_GROUP_FULFILLED =
  'administration/permissions/usersGroups/GET_ADMIN_USERS_GROUP_FULFILLED',
  GET_ADMIN_USERS_GROUP_REJECTED =
  'administration/permissions/usersGroups/GET_ADMIN_USERS_GROUP_REJECTED',

  GET_ADMIN_USER_GROUP_MEMBERS =
  'administration/permissions/usersGroups/GET_ADMIN_USER_GROUP_MEMBERS',
  GET_ADMIN_USER_GROUP_MEMBERS_FULFILLED =
  'administration/permissions/usersGroups/GET_ADMIN_USER_GROUP_MEMBERS_FULFILLED',
  GET_ADMIN_USER_GROUP_MEMBERS_REJECTED =
  'administration/permissions/usersGroups/GET_ADMIN_USER_GROUP_MEMBERS_REJECTED',

  GET_ADMIN_ACTIVE_USERS =
  'administration/permissions/usersGroups/GET_ADMIN_ACTIVE_USERS',
  GET_ADMIN_ACTIVE_USERS_FULFILLED =
  'administration/permissions/usersGroups/GET_ADMIN_ACTIVE_USERS_FULFILLED',
  GET_ADMIN_ACTIVE_USERS_REJECTED =
  'administration/permissions/usersGroups/GET_ADMIN_ACTIVE_USERS_REJECTED',

  ADD_ADMIN_ACTIVE_USERS =
  'administration/permissions/usersGroups/ADD_ADMIN_ACTIVE_USERS',
  ADD_ADMIN_ACTIVE_USERS_FULFILLED =
  'administration/permissions/usersGroups/ADD_ADMIN_ACTIVE_USERS_FULFILLED',
  ADD_ADMIN_ACTIVE_USERS_REJECTED =
  'administration/permissions/usersGroups/ADD_ADMIN_ACTIVE_USERS_REJECTED',

  DELETE_ADMIN_GROUP_MEMBERS =
   'administration/permissions/usersGroups/DELETE_ADMIN_GROUP_MEMBERS',
  DELETE_ADMIN_GROUP_MEMBER_FULFILLED =
  'administration/permissions/usersGroups/DELETE_ADMIN_GROUP_MEMBERS_FULFILLED',
  DELETE_ADMIN_GROUP_MEMBERS_REJECTED =
  'administration/permissions/usersGroups/DELETE_ADMIN_GROUP_MEMBERS_REJECTED',

  ADD_ADMIN_USERS_GROUP = 'administration/permissions/usersGroups/ADD_ADMIN_USERS_GROUP',
  ADD_ADMIN_USERS_GROUP_FULFILLED =
  'administration/permissions/usersGroups/ADD_ADMIN_USERS_GROUP_FULFILLED',
  ADD_ADMIN_USERS_GROUP_REJECTED =
  'administration/permissions/usersGroups/ADD_ADMIN_USERS_GROUP_REJECTED',

  // FILTER_USERS_GROUP = 'administration/permissions/usersGroup/FILTER_USERS_GROUP',
  // FILTER_USERS_GROUP_FULFILLED =
  // 'administration/permissions/usersGroup/FILTER_USERS_GROUP_FULFILLED',
  // FILTER_USERS_GROUP_REJECTED =
  // 'administration/permissions/usersGroup/FILTER_USERS_GROUP_REJECTED',

  UPDATE_ADMIN_USERS_GROUP = 'administration/permissions/usersGroups/UPDATE_ADMIN_USERS_GROUP',
  UPDATE_ADMIN_USERS_GROUP_FULFILLED =
  'administration/permissions/usersGroups/UPDATE_ADMIN_USERS_GROUP_FULFILLED',
  UPDATE_ADMIN_USERS_GROUP_REJECTED =
  'administration/permissions/usersGroups/UPDATE_ADMIN_USERS_GROUP_REJECTED',
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

export interface GetAdminUserGroupMembersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_USER_GROUP_MEMBERS;
}

export interface GetAdminUserGroupMembersFulfilledAction {
  readonly payload: AdminUserGroupMemberDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_USER_GROUP_MEMBERS_FULFILLED;
}

export interface GetAdminUserGroupMembersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_USER_GROUP_MEMBERS_REJECTED;
}

export interface GetAdminActiveUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_ACTIVE_USERS;
}

export interface GetAdminActiveUsersFulfilledAction {
  readonly payload: AdminUserGroupMemberDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_ACTIVE_USERS_FULFILLED;
}

export interface GetAdminActiveUsersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_ACTIVE_USERS_REJECTED;
}

export interface DeleteAdminUserGroupMembersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS;
}

export interface DeleteAdminUserGroupMembersFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBER_FULFILLED;
  readonly meta: number;
}

export interface DeleteAdminUserGroupMembersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS_REJECTED;
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
export interface AddAdminActiveUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS;
}

export interface AddAdminActiveUsersFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS_FULFILLED;
  readonly meta: any;
}

export interface AddAdminActiveUsersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS_REJECTED;
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

export type AdminUsersGroupActionTypes =
  | GetAdminUsersGroupFulfilledAction
  | GetAdminActiveUsersFulfilledAction
  | AddAdminUsersGroupFulfilledAction
  | GetAdminUserGroupMembersFulfilledAction
  | DeleteAdminUserGroupMembersFulfilledAction
  | AddAdminActiveUsersFulfilledAction
  // | FilterUsersFulfilledAction
  | UpdateAdminUsersGroupFulfilledAction;
