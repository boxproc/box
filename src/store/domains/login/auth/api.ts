import { apiUrls } from 'consts';

import { apiClient } from 'services';

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
  apiClient.post(apiUrls.auth.LOGIN, { data });

export const userLogout = () =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.auth.LOGOUT);

export const getAuthKey = (data: AuthPassword) =>
  // throttleUtil.getDataAfter(authSecretKeyData, 500);
  apiClient.post(apiUrls.auth.LOGIN, { data });

export const userConfirmAuthKey = (data: AuthConfirm) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.auth.LOGIN, { data });

export const enterAuthKey = (data: AuthCode) =>
  // throttleUtil.getDataAfter(authResponseFullData, 500);
  apiClient.post(apiUrls.auth.LOGIN, { data });

export const changeAdminProfile = (data: AuthUserId) =>
  apiClient.post(apiUrls.user.CHANGE_PROFILE, { data });

export const changePassword = (data: Partial<ChangePasswordDataPrepared>) =>
  apiClient.post(apiUrls.user.CHANGE_PASSWORD, { data });
