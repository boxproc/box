import { selectActiveItemId } from 'store/domains/utils';
import { getProduct } from './../products';
import { ActionTypeKeys, UpdateProductAuxCountersAction } from './actionTypes';
import * as api from './api';
import { ProductAuxCountersItem, ProductAuxCountersItemPrepared } from './types';
import { prepareAuxCountersToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type UpdateProductAuxCounters = (data: Partial<ProductAuxCountersItem>) =>
  UpdateProductAuxCountersAction;
export type HandleUpdateProductAuxCounters = (data: Partial<ProductAuxCountersItemPrepared>) =>
  Thunk<void>;

export const updateProductAuxCounters: UpdateProductAuxCounters = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS,
  payload: api.updateProductAuxCounters(data),
});

export const handleUpdateProductAuxCounters: HandleUpdateProductAuxCounters = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAuxCountersToSend(data);
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(updateProductAuxCounters(preparedValues));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
