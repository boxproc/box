import { apiClient } from 'services';

import { AdminUsersGroupEditableItemPrepared } from './types';

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

export const addAdminActiveUsers = (groupId: number, userId: number | string) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users_group_members/create', {
    data: {
      user_group_id: groupId,
      user_id: userId,
    },
  });
