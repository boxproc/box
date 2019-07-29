import config from 'config';

export * from './uiItems';
export * from './hints';

export const basePath = config.isDevelopment ? '/' : '/ui/';

export const boxInstitutionName = 'BOX Institution';

export enum cookiesNames {
  SESSION_ID = 'session_id',
  USER_NAME = 'username',
  FULL_NAME = 'fullName',
  SYSTEM_PROPERTIES_FILTER = 'adminSystemProperties',
  PRODUCTS_FILTER = 'productModelerProducts',
  EVENT_DATA_ELEMS_FILTER = 'adminEventDataElements',
}

export enum cookiesExpires {
  WEEK = 604800,
  SESSION_ID = 360000,
}

export enum formNames {
  USER_LOGIN = 'userLoginForm',
  ADD_ADMIN_SYSTEM_PROPERTY = 'addAdminSystemPropertyForm',
  DEFINE_ADMIN_SCHEDULER_JOB = 'defineAdminSchedulerJobForm',
  DEFINE_ADMIN_CYCLE_EDITOR = 'defineAdminCycleEditorForm',
  DEFINE_ADMIN_USER = 'defineAdminUserForm',
  DEFINE_ADMIN_USERS_GROUP = 'DefineAdminUsersGroup',
  SYSTEM_PROPERTY_FILTER = 'adminSystemPropertiesForm',
  PRODUCTS_FILTER = 'productsFilterForm',
  PRODUCT = 'productForm',
  CYCLES_EDITOR = 'cyclesEditorForm',
  SCHEDULER = 'schedulerForm',
  USER = 'userForm',
  USERS_GROUP = 'usersGroupForm',
  ADMIN_EVENT_DATA_ELEMS_FILTER = 'adminEventDataElemsFilterForm',
}

export enum modalNames {
  ADD_ADMIN_USERS_GROUP = 'AddAdminUsersGroupModal',
  EDIT_ADMIN_USERS_GROUP = 'EditAdminUsersGroupModal',
  MESSAGE_MODAL = 'MessageModal',
  ADD_ADMIN_CYCLE_EDITOR = 'AddAdminCycleEditorModal',
  EDIT_CYCLE_EDITOR = 'EditCycleEditorRecordsModal',
  ADD_ADMIN_SYSTEM_PROPERTY = 'AddAdminSystemPropertyModal',
  ADD_PRODUCT = 'AddProductModal',
  EDIT_PRODUCT = 'EditProductModal',
  ADD_ADMIN_SCHEDULER = 'AddAdminSchedulerModal',
  EDIT_ADMIN_SCHEDULER = 'EditAdminSchedulerModal',
  ADD_ADMIN_USER = 'AddAdminUserModal',
  EDIT_ADMIN_USER = 'EditAdminUserModal',
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

export const statusTypeCyclesOptions = [
  { value: 'A', label: 'Active'},
  { value: 'S', label: 'Suspend'},
];

export const weeklyCycleTypeOptions = [
  {value: null, label: '-'},
  {value: 0, label: '-'},
  { value: 1, label: 'Monday'},
  { value: 2, label: 'Tuesday'},
  { value: 3, label: 'Wednesday'},
  { value: 4, label: 'Thursday'},
  { value: 5, label: 'Friday'},
  { value: 6, label: 'Saturday'},
  { value: 7, label: 'Sunday'},
];

export enum cycleTypes {
  MONTHLY = 'M',
  BI_MONTHLY = 'N',
  WEEKLY = 'W',
  BI_WEEKLY = 'V',
  FIXED_NUMBER_OF_DAYS = 'F',
}

export const typeOfCyclesEditorOptions = [
  { value: 'M', label: 'Monthly'},
  { value: 'N', label: 'Bi-monthly'},
  { value: 'W', label: 'Weekly'},
  { value: 'V', label: 'Bi-weekly'},
  { value: 'F', label: 'Fixed number of days'},
];

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

export const executableTypeOptions  = [
  { value: 'A', label: 'Api call'},
  { value: 'S', label: 'Shell script'},
  { value: 'J', label: 'Java'},
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

export enum savingsTypes {
  FIXED_TERM = 'F',
  UNLIMITED_TERM = 'U',
  REWARD = 'R',
}

export const savingsTypesOptions = [
  {value: 'F', label: 'Fixed term'},
  {value: 'U', label: 'Unlimited term'},
  {value: 'R', label: 'Reward'},
];

export enum dataTypes {
  INTEGER = 'I',
  STRING = 'S',
  FLOAT = 'F',
}

export const dataTypesOptions = [
  {value: 'I', label: 'Integer'},
  {value: 'S', label: 'String'},
  {value: 'F', label: 'Float'},
];

export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}
