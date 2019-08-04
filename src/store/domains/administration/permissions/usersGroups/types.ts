import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

interface InfoPlain {
  id: number;
  name: string;
}

export interface AdminUsersGroupInfoPlainResp extends InfoPlain {
  institution_id: number | string;
}

export interface AdminUsersGroupInfoPlain extends InfoPlain {
  institutionId: number | string;
}

export interface AdminUsersGroupInfoEditable extends InfoPlain {
  institutionId: SelectValues;
}

export interface AdminUsersGroupDataResp extends ResponseStatusType {
  users_group: Array<AdminUsersGroupInfoPlainResp>;
}

export interface AdminUserGroupMember {
  id: number;
  username: string;
}

export interface AdminUserGroupMemberDataResp extends ResponseStatusType {
  user_group_members: Array<AdminUserGroupMember>;
}

export interface AdminUserGroupMemberDataResp extends ResponseStatusType {
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
  uiItem: SelectValues;
  permission: boolean;
}

export interface AdminGroupPermissionItem extends AdminGroupPermissionItemPlain {
  userGroupId: number;
  uiItem: string | number;
}

export interface AdminGroupPermissionDataResp extends ResponseStatusType {
  group_permissions: Array<AdminGroupPermissionItemResp>;
}

export interface AdminGroupPermissionUiItemResp {
  ui_item: string;
}

export interface AdminGroupPermissionUiItemsDataResp extends ResponseStatusType {
  ui_items: Array<AdminGroupPermissionUiItemResp>;
}

export interface AdminUserGroupMembersDeleteResp {
  user_group_id: number;
  user_id: number;
}

export interface AdminUserGroupMembersDelete {
  userGroupId: number;
  userId: number;
}

export interface AdminUsersGroupState {
  usersGroups: ImmutableArray<AdminUsersGroupInfoPlainResp>;
  userGroupMembers: ImmutableArray<AdminUserGroupMember>;
  allActiveUsers: ImmutableArray<AdminUserGroupMember>;
  groupPermissions: ImmutableArray<AdminGroupPermissionItemResp>;
  uiItems: ImmutableArray<AdminGroupPermissionUiItemResp>;
}
