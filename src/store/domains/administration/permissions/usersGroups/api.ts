import { apiClientService } from 'services';

import {
  AdminGroupPermissionRequest,
  AdminUserGroupMembersDeleteResp,
  AdminUsersGroupItemResp,
} from './types';

export const getAdminUsersGroup = () =>
  apiClientService.post('/ui/administration/group/get');

export const getAdminActiveUsers = (id: number) =>
  apiClientService.post('/ui/administration/group/active_users', {
    data: { user_group_id: id },
  });

export const getAdminUserGroupMembers = (id: number) =>
  apiClientService.post('/ui/administration/group/get_users', {
    data: { id },
  });

export const getAdminUiItems = (id: number) =>
  apiClientService.post('ui/items/get', {
    data: { user_group_id: id },
  });

export const getAdminUserGroupPermissions = (id: number) =>
  apiClientService.post('ui/administration/permissions/group_permissions/get', {
    data: { user_group_id: id },
  });

export const addAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClientService.post('/ui/administration/group', { data });

export const updateAdminUsersGroup = (data: Partial<AdminUsersGroupItemResp>) =>
  apiClientService.put('/ui/administration/group', { data });

export const deleteAdminUserGroupMembers = (id: number, userId: number) =>
  apiClientService.delete(`/ui/administration/group/user/${userId}/${id}`);

export const deleteAdminUserGroupPermissions =
  (id: number, uiItem: string) =>
    apiClientService.post('ui/administration/permissions/group_permissions/delete', {
      data: {
        user_group_id: id,
        ui_item: uiItem,
      },
    });

export const addAdminActiveUsers = (data: Partial<AdminUserGroupMembersDeleteResp>) =>
  apiClientService.post('/ui/administration/group/user', { data });

export const addAdminGroupPermission = (data: Partial<AdminGroupPermissionRequest>) =>
  apiClientService.post('ui/administration/permissions/group_permissions/create', { data });
