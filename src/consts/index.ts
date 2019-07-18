import config from 'config';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
  FULL_NAME = 'fullName',
  SYSTEM_PROPERTIES_FILTER = 'adminSystemProperties',
  PRODUCTS_FILTER = 'productModelerProducts',
}

export enum cookiesExpires {
  WEEK = 604800,
  SESSION_ID = 360,
}

export enum formNames {
  USER_LOGIN = 'userLoginForm',
  ADD_ADMIN_SYSTEM_PROPERTY = 'addAdminSystemPropertyForm',
  SYSTEM_PROPERTY_FILTER = 'adminSystemPropertiesForm',
  PRODUCTS_FILTER = 'productsFilterForm',
  PRODUCT = 'ProductForm',
  SCHEDULER = 'SchedulerForm',
}

export enum modalNames {
  MESSAGE_MODAL = 'MessageModal',
  ADD_ADMIN_SYSTEM_PROPERTY = 'AddAdminSystemPropertyModal',
  ADD_PRODUCT = 'AddProductModal',
  EDIT_PRODUCT = 'EditProductModal',
  ADD_ADMIN_SCHEDULER = 'AddAdminSchedulerModal',
  EDIT_ADMIN_SCHEDULER = 'EditAdminSchedulerModal',
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

export const statusTypesOptions = [
  { value: 'A', label: 'Active'},
  { value: 'I', label: 'Inactive'},
  { value: 'D', label: 'Deleted'},
];

export enum productTypes {
  LOAN = 'L',
  PREPAID = 'P',
  DEBIT = 'D',
  SAVINGS = 'S',
  REVOLVING_CREDIT = 'C',
}

export const productTypesOptions = [
  { value: 'L', label: 'Loan'},
  { value: 'P', label: 'Prepaid'},
  { value: 'D', label: 'Debit'},
  { value: 'S', label: 'Savings'},
  { value: 'C', label: 'Revolving credit' },
];

export enum schemeTypes {
  MASTER_CARD = 'M',
  UPI = 'U',
  AMEX = 'A',
  VISA = 'V',
  UNSPECIFIED = 'X',
}

export const schemeTypesOptions = [
  { value: 'M', label: 'MasterCard'},
  { value: 'U', label: 'UPI'},
  { value: 'A', label: 'Amex'},
  { value: 'V', label: 'Visa'},
  { value: 'X', label: 'Unspecified'},
];

export enum statementTypes {
  MONTHLY = 'M',
  BI_MONTHLY = 'N',
  WEEKLY = 'W',
  BI_WEEKLY = 'V',
  FIXED_NUMBER_OF_DAYS = 'F',
}

export const statementTypesOptions = [
  {value: 'M', label: 'Monthly'},
  {value: 'N', label: 'Bi-monthly'},
  {value: 'W', label: 'Weekly'},
  {value: 'V', label: 'Bi-weekly'},
  {value: 'F', label: 'Fixed number of days'},
];

export enum loanTypes {
  BUY_NOW_PAY_LATER = 'B',
  INSTALLMENTS = 'I',
}

export const loanTypesOptions = [
  {value: 'B', label: 'Buy now, pay later'},
  {value: 'I', label: 'Installments'},
];

export enum uiItemConsts {
  LEDGER_CUSTOMERS = 'ledger/customers',
  LEDGER_ACCOUNTS = 'ledger/accounts',

  ADMINISTRATION_SYS_PROPS = 'administration/system_properties',
  ADMINISTRATION_DICTIONARIES_COUNTRIES = 'administration/dictionaries/countries',
  ADMINISTRATION_DICTIONARIES_CURRENCIES = 'administration/dictionaries/currencies',
  ADMINISTRATION_SCHEDULER = 'administration/scheduler',

  PRODUCTS = 'product_designer/products',
}
export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}
