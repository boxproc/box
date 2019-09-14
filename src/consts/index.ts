export * from './uiItems';
export * from './formNames';
export * from './modalNames';
export * from './storage';
export * from './types';
export * from './links';
export * from './pathNames';
export * from './messages';
export * from './iconNames';

export const boxInstitutionName = 'BOX Institution';

export enum dateFormat {
  FORMAT = 'DD/MM/YYYY',
  DATE_TIME_FORMAT = 'DD/MM/YYYY hh:mm:ss',
}

export enum maskFormat {
  DATE_TIME = '99/99/9999 99:99:99',
  PHONE = '+99 99 9999 9999',
}

export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}

export enum statusCodes {
  NO_SESSION = 3,
  USER_NOT_AUTH = 4,
  SESSION_TIMEOUT = 5,
}

export enum usernames {
  ADMIN = 'admin',
}
