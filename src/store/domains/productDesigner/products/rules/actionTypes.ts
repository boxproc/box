import { IProductRuleResp } from './types';

import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCT_RULE = 'products/GET_PRODUCT_RULE',
  GET_PRODUCT_RULE_FULFILLED = 'products/GET_PRODUCT_RULE_FULFILLED',
  GET_PRODUCT_RULE_REJECTED = 'products/GET_PRODUCT_RULE_REJECTED',

  UPDATE_PRODUCT_RULE = 'products/UPDATE_PRODUCT_RULE',
  UPDATE_PRODUCT_RULE_FULFILLED = 'products/UPDATE_PRODUCT_RULE_FULFILLED',
  UPDATE_PRODUCT_RULE_REJECTED = 'products/UPDATE_PRODUCT_RULE_REJECTED',
}

export interface IGetProductRuleAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE;
}

export interface IGetProductRuleFulfilledAction {
  readonly payload: IProductRuleResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_FULFILLED;
}

export interface IGetProductRuleRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_REJECTED;
}

export interface IUpdateProductRuleAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULE;
}

export interface IUpdateProductRuleFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULE_FULFILLED;
}

export interface IUpdateProductRuleRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULE_REJECTED;
}

export type TProductRulesAction =
  | IGetProductRuleFulfilledAction
  | IUpdateProductRuleFulfilledAction;
