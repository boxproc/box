import {
  ProductLoanIllustrationDataResp,
  ProductRevolvingCreditIllustrationAllDataResp,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  ILLUSTRATE_PRODUCT_LOAN = 'productDesigner/products/ILLUSTRATE_PRODUCT_LOAN',
  ILLUSTRATE_PRODUCT_LOAN_FULFILLED = 'productDesigner/products/ILLUSTRATE_PRODUCT_LOAN_FULFILLED',
  ILLUSTRATE_PRODUCT_LOAN_REJECTED = 'productDesigner/products/ILLUSTRATE_PRODUCT_LOAN_REJECTED',

  ILLUSTRATE_PRODUCT_REVOLVING_CREDIT =
  'productDesigner/products/ILLUSTRATE_PRODUCT_REVOLVING_CREDIT',
  ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED =
  'productDesigner/products/ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED',
  ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_REJECTED =
  'productDesigner/products/ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_REJECTED',

  RESET_ILLUSTRATION_LOAN = 'productDesigner/products/RESET_ILLUSTRATION_LOAN',
}

export interface IllustrateProductLoanAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN;
}

export interface IllustrateProductLoanFulfilledAction {
  readonly payload: ProductLoanIllustrationDataResp;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN_FULFILLED;
}

export interface IllustrateProductLoanRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN_REJECTED;
}

export interface IllustrateProductRevolvingCreditAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT;
}

export interface IllustrateProductRevolvingCreditFulfilledAction {
  readonly payload: ProductRevolvingCreditIllustrationAllDataResp;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_FULFILLED;
}

export interface IllustrateProductRevolvingCreditRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT_REJECTED;
}

export interface ResetIllustrationLoanAction {
  readonly type: ActionTypeKeys.RESET_ILLUSTRATION_LOAN;
}

export type ProductIllustrationActionTypes =
  | IllustrateProductLoanFulfilledAction
  | IllustrateProductRevolvingCreditFulfilledAction
  | ResetIllustrationLoanAction;
