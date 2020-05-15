/**
 * Common statuses
 */

export enum statusConst {
  ACTIVE = 'A',
  INACTIVE = 'I',
  DELETED = 'D',
  CLOSED = 'C',
  LOCKED = 'L',
  REGISTRATION_PENDING = 'F',
  AUTHENTICATION_PENDING = 'P',
  EXECUTION_PENDING = 'E',
  SUSPENDED = 'S',
}

export const statusOptions = [
  { value: statusConst.ACTIVE, label: 'Active' },
  { value: statusConst.INACTIVE, label: 'Inactive' },
  { value: statusConst.DELETED, label: 'Deleted' },
];

/**
 * User statuses
 */

export const userStatusOptions = [
  ...statusOptions,
  { value: statusConst.LOCKED, label: 'Locked' },
];

export const userStatusWith2faOptions = [
  ...userStatusOptions,
  { value: 'F', label: '2FA registration pending' },
];

/**
 * Scheduler job statuses
 */

export const schedulerStatusOptions = [
  ...statusOptions,
  { value: statusConst.EXECUTION_PENDING, label: 'Execution pending' },
  { value: statusConst.SUSPENDED, label: 'Suspended' },
];

/**
 * UI session statuses
 */

export enum uiSessionStatusConst {
  VALID = 'V',
  INVALID = 'I',
  REGISTRATION_PENDING = 'F',
  AUTHENTICATION_PENDING = 'P',
}

export const uiSessionsStatusOptions = [
  { value: uiSessionStatusConst.VALID, label: 'Valid' },
  { value: uiSessionStatusConst.INVALID, label: 'Invalid' },
  { value: uiSessionStatusConst.REGISTRATION_PENDING, label: '2FA registration pending' },
  { value: uiSessionStatusConst.AUTHENTICATION_PENDING, label: '2FA authentication pending' },
];

export enum sessionStatusCodes {
  SESSION_TIMEOUT = '02',
  USER_NOT_AUTH = '03',
  INVALID_ID = '07',
}

/**
 * Customer statuses
 */

export const customerStatusOptions = [
  { value: statusConst.ACTIVE, label: 'Active' },
  { value: statusConst.INACTIVE, label: 'Inactive' },
  { value: statusConst.CLOSED, label: 'Closed' },
];

/**
 * Hierarchy element statuses
 */

export enum hierarchyElemsStatusConst {
  CURRENT = 'C',
  PREVIOUS = 'P',
  OUTSTANDING = 'O',
}

export const hierarchyElemsStatusOptions = [
  { value: hierarchyElemsStatusConst.CURRENT, label: 'Current' },
  { value: hierarchyElemsStatusConst.PREVIOUS, label: 'Previous' },
  { value: hierarchyElemsStatusConst.OUTSTANDING, label: 'Outstanding' },
];

/**
 * Repayment statuses
 */

export enum repaymentStatusConst {
  NOT_REPAID = 'N',
  REPAID_IN_FULL = 'R',
  REPAID_PARTIALLY = 'P',
  OVERPAID = 'O',
}

export const repaymentStatusOptions = [
  { value: repaymentStatusConst.NOT_REPAID, label: 'Not repaid' },
  { value: repaymentStatusConst.REPAID_IN_FULL, label: 'Repaid in full' },
  { value: repaymentStatusConst.REPAID_PARTIALLY, label: 'Repaid partially' },
  { value: repaymentStatusConst.OVERPAID, label: 'Overpaid' },
];

/**
 * Transaction statuses
 */

export enum transactionStatusConst {
  PENDING = 'P',
  SETTLED = 'S',
  CONVERTED = 'C',
  INVALID = 'I',
}

export const transactionStatusOptions = [
  { value: transactionStatusConst.PENDING, label: 'Pending' },
  { value: transactionStatusConst.SETTLED, label: 'Settled' },
  { value: transactionStatusConst.CONVERTED, label: 'Converted ' },
  { value: transactionStatusConst.INVALID, label: 'Invalid' },
];

/**
 * Card statuses
 */

export enum cardStatusesConst {
  UNSPECIFIED = 0,
  ACTIVE = 1,
  INACTIVE = 2,
  CARD_LOST = 3,
  CARD_STOLEN = 4,
  PIN_TRIES_EXCEEDED = 5,
  SUSPECTED_FRAUND = 6,
  CARD_REPLACED = 7,
}

export const cardStatusesOptions = [
  { value: cardStatusesConst.UNSPECIFIED, label: 'Unspecified' },
  { value: cardStatusesConst.ACTIVE, label: 'Active' },
  { value: cardStatusesConst.INACTIVE, label: 'Inactive ' },
  { value: cardStatusesConst.CARD_LOST, label: 'Card lost' },
  { value: cardStatusesConst.CARD_STOLEN, label: 'Card stolen' },
  { value: cardStatusesConst.PIN_TRIES_EXCEEDED, label: 'PIN tries exceeded' },
  { value: cardStatusesConst.SUSPECTED_FRAUND, label: 'Suspected fraund ' },
  { value: cardStatusesConst.CARD_REPLACED, label: 'Card replaced' },
];

/**
 * Execution result status
 */

export const lastExecutionResultOptions = [
  { value: 'S', label: 'Success' },
  { value: 'F', label: 'Fail' },
  { value: 'U', label: 'Unknown' },
];
