import { activeItemIdSelector } from 'store/domains/utils';
import { getProduct } from './../products';
import { ActionTypeKeys, IUpdateProductRepaymentAction } from './actionTypes';
import * as api from './api';
import { IProductRepayment, IProductRepaymentData } from './types';
import { prepareDataToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TUpdateProductRepayment = (data: Partial<IProductRepaymentData>) =>
  IUpdateProductRepaymentAction;
export type THandleUpdateProductRepayment = (data: Partial<IProductRepayment>) => Thunk<void>;

export const updateProductRepayment: TUpdateProductRepayment = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_REPAYMENT,
  payload: api.updateProductRepayment(data),
});

export const handleUpdateProductRepayment: THandleUpdateProductRepayment = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(updateProductRepayment(preparedData));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
