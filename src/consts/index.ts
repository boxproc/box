import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum formsNames {
  USER_LOGIN = 'userLogin',
}

export enum cookiesNames {
  SESSION_ID = 'sessionId',
  USER_NAME = 'userName',
}

export enum cookiesExpires {
  USER_NAME_EXPIRES = 604800,
}
