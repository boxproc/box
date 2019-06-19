import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum formsConst {
  USER_LOGIN = 'user-login',
}
