import { ImmutableArray } from 'seamless-immutable';
import { IIdNamePair, ISelectValue } from 'types';

/**
 * Users group interfaces
 */

interface IInfoPlain extends IIdNamePair { }

export interface IUsersGroupData extends IInfoPlain {
  institution_id: number | string;
  institution_name: string;
}

export interface AdminUsersGroupDataResp {
  users_group: Array<IUsersGroupData>;
}

export interface IUsersGroup extends IInfoPlain {
  institutionId: number | string;
  institutionName: string;
}

export interface IUsersGroupEditable extends IInfoPlain {
  institutionId: ISelectValue;
}

/**
 * Users group member interfaces
 */

export interface IUsersGroupMemberData {
  id: number;
  first_name: string;
  last_name: string;
}

export interface IUsersGroupMembersData {
  user_group_members: Array<IUsersGroupMemberData>;
}

export interface IUsersGroupUsersData {
  active_users: Array<IUsersGroupMemberData>;
}

export interface IUsersGroupMember {
  id: number;
  username: string;
}

export interface IUsersGroupMemberReqToSend {
  user_group_id: number;
  user_id: string | number;
  username: ISelectValue;
}

export interface IUsersGroupMemberReq {
  userGroupId: number;
  userId:  string | number;
  username: ISelectValue;
}

/**
 * Users group permissions interfaces
 */

export interface IUsersGroupPermissionData {
  permission: string;
  ui_item: string;
  user_group_id: number;
}

export interface IUsersGroupPermissionsData {
  group_permissions: Array<IUsersGroupPermissionData>;
}

export interface IUsersGroupPermissionEditable {
  permission: boolean;
  uiItems: Array<ISelectValue>;
  userGroupId: number;
}

export interface IUsersGroupPermission {
  permission: string;
  uiItem: string;
  userGroupId: number;
}

export interface IUsersGroupUiItem {
  ui_item: string;
}

export interface IUsersGroupUiItems {
  ui_items: Array<IUsersGroupUiItem>;
}

export interface IUsersGroupPermissionReq {
  permission: string;
  ui_items: Array<string | number>;
  user_group_id: number;
}

/**
 * Users groups state interface
 */
export interface IUsersGroupsState {
  groups: ImmutableArray<IUsersGroupData>;
  members: ImmutableArray<IUsersGroupMemberData>;
  permissions: ImmutableArray<IUsersGroupPermissionData>;
  uiItems: ImmutableArray<IUsersGroupUiItem>;
  users: ImmutableArray<IUsersGroupMemberData>;
}
