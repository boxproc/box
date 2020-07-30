import { ISelectValue } from 'types';

export interface IManualTransactionReq {
  transaction_type_id: number | string;
  currency_num_code: number | string;
  account_id: number;
  amount: number;
  description: string;
  mandate_id?: number | string;
  settled: string;
}

export interface IManualTransactionFromData {
  transactionType: ISelectValue;
  currencyCode?: ISelectValue;
  accountId: string;
  amount: string;
  description: string;
  mandate?: ISelectValue;
  settledFlag: boolean;
}

export interface IManualTransactionResultData {
  transaction_id: number;
  status: string;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_authorised_before: number;
  balance_authorised_after: number;
}

export interface IManualTransactionResultResponse {
  transaction_result: Array<IManualTransactionResultData>;
}

export interface IManualTransactionResult {
  transactionId: number;
  status: string;
  balanceSettledBefore: number;
  balanceSettledAfter: number;
  balanceAuthorisedBefore: number;
  balanceAuthorisedAfter: number;
}
