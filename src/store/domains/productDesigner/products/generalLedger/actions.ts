import { activeItemIdSelector } from 'store/domains/utils';
import { getProduct } from './../products';
import { ActionTypeKeys, UpdateProductGLAction } from './actionTypes';
import * as api from './api';
import { IProductGL, IProductGLData } from './types';
import { prepareProductGLToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type UpdateProductGL = (data: Partial<IProductGLData>) => UpdateProductGLAction;
export type HandleUpdateProductGL = (data: Partial<IProductGL>) => Thunk<void>;

export const updateProductGL: UpdateProductGL = data => ({
  type: ActionTypeKeys.UPDATE_GENERAL_LEDGER,
  payload: api.updateProductGL(data),
});

export const handleUpdateProductGL: HandleUpdateProductGL = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareProductGLToSend(data);
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(updateProductGL(preparedData));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
