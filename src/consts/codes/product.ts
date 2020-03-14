/**
 * Product types
 */

export enum productTypesConst {
  LOAN = 'L',
  PREPAID = 'P',
  DEBIT = 'D',
  SAVINGS = 'S',
  REVOLVING_CREDIT = 'C',
}

export const productTypesOptions = [
  { value: productTypesConst.LOAN, label: 'Loan' },
  { value: productTypesConst.PREPAID, label: 'Prepaid' },
  { value: productTypesConst.DEBIT, label: 'Debit' },
  { value: productTypesConst.SAVINGS, label: 'Savings' },
  { value: productTypesConst.REVOLVING_CREDIT, label: 'Revolving credit' },
];

/**
 * Loan types
 */

export enum loanInterestConst {
  REDUCING_BALANCE_METHOD = 'R',
  FLAT_RATE_METHOD = 'F',
  ALL_INTEREST_IN_LAST_INSTALLMENT = 'A',
}

export const loanTypesOptions = [
  { value: loanInterestConst.REDUCING_BALANCE_METHOD, label: 'Reducing-balance method' },
  { value: loanInterestConst.FLAT_RATE_METHOD, label: 'Flat-rate (daily accrual) method' },
  {
    value: loanInterestConst.ALL_INTEREST_IN_LAST_INSTALLMENT,
    label: 'All interest in last installment',
  },
];

/**
 * Saving types
 */

export enum savingsTypesConst {
  FIXED_TERM = 'F',
  UNLIMITED_TERM = 'U',
  REWARD = 'R',
}

export const savingsTypesOptions = [
  { value: savingsTypesConst.FIXED_TERM, label: 'Fixed term' },
  { value: savingsTypesConst.UNLIMITED_TERM, label: 'Unlimited term' },
  { value: savingsTypesConst.REWARD, label: 'Reward' },
];

/**
 * Card form factor
 */

export enum cardFormFactorConst {
  UNSPECIFIED = 'X',
  VIRTUAL = 'V',
  PHYSICAL = 'P',
}

export const cardFormFactorOptions = [
  { value: cardFormFactorConst.UNSPECIFIED, label: 'Unspecified' },
  { value: cardFormFactorConst.VIRTUAL, label: 'Virtual' },
  { value: cardFormFactorConst.PHYSICAL, label: 'Physical' },
];

/**
 * Cycle types
 */

export enum cycleTypesConst {
  MONTHLY = 1,
  BI_MONTHLY = 2,
  WEEKLY = 3,
  BI_WEEKLY = 4,
  FIXED_NUMBER_OF_DAYS = 5,
}

/**
 * Scheme
 */

export const schemeTypesOptions = [
  { value: 'M', label: 'MasterCard' },
  { value: 'U', label: 'UPI' },
  { value: 'A', label: 'Amex' },
  { value: 'V', label: 'Visa' },
  { value: 'X', label: 'Unspecified' },
];

/**
 * APRs
 */

export const aprTypesOptions = [
  { value: 'A', label: 'Actual/Actual' },
  { value: 'B', label: '30/360' },
  { value: 'C', label: 'Actual/365' },
  { value: 'D', label: 'Actual/360' },
];

/**
 * Fees and rewards
 */

export enum feeRewardsTypesConst {
  APPLY_ONLY_FIXED_AMOUNT = 'A',
  APPLY_ONLY_RATE = 'R',
  APPLY_BOTH_FIXED_AMOUNT_AND_RATE = 'B',
  APPLY_WHICHEVER_IS_GREATER_RATE_OR_FIXED_AMOUNT = 'G',
  APPLY_WHICHEVER_IS_SMALLER_RATE_OR_FIXED_AMOUNT = 'S',
}

export const feeTypesOptions = [
  { value: feeRewardsTypesConst.APPLY_ONLY_FIXED_AMOUNT, label: 'Apply only fixed amount' },
  { value: feeRewardsTypesConst.APPLY_ONLY_RATE, label: 'Apply only % rate' },
  {
    value: feeRewardsTypesConst.APPLY_BOTH_FIXED_AMOUNT_AND_RATE,
    label: 'Apply both fixed amount and % rate',
  },
  {
    value: feeRewardsTypesConst.APPLY_WHICHEVER_IS_GREATER_RATE_OR_FIXED_AMOUNT,
    label: 'Apply whichever is greater: % rate or the fixed amount',
  },
];

export const rewardsTypesOptions = [
  ...feeTypesOptions,
  {
    value: feeRewardsTypesConst.APPLY_WHICHEVER_IS_SMALLER_RATE_OR_FIXED_AMOUNT,
    label: 'apply whichever is smaller: % rate or the fixed amount',
  },
];
