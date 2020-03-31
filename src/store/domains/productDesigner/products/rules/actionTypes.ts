import { ProductRuleResp } from './types';

import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCT_RULE = 'products/GET_PRODUCT_RULE',
  GET_PRODUCT_RULE_FULFILLED = 'products/GET_PRODUCT_RULE_FULFILLED',
  GET_PRODUCT_RULE_REJECTED = 'products/GET_PRODUCT_RULE_REJECTED',

  UPDATE_PRODUCT_RULES = 'products/UPDATE_PRODUCT_RULES',
  UPDATE_PRODUCT_RULES_FULFILLED = 'products/UPDATE_PRODUCT_RULES_FULFILLED',
  UPDATE_PRODUCT_RULES_REJECTED = 'products/UPDATE_PRODUCT_RULES_REJECTED',
}

export interface GetProductRuleAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE;
}

export interface GetProductRuleFulfilledAction {
  readonly payload: ProductRuleResp;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_FULFILLED;
}

export interface GetProductRuleRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_REJECTED;
}

export interface UpdateProductRulesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES;
}

export interface UpdateProductRulesFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES_FULFILLED;
}

export interface UpdateProductRulesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES_REJECTED;
}

export type TProductRulesAction =
  | GetProductRuleFulfilledAction
  | UpdateProductRulesFulfilledAction;
