import config from 'config';

import { sessionStorageNamesConst, statusConst, yesNoConst } from 'consts';

import {
  IAuthReq,
  IAuthReqToSend,
  IAuthResp,
  IAuthUserData,
  IChangePassword,
  IChangePasswordToSend,
} from './types';

import { storageUtil } from 'utils';

export const prepareAuthData = (data: IAuthReq): IAuthReqToSend => {
  if (!data) {
    return null;
  }

  const { loginUsername, loginPassword, rememberMe } = data;

  return ({
    username: loginUsername,
    password: loginPassword,
    remember_me: rememberMe,
  });
};

export const prepareUserDataToRender = (data: IAuthResp): IAuthUserData => {
  if (!data) {
    return null;
  }

  const {
    session_id,
    first_name,
    last_name,
    username,
    last_activity,
    status,
    requires_2fa_flag,
    master_institution_flag,
    change_profile_allowed_flag,
  } = data;

  return {
    sessionId: session_id,
    firstName: first_name,
    lastName: last_name,
    username,
    lastActivity: last_activity,
    status,
    requires2faFlag: requires_2fa_flag,
    masterInstitutionFlag: master_institution_flag,
    changeProfileAllowedFlag: change_profile_allowed_flag,
  };
};

export const prepareChangePasswordDataToSend = (data: Partial<IChangePassword>):
  Partial<IChangePasswordToSend> => {
  if (!data) {
    return null;
  }

  const { currentPassword, newPassword, code } = data;

  return {
    current_password: currentPassword,
    new_password: newPassword,
    code: code ? code : '0',
  };
};

export const setUserDataToStorage = (data: IAuthUserData, isChangingProfile?: boolean) => {
  if (data) {
    const isAuthPending = sessionStorage.getItem(sessionStorageNamesConst.AUTH_PENDING);
    const is2faLogin = data.status === statusConst.ACTIVE
      && data.requires2faFlag === yesNoConst.YES
      && !isAuthPending
      && !isChangingProfile;

    const isRegistrationPending = data.status === statusConst.REGISTRATION_PENDING;

    storageUtil.setUserData(data);

    // only for development mode
    if (config.isDevelopment) {
      storageUtil.setSessionId(data.sessionId);
    }

    if (is2faLogin) {
      storageUtil.setAuthPendingFlag();
    } else {
      if (isRegistrationPending) {
        storageUtil.setRegistrationPendingFlag();
      }
      storageUtil.setLoginStatus(data.sessionId);
      storageUtil.setFirstScreenFlag();
    }
  }
};
