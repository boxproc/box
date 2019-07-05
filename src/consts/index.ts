import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum formsNames {
  USER_LOGIN = 'userLogin',
}

export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
}

export enum cookiesExpires {
  USER_NAME_EXPIRES = 604800,
}

export enum modalNames {
  MESSAGE_MODAL = 'MessageModal',
}

export enum uiItemTypes {
  SCREEN = 'S',
  MENU_PARENT = 'M',
  MENU_CHILD = 'm',
  FORM = 'F',
}
