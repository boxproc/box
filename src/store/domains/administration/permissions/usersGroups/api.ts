import { apiClient } from 'services';

import { AdminUsersGroupEditableItemPrepared } from './types';

export const getAdminUsersGroup = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/permissions/users_group/get');

export const addAdminUsersGroup = (data: AdminUsersGroupEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users_group/create', { data });

export const updateAdminUsersGroup = (data: AdminUsersGroupEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/permissions/users_group/update', { data });
