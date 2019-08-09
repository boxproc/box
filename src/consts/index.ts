import config from 'config';

export * from './uiItems';
export * from './formNames';
export * from './modalNames';
export * from './cookies';
export * from './types';

export const basePath = config.isDevelopment ? '/' : '/ui/';

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
