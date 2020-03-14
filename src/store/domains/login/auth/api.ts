import { apiClientService } from 'services';

import {
  AuthCode,
  AuthConfirm,
  AuthPassword,
  AuthUserId,
  ChangePasswordDataPrepared,
  PreparedAuthRequest,
} from './types';

// import { authResponseFullData, authSecretKeyData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

export const userLogin = (data: PreparedAuthRequest) =>
  // throttleUtil.getDataAfter(authResponseFullData, 500);
  apiClientService.post('ui/auth/login', { data });

export const userLogout = () =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/auth/logout');

export const getAuthKey = (data: AuthPassword) =>
  // throttleUtil.getDataAfter(authSecretKeyData, 500);
  apiClientService.post('ui/auth/login', { data });

export const userConfirmAuthKey = (data: AuthConfirm) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/auth/login', { data });

export const enterAuthKey = (data: AuthCode) =>
  // throttleUtil.getDataAfter(authResponseFullData, 500);
  apiClientService.post('ui/auth/login', { data });

export const changeAdminProfile = (data: AuthUserId) =>
  apiClientService.put('ui/administration/users/change_profile', { data });

export const changePassword = (data: Partial<ChangePasswordDataPrepared>) =>
  apiClientService.put('ui/administration/users/change_password', { data });
