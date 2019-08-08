import config from 'config';

export * from './uiItems';
export * from './formNames';
export * from './modalNames';
export * from './cookies';
export * from './types';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export const boxInstitutionName = 'BOX Institution';

export enum DateFormat {
  FORMAT = 'YYYY-MM-DD',
}

export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}
