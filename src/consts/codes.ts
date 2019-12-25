export enum permissionTypesCodes {
  READ_WRITE = 'W',
  READ_ONLY = 'R',
}

export const permissionTypesOptions = [
  { value: 'R', label: 'Read only' },
  { value: 'W', label: 'Read and Write' },
];

export enum uiItemTypesCodes {
  SEPARATOR = 'S',
  MENU_PARENT = 'M',
  MENU_CHILD = 'm',
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

export enum repaymentStatusTypesCodes {
  NOT_REPIED = 'N',
  REPIED_IN_FULL = 'R',
  REPIED_PARTIALLY = 'P',
  OVERPAID = 'O',
}

export const statusTypesOptions = [
  { value: 'A', label: 'Active' },
  { value: 'I', label: 'Inactive' },
  { value: 'D', label: 'Deleted' },
];

export const statusTypesLoginOptions = [
  ...statusTypesOptions,
  { value: 'L', label: 'Locked' },
];

export const statusTypes2faLoginOptions = [
  ...statusTypesLoginOptions,
  { value: 'F', label: '2FA registration pending' },
];

export const schedulerStatusTypesOptions = [
  ...statusTypesOptions,
  { value: 'E', label: 'Execution pending' },
  { value: 'S', label: 'Suspended' },
];

export const repaymentStatusTypesOptions = [
  { value: 'N', label: 'Not repied' },
  { value: 'R', label: 'Repied in full' },
  { value: 'P', label: 'Repied partially' },
  { value: 'O', label: 'Overpaid' },
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
  { value: 'T', label: 'Tribe' },
  { value: 'U', label: 'Tutuka' },
  { value: 'Q', label: 'QRails' },
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

export enum identificationTypesCodes {
  NO_IDENTIFICATION = 'N',
  PASSPORT = 'P',
  DRIVING_LICENSE = 'D',
  ID_CARD = 'I',
}

export const identificationTypesOptions = [
  { value: 'N', label: 'No Identification' },
  { value: 'P', label: 'Passport' },
  { value: 'D', label: 'Driving license' },
  { value: 'I', label: 'ID card' },
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

export enum loanInterestDistributionTypesCodes {
  EQUAL = 'E',
  ACTUAL = 'A',
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
];

export const schemeTypesOptions = [
  { value: 'M', label: 'MasterCard' },
  { value: 'U', label: 'UPI' },
  { value: 'A', label: 'Amex' },
  { value: 'V', label: 'Visa' },
  { value: 'X', label: 'Unspecified' },
];

export const loanTypesOptions = [
  { value: 'E', label: 'Equal distribution' },
  { value: 'A', label: 'Actual distribution' },
  { value: 'F', label: 'All interest in the final installment' },
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
  { value: 'B', label: 'Approve / Deny' },
  { value: 'T', label: 'Set APR' },
  { value: 'R', label: 'Add reward' },
  { value: 'F', label: 'Add fee' },
  { value: '1', label: 'Update aux counter 1' },
  { value: '2', label: 'Update aux counter 2' },
  { value: '3', label: 'Update aux counter 3' },
];

export enum actionTypesCodeKeys {
  API_CALL = 'A',
  APPROVE_DENY = 'B',
  SET_APR = 'T',
  ADD_REWARD = 'R',
  ADD_FEE = 'F',
  UPDATE_AUX_COUNTER_1 = '1',
  UPDATE_AUX_COUNTER_2 = '2',
  UPDATE_AUX_COUNTER_3 = '3',
}

export enum eventTypesCodeKeys {
  TRANSACTION = 3,
}

export enum codeKeys {
  ENTER = 'Enter',
  ESCAPE = 'Escape',
  BACKSPACE = 'Backspace',
}

export enum statusCodes {
  NO_SESSION_ID = '01',
  NO_SESSION = '03',
  USER_NOT_AUTH = '04',
  SESSION_TIMEOUT = '05',
  INCORRECT_PASSWORD = '15',
}

export const aprTypesOptions = [
  { value: 'A', label: 'Actual/Actual' },
  { value: 'B', label: '30/360' },
  { value: 'C', label: 'Actual/365' },
  { value: 'D', label: 'Actual/360' },
];

export const debitCreditIndicatorOptions = [
  { value: 'D', label: 'Debit' },
  { value: 'C', label: 'Credit' },
  { value: 'U', label: 'Not applicable' },
];

export enum debitCreditIndicatorCodes {
  DEBIT = 'D',
  CREDIT = 'C',
  NOT_APPLICABLE = 'U',
}

export enum debitCreditIndicatorIds {
  LIMIT_ADJUSTMENT = 14,
}

export const cardFormFactorOptions = [
  { value: 'X', label: 'Unspecified' },
  { value: 'V', label: 'Virtual' },
  { value: 'P', label: 'Physical' },
];

export const feeTypesOptions = [
  { value: 'A', label: 'Apply only fixed amount' },
  { value: 'R', label: 'Apply only % rate' },
  { value: 'B', label: 'Apply both fixed amount and % rate' },
  { value: 'G', label: 'Apply whichever is greater: % rate or the fixed amount' },
];

export const rewardsTypesOptions = [
  ...feeTypesOptions,
  { value: 'S', label: 'apply whichever is smaller: % rate or the fixed amount' },
];

export enum feeRewardsTypesCodes {
  APPLY_ONLY_FIXED_AMOUNT = 'A',
  APPLY_ONLY_RATE = 'R',
  APPLY_BOTH_FIXED_AMOUNT_AND_RATE = 'B',
  APPLY_WHICHEVER_IS_GREATER_RATE_OR_FIXED_AMOUNT = 'G',
  APPLY_WHICHEVER_IS_SMALLER_RATE_OR_FIXED_AMOUNT = 'S',
}

export const daysOfWeekOptions = [
  { value: '1', label: 'Sunday' },
  { value: '2', label: 'Monday' },
  { value: '3', label: 'Tuesday' },
  { value: '4', label: 'Wednesday' },
  { value: '5', label: 'Thursday' },
  { value: '6', label: 'Friday' },
  { value: '7', label: 'Saturday' },
];

export const daysOfWeekOptionsWithStrValues = [
  { value: 'SUN', label: 'Sunday' },
  { value: 'MON', label: 'Monday' },
  { value: 'TUE', label: 'Tuesday' },
  { value: 'WED', label: 'Wednesday' },
  { value: 'THU', label: 'Thursday' },
  { value: 'FRI', label: 'Friday' },
  { value: 'SAT', label: 'Saturday' },
];

export const monthsOptions = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'April' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

export const monthsOptionsWithStrValue = [
  { value: 'JAN', label: 'January' },
  { value: 'FEB', label: 'February' },
  { value: 'MAR', label: 'March' },
  { value: 'APR', label: 'April' },
  { value: 'MAY', label: 'May' },
  { value: 'JUN', label: 'June' },
  { value: 'JUL', label: 'July' },
  { value: 'AUG', label: 'August' },
  { value: 'SEP', label: 'September' },
  { value: 'OCT', label: 'October' },
  { value: 'NOV', label: 'November' },
  { value: 'DEC', label: 'December' },
];

export enum timeUnits {
  SECOND = 'Second',
  MINUTE = 'Minute',
  HOUR = 'Hour',
  DAY = 'Day',
  MONTH = 'Month',
  YEAR = 'Year',
}
