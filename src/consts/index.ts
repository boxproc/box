export * from './uiItems';
export * from './formNames';
export * from './modalNames';
export * from './storage';
export * from './types';
export * from './links';
export * from './apiPathNames';
export * from './messages';
export * from './iconNames';

export const boxInstitutionName = 'BOX Institution';

export enum dateFormat {
  DATE = 'DD/MM/YYYY',
  DATE_TIME = 'DD/MM/YYYY hh:mm:ss',
}

export enum maskFormat {
  DATE = '99/99/9999',
  DATE_TIME = '99/99/9999 99:99:99',
  PHONE = '+99 99 9999 9999',
}

export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}

export enum statusCodes {
  NO_SESSION_ID = 1,
  NO_SESSION = 3,
  USER_NOT_AUTH = 4,
  SESSION_TIMEOUT = 5,
  INCORRECT_PASSWORD = 15,
}

export enum usernames {
  ADMIN = 'admin',
}
