import { ImmutableArray } from 'seamless-immutable';
import { IdNamePair, SelectValue } from 'types';

interface InfoPlain extends IdNamePair { }

export interface AdminUsersGroupItemResp extends InfoPlain {
  institution_id: number | string;
  institution_name: string;
}

export interface AdminUsersGroupItem extends InfoPlain {
  institutionId: number | string;
  institutionName: string;
}

export interface AdminUsersGroupInfoEditable extends InfoPlain {
  institutionId: SelectValue;
}

export interface AdminUsersGroupDataResp {
  users_group: Array<AdminUsersGroupItemResp>;
}

export interface AdminUserGroupMember {
  id: number;
  first_name: string;
  last_name: string;
}

export interface AdminUserGroupMemberPrepared {
  id: number;
  username: string;
}

export interface AdminUserGroupMemberDataResp {
  user_group_members: Array<AdminUserGroupMember>;
}

export interface AdminUserGroupMemberDataResp {
  active_users: Array<AdminUserGroupMember>;
}

export interface AdminGroupPermissionFormValues {
  userGroupId: number;
  uiItems: Array<SelectValue>;
  permission: boolean;
}

export interface AdminGroupPermissionRequest {
  permission: string;
  user_group_id: number;
  ui_items: Array<string | number>;
}

export interface AdminGroupPermissionItemData {
  permission: string;
  user_group_id: number;
  ui_item: string;
}

export interface AdminGroupPermissionItem {
  permission: string;
  userGroupId: number;
  uiItem: string;
}

export interface AdminGroupPermissionData {
  group_permissions: Array<AdminGroupPermissionItemData>;
}

export interface AdminGroupPermissionUiItemResp {
  ui_item: string;
}

export interface AdminGroupPermissionUiItemsDataResp {
  ui_items: Array<AdminGroupPermissionUiItemResp>;
}

export interface AdminUserGroupMembersDeleteResp {
  user_group_id: number;
  user_id: string | number;
  username: SelectValue;
}

export interface AdminUserGroupMembersDelete {
  userGroupId: number;
  userId:  string | number;
  username: SelectValue;
}

export interface AdminUsersGroupState {
  usersGroups: ImmutableArray<AdminUsersGroupItemResp>;
  userGroupMembers: ImmutableArray<AdminUserGroupMember>;
  allActiveUsers: ImmutableArray<AdminUserGroupMember>;
  groupPermissions: ImmutableArray<AdminGroupPermissionItemData>;
  uiItems: ImmutableArray<AdminGroupPermissionUiItemResp>;
}
