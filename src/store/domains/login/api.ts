import { apiClientService } from 'services';

import {
  IAuthCode,
  IAuthConfirm,
  IAuthPassword,
  IAuthReqToSend,
  IAuthUserId,
  IChangePasswordToSend,
} from './types';

// import {
//   authResponseMock,
//   authSecretKeyMock,
//   successResponseMock,
//   userInstitutionsMock,
// } from './mock';

// import { throttleUtil } from 'utils';

/**
 * User login API
 */
export const userLogin = (data: IAuthReqToSend) =>
  // throttleUtil.getDataAfter(authResponseMock, 500);
  apiClientService.post('ui/auth/login', { data });

/**
 * User logout API
 */
export const userLogout = () =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/auth/logout');

/**
 * Get user auth key API
 */
export const getAuthKey = (data: IAuthPassword) =>
  // throttleUtil.getDataAfter(authSecretKeyMock, 500);
  apiClientService.post('ui/auth/login', { data });

/**
 * Confirm user 2fa registration key login API
 */
export const userConfirmAuthKey = (data: IAuthConfirm) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/auth/login', { data });

/**
 * User entre auth key API
 */
export const enterAuthKey = (data: IAuthCode) =>
  // throttleUtil.getDataAfter(authResponseMock, 500);
  apiClientService.post('ui/auth/login', { data });

/**
 * Change profile API
 */
export const changeProfile = (data: IAuthUserId) =>
  apiClientService.put('ui/administration/users/change_profile', { data });

/**
 * Change password API
 */
export const changePassword = (data: Partial<IChangePasswordToSend>) =>
  apiClientService.put('ui/administration/users/change_password', { data });

/**
 * Get user institutions API
 */
export const getUserInstitutions = () =>
  // throttleUtil.getDataAfter(userInstitutionsMock, 500);
  apiClientService.post('ui/institutions/get');
