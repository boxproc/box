import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum formsNames {
  USER_LOGIN = 'userLogin',
  ADD_ADMIN_SYSTEM_PROPERTY = 'addAdminSystemProperty',
}

export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
}

export enum cookiesExpires {
  USER_NAME_EXPIRES = 604800,
  SESSION_ID_EXPIRES = 600,
}

export enum modalNames {
  MESSAGE_MODAL = 'MessageModal',
  ADD_ADMIN_SYSTEM_PROPERTY = 'AddAdminSystemPropertyModal',
}

export enum uiItemTypes {
  SCREEN = 'S',
  MENU_PARENT = 'M',
  MENU_CHILD = 'm',
  FORM = 'F',
}

export enum yesNoTypes {
  YES = 'Y',
  NO = 'N',
}

export enum uiItemConsts {
  LEDGER_CUSTOMERS = 'ledger/customers',
  LEDGER_ACCOUNTS = 'ledger/accounts',

  ADMINISTRATION_SYS_PROPS= 'administration/system_properties',
  ADMINISTRATION_DICTIONARIES_COUNTRIES = 'administration/dictionaries/countries',
  ADMINISTRATION_DICTIONARIES_CURRENCIES = 'administration/dictionaries/currencies',
}

// export enum stateClasses {
//   IS_FOCUSED = 'is-focused',
// }

export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}
