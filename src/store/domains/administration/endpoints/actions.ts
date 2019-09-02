import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames, } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminEndpointAction,
  DeleteAdminEndpointAction,
  FilterAdminEndpointAction,
  GetAdminEndpointAction,
  SetEndpointIdAction,
  UpdateAdminEndpointAction,
} from './actionTypes';
import * as api from './api';
import {
  AdminEndpointFilterParams,
  AdminEndpointFilterParamsPrepared,
  AdminEndpointItem,
  AdminEndpointItemDetailsPrepared
} from './types';
import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminEndpoint = () => GetAdminEndpointAction;
export type HandleGetAdminEndpoint = VoidPromiseThunk;

export type AddAdminEndpoint = (values: Partial<AdminEndpointItem>) => AddAdminEndpointAction;
export type HandleAddAdminEndpoint = (values: Partial<AdminEndpointItemDetailsPrepared>) =>
  Thunk<void>;

export type SetEndpointId = (id: number) => SetEndpointIdAction;
export type HandleSetEndpointId = (id: number) => void;

export type DeleteAdminEndpoint = (id: number) => DeleteAdminEndpointAction;
export type HandleDeleteAdminEndpoint = (id: number) => Thunk<void>;

export type UpdateAdminEndpoint = (propValues: Partial<AdminEndpointItem>) =>
  UpdateAdminEndpointAction;
export type HandleUpdateAdminEndpoint = (propValues: Partial<AdminEndpointItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterAdminEndpoint = (params: Partial<AdminEndpointFilterParamsPrepared>) =>
  FilterAdminEndpointAction;
export type HandleFilterAdminEndpoint = (params: Partial<AdminEndpointFilterParams>) =>
  Thunk<void>;

export const getAdminEndpoint: GetAdminEndpoint = () => ({
  type: ActionTypeKeys.GET_ADMIN_ENDPOINT,
  payload: api.getAdminEndpoint(),
});

export const setAdminEndpointId: SetEndpointId = id => ({
  type: ActionTypeKeys.SET_ADMIN_ENDPOINT_ID,
  payload: id,
});

export const addAdminEndpoint: AddAdminEndpoint = values => ({
  type: ActionTypeKeys.ADD_ADMIN_ENDPOINT,
  payload: api.addAdminEndpoint(values),
});

export const deleteAdminEndpoint: DeleteAdminEndpoint = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_ENDPOINT,
  payload: api.deleteAdminEndpoint(id),
  meta: id,
});

export const filterAdminEndpoint: FilterAdminEndpoint = filterParams => ({
  type: ActionTypeKeys.FILTER_ADMIN_ENDPOINT,
  payload: api.filterAdminEndpoint(filterParams),
});

export const updateAdminEndpoint: UpdateAdminEndpoint = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_ENDPOINT,
  payload: api.updateAdminEndpoint(values),
});

export const handleGetAdminEndpoint: HandleGetAdminEndpoint = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getAdminEndpoint());
      },
      dispatch
    );
  };

export const handleSetAdminEndpointId: HandleSetEndpointId = id =>
  setAdminEndpointId(id);

export const handleAddAdminEndpoint: HandleAddAdminEndpoint = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(addAdminEndpoint(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_ENDPOINT));
        await dispatch(handleGetAdminEndpoint());
        await dispatch(resetForm(formNames.ADMIN_ENDPOINT));
      },
      dispatch
    );
  };

export const handleDeleteAdminEndpoint: HandleDeleteAdminEndpoint = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminEndpoint(id));
        await dispatch (getAdminEndpoint());
        await dispatch(closeModal(modalNames.EDIT_ADMIN_ENDPOINT));
      },
      dispatch
    );
  };

export const handleUpdateEndpoint: HandleUpdateAdminEndpoint = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

        await dispatch(updateAdminEndpoint(preparedValues));
        await dispatch(handleGetAdminEndpoint());
      },
      dispatch
    );
  };

export const handleFilterAdminEndpoint: HandleFilterAdminEndpoint = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterAdminEndpoint(preparedValues));
      },
      dispatch
    );
  };
