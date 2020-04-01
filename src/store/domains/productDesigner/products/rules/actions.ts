
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { activeItemIdSelector } from 'store';
import { ActionTypeKeys, IGetProductRuleAction, IUpdateProductRuleAction, } from './actionTypes';
import * as api from './api';
import { IProductRule, IProductRuleData, IProductRuleReqToSend } from './types';
import { prepareRuleIdsToSend, prepareRuleToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type TGetProductRule = (data: IProductRuleReqToSend) => IGetProductRuleAction;
export type THandleGetProductRule = () => Thunk<void>;

export type TUpdateProductRule = (data: IProductRuleData) => IUpdateProductRuleAction;
export type THandleUpdateProductRule = (data: Partial<IProductRule>) => Thunk<void>;

export const getProductRule: TGetProductRule = data => ({
  type: ActionTypeKeys.GET_PRODUCT_RULE,
  payload: api.getProductRule(data),
});

export const updateProductRule: TUpdateProductRule = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_RULE,
  payload: api.updateProductRule(data),
});

export const handleGetProductRule: THandleGetProductRule = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_RULES);
        const state = getState();
        const prepared = prepareRuleIdsToSend(formValues(state));

        await dispatch(getProductRule({
          product_id: activeItemIdSelector(state),
          ...prepared,
        }));
      },
      dispatch
    );
  };

export const handleUpdateProductRule: THandleUpdateProductRule = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedData = prepareRuleToSend(data);

        await dispatch(updateProductRule({
          ...preparedData,
          product_id: activeItemIdSelector(state),
        }));
        await dispatch(handleGetProductRule());
      },
      dispatch
    );
  };
