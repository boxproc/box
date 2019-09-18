import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminEndpointAction,
  DeleteAdminEndpointAction,
  FilterAdminEndpointAction,
  GetEndpointsByInstitutionIdAction,
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

export type HandleGetEndpointsByInstitutionId = (id: string | number) => Thunk<void>;
export type GetEndpointsByInstitutionId = (id: string | number) =>
  GetEndpointsByInstitutionIdAction;

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

export const getEndpointsByInstitutionId: GetEndpointsByInstitutionId = id => ({
  type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID,
  payload: api.getEndpointsByInstitutionId(id),
});

export const handleFilterAdminEndpoint: HandleFilterAdminEndpoint = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.ADMIN_ENDPOINT_FILTER);
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
        await dispatch(closeModal(modalNamesConst.ADD_ADMIN_ENDPOINT));
        await dispatch(handleFilterAdminEndpoint());
        await dispatch(resetForm(formNamesConst.ADMIN_ENDPOINT));
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
        await dispatch(closeModal(modalNamesConst.EDIT_ADMIN_ENDPOINT));
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

export const handleGetEndpointsByInstitutionId: HandleGetEndpointsByInstitutionId = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getEndpointsByInstitutionId(id));
      },
      dispatch
    );
  };
