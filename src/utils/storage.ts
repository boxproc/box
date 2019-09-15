import { cookiesNames, sessionStorageNames, yesNoTypesConst } from 'consts';

import { UserData } from 'store/domains';

import { apiClient } from 'services';

import { cookiesUtil } from 'utils';

export const clear = () => {
  sessionStorage.clear();
  cookiesUtil.remove(cookiesNames.SESSION_ID);
  apiClient.clear();
  // urlUtil.openLocation(basePath);
};

export const setRegistrationPendingFlag = () =>
  sessionStorage.setItem(sessionStorageNames.AUTH_REGISTRATION_PENDING, yesNoTypesConst.YES);

export const getRegistrationPendingFlag = () =>
  sessionStorage.getItem(sessionStorageNames.AUTH_REGISTRATION_PENDING);

export const setAuthPendingFlag = () =>
  sessionStorage.setItem(sessionStorageNames.AUTH_PENDING, yesNoTypesConst.YES);

export const setLoginStatus = (sessionId: string) => {
  if (sessionId) {
    apiClient.set(cookiesNames.SESSION_ID, sessionId);
  }
  sessionStorage.removeItem(sessionStorageNames.AUTH_PENDING);
  sessionStorage.setItem(sessionStorageNames.IS_LOGIN, yesNoTypesConst.YES);
};

export const setFirstScreenFlag = () =>
  sessionStorage.setItem(sessionStorageNames.FIRST_SCREEN, yesNoTypesConst.YES);

export const removeFirstScreenFlag = () =>
  sessionStorage.removeItem(sessionStorageNames.FIRST_SCREEN);

export const getFirstScreenFlag = () => sessionStorage.getItem(sessionStorageNames.FIRST_SCREEN);

export const getLoginFlag = () => sessionStorage.getItem(sessionStorageNames.IS_LOGIN);

export const setUserData = (data: UserData) =>
  sessionStorage.setItem(sessionStorageNames.USER, JSON.stringify(data));

export const getUserData = () => JSON.parse(sessionStorage.getItem(sessionStorageNames.USER));

export const setSessionId = (id: string) => cookiesUtil.set(cookiesNames.SESSION_ID, id, {
  expires: 360,
});

export const getSessionId = () => cookiesUtil.get(cookiesNames.SESSION_ID);

export const getUserName = () => cookiesUtil.get(cookiesNames.USER_NAME);
