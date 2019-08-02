import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType } from 'types';

export interface AdminUsersGroupItemResp {
  id: number;
  institution_id: number|string;
  name: string;
}

export interface AdminUsersGroupEditableItemId {
    id: number;
}

export interface AdminUsersGroupEditableItemPrepared extends AdminUsersGroupEditableItemId  {
    institution_id: number|string;
    name: string;
}

export interface AdminUsersGroupItem    {
    id: number;
    institutionId: number|string;
    name: string;
}

export interface AdminUsersGroupEditableItem  {
    institutionId?: number|string;
    name?: string;
}

export interface AdminUsersGroupDataResp extends ResponseStatusType {
    users_group: Array<AdminUsersGroupItemResp>;
}

export interface AdminUserGroupMemberId {
    id: number;
}

export interface AdminUserGroupMember extends AdminUserGroupMemberId {
    username: string;
}

export interface AdminGroupPermissionItemResp {
    user_group_id: number;
    ui_item: string;
    permission: string;
}

export interface AdminGroupPermissionUiItemResp {
    ui_item: string;
}

export interface AdminGroupPermissionItem {
    userGroupId: number;
    uiItem: string;
    permission: string;
}
export interface AdminUserGroupMemberDataResp extends ResponseStatusType {
    user_group_members: Array<AdminUserGroupMember>;
}
export interface AdminGroupPermissionDataResp extends ResponseStatusType {
    group_permissions: Array<AdminGroupPermissionItemResp>;
}

export interface AdminUserGroupMemberDataResp extends ResponseStatusType {
    active_users: Array<AdminUserGroupMember>;
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
    usersGroups: ImmutableArray<AdminUsersGroupItemResp>;
    userGroupMembers: ImmutableArray<AdminUserGroupMember>;
    allActiveUsers: ImmutableArray<AdminUserGroupMember>;
    groupPermissions: ImmutableArray<AdminGroupPermissionItemResp>;
    uiItems: ImmutableArray<AdminGroupPermissionUiItemResp>;
}
