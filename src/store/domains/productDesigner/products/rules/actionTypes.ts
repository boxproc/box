import { ProductRuleResp } from './types';

import { ApiResponse, ResponseStatusType, } from 'types';

export enum ActionTypeKeys {
  GET_PRODUCT_RULE = 'productDesigner/products/GET_PRODUCT_RULE',
  GET_PRODUCT_RULE_FULFILLED = 'productDesigner/products/GET_PRODUCT_RULE_FULFILLED',
  GET_PRODUCT_RULE_REJECTED = 'productDesigner/products/GET_PRODUCT_RULE_REJECTED',

  UPDATE_PRODUCT_RULES = 'productDesigner/products/UPDATE_PRODUCT_RULES',
  UPDATE_PRODUCT_RULES_FULFILLED = 'productDesigner/products/UPDATE_PRODUCT_RULES_FULFILLED',
  UPDATE_PRODUCT_RULES_REJECTED = 'productDesigner/products/UPDATE_PRODUCT_RULES_REJECTED',
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
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_PRODUCT_RULE_REJECTED;
}

export interface UpdateProductRulesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES;
}

export interface UpdateProductRulesFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES_FULFILLED;
}

export interface UpdateProductRulesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_RULES_REJECTED;
}

export type ProductRulesActionTypes =
  | GetProductRuleFulfilledAction
  | UpdateProductRulesFulfilledAction;
