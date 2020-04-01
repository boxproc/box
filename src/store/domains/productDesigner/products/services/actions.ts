import { activeItemIdSelector } from 'store/domains/utils';
import { getProduct } from './../products';
import {
  ActionTypeKeys,
  IGetServicesEndpointsAction,
  IGetServicesInterfacesAction,
  IUpdateProductServicesAction,
} from './actionTypes';
import * as api from './api';
import { IProductServices, IProductServicesData } from './types';
import { prepareDataToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

/**
 * Get product services interfaces action
 */

export type TGetServicesInterfaces = (instId: number) => IGetServicesInterfacesAction;
export type THandleGetServicesInterfaces = (instId: number) => Thunk<void>;

export const getServicesInterfaces: TGetServicesInterfaces = instId => ({
  type: ActionTypeKeys.GET_SERVICES_INTERFACES,
  payload: api.getServicesInterfaces(instId),
});

export const handleGetServicesInterfaces: THandleGetServicesInterfaces = instId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getServicesInterfaces(instId));
      },
      dispatch
    );
  };

/**
 * Get product services interfaces action
 */

export type TGetServicesEndpoints = (instId: number) => IGetServicesEndpointsAction;

export const getServicesEndpoints: TGetServicesEndpoints = instId => ({
  type: ActionTypeKeys.GET_SERVICES_ENDPOINTS,
  payload: api.getServicesEndpoints(instId),
});

/**
 * Get product services action
 */

export type THandleGetProductServices = (instId: number) => Thunk<void>;

export const handleGetProductServices: THandleGetProductServices = instId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await Promise.all([
          dispatch(getServicesInterfaces(instId)),
          dispatch(getServicesEndpoints(instId)),
        ]);
      },
      dispatch
    );
  };

/**
 * Update product services interfaces action
 */

export type TUpdateProductServices = (data: IProductServicesData) => IUpdateProductServicesAction;
export type THandleUpdateProductServices = (data: Partial<IProductServices>) => Thunk<void>;

export const updateProductServices: TUpdateProductServices = data => ({
  type: ActionTypeKeys.UPDATE_PRODUCT_SERVICES,
  payload: api.updateProductServices(data),
});

export const handleUpdateProductServices: THandleUpdateProductServices = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const id = activeItemIdSelector(state);

        await dispatch(updateProductServices(preparedData));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
