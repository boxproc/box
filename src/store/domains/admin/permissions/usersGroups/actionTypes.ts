import {
  IUsersGroupMembersData,
  IUsersGroupPermissionsData,
  IUsersGroupsData,
  IUsersGroupUiItems,
  IUsersGroupUsersData,
} from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_USERS_GROUPS = 'usersGroups/GET_USERS_GROUPS',
  GET_USERS_GROUPS_FULFILLED = 'usersGroups/GET_USERS_GROUPS_FULFILLED',
  GET_USERS_GROUPS_REJECTED = 'usersGroups/GET_USERS_GROUPS_REJECTED',

  GET_USERS_GROUP_MEMBERS = 'usersGroups/GET_USERS_GROUP_MEMBERS',
  GET_USERS_GROUP_MEMBERS_FULFILLED = 'usersGroups/GET_USERS_GROUP_MEMBERS_FULFILLED',
  GET_USERS_GROUP_MEMBERS_REJECTED = 'usersGroups/GET_USERS_GROUP_MEMBERS_REJECTED',

  GET_USERS_GROUP_USERS = 'usersGroups/GET_USERS_GROUP_USERS',
  GET_USERS_GROUP_USERS_FULFILLED = 'usersGroups/GET_USERS_GROUP_USERS_FULFILLED',
  GET_USERS_GROUP_USERS_REJECTED = 'usersGroups/GET_USERS_GROUP_USERS_REJECTED',

  GET_USERS_GROUP_UI_ITEMS = 'usersGroups/GET_USERS_GROUP_UI_ITEMS',
  GET_USERS_GROUP_UI_ITEMS_FULFILLED = 'usersGroups/GET_USERS_GROUP_UI_ITEMS_FULFILLED',
  GET_USERS_GROUP_UI_ITEMS_REJECTED = 'usersGroups/GET_USERS_GROUP_UI_ITEMS_REJECTED',

  GET_USERS_GROUP_PERMISSIONS = 'usersGroups/GET_USERS_GROUP_PERMISSIONS',
  GET_USERS_GROUP_PERMISSIONS_FULFILLED = 'usersGroups/GET_USERS_GROUP_PERMISSIONS_FULFILLED',
  GET_USERS_GROUP_PERMISSIONS_REJECTED = 'usersGroups/GET_USERS_GROUP_PERMISSIONS_REJECTED',

  ADD_USERS_GROUP_PERMISSIONS = 'usersGroups/ADD_USERS_GROUP_PERMISSIONS',
  ADD_USERS_GROUP_PERMISSIONS_FULFILLED = 'usersGroups/ADD_USERS_GROUP_PERMISSIONS_FULFILLED',
  ADD_USERS_GROUP_PERMISSIONS_REJECTED = 'usersGroups/ADD_USERS_GROUP_PERMISSIONS_REJECTED',

  DELETE_USERS_GROUP_PERMISSION = 'usersGroups/DELETE_USERS_GROUP_PERMISSION',
  DELETE_USERS_GROUP_PERMISSION_FULFILLED = 'usersGroups/DELETE_USERS_GROUP_PERMISSION_FULFILLED',
  DELETE_USERS_GROUP_PERMISSION_REJECTED = 'usersGroups/DELETE_USERS_GROUP_PERMISSION_REJECTED',

  ADD_USERS_GROUP_MEMBER = 'usersGroups/ADD_USERS_GROUP_MEMBER',
  ADD_USERS_GROUP_MEMBER_FULFILLED = 'usersGroups/ADD_USERS_GROUP_MEMBER_FULFILLED',
  ADD_USERS_GROUP_MEMBER_REJECTED = 'usersGroups/ADD_USERS_GROUP_MEMBER_REJECTED',

  DELETE_USERS_GROUP_MEMBER = 'usersGroups/DELETE_USERS_GROUP_MEMBER',
  DELETE_GROUP_MEMBER_FULFILLED = 'usersGroups/DELETE_USERS_GROUP_MEMBER_FULFILLED',
  DELETE_USERS_GROUP_MEMBER_REJECTED = 'usersGroups/DELETE_USERS_GROUP_MEMBER_REJECTED',

  ADD_USERS_GROUP = 'usersGroups/ADD_USERS_GROUP',
  ADD_USERS_GROUP_FULFILLED = 'usersGroups/ADD_USERS_GROUP_FULFILLED',
  ADD_USERS_GROUP_REJECTED = 'usersGroups/ADD_USERS_GROUP_REJECTED',

  UPDATE_USERS_GROUP = 'usersGroups/UPDATE_USERS_GROUP',
  UPDATE_USERS_GROUP_FULFILLED = 'usersGroups/UPDATE_USERS_GROUP_FULFILLED',
  UPDATE_USERS_GROUP_REJECTED = 'usersGroups/UPDATE_USERS_GROUP_REJECTED',

  RESET_USERS_GROUPS = 'usersGroups/RESET_USERS_GROUPS',
}

/** Get users groups action interfaces */

export interface IGetUsersGroupsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERS_GROUPS;
}

export interface IGetUsersGroupsFulfilledAction {
  readonly payload: IUsersGroupsData;
  readonly type: ActionTypeKeys.GET_USERS_GROUPS_FULFILLED;
}

export interface IGetUsersGroupsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERS_GROUPS_REJECTED;
}

/** Add users group action interfaces */

export interface IAddUsersGroupAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP;
}

export interface IAddUsersGroupActionFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_FULFILLED;
}

export interface IAddUsersGroupActionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_REJECTED;
}

/** Update users group action interfaces */

export interface IUpdateUsersGroupAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_USERS_GROUP;
}

export interface IUpdateUsersGroupActionFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_USERS_GROUP_FULFILLED;
}

export interface IUpdateUsersGroupActionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_USERS_GROUP_REJECTED;
}

/** Get users group UI items action interfaces */

export interface IGetUsersGroupUiItemsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS;
}

export interface IGetUsersGroupUiItemsFulfilledAction {
  readonly payload: IUsersGroupUiItems;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS_FULFILLED;
}

export interface IGetUsersGroupUiItemsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_UI_ITEMS_REJECTED;
}

/** Get users group members action interfaces */

export interface IGetUsersGroupMembersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_MEMBERS;
}

export interface IGetUsersGroupMembersFulfilledAction {
  readonly payload: IUsersGroupMembersData;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_MEMBERS_FULFILLED;
}

export interface IGetUsersGroupMembersRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_MEMBERS_REJECTED;
}

/** Get users group users action interfaces */

export interface IGetUsersGroupUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_USERS;
}

export interface IGetUsersGroupUsersActionFulfilledAction {
  readonly payload: IUsersGroupUsersData;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_USERS_FULFILLED;
}

export interface IGetUsersGroupUsersActionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_USERS_REJECTED;
}

/** Get users group permissions action interfaces */

export interface IGetUsersGroupPermissionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS;
}

export interface IGetUsersGroupPermissionsFulfilledAction {
  readonly payload: IUsersGroupPermissionsData;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS_FULFILLED;
}

export interface IGetUsersGroupPermissionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERS_GROUP_PERMISSIONS_REJECTED;
}

/** Delete member from the users group action interfaces */

export interface IDeleteUsersGroupMemberAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_USERS_GROUP_MEMBER;
}

export interface IDeleteUsersGroupMemberFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_GROUP_MEMBER_FULFILLED;
}

export interface IDeleteUsersGroupMemberRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_USERS_GROUP_MEMBER_REJECTED;
}

/** Delete permission from the users group action interfaces */

export interface IDeleteUsersGroupPermissionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_USERS_GROUP_PERMISSION;
}

export interface IDeleteUsersGroupPermissionFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_USERS_GROUP_PERMISSION_FULFILLED;
}

export interface IDeleteUsersGroupPermissionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_USERS_GROUP_PERMISSION_REJECTED;
}

/** Add permissions to the users group action interfaces */

export interface IAddUsersGroupPermissionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_PERMISSIONS;
}

export interface IAddUsersGroupPermissionsFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER_FULFILLED;
}

export interface IAddUsersGroupPermissionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER_REJECTED;
}

/** Add member to the users group action interfaces */

export interface IAddUsersGroupMemberAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER;
}

export interface IAddUsersGroupMemberFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER_FULFILLED;
}

export interface IAddUsersGroupMemberRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_USERS_GROUP_MEMBER_REJECTED;
}

/** Reset users groups action interface */

export interface IResetUsersGroupsAction {
  readonly type: ActionTypeKeys.RESET_USERS_GROUPS;
}

export type TUsersGroupAction =
  | IAddUsersGroupMemberFulfilledAction
  | IAddUsersGroupPermissionsFulfilledAction
  | IAddUsersGroupActionFulfilledAction
  | IDeleteUsersGroupPermissionFulfilledAction
  | IDeleteUsersGroupMemberFulfilledAction
  | IGetUsersGroupPermissionsFulfilledAction
  | IGetUsersGroupMembersFulfilledAction
  | IGetUsersGroupsFulfilledAction
  | IGetUsersGroupUiItemsFulfilledAction
  | IGetUsersGroupUsersActionFulfilledAction
  | IResetUsersGroupsAction
  | IUpdateUsersGroupAction;
