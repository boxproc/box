import { ImmutableArray } from 'seamless-immutable';
import { IdNamePair, SelectValues } from 'types';

interface InfoPlain extends IdNamePair { }

export interface AdminUsersGroupInfoPlainResp extends InfoPlain {
  institution_id: number | string;
}

export interface AdminUsersGroupInfoResp extends AdminUsersGroupInfoPlainResp {
  institution_name: string;
}

export interface AdminUsersGroupInfoPlain extends AdminUsersGroupInfoResp {
  institutionName: string;
}

export interface AdminUsersGroupInfo extends InfoPlain {
  institutionId: number | string;
}

export interface AdminUsersGroupInfoEditable extends InfoPlain {
  institutionId: SelectValues;
}

export interface AdminUsersGroupDataResp {
  users_group: Array<AdminUsersGroupInfoPlainResp>;
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
  uiItem: SelectValues;
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
  username: SelectValues;
}

export interface AdminUserGroupMembersDelete {
  userGroupId: number;
  userId:  string | number;
  username: SelectValues;
}

export interface AdminUsersGroupState {
  usersGroups: ImmutableArray<AdminUsersGroupInfoResp>;
  userGroupMembers: ImmutableArray<AdminUserGroupMember>;
  allActiveUsers: ImmutableArray<AdminUserGroupMember>;
  groupPermissions: ImmutableArray<AdminGroupPermissionItemResp>;
  uiItems: ImmutableArray<AdminGroupPermissionUiItemResp>;
}
