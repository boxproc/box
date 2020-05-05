import {
  cookiesExpiresConst,
  cookiesNamesConst,
  sessionStorageNamesConst,
  yesNoConst,
} from 'consts';
import { apiClientService } from 'services';
import { IAuthUserData } from 'store';
import { cookiesUtil } from 'utils';

export const clear = () => {
  const lastScreen = getLastScreenPathname();

  sessionStorage.clear();
  apiClientService.clear();

  if (lastScreen) {
    sessionStorage.setItem(sessionStorageNamesConst.LAST_SCREEN_PATHNAME, lastScreen);
  }
};

/**
 * 2FA Registration flag
 */

export const setRegistrationPendingFlag = () =>
  sessionStorage.setItem(sessionStorageNamesConst.AUTH_REGISTRATION_PENDING, yesNoConst.YES);

export const getRegistrationPendingFlag = () =>
  sessionStorage.getItem(sessionStorageNamesConst.AUTH_REGISTRATION_PENDING);

/**
 * Auth flags
 */

export const setAuthPendingFlag = () =>
  sessionStorage.setItem(sessionStorageNamesConst.AUTH_PENDING, yesNoConst.YES);

export const setLoginFlag = (sessionId: string) => {
  if (sessionId) {
    apiClientService.set(cookiesNamesConst.SESSION_ID, sessionId);
  }
  sessionStorage.removeItem(sessionStorageNamesConst.AUTH_PENDING);
  sessionStorage.setItem(sessionStorageNamesConst.IS_LOGIN, yesNoConst.YES);
};

export const getLoginFlag = () => sessionStorage.getItem(sessionStorageNamesConst.IS_LOGIN);

export const setSessionId = (id: string) => cookiesUtil.set(cookiesNamesConst.SESSION_ID, id, {
  expires: cookiesExpiresConst.TEST_SESSION_ID,
});

export const getSessionId = () => cookiesUtil.get(cookiesNamesConst.SESSION_ID);

/**
 * First screen flag
 */

export const setFirstScreenFlag = () =>
  sessionStorage.setItem(sessionStorageNamesConst.FIRST_SCREEN, yesNoConst.YES);

export const removeFirstScreenFlag = () =>
  sessionStorage.removeItem(sessionStorageNamesConst.FIRST_SCREEN);

export const getFirstScreenFlag = () =>
  sessionStorage.getItem(sessionStorageNamesConst.FIRST_SCREEN);

/**
 * User data
 */

export const setUserData = (data: IAuthUserData) =>
  sessionStorage.setItem(sessionStorageNamesConst.USER, JSON.stringify({
    firstName: data.firstName,
    lastName: data.lastName,
    username: data.username,
    lastActivity: data.lastActivity,
    status: data.status,
    requires2faFlag: data.requires2faFlag,
    masterInstitutionFlag: data.masterInstitutionFlag,
    changeProfileAllowedFlag: data.changeProfileAllowedFlag,
  }));

export const getUserData = () => JSON.parse(sessionStorage.getItem(sessionStorageNamesConst.USER));

export const getUserName = () => cookiesUtil.get(cookiesNamesConst.USER_NAME);

/**
 * Last screen
 */

export const setLastScreenPathname = (pathname: string) => {
  const preparedPath = pathname.split('/').splice(2, pathname.length - 1).join('/');

  if (preparedPath && !preparedPath.includes('login')) {
    sessionStorage.setItem(sessionStorageNamesConst.LAST_SCREEN_PATHNAME, preparedPath);
  }
};

export const removeLastScreenPathname = () =>
  sessionStorage.removeItem(sessionStorageNamesConst.LAST_SCREEN_PATHNAME);

export const getLastScreenPathname = () =>
  sessionStorage.getItem(sessionStorageNamesConst.LAST_SCREEN_PATHNAME);
