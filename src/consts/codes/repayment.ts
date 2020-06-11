export enum repaymentTypesConst {
  MINIMUM_REPAYMENT = 'M',
  OUTSTANDING_BALANCE = 'O',
  FIXED_AMOUNT = 'F',
  INSTALMENTS = 'I',
}

export const repaymentTypesOptions = [
  { value: repaymentTypesConst.MINIMUM_REPAYMENT, label: 'Minimum Repayment' },
  { value: repaymentTypesConst.OUTSTANDING_BALANCE, label: 'Outstanding Balance' },
  { value: repaymentTypesConst.FIXED_AMOUNT, label: 'Fixed Amount' },
  { value: repaymentTypesConst.INSTALMENTS, label: 'Instalments' },
];

export enum repaymentMethodsConst {
  DIRECT_DEBIT = 'D',
  DEBIT_CARD = 'C',
  MANUAL = 'M',
}

export const repaymentMethodsOptions = [
  { value: repaymentMethodsConst.DIRECT_DEBIT, label: 'Direct debit' },
  { value: repaymentMethodsConst.DEBIT_CARD, label: 'Debit card' },
  { value: repaymentMethodsConst.MANUAL, label: 'Manual (EFT)' },
];
