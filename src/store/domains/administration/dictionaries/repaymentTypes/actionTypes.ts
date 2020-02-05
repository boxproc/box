import { DictionaryRepaymentTypes } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_DICTIONARY_REPAYMENT_TYPES = 'administration/RepaymentTypes/GET_DICTIONARY_REPAYMENT_TYPES',
  GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED =
  'administration/RepaymentTypes/GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED',
  GET_DICTIONARY_REPAYMENT_TYPES_REJECTED =
  'administration/RepaymentTypes/GET_DICTIONARY_REPAYMENT_TYPES_REJECTED',
}

export interface GetDictionaryRepaymentTypesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES;
}

export interface GetDictionaryRepaymentTypesFulfilledAction {
  readonly payload: DictionaryRepaymentTypes;
  readonly type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED;
}

export interface GetDictionaryRepaymentTypesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES_REJECTED;
}

export type DictionaryRepaymentTypesActionTypes =
  | GetDictionaryRepaymentTypesFulfilledAction;
