import { apiClient } from 'services';

import { AdminUserEditableItemPrepared } from './types';

export const getAdminUser = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/permissions/users/get');

export const addAdminUser = (data: AdminUserEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users/create', { data });

export const updateAdminUser = (data: AdminUserEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/permissions/users/update', { data }) ;
