import { statusTypesConst, yesNoTypesConst } from 'consts';

import { AuthRequest, AuthResponse, PreparedAuthRequest, UserData } from './types';

import { storageUtil } from 'utils';

export const prepareAuthValues = (formData: AuthRequest): PreparedAuthRequest => {
  const { userName, password, rememberMe } = formData;

  return ({
    username: userName,
    password,
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

export const setUserDataToStorage = (data: UserData, isChangingProfile?: boolean) => {
  if (data) {
    const is2faLogin = data.status === statusTypesConst.ACTIVE
      && data.requires2faFlag === yesNoTypesConst.YES
      && !isChangingProfile;

    const isRegistrationPending = data.status === statusTypesConst.REGISTRATION_PENDING;

    storageUtil.setUserData(data);

    // storageUtil.setSessionId(data.sessionId); // for demo

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
