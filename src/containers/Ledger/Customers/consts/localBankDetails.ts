// isAccountField1 - account_number
// isAccountField2 - branch code
// isAccountField3 - bank code

export const localBankDetails = {
  GBR: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: false,
    isAccountType: false,
    accountField2Name: 'Sort Code',
  },
  AUS: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: false,
    isAccountType: false,
    accountField2Name: 'BSB Number',
  },
  AUT: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  BEL: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: false,
    isAccountType: false,
  },
  CAN: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
    accountField2Name: 'Branch Transit Number',
    accountField3Name: 'Financial Institution Number',
  },
  CYP: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
  },
  DNK: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  EST: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: false,
    isAccountType: false,
  },
  FIN: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  FRA: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
    accountField1Hint: 'The check digits should be included in the account number field. For example, 0500013M026 06',
  },
  DEU: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  GRC: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
  },
  IRL: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: false,
    isAccountType: false,
    accountField2Name: 'Sort Code',
  },
  ITA: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
  },
  LVA: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  LTU: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  LUX: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  MLT: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: false,
    isAccountType: false,
    accountField2Name: 'Sort code',
  },
  MCO: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
    accountField1Hint: 'The check digits should be included in the account number field. For example, 0500013M026 06',
  },
  NLD: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  NZL: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
    accountField2Name: 'Branch Number',
    accountField3Name: 'Bank Number',
    accountField1Hint: '	The account suffix should be included in the account number field. For example, 0123456-89',
  },
  PRT: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
    accountField1Hint: 'The check digits should be included in the account number field. For example, 1234567890154',
  },
  SMR: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
  },
  SVK: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  SVN: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: false,
  },
  ESP: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: true,
    isAccountType: false,
    accountField1Hint: 'The check digits should be included in the account number field. For example, 45 0200051332',
  },
  SWE: {
    isAccountField1: true,
    isAccountField2: true,
    isAccountField3: false,
    isAccountType: false,
  },
  USA: {
    isAccountField1: true,
    isAccountField2: false,
    isAccountField3: true,
    isAccountType: true,
    accountField3Name: 'Routing number',
  },
};
