import { apiClientService } from 'services';
// import { usersMock } from './mock';
import { IUserData, IUsersFilterToSend } from './types';
// import { throttleUtil } from 'utils';

/**
 * Add user API
 */
export const addUser = (data: Partial<IUserData>) =>
  apiClientService.post('ui/administration/users', { data });

/**
 * Update user API
 */
export const updateUser = (data: Partial<IUserData>) =>
  apiClientService.put('ui/administration/users', { data });

/**
 * Filter users API
 */
export const filterUsers = (data: Partial<IUsersFilterToSend>) =>
  // throttleUtil.getDataAfter(usersMock, 500);
  apiClientService.post('ui/administration/users/get', { data });

/**
 * Get usernames API for changing profile
 */
export const getUsernames = () =>
  apiClientService.post('ui/administration/users/get_change_allowed');
