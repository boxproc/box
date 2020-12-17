import { ISelectValue } from 'types';

export interface ILimitAdjReq {
  transaction_type_id: number | string;
  account_id: number;
  balance_limit: number;
  description: string;
  transaction_datetime: string | number;
}

export interface ILimitAdjustmentFromData {
  accountId: string;
  balanceLimit: number;
  description: string;
  transactionDatetime: ISelectValue;
  transactionType: ISelectValue;
}

export interface ILimitAdjustmentResultData {
  transaction_id: number;
  balance_limit: number;
}

export interface ILimitAdjustmentResult {
  transactionId: number;
  balanceLimit: number;
}

export interface ILimitAdjustmentResultResponse {
  transaction_result: Array<ILimitAdjustmentResultData>;
}
