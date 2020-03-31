
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { activeItemIdSelector } from 'store';
import { ActionTypeKeys, GetProductRuleAction, UpdateProductRulesAction, } from './actionTypes';
import * as api from './api';
import { ProductRuleRequestPrepared, ProductRulesItem, ProductRulesItemResp } from './types';
import { prepareProductRuleDataToSend, prepareProductRuleIdsToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type GetProductRule = (data: ProductRuleRequestPrepared) => GetProductRuleAction;
export type HandleGetProductRule = () => Thunk<void>;

export type UpdateProductRules = (data: ProductRulesItemResp) => UpdateProductRulesAction;
export type HandleUpdateProductRules = (data: Partial<ProductRulesItem>) => Thunk<void>;

export const getProductRule: GetProductRule = data => ({
  type: ActionTypeKeys.GET_PRODUCT_RULE,
  payload: api.getProductRule(data),
});

export const updateProductRules: UpdateProductRules = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_RULES,
  payload: api.updateProductRules(data),
});

export const handleGetProductRule: HandleGetProductRule = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_RULES);
        const state = getState();
        const prepared = prepareProductRuleIdsToSend(formValues(state));

        await dispatch(getProductRule({
          product_id: activeItemIdSelector(state),
          ...prepared,
        }));
      },
      dispatch
    );
  };

export const handleUpdateProductRules: HandleUpdateProductRules = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedData = prepareProductRuleDataToSend(data);

        await dispatch(updateProductRules({
          ...preparedData,
          product_id: activeItemIdSelector(state),
        }));
        await dispatch(handleGetProductRule());
      },
      dispatch
    );
  };
