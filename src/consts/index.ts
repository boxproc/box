import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
  ADMIN_SYSTEM_PROPERTIES = 'admin_system_properties',
}

export enum cookiesExpires {
  WEEK = 604800,
  SESSION_ID = 600,
}

export enum formNames {
  USER_LOGIN = 'userLogin',
  ADD_ADMIN_SYSTEM_PROPERTY = 'addAdminSystemProperty',
  SYSTEM_PROPERTY_FILTER = 'adminSystemProperties',
  PRODUCTS_FILTER = 'productsFilter',
}

export enum modalNames {
  MESSAGE_MODAL = 'MessageModal',
  ADD_ADMIN_SYSTEM_PROPERTY = 'AddAdminSystemPropertyModal',
  ADD_PRODUCT = 'AddProductModal',
  GET_PRODUCT_INFO = 'GetProductInfo',
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

  ADMINISTRATION_SYS_PROPS = 'administration/system_properties',
  ADMINISTRATION_DICTIONARIES_COUNTRIES = 'administration/dictionaries/countries',
  ADMINISTRATION_DICTIONARIES_CURRENCIES = 'administration/dictionaries/currencies',

  PRODUCTS = 'product_designer/products',
}
export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}
