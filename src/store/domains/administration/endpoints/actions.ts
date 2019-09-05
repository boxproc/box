import { getFormValues, reset as resetForm } from 'redux-form';

import { formNames, modalNames, } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminEndpointAction,
  DeleteAdminEndpointAction,
  FilterAdminEndpointAction,
  SetEndpointIdAction,
  UpdateAdminEndpointAction,
} from './actionTypes';
import * as api from './api';
import { selectAdminCurrentEndpointId } from './selectors';
import {
  AdminEndpointFilterParamsPrepared,
  AdminEndpointItem,
  AdminEndpointItemDetailsPrepared
} from './types';
import { preparedFilterParamsToSend, preparedValuesToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type AddAdminEndpoint = (values: Partial<AdminEndpointItem>) => AddAdminEndpointAction;
export type HandleAddAdminEndpoint = (values: Partial<AdminEndpointItemDetailsPrepared>) =>
  Thunk<void>;

export type SetEndpointId = (id: number) => SetEndpointIdAction;
export type HandleSetEndpointId = (id: number) => void;

export type DeleteAdminEndpoint = (id: number) => DeleteAdminEndpointAction;
export type HandleDeleteAdminEndpoint = () => Thunk<void>;

export type UpdateAdminEndpoint = (propValues: Partial<AdminEndpointItem>) =>
  UpdateAdminEndpointAction;
export type HandleUpdateAdminEndpoint = (propValues: Partial<AdminEndpointItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterAdminEndpoint = (params: Partial<AdminEndpointFilterParamsPrepared>) =>
  FilterAdminEndpointAction;
export type HandleFilterAdminEndpoint = () => Thunk<void>;

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

export const handleFilterAdminEndpoint: HandleFilterAdminEndpoint = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNames.ADMIN_ENDPOINT_FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAdminEndpoint(preparedValues));
        }
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
        await dispatch(handleFilterAdminEndpoint());
        await dispatch(resetForm(formNames.ADMIN_ENDPOINT));
      },
      dispatch
    );
  };

export const handleDeleteAdminEndpoint: HandleDeleteAdminEndpoint = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectAdminCurrentEndpointId(state);

        await dispatch(deleteAdminEndpoint(id));
        await dispatch(handleFilterAdminEndpoint());
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
        await dispatch(handleFilterAdminEndpoint());
      },
      dispatch
    );
  };
