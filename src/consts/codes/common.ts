export enum permissionTypesConst {
  READ_WRITE = 'W',
  READ_ONLY = 'R',
}

export const permissionTypesOptions = [
  { value: permissionTypesConst.READ_ONLY, label: 'Read only' },
  { value: permissionTypesConst.READ_WRITE, label: 'Read and Write' },
];

export enum uiItemTypesConst {
  SEPARATOR = 'S',
  MENU_PARENT = 'M',
  MENU_CHILD = 'm',
}

export enum yesNoConst {
  YES = 'Y',
  NO = 'N',
}

export const dataTypesOptions = [
  { value: 'I', label: 'Integer' },
  { value: 'S', label: 'String' },
  { value: 'F', label: 'Float' },
];

export enum codeKeysConst {
  ENTER = 'Enter',
}

export const executableTypeOptions = [
  { value: 'A', label: 'Api call' },
  { value: 'S', label: 'Shell script' },
];

export enum transactionTypesIdsConst {
  PURCHASE_CARD_PAYMENT = 1,
  CASH_WITHDRAWAL_ATM = 3,
  BALANCE_TRANSFER_DEBIT = 27,
  LIMIT_ADJUSTMENT = 14,
  DIRECT_DEBIT = 24,
}

export const accountTypesOptions = [
  { value: 'checking', label: 'checking' },
  { value: 'savings', label: 'savings' },
];
