import config from 'config';

import { statusTypesCodes, yesNoTypesCodes } from 'consts';

import {
  AuthRequest,
  AuthResponse,
  ChangePasswordData,
  ChangePasswordDataPrepared,
  PreparedAuthRequest,
  UserData,
} from './types';

import { storageUtil } from 'utils';

export const prepareAuthValues = (formData: AuthRequest): PreparedAuthRequest => {
  const { loginUsername, loginPassword, rememberMe } = formData;

  return ({
    username: loginUsername,
    password: loginPassword,
    remember_me: rememberMe,
  });
};

export const prepareUserDataToRender = (data: AuthResponse): UserData => {
  if (!data) {
    return null;
  }
  return {
    sessionId: data.session_id,
    firstName: data.first_name,
    lastName: data.last_name,
    username: data.username,
    lastActivity: data.last_activity,
    status: data.status,
    requires2faFlag: data.requires_2fa_flag,
  };
};

export const prepareChangePasswordDataToSend = (data: Partial<ChangePasswordData>):
  Partial<ChangePasswordDataPrepared> => {
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

export const setUserDataToStorage = (data: UserData, isChangingProfile?: boolean) => {
  if (data) {
    const is2faLogin = data.status === statusTypesCodes.ACTIVE
      && data.requires2faFlag === yesNoTypesCodes.YES
      && !isChangingProfile;

    const isRegistrationPending = data.status === statusTypesCodes.REGISTRATION_PENDING;

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
