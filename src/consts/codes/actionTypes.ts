export enum actionTypesConst {
  API_CALL = 'A',
  APPROVE_DENY = 'B',
  SET_APR = 'T',
  ADD_REWARD = 'R',
  ADD_FEE = 'F',
  MINIMUM_REPAYMENT_CALC = 'C',
  UPDATE_AUX_COUNTER_1 = '1',
  UPDATE_AUX_COUNTER_2 = '2',
  UPDATE_AUX_COUNTER_3 = '3',
}

export const actionTypesOptions = [
  { value: actionTypesConst.API_CALL, label: 'API Call' },
  { value: actionTypesConst.APPROVE_DENY, label: 'Approve / Deny' },
  { value: actionTypesConst.SET_APR, label: 'Set APR' },
  { value: actionTypesConst.ADD_REWARD, label: 'Add reward' },
  { value: actionTypesConst.ADD_FEE, label: 'Add fee' },
  { value: actionTypesConst.MINIMUM_REPAYMENT_CALC, label: 'Minimum Repayment Calculation' },
  { value: actionTypesConst.UPDATE_AUX_COUNTER_1, label: 'Update aux counter 1' },
  { value: actionTypesConst.UPDATE_AUX_COUNTER_2, label: 'Update aux counter 2' },
  { value: actionTypesConst.UPDATE_AUX_COUNTER_3, label: 'Update aux counter 3' },
];

export enum eventTypesCodeKeys {
  ACCOUNT_CREATE = 1,
  ACCOUNT_CLOSE = 2,
  TRANSACTION = 3,
  DAILY_SETTLEMENT = 4,
}
