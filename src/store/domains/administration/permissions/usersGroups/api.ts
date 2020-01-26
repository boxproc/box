import { adminUserGroupsURLs } from 'consts';

import { apiClient } from 'services';

import {
  AdminGroupPermissionItemResp,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupItemResp,
} from './types';

export const getAdminUsersGroup = () =>
  apiClient.post(adminUserGroupsURLs.GET_USERS_GROUPS);

export const getAdminActiveUsers = (id: number) =>
  apiClient.post(adminUserGroupsURLs.GET_ACTIVE_USERS, {
    data: { user_group_id: id },
  });

export const getAdminUserGroupMembers = (id: number) =>
  apiClient.post(adminUserGroupsURLs.GET_GROUP_MEMBERS, {
    data: { id },
  });

export const getAdminUiItems = (id: number) =>
  apiClient.post(adminUserGroupsURLs.GET_GROUP_UI_ITEMS, {
    data: { user_group_id: id },
  });

export const getAdminUserGroupPermissions = (id: number) =>
  apiClient.post(adminUserGroupsURLs.GET_GROUP_PERMISSIONS, {
    data: { user_group_id: id },
  });

export const addAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClient.post(adminUserGroupsURLs.CREATE_USERS_GROUP, { data });

export const updateAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClient.post(adminUserGroupsURLs.UPDATE_USERS_GROUP, { data });

export const deleteAdminUserGroupMembers = (id: number, userId: number) =>
  apiClient.post(adminUserGroupsURLs.DELETE_USERS_GROUP_MEMBER, {
    data: {
      user_group_id: id,
      user_id: userId,
    },
  });

export const deleteAdminUserGroupPermissions =
  (id: number, uiItem: string) =>
    apiClient.post(adminUserGroupsURLs.DELETE_GROUP_PERMISSIONS, {
      data: {
        user_group_id: id,
        ui_item: uiItem,
      },
    });

export const addAdminActiveUsers = (data: Partial<AdminUserGroupMembersDeleteResp>) =>
  apiClient.post(adminUserGroupsURLs.CREATE_USERS_GROUP_MEMBERS, { data });

export const addAdminGroupPermission = (data: Partial<AdminGroupPermissionItemResp>) =>
  apiClient.post(adminUserGroupsURLs.CREATE_GROUP_PERMISSIONS, { data });
