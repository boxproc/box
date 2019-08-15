import { adminUserGroupsPathNames } from 'consts';

import { apiClient } from 'services';

import {
  AdminGroupPermissionItemResp,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupInfoPlainResp,
} from './types';

export const getAdminUsersGroup = () =>
  apiClient.post(adminUserGroupsPathNames.GET_USERS_GROUPS);

export const getAdminActiveUsers = (id: number) =>
  apiClient.post(adminUserGroupsPathNames.GET_ACTIVE_USERS, {
    data: { user_group_id: id },
  });

export const getAdminUserGroupMembers = (id: number) =>
  apiClient.post(adminUserGroupsPathNames.GET_GROUP_MEMBERS, {
    data: { id },
  });

export const getAdminUiItems = (id: number) =>
  apiClient.post(adminUserGroupsPathNames.GET_GROUP_UI_ITEMS, {
    data: { user_group_id: id },
  });

export const getAdminUserGroupPermissions = (id: number) =>
  apiClient.post(adminUserGroupsPathNames.GET_GROUP_PERMISSIONS, {
    data: { user_group_id: id },
  });

export const addAdminUsersGroup = (data: Partial<AdminUsersGroupInfoPlainResp>) =>
  apiClient.post(adminUserGroupsPathNames.CREATE_USERS_GROUP, { data });

export const updateAdminUsersGroup = (data: Partial<AdminUsersGroupInfoPlainResp>) =>
  apiClient.post(adminUserGroupsPathNames.UPDATE_USERS_GROUP, { data });

export const deleteAdminUserGroupMembers = (groupId: number, userId: number) =>
  apiClient.post(adminUserGroupsPathNames.DELETE_USERS_GROUP_MEMBER, {
    data: {
      user_group_id: groupId,
      user_id: userId,
    },
  });

export const deleteAdminUserGroupPermissions =
  (groupId: number, uiItem: string) =>
    apiClient.post(adminUserGroupsPathNames.DELETE_GROUP_PERMISSIONS, {
      data: {
        user_group_id: groupId,
        ui_item: uiItem,
      },
    });

export const addAdminActiveUsers = (data: Partial<AdminUserGroupMembersDeleteResp>) =>
  apiClient.post(adminUserGroupsPathNames.CREATE_USERS_GROUP_MEMBERS, {
    data,
  });

export const addAdminGroupPermission = (data: Partial<AdminGroupPermissionItemResp>) =>
  apiClient.post(adminUserGroupsPathNames.CREATE_GROUP_PERMISSIONS, { data });
