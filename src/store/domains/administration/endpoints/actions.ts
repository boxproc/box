import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';

import { closeModal, selectIsAccessibleFiltering } from 'store';
import {
  ActionTypeKeys,
  AddAdminEndpointAction,
  DeleteAdminEndpointAction,
  FilterAdminEndpointsAction,
  GetEndpointsByInstitutionIdAction,
  UpdateAdminEndpointAction,
} from './actionTypes';
import * as api from './api';
import {
  AdminEndpointFilterPrepared,
  AdminEndpointItem,
  AdminEndpointItemDetailsPrepared
} from './types';
import { preparedDataToSend, preparedFilterToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type AddAdminEndpoint = (data: Partial<AdminEndpointItem>) => AddAdminEndpointAction;
export type HandleAddAdminEndpoint = (data: Partial<AdminEndpointItemDetailsPrepared>) =>
  Thunk<void>;

export type DeleteAdminEndpoint = (id: number) => DeleteAdminEndpointAction;
export type HandleDeleteAdminEndpoint = (id: number) => Thunk<void>;

export type UpdateAdminEndpoint = (data: Partial<AdminEndpointItem>) => UpdateAdminEndpointAction;
export type HandleUpdateAdminEndpoint = (data: Partial<AdminEndpointItemDetailsPrepared>) =>
  Thunk<void>;

export type FilterAdminEndpoints = (params: Partial<AdminEndpointFilterPrepared>) =>
  FilterAdminEndpointsAction;
export type HandleFilterAdminEndpoints = () => Thunk<void>;

export type HandleGetEndpointsByInstitutionId = (id: string | number) => Thunk<void>;
export type GetEndpointsByInstitutionId = (id: string | number) =>
  GetEndpointsByInstitutionIdAction;

export type ResetEndpoints = () => void;

export const addAdminEndpoint: AddAdminEndpoint = data => ({
  type: ActionTypeKeys.ADD_ADMIN_ENDPOINT,
  payload: api.addAdminEndpoint(data),
});

export const deleteAdminEndpoint: DeleteAdminEndpoint = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_ENDPOINT,
  payload: api.deleteAdminEndpoint(id),
  meta: { id },
});

export const filterAdminEndpoints: FilterAdminEndpoints = filter => ({
  type: ActionTypeKeys.FILTER_ADMIN_ENDPOINTS,
  payload: api.filterAdminEndpoints(filter),
});

export const updateAdminEndpoint: UpdateAdminEndpoint = data => ({
  type: ActionTypeKeys.UPDATE_ADMIN_ENDPOINT,
  payload: api.updateAdminEndpoint(data),
});

export const getEndpointsByInstitutionId: GetEndpointsByInstitutionId = id => ({
  type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID,
  payload: api.getEndpointsByInstitutionId(id),
});

export const resetEndpoints: ResetEndpoints = () => ({
  type: ActionTypeKeys.RESET_ENDPOINTS,
});

export const handleFilterAdminEndpoints: HandleFilterAdminEndpoints = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAdminEndpoints(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleAddAdminEndpoint: HandleAddAdminEndpoint = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        await dispatch(addAdminEndpoint(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_ENDPOINT));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterAdminEndpoints());
        }
      },
      dispatch
    );
  };

export const handleDeleteAdminEndpoint: HandleDeleteAdminEndpoint = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminEndpoint(id));
        dispatch(closeModal(modalNamesConst.EDIT_ENDPOINT));
      },
      dispatch
    );
  };

export const handleUpdateEndpoint: HandleUpdateAdminEndpoint = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedDataToSend(data);

        await dispatch(updateAdminEndpoint(preparedValues));
        await dispatch(handleFilterAdminEndpoints());
      },
      dispatch
    );
  };

export const handleGetEndpointsByInstitutionId: HandleGetEndpointsByInstitutionId = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getEndpointsByInstitutionId(id));
      },
      dispatch
    );
  };
