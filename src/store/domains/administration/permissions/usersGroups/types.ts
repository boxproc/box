import { ImmutableArray } from 'seamless-immutable';
import { IdNamePair, SelectValue } from 'types';

interface InfoPlain extends IdNamePair { }

export interface AdminUsersGroupItem extends InfoPlain {
  institutionId: number | string;
  institutionName: string;
}

export interface AdminUsersGroupItemResp extends InfoPlain {
  institution_id: number | string;
  institution_name: string;
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

interface AdminGroupPermissionItemPlain {
  permission: string;
}

export interface AdminGroupPermissionItemResp extends AdminGroupPermissionItemPlain {
  user_group_id: number;
  ui_item: string | number;
}

export interface AdminGroupPermissionItemEditable {
  userGroupId: number;
  uiItem: SelectValue;
  permission: boolean;
}

export interface AdminGroupPermissionItem extends AdminGroupPermissionItemPlain {
  userGroupId: number;
  uiItem: string | number;
}

export interface AdminGroupPermissionDataResp {
  group_permissions: Array<AdminGroupPermissionItemResp>;
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
  groupPermissions: ImmutableArray<AdminGroupPermissionItemResp>;
  uiItems: ImmutableArray<AdminGroupPermissionUiItemResp>;
}
