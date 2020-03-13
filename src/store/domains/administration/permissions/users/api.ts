import { apiClient } from 'services';

// import { usersData } from './mock';
import { AdminUserItem, UsersFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.post('ui/administration/users', { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClient.put('ui/administration/users', { data });

export const filterAdminUsers = (data: Partial<UsersFilterPrepared>) =>
  // throttleUtil.getDataAfter(usersData, 500);
  apiClient.post('ui/administration/users/get', { data });

export const getAdminAccessUsers = () =>
  apiClient.post('ui/administration/users/get_change_allowed');
