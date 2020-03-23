import { selectActiveItemId } from 'store/domains/utils';
import { getProduct } from './../products';
import {
  ActionTypeKeys,
  GetEndpointsProductServiceAction,
  GetInterfacesProductServiceAction,
  UpdateCardServiceAction,
} from './actionTypes';
import * as api from './api';
import { ServicesItems, ServicesItemsPrepared } from './types';
import { prepareCardServiceDataToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetInterfacesService = (institutionId: number) =>
  GetInterfacesProductServiceAction;
export type GetEndpointsService = (institutionId: number) =>
  GetEndpointsProductServiceAction;

export type HandleGetInterfacesService = (institutionId: number) => Thunk<void>;
export type HandleGetProductServices = (institutionId: number) => Thunk<void>;

export type UpdateCardService = (data: ServicesItems) => UpdateCardServiceAction;
export type HandleUpdateCardService = (data: Partial<ServicesItemsPrepared>) => Thunk<void>;

export const getEndpointsService: GetEndpointsService = institutionId => ({
  type: ActionTypeKeys.GET_SERVICE_ENDPOINTS,
  payload: api.getEndpointsService(institutionId),
});

export const getInterfacesService: GetInterfacesService = institutionId => ({
  type: ActionTypeKeys.GET_SERVICE_INTERFACES,
  payload: api.getInterfacesService(institutionId),
});

export const updateCardService: UpdateCardService = data => ({
  type: ActionTypeKeys.UPDATE_CARD_SERVICES,
  payload: api.updateCardService(data),
});

export const handleGetInterfacesService: HandleGetInterfacesService = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getInterfacesService(institutionId));
      },
      dispatch
    );
  };

export const handleGetProductServices: HandleGetProductServices = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await Promise.all([
          dispatch(getInterfacesService(institutionId)),
          dispatch(getEndpointsService(institutionId)),
        ]);
      },
      dispatch
    );
  };

export const handleUpdateCardService: HandleUpdateCardService = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareCardServiceDataToSend(data);
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(updateCardService(preparedValues));
        await dispatch(getProduct(id));
      },
      dispatch
    );
  };
