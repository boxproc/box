import { apiUrls } from 'consts';

import { apiClient } from 'services';

import {
  AdminGroupPermissionRequest,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupItemResp,
} from './types';

export const getAdminUsersGroup = () =>
  apiClient.post(apiUrls.userGroups.GET_USERS_GROUPS);

export const getAdminActiveUsers = (id: number) =>
  apiClient.post(apiUrls.userGroups.GET_ACTIVE_USERS, {
    data: { user_group_id: id },
  });

export const getAdminUserGroupMembers = (id: number) =>
  apiClient.post(apiUrls.userGroups.GET_GROUP_MEMBERS, {
    data: { id },
  });

export const getAdminUiItems = (id: number) =>
  apiClient.post(apiUrls.userGroups.GET_GROUP_UI_ITEMS, {
    data: { user_group_id: id },
  });

export const getAdminUserGroupPermissions = (id: number) =>
  apiClient.post(apiUrls.userGroups.GET_GROUP_PERMISSIONS, {
    data: { user_group_id: id },
  });

export const addAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClient.post(apiUrls.userGroups.CREATE_USERS_GROUP, { data });

export const updateAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClient.post(apiUrls.userGroups.UPDATE_USERS_GROUP, { data });

export const deleteAdminUserGroupMembers = (id: number, userId: number) =>
  apiClient.post(apiUrls.userGroups.DELETE_USERS_GROUP_MEMBER, {
    data: {
      user_group_id: id,
      user_id: userId,
    },
  });

export const deleteAdminUserGroupPermissions =
  (id: number, uiItem: string) =>
    apiClient.post(apiUrls.userGroups.DELETE_GROUP_PERMISSIONS, {
      data: {
        user_group_id: id,
        ui_item: uiItem,
      },
    });

export const addAdminActiveUsers = (data: Partial<AdminUserGroupMembersDeleteResp>) =>
  apiClient.post(apiUrls.userGroups.CREATE_USERS_GROUP_MEMBERS, { data });

export const addAdminGroupPermission = (data: Partial<AdminGroupPermissionRequest>) =>
  apiClient.post(apiUrls.userGroups.CREATE_GROUP_PERMISSIONS, { data });
