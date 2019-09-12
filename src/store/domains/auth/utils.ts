import { cookiesNames, sessionStorageNames, yesNoTypes } from 'consts';

import { AuthRequest, PreparedAuthRequest } from './types';

import { apiClient } from 'services';

import { cookiesUtil } from 'utils';

export const prepareAuthValues =
  (formData: AuthRequest): PreparedAuthRequest => {
    const { userName, password, rememberMe } = formData;

    return ({
      username: userName,
      password,
      remember_me: rememberMe,
    });
  };

export const setRegistrationPendingStatusToStorage = () => {
  sessionStorage.setItem(sessionStorageNames.AUTH_REGISTRATION_PENDING, yesNoTypes.YES);
};

export const setAuthPendingStatusToStorage = () => {
  sessionStorage.setItem(sessionStorageNames.AUTH_PENDING, yesNoTypes.YES);
};

export const setLoginStatusToStorage = (sessionId: string) => {
  if (sessionId) {
    apiClient.set('session_id', sessionId);
  }
  sessionStorage.removeItem(sessionStorageNames.AUTH_PENDING);
  sessionStorage.setItem(sessionStorageNames.IS_LOGIN, yesNoTypes.YES);
};

export const clearStorage = () => {
  sessionStorage.clear();
  apiClient.clear();
};

export const setSessionIdToStorage = (sessionId: string) => {
  cookiesUtil.set(cookiesNames.SESSION_ID, sessionId, {
    expires: 360,
  });
};
