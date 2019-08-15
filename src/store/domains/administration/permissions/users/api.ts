import { apiClient } from 'services';

import { AdminUserItem, UsersFilterParamsPrepared } from './types';

export const getAdminUser = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/permissions/users/get');

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/permissions/users/create', { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/permissions/users/update', { data });

export const filterAdminUsers = (data: Partial<UsersFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/permissions/users/get', { data });
