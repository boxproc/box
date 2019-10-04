export * from './uiItems';
export * from './formNames';
export * from './modalNames';
export * from './storage';
export * from './codes';
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

export enum usernames {
  ADMIN = 'admin',
}

export enum schedulerTasksNames {
  START = 'start',
  STOP = 'stop',
  RESUME = 'resume',
  PAUSE = 'pause',
  EXECUTE_TASK = 'execute_task',
}
