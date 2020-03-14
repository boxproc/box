import config from 'config';

import { statusConst, yesNoConst } from 'consts';

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
    const is2faLogin = data.status === statusConst.ACTIVE
      && data.requires2faFlag === yesNoConst.YES
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
