import { apiClient } from 'services';

import {
  AdminGroupPermissionRequest,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupItemResp,
} from './types';

export const getAdminUsersGroup = () =>
  apiClient.post('/ui/administration/group/get');

export const getAdminActiveUsers = (id: number) =>
  apiClient.post('/ui/administration/group/active_users', {
    data: { user_group_id: id },
  });

export const getAdminUserGroupMembers = (id: number) =>
  apiClient.post('/ui/administration/group/get_users', {
    data: { id },
  });

export const getAdminUiItems = (id: number) =>
  apiClient.post('ui/administration/permissions/group_permissions_ui_items/get', {
    data: { user_group_id: id },
  });

export const getAdminUserGroupPermissions = (id: number) =>
  apiClient.post('ui/administration/permissions/group_permissions/get', {
    data: { user_group_id: id },
  });

export const addAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClient.post('/ui/administration/group', { data });

export const updateAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClient.put('/ui/administration/group', { data });

export const deleteAdminUserGroupMembers = (id: number, userId: number) =>
  apiClient.delete(`/ui/administration/group/user/${userId}/${id}`);

export const deleteAdminUserGroupPermissions =
  (id: number, uiItem: string) =>
    apiClient.post('ui/administration/permissions/group_permissions/delete', {
      data: {
        user_group_id: id,
        ui_item: uiItem,
      },
    });

export const addAdminActiveUsers = (data: Partial<AdminUserGroupMembersDeleteResp>) =>
  apiClient.post('/ui/administration/group/user', { data });

export const addAdminGroupPermission = (data: Partial<AdminGroupPermissionRequest>) =>
  apiClient.post('ui/administration/permissions/group_permissions/create', { data });
