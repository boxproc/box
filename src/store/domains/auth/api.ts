import { adminUserPathNames, authPathNames } from 'consts';

import { apiClient } from 'services';

import { AuthCode, AuthConfirm, AuthPassword, AuthUserId, PreparedAuthRequest } from './types';

// import {
//   // AuthResponseFullData,
//   // AuthResponseStepOneData,
//   AuthSecretKeyData,
//   SuccessResponseStatus,
// } from './mock';

// import { throttleUtil } from 'utils';

export const userLogin = (data: PreparedAuthRequest) =>
  // throttleUtil.getDataAfter(AuthResponseFullData, 500);
  apiClient.post(authPathNames.LOGIN, { data });

export const userLogout = () =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(authPathNames.LOGOUT);

export const getAuthKey = (data: AuthPassword) =>
  // throttleUtil.getDataAfter(AuthSecretKeyData, 500);
  apiClient.post(authPathNames.LOGIN, { data });

export const userConfirmAuthKey = (data: AuthConfirm) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post(authPathNames.LOGIN, { data });

export const enterAuthKey = (data: AuthCode) =>
  // throttleUtil.getDataAfter(AuthResponseFullData, 500);
  apiClient.post(authPathNames.LOGIN, { data });

export const changeAdminProfile = (data: AuthUserId) =>
  apiClient.post(adminUserPathNames.CHANGE_ADMIN_PROFILE, { data });
