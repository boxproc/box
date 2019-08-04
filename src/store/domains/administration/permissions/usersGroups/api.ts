import { apiClient } from 'services';

import { AdminGroupPermissionItemResp, AdminUsersGroupEditableItemPrepared } from './types';

export const getAdminUsersGroup = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);

  apiClient.post('/ui/administration/permissions/users_group/get');

export const getAdminActiveUsers = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/permissions/users_group_members/get_active_users');

export const getAdminUserGroupMembers = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users_group_members/get', {
    data: { id },
  });

export const getAdminUiItems = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/group_permissions_ui_items/get', {
    data: {user_group_id: id },
  });

export const getAdminUserGroupPermissions = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/group_permissions/get', {
    data: { user_group_id: id },
  });

export const addAdminUsersGroup = (data: AdminUsersGroupEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permission/users_group/create', { data });

export const updateAdminUsersGroup = (data: AdminUsersGroupEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/permissions/users_group/update', { data });

export const deleteAdminUserGroupMembers = (groupId: number, userId: number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users_group_members/delete', {
    data: {
      user_group_id: groupId,
      user_id: userId,
    },
  });

export const deleteAdminUserGroupPermissions =
 (groupId: number, uiItem: string, permission: string) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/group_permissions/delete', {
    data: {
      user_group_id: groupId,
      ui_item: uiItem,
      permission,
    },
  });

export const addAdminActiveUsers = (groupId: number, userId: number | string) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users_group_members/create', {
    data: {
      user_group_id: groupId,
      user_id: userId,
    },
  });

export const addAdminGroupPermission = (data: Partial<AdminGroupPermissionItemResp>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/group_permissions/create', {data});
