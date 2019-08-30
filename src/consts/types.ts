export enum permissionTypes {
  READ_WRITE = 'W',
  READ_ONLY = 'R',
}

export const permissionTypesOptions = [
  { value: 'R', label: 'Read only' },
  { value: 'W', label: 'Read and Write' },
];

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
  EXECUTION_PENDING = 'E',
}

export const statusTypesOptions = [
  { value: 'A', label: 'Active' },
  { value: 'I', label: 'Inactive' },
  { value: 'D', label: 'Deleted' },
  { value: 'E', label: 'Execution pending' },
];
export const protocolTypesOptions = [
  { value: 'R', label: 'Rest' },
  { value: 'S', label: 'Soap' },
];

export enum customerStatusTypes {
  ACTIVE = 'A',
  INACTIVE = 'I',
  CLOSED = 'C',
}

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

export enum cycleTypes {
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

export enum productTypes {
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

export enum schemeTypes {
  MASTER_CARD = 'M',
  UPI = 'U',
  AMEX = 'A',
  VISA = 'V',
  UNSPECIFIED = 'X',
}

export const schemeTypesOptions = [
  { value: 'M', label: 'MasterCard' },
  { value: 'U', label: 'UPI' },
  { value: 'A', label: 'Amex' },
  { value: 'V', label: 'Visa' },
  { value: 'X', label: 'Unspecified' },
];

export enum statementTypes {
  MONTHLY = 'M',
  BI_MONTHLY = 'N',
  WEEKLY = 'W',
  BI_WEEKLY = 'V',
  FIXED_NUMBER_OF_DAYS = 'F',
}

export const statementTypesOptions = [
  { value: 'M', label: 'Monthly' },
  { value: 'N', label: 'Bi-monthly' },
  { value: 'W', label: 'Weekly' },
  { value: 'V', label: 'Bi-weekly' },
  { value: 'F', label: 'Fixed number of days' },
];

export const statementCyclesOptions = [
  { value: 1, label: 'Statement Cycle' },
  { value: 2, label: 'Statement Cycle 2' },
  { value: 3, label: 'Statement Cycle 3' },
];

export enum loanTypes {
  BUY_NOW_PAY_LATER = 'B',
  INSTALLMENTS = 'I',
}

export const loanTypesOptions = [
  { value: 'B', label: 'Buy now, pay later' },
  { value: 'I', label: 'Installments' },
];

export enum savingsTypes {
  FIXED_TERM = 'F',
  UNLIMITED_TERM = 'U',
  REWARD = 'R',
}

export const savingsTypesOptions = [
  { value: 'F', label: 'Fixed term' },
  { value: 'U', label: 'Unlimited term' },
  { value: 'R', label: 'Reward' },
];

export enum dataTypes {
  INTEGER = 'I',
  STRING = 'S',
  FLOAT = 'F',
}

export const dataTypesOptions = [
  { value: 'I', label: 'Integer' },
  { value: 'S', label: 'String' },
  { value: 'F', label: 'Float' },
];

export enum actionTypes {
  API_CALL = 'A',
  APPROVE_DENY = 'R',
  UPDATE_AUX_COUNTER_1 = 'X',
  UPDATE_AUX_COUNTER_2 = 'Y',
  UPDATE_AUX_COUNTER_3 = 'Z',
}

export const actionTypesOptions = [
  { value: 'A', label: 'API Call' },
  { value: 'R', label: 'Approve / Deny' },
  { value: 'X', label: 'Update aux counter 1' },
  { value: 'Y', label: 'Update aux counter 2' },
  { value: 'Z', label: 'Update aux counter 3' },
];

export enum debitCreditIndicator {
  DEBIT_TRANSACTION = 'D',
  CREDIT_TRANSACTION = 'C',
  NOT_APPLICABLE = 'U',
}

export const debitCreditIndicatorOptions = [
  { value: 'D', label: 'Debit transaction' },
  { value: 'C', label: 'Credit transaction' },
  { value: 'U', label: 'Not applicable' },
];
