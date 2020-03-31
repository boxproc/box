import {
  ILoansIllustrationData,
  IRevCreditIllustrationAllData,
} from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  ILLUSTRATE_LOAN = 'products/ILLUSTRATE_LOAN',
  ILLUSTRATE_LOAN_FULFILLED = 'products/ILLUSTRATE_LOAN_FULFILLED',
  ILLUSTRATE_LOAN_REJECTED = 'products/ILLUSTRATE_LOAN_REJECTED',

  ILLUSTRATE_REVOLVING_CREDIT = 'products/ILLUSTRATE_REVOLVING_CREDIT',
  ILLUSTRATE_REVOLVING_CREDIT_FULFILLED = 'products/ILLUSTRATE_REVOLVING_CREDIT_FULFILLED',
  ILLUSTRATE_REVOLVING_CREDIT_REJECTED = 'products/ILLUSTRATE_REVOLVING_CREDIT_REJECTED',

  RESET_PRODUCT_ILLUSTRATION = 'products/RESET_PRODUCT_ILLUSTRATION',
}

export interface IIllustrateLoanAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ILLUSTRATE_LOAN;
}

export interface IIllustrateLoanFulfilledAction {
  readonly payload: ILoansIllustrationData;
  readonly type: ActionTypeKeys.ILLUSTRATE_LOAN_FULFILLED;
}

export interface IIllustrateLoanRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ILLUSTRATE_LOAN_REJECTED;
}

export interface IIllustrateRevCreditAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ILLUSTRATE_REVOLVING_CREDIT;
}

export interface IIllustrateRevCreditFulfilledAction {
  readonly payload: IRevCreditIllustrationAllData;
  readonly type: ActionTypeKeys.ILLUSTRATE_REVOLVING_CREDIT_FULFILLED;
}

export interface IIllustrateRevCreditRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ILLUSTRATE_REVOLVING_CREDIT_REJECTED;
}

export interface IResetProductIllustrationAction {
  readonly type: ActionTypeKeys.RESET_PRODUCT_ILLUSTRATION;
}

export type TIllustrationAction =
  | IIllustrateLoanFulfilledAction
  | IIllustrateRevCreditFulfilledAction
  | IResetProductIllustrationAction;
