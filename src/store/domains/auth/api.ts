// import { authPathNames } from 'consts';

// import { apiClient } from 'services';

import { PreparedAuthRequest } from './types';

import { AuthResponseData, AuthStepTwoResponseData, SuccessResponseStatus } from './mock';

import { throttleUtil } from 'utils';

export const userLogin = (data: PreparedAuthRequest) =>
  throttleUtil.getDataAfter(AuthResponseData, 500);
// apiClient.post(authPathNames.LOGIN, { data });

export const userLogout = () =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post(authPathNames.LOGOUT);

export const getAuthKey = (data: string) =>
  throttleUtil.getDataAfter(AuthStepTwoResponseData, 500);
// apiClient.post(authPathNames.CONFIRM_IDENTITY, { data });

export const userConfirmAuthKey = () =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post(authPathNames.CONFIRM_AUTH_KEY);
