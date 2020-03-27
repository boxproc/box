import { apiClientService } from 'services';

import {
  IUsersGroupData,
  IUsersGroupMemberDeleteReqToSend,
  IUsersGroupPermissionReq,
} from './types';

/**
 * Get users groups API
 */
export const getUsersGroup = () => apiClientService.post('/ui/administration/group/get');

/**
 * Get institution users which are do not belong to the users group API
 */
export const getActiveUsers = (id: number) =>
  apiClientService.post('/ui/administration/group/active_users', {
    data: { user_group_id: id },
  });

/**
 * Get users group members API
 */
export const getUserGroupMembers = (id: number) =>
  apiClientService.post('/ui/administration/group/get_users', {
    data: { id },
  });

/**
 * Get UI items which are do not belong to the users group API
 */
export const getUiItems = (id: number) => apiClientService.post('ui/items/get', {
  data: { user_group_id: id },
});

/**
 * Get users group permissions API
 */
export const getUserGroupPermissions = (id: number) =>
  apiClientService.post('ui/administration/permissions/get', {
    data: { user_group_id: id },
  });

/**
 * Add users group API
 */
export const addUsersGroup = (data: Partial<IUsersGroupData>) =>
  apiClientService.post('/ui/administration/group', { data });

/**
 * Update users group API
 */
export const updateUsersGroup = (data: Partial<IUsersGroupData>) =>
  apiClientService.put('/ui/administration/group', { data });

/**
 * Delete member from the users group API
 */
export const deleteUserGroupMembers = (id: number, userId: number) =>
  apiClientService.delete(`/ui/administration/group/user/${userId}/${id}`);

/**
 * Delete UI item from the users group API
 */
export const deleteUserGroupPermissions = (id: number, uiItem: string) =>
  apiClientService.delete(`ui/administration/permissions/${id}/${uiItem}`);

/**
 * Add user to the users group API
 */
export const addActiveUsers = (data: Partial<IUsersGroupMemberDeleteReqToSend>) =>
  apiClientService.post('/ui/administration/group/user', { data });

/**
 * Add UI item to the users group API
 */
export const addGroupPermission = (data: Partial<IUsersGroupPermissionReq>) =>
  apiClientService.post('ui/administration/permissions', { data });
