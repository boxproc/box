// import { authPathNames } from 'consts';

// import { apiClient } from 'services';

import { PreparedAuthRequest } from './types';

import {
  AuthResponseFullData,
  AuthResponseStepOneData,
  AuthSecretKeyData,
  SuccessResponseStatus,
} from './mock';

import { throttleUtil } from 'utils';

export const userLogin = (data: PreparedAuthRequest) =>
  throttleUtil.getDataAfter(AuthResponseStepOneData, 500);
// apiClient.post(authPathNames.LOGIN, { data });

export const userLogout = () =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post(authPathNames.LOGOUT);

export const getAuthKey = (data: string) =>
  throttleUtil.getDataAfter(AuthSecretKeyData, 500);
// apiClient.post(authPathNames.GET_AUTH_KEY, { data });

export const userConfirmAuthKey = () =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post(authPathNames.CONFIRM_AUTH_KEY);

export const enterAuthKey = (data: string) =>
  throttleUtil.getDataAfter(AuthResponseFullData, 500);
// apiClient.post(authPathNames.ENTER_AUTH_KEY, { data });
