export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
}

export enum sessionStorageNames {
  USER = 'user',
  FIRST_SCREEN = 'firstScreen',
  AUTH_PENDING = 'authPending',
  AUTH_REGISTRATION_PENDING = 'authRegistrationPending',
  IS_LOGIN = 'isLogin',
  REQUIRES_2FA_FLAG = 'requires2faFlag',
}

export const cookiesExpires = {
  MONTH: 2592000,
  TEST_SESSION_ID: 600,
};
