import { activeItemIdSelector } from 'store/domains/utils';
import { getProduct } from './../products';
import { ActionTypeKeys, UpdateProductAuxCountersAction } from './actionTypes';
import * as api from './api';
import { IProductAuxCounters, IProductAuxCountersData } from './types';
import { prepareAuxCountersToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type UpdateProductAuxCounters = (data: Partial<IProductAuxCountersData>) =>
  UpdateProductAuxCountersAction;
export type HandleUpdateProductAuxCounters = (data: Partial<IProductAuxCounters>) =>
  Thunk<void>;

export const updateProductAuxCounters: UpdateProductAuxCounters = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS,
  payload: api.updateProductAuxCounters(data),
});

export const handleUpdateProductAuxCounters: HandleUpdateProductAuxCounters = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareAuxCountersToSend(data);
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(updateProductAuxCounters(preparedData));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
