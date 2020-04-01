import { activeItemIdSelector } from 'store/domains/utils';
import { getProduct } from './../products';
import { ActionTypeKeys, IUpdateProductGLAction } from './actionTypes';
import * as api from './api';
import { IProductGL, IProductGLData } from './types';
import { prepareDataToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TUpdateProductGL = (data: Partial<IProductGLData>) => IUpdateProductGLAction;
export type THandleUpdateProductGL = (data: Partial<IProductGL>) => Thunk<void>;

export const updateProductGL: TUpdateProductGL = data => ({
  type: ActionTypeKeys.UPDATE_GENERAL_LEDGER,
  payload: api.updateProductGL(data),
});

export const handleUpdateProductGL: THandleUpdateProductGL = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(updateProductGL(preparedData));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
