import {
  AdminGroupPermissionDataResp,
  AdminGroupPermissionUiItemsDataResp,
  AdminUserGroupMemberDataResp,
  AdminUsersGroupDataResp,
} from './types';

import { ApiResponse, ResponseStatusType } from 'types';

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

  GET_ADMIN_UI_ITEMS =
  'administration/permissions/usersGroups/GET_ADMIN_UI_ITEMS',
  GET_ADMIN_UI_ITEMS_FULFILLED =
  'administration/permissions/usersGroups/GET_ADMIN_UI_ITEMS_FULFILLED',
  GET_ADMIN_UI_ITEMS_REJECTED =
  'administration/permissions/usersGroups/GET_ADMIN_UI_ITEMS_REJECTED',

  GET_ADMIN_GROUP_PERMISSIONS =
  'administration/permissions/usersGroups/GET_ADMIN_GROUP_PERMISSIONS',
  GET_ADMIN_GROUP_PERMISSIONS_FULFILLED =
  'administration/permissions/usersGroups/GET_ADMIN_GROUP_PERMISSIONS_FULFILLED',
  GET_ADMIN_GROUP_PERMISSIONS_REJECTED =
  'administration/permissions/usersGroups/GET_ADMIN_GROUP_PERMISSIONS_REJECTED',

  ADD_ADMIN_GROUP_PERMISSIONS =
  'administration/permissions/usersGroups/ADD_ADMIN_GROUP_PERMISSIONS',
  ADD_ADMIN_GROUP_PERMISSIONS_FULFILLED =
  'administration/permissions/usersGroups/ADD_ADMIN_GROUP_PERMISSIONS_FULFILLED',
  ADD_ADMIN_GROUP_PERMISSIONS_REJECTED =
  'administration/permissions/usersGroups/ADD_ADMIN_GROUP_PERMISSIONS_REJECTED',

  DELETE_ADMIN_GROUP_PERMISSIONS =
   'administration/permissions/usersGroups/DELETE_ADMIN_GROUP_PERMISSIONS',
  DELETE_ADMIN_GROUP_PERMISSIONS_FULFILLED =
  'administration/permissions/usersGroups/DELETE_ADMIN_GROUP_PERMISSIONS_FULFILLED',
  DELETE_ADMIN_GROUP_PERMISSIONS_REJECTED =
  'administration/permissions/usersGroups/DELETE_ADMIN_GROUP_PERMISSIONS_REJECTED',

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

export interface GetAdminUiItemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_UI_ITEMS;
}

export interface GetAdminUiItemsFulfilledAction {
  readonly payload: AdminGroupPermissionUiItemsDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_UI_ITEMS_FULFILLED;
}

export interface GetAdminUiItemsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_UI_ITEMS_REJECTED;
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
export interface GetAdminGroupPermissionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_GROUP_PERMISSIONS;
}

export interface GetAdminGroupPermissionsFulfilledAction {
  readonly payload: AdminGroupPermissionDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_GROUP_PERMISSIONS_FULFILLED;
}

export interface GetAdminGroupPermissionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_GROUP_PERMISSIONS_REJECTED;
}

export interface DeleteAdminUserGroupMembersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS;
}

export interface DeleteAdminUserGroupMembersFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBER_FULFILLED;
  readonly meta: number;
}

export interface DeleteAdminUserGroupMembersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_MEMBERS_REJECTED;
}
export interface DeleteAdminGroupPermissionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_PERMISSIONS;
}

export interface DeleteAdminGroupPermissionsFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_PERMISSIONS_FULFILLED;
  readonly meta: string;
}

export interface DeleteAdminGroupPermissionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_GROUP_PERMISSIONS_REJECTED;
}

export interface AddAdminGroupPermissionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_GROUP_PERMISSIONS;
}

export interface AddAdminGroupPermissionsFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS_FULFILLED;
}

export interface AddAdminGroupPermissionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS_REJECTED;
}

export interface AddAdminUsersGroupAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP;
}

export interface AddAdminUsersGroupFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_USERS_GROUP_FULFILLED;
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
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS_FULFILLED;
}

export interface AddAdminActiveUsersRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_ACTIVE_USERS_REJECTED;
}

export interface UpdateAdminUsersGroupAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP;
}

export interface UpdateAdminUsersGroupFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP_FULFILLED;
}

export interface UpdateAdminUsersGroupRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_USERS_GROUP_REJECTED;
}

export type AdminUsersGroupActionTypes =
  | GetAdminUsersGroupFulfilledAction
  | GetAdminActiveUsersFulfilledAction
  | GetAdminGroupPermissionsFulfilledAction
  | AddAdminGroupPermissionsFulfilledAction
  | DeleteAdminGroupPermissionsFulfilledAction
  | AddAdminUsersGroupFulfilledAction
  | GetAdminUserGroupMembersFulfilledAction
  | DeleteAdminUserGroupMembersFulfilledAction
  | AddAdminActiveUsersFulfilledAction
  | GetAdminUiItemsFulfilledAction
  | UpdateAdminUsersGroupFulfilledAction;
