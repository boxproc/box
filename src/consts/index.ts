import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
  ADMIN_SYSTEM_PROPERTIES = 'admin_system_properties',
}

export enum cookiesExpires {
  WEEK = 604800,
  SESSION_ID = 100000,
}

export enum formNames {
  USER_LOGIN = 'userLogin',
  ADD_ADMIN_SYSTEM_PROPERTY = 'addAdminSystemProperty',
  SYSTEM_PROPERTY_FILTER = 'adminSystemProperties',
  PRODUCTS_FILTER = 'productsFilter',
  PRODUCT = 'Product',
}

export enum modalNames {
  MESSAGE_MODAL = 'MessageModal',
  ADD_ADMIN_SYSTEM_PROPERTY = 'AddAdminSystemPropertyModal',
  ADD_PRODUCT = 'AddProductModal',
  EDIT_PRODUCT = 'EditProductModal',
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

export enum statusTypes {
  ACTIVE = 'A',
  INACTIVE = 'I',
  DELETED = 'D',
}

export enum productTypes {
  LOAN = 'L',
  PREPAID = 'P',
  DEBIT = 'D',
  SAVINGS = 'S',
}

export const productTypesOptions = [
  { value: 'L', label: 'Loan'},
  { value: 'P', label: 'Prepaid'},
  { value: 'D', label: 'Debit'},
  { value: 'S', label: 'Savings'},
];

export enum schemeTypes {
  MASTER_CARD = 'M',
  UPI = 'U',
  AMEX = 'A',
  UNSPECIFIED = 'X',
}

export const schemeOptions = [
  { value: 'M', label: 'MasterCard'},
  { value: 'U', label: 'UPI'},
  { value: 'A', label: 'Amex'},
  { value: 'X', label: 'Unspecified'},
];

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
