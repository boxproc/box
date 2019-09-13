import { adminUserPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminUserItem, UsersFilterParamsPrepared } from './types';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserPathNames.CREATE, { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserPathNames.UPDATE, { data });

export const filterAdminUsers = (data: Partial<UsersFilterParamsPrepared>) =>
  apiClient.post(adminUserPathNames.GET, { data });

export const getAdminAccessUsers = () =>
  apiClient.post(adminUserPathNames.GET_ADMIN_ACCESS_USERS);
