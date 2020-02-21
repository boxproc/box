import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { usersData } from './mock';
import { AdminUserItem, UsersFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(apiUrls.user.CREATE, { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post(apiUrls.user.UPDATE, { data });

export const filterAdminUsers = (data: Partial<UsersFilterPrepared>) =>
  // throttleUtil.getDataAfter(usersData, 500);
  apiClient.post(apiUrls.user.GET, { data });

export const getAdminAccessUsers = () =>
  apiClient.post(apiUrls.user.GET_ADMIN_ACCESS_USERS);
