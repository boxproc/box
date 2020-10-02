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
 * Repayment statuses
 */

export enum repaymentStatusConst {
  REPAYMENT_DUE = 'D',
  REPAYMENT_OVERDUE = 'A',
  PARTIAL_REPAYMENT = 'P',
  LATE_PAYMENT_RECEIVED = 'L',
  MINIMUM_REPAID = 'M',
  REPAID_IN_FULL = 'F',
  OVERPAID = 'O',
  UNKNOWN = 'U',
}

export const repaymentStatusOptions = [
  { value: repaymentStatusConst.REPAYMENT_DUE, label: 'Repayment due' },
  { value: repaymentStatusConst.REPAYMENT_OVERDUE, label: 'Repayment overdue' },
  { value: repaymentStatusConst.PARTIAL_REPAYMENT, label: 'Not repaid in full' },
  { value: repaymentStatusConst.LATE_PAYMENT_RECEIVED, label: 'Late payment received' },
  { value: repaymentStatusConst.REPAID_IN_FULL, label: 'Repaid in full' },
  { value: repaymentStatusConst.OVERPAID, label: 'Overpaid' },
  { value: repaymentStatusConst.UNKNOWN, label: 'Unknown' },
];

/**
 * Statement statuses
 */

export enum statementsStatusConst {
  ACTIVE = 'A',
  NOT_ACTIVE = 'I',
  RELEASED = 'R',
}

export const statementsStatusOptions = [
  { value: statementsStatusConst.ACTIVE, label: 'Active' },
  { value: statementsStatusConst.NOT_ACTIVE, label: 'Not active' },
  { value: statementsStatusConst.RELEASED, label: 'Released' },
];

/**
 * Transaction statuses
 */

export enum transactionStatusConst {
  PENDING = 'P',
  SETTLED = 'S',
  REVERSED = 'R',
  INVALID = 'I',
}

export const transactionStatusOptions = [
  { value: transactionStatusConst.PENDING, label: 'Pending' },
  { value: transactionStatusConst.SETTLED, label: 'Settled' },
  { value: transactionStatusConst.REVERSED, label: 'Reversed' },
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
  { value: cardStatusesConst.INACTIVE, label: 'Inactive' },
  { value: cardStatusesConst.CARD_LOST, label: 'Card lost' },
  { value: cardStatusesConst.CARD_STOLEN, label: 'Card stolen' },
  { value: cardStatusesConst.PIN_TRIES_EXCEEDED, label: 'PIN tries exceeded' },
  { value: cardStatusesConst.SUSPECTED_FRAUND, label: 'Suspected fraund' },
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
