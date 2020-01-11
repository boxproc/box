import { adminUserURLs } from 'consts';

import { apiClient } from 'services';

// import { usersData } from './mock';
import { AdminUserItem, UsersFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserURLs.CREATE, { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserURLs.UPDATE, { data });

export const filterAdminUsers = (data: Partial<UsersFilterPrepared>) =>
  // throttleUtil.getDataAfter(usersData, 500);
  apiClient.post(adminUserURLs.GET, { data });

export const getAdminAccessUsers = () =>
  apiClient.post(adminUserURLs.GET_ADMIN_ACCESS_USERS);
