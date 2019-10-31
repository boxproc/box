export enum permissionTypesCodes {
  READ_WRITE = 'W',
  READ_ONLY = 'R',
}

export const permissionTypesOptions = [
  { value: 'R', label: 'Read only' },
  { value: 'W', label: 'Read and Write' },
];

export enum uiItemTypesCodes {
  SCREEN = 'S',
  MENU_PARENT = 'M',
  MENU_CHILD = 'm',
  FORM = 'F',
}

export enum yesNoTypesCodes {
  YES = 'Y',
  NO = 'N',
}

export enum statusTypesCodes {
  ACTIVE = 'A',
  INACTIVE = 'I',
  DELETED = 'D',
  CLOSED = 'C',
  LOCKED = 'L',
  EXECUTION_PENDING = 'E',
  REGISTRATION_PENDING = 'F',
  AUTHENTICATION_PENDING = 'P',
  SUSPENDED = 'S',
}

export const statusTypesOptions = [
  { value: 'A', label: 'Active' },
  { value: 'I', label: 'Inactive' },
  { value: 'D', label: 'Deleted' },
];

export const statusTypesLoginOptions = [
  ...statusTypesOptions,
  { value: 'F', label: '2FA registration pending' },
  { value: 'L', label: 'Locked' },
];

export const schedulerStatusTypesOptions = [
  ...statusTypesOptions,
  { value: 'E', label: 'Execution pending' },
  { value: 'S', label: 'Suspended' },
];

export enum cardStatusesCodes {
  UNSPECIFIED = 0,
  ACTIVE = 1,
  INACTIVE = 2,
  CARD_LOST = 3,
  CARD_STOLEN = 4,
  PIN_TRIES_EXCEEDED = 5,
  SUSPECTED_FRAUND = 6,
  CARD_REPLACED = 7,
}

export const lastExecutionResultOptions = [
  { value: 'S', label: 'Success' },
  { value: 'F', label: 'Fail' },
  { value: 'U', label: 'Unknown' },
];

export const endpointsOptions = [
  { value: 'B', label: 'BOX API' },
  { value: 'T', label: 'Tribe' },
  { value: 'U', label: 'Tutuka' },
];

export const typeOfInterfacesCodes = [
  { value: 'T', label: 'Tribe card processing' },
  { value: 'U', label: 'Tutuka card processing' },
  { value: 'Q', label: 'QRails card management interface' },
];

export const protocolTypesOptions = [
  { value: 'R', label: 'REST' },
  { value: 'S', label: 'SOAP' },
];

export const customerStatusTypesOptions = [
  { value: 'A', label: 'Active' },
  { value: 'I', label: 'Inactive' },
  { value: 'C', label: 'Closed' },
];

export const statusTypeCyclesOptions = [
  { value: 'A', label: 'Active' },
  { value: 'S', label: 'Suspend' },
];

export const weeklyCycleTypeOptions = [
  { value: 1, label: 'Monday' },
  { value: 2, label: 'Tuesday' },
  { value: 3, label: 'Wednesday' },
  { value: 4, label: 'Thursday' },
  { value: 5, label: 'Friday' },
  { value: 6, label: 'Saturday' },
  { value: 7, label: 'Sunday' },
];

export enum cycleTypesCodes {
  MONTHLY = 'M',
  BI_MONTHLY = 'N',
  WEEKLY = 'W',
  BI_WEEKLY = 'V',
  FIXED_NUMBER_OF_DAYS = 'F',
}

export const typeOfCyclesEditorOptions = [
  { value: 'M', label: 'Monthly' },
  { value: 'N', label: 'Bi-monthly' },
  { value: 'W', label: 'Weekly' },
  { value: 'V', label: 'Bi-weekly' },
  { value: 'F', label: 'Fixed number of days' },
];

export enum productTypesCodes {
  LOAN = 'L',
  PREPAID = 'P',
  DEBIT = 'D',
  SAVINGS = 'S',
  REVOLVING_CREDIT = 'C',
}

export const productTypesOptions = [
  { value: 'L', label: 'Loan' },
  { value: 'P', label: 'Prepaid' },
  { value: 'D', label: 'Debit' },
  { value: 'S', label: 'Savings' },
  { value: 'C', label: 'Revolving credit' },
];

export const executableTypeOptions = [
  { value: 'A', label: 'Api call' },
  { value: 'S', label: 'Shell script' },
  { value: 'J', label: 'Java' },
];

export const schemeTypesOptions = [
  { value: 'M', label: 'MasterCard' },
  { value: 'U', label: 'UPI' },
  { value: 'A', label: 'Amex' },
  { value: 'V', label: 'Visa' },
  { value: 'X', label: 'Unspecified' },
];

export const loanTypesOptions = [
  { value: 'B', label: 'Buy now, pay later' },
  { value: 'I', label: 'Installments' },
];

export const savingsTypesOptions = [
  { value: 'F', label: 'Fixed term' },
  { value: 'U', label: 'Unlimited term' },
  { value: 'R', label: 'Reward' },
];

export const dataTypesOptions = [
  { value: 'I', label: 'Integer' },
  { value: 'S', label: 'String' },
  { value: 'F', label: 'Float' },
];

export const actionTypesOptions = [
  { value: 'A', label: 'API Call' },
  { value: 'R', label: 'Approve / Deny' },
  { value: 'T', label: 'Set transaction APR' },
  { value: 'X', label: 'Update aux counter 1' },
  { value: 'Y', label: 'Update aux counter 2' },
  { value: 'Z', label: 'Update aux counter 3' },
];

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

export const aprTypesOptions = [
  { value: 'A', label: 'Actual/Actual' },
  { value: 'B', label: '30/360' },
  { value: 'C', label: 'Actual/365' },
  { value: 'D', label: 'Actual/360' },
];
