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
