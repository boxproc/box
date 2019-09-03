import { adminUserNames } from 'consts';

import { apiClient } from 'services';

import { AdminUserItem, UsersFilterParamsPrepared } from './types';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserNames.CREATE, { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserNames.UPDATE, { data });

export const filterAdminUsers = (data: Partial<UsersFilterParamsPrepared>) =>
  apiClient.post(adminUserNames.GET, { data });
