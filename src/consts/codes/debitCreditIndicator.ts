export enum debitCreditIndicatorConst {
  DEBIT = 'D',
  CREDIT = 'C',
  NOT_APPLICABLE = 'U',
}

export const debitCreditIndicatorOptions = [
  { value: debitCreditIndicatorConst.DEBIT, label: 'Debit' },
  { value: debitCreditIndicatorConst.CREDIT, label: 'Credit' },
  { value: debitCreditIndicatorConst.NOT_APPLICABLE, label: 'Not applicable' },
];

export enum transactionTypesIdsConst {
  LIMIT_ADJUSTMENT = 14,
  DIRECT_DEBIT = 24,
}
