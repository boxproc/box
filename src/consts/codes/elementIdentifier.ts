export enum elementIdentifierConst {
  APR = 'I',
  FEES = 'F',
  OVERDUE_ARREARS_AMOUNTS = 'A',
  OVERLIMIT_AMOUNTS = 'O',
}

export const elementIdentifierOptions = [
  { value: elementIdentifierConst.APR, label: 'APR' },
  { value: elementIdentifierConst.FEES, label: 'Fees' },
  { value: elementIdentifierConst.OVERDUE_ARREARS_AMOUNTS, label: 'Overdue/Arrears Amounts' },
  { value: elementIdentifierConst.OVERLIMIT_AMOUNTS, label: 'Overlimit Amounts' },
];
