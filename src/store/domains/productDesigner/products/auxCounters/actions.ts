import { activeItemIdSelector } from 'store/domains/utils';
import { getProduct } from './../products';
import { ActionTypeKeys, IUpdateProductAuxCountersAction } from './actionTypes';
import * as api from './api';
import { IProductAuxCounters, IProductAuxCountersData } from './types';
import { prepareDataToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TUpdateProductAuxCounters = (data: Partial<IProductAuxCountersData>) =>
  IUpdateProductAuxCountersAction;
export type THandleUpdateProductAuxCounters = (data: Partial<IProductAuxCounters>) =>
  Thunk<void>;

export const updateProductAuxCounters: TUpdateProductAuxCounters = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_AUX_COUNTERS,
  payload: api.updateProductAuxCounters(data),
});

export const handleUpdateProductAuxCounters: THandleUpdateProductAuxCounters = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(updateProductAuxCounters(preparedData));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
