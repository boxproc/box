import { apiClientService } from 'services';

// import { usersData } from './mock';
import { AdminUserItem, UsersFilterPrepared } from './types';

// import { throttleUtil } from 'utils';

export const addAdminUser = (data: Partial<AdminUserItem>) =>
  apiClientService.post('ui/administration/users', { data });

export const updateAdminUser = (data: Partial<AdminUserItem>) =>
  apiClientService.put('ui/administration/users', { data });

export const filterAdminUsers = (data: Partial<UsersFilterPrepared>) =>
  // throttleUtil.getDataAfter(usersData, 500);
  apiClientService.post('ui/administration/users/get', { data });

export const getAdminAccessUsers = () =>
  apiClientService.post('ui/administration/users/get_change_allowed');
