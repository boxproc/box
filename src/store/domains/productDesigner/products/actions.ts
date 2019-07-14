import { cookiesNames } from 'consts';

import * as api from './api';

import {
  ActionTypeKeys,
  GetProductsAction,
  GetProductsOptionsAction
} from './actionTypes';
import { selectIsProductOptionsLoaded } from './selectors';

import { apiClient } from 'services';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetProducts = () => GetProductsAction;
export type HandleGetProducts = VoidPromiseThunk;

export type GetProductOptions = () => GetProductsOptionsAction;
export type HandleGetProductOptions = VoidPromiseThunk;

export const getProducts: GetProducts = () => ({
  type: ActionTypeKeys.GET_PRODUCTS,
  payload: api.getProducts(),
});

export const getProductOptions: GetProductOptions = () => ({
  type: ActionTypeKeys.GET_PRODUCTS_OPTIONS,
  payload: api.getProductOptions(),
});

export const handleGetProducts: HandleGetProducts = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getProducts());

        if (!selectIsProductOptionsLoaded) {
          await dispatch(getProductOptions());
        }
      },
      dispatch
    );
  };
