import { adminUserPathNames } from 'consts';

import { apiClient } from 'services';

// import { usersData } from './mock';
import { AdminUserItem, UsersFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserPathNames.CREATE, { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(adminUserPathNames.UPDATE, { data });

export const filterAdminUsers = (data: Partial<UsersFilterPrepared>) =>
  // throttleUtil.getDataAfter(usersData, 500);
  apiClient.post(adminUserPathNames.GET, { data });

export const getAdminAccessUsers = () =>
  apiClient.post(adminUserPathNames.GET_ADMIN_ACCESS_USERS);
