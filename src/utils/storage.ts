import {
  cookiesExpiresConst,
  cookiesNamesConst,
  sessionStorageNamesConst,
  yesNoConst,
} from 'consts';

import { UserData } from 'store/domains';

import { apiClientService } from 'services';

import { cookiesUtil } from 'utils';

export const clear = () => {
  sessionStorage.clear();
  apiClientService.clear();
};

export const setRegistrationPendingFlag = () =>
  sessionStorage.setItem(sessionStorageNamesConst.AUTH_REGISTRATION_PENDING, yesNoConst.YES);

export const getRegistrationPendingFlag = () =>
  sessionStorage.getItem(sessionStorageNamesConst.AUTH_REGISTRATION_PENDING);

export const setAuthPendingFlag = () =>
  sessionStorage.setItem(sessionStorageNamesConst.AUTH_PENDING, yesNoConst.YES);

export const setLoginStatus = (sessionId: string) => {
  if (sessionId) {
    apiClientService.set(cookiesNamesConst.SESSION_ID, sessionId);
  }
  sessionStorage.removeItem(sessionStorageNamesConst.AUTH_PENDING);
  sessionStorage.setItem(sessionStorageNamesConst.IS_LOGIN, yesNoConst.YES);
};

export const setFirstScreenFlag = () =>
  sessionStorage.setItem(sessionStorageNamesConst.FIRST_SCREEN, yesNoConst.YES);

export const removeFirstScreenFlag = () =>
  sessionStorage.removeItem(sessionStorageNamesConst.FIRST_SCREEN);

export const getFirstScreenFlag = () =>
  sessionStorage.getItem(sessionStorageNamesConst.FIRST_SCREEN);

export const getLoginFlag = () => sessionStorage.getItem(sessionStorageNamesConst.IS_LOGIN);

export const setUserData = (data: UserData) =>
  sessionStorage.setItem(sessionStorageNamesConst.USER, JSON.stringify(data));

export const getUserData = () => JSON.parse(sessionStorage.getItem(sessionStorageNamesConst.USER));

export const setSessionId = (id: string) => cookiesUtil.set(cookiesNamesConst.SESSION_ID, id, {
  expires: cookiesExpiresConst.TEST_SESSION_ID,
});

export const getSessionId = () => cookiesUtil.get(cookiesNamesConst.SESSION_ID);

export const getUserName = () => cookiesUtil.get(cookiesNamesConst.USER_NAME);
