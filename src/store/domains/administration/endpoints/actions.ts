import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';

import { closeModal, selectIsAccessibleFiltering } from 'store';
import {
  ActionTypeKeys,
  IAddEndpointAction,
  IDeleteEndpointAction,
  IFilterEndpointsAction,
  IGetEndpointsByInstIdAction,
  IUpdateEndpointAction,
} from './actionTypes';

import * as api from './api';

import {
  IEndpointData,
  IEndpointDetails,
  IEndpointsFilterToSend,
} from './types';

import { preparedDataToSend, preparedFilterToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

/**
 * Filter endpoints action
 */

export type TFilterEndpoints = (data: Partial<IEndpointsFilterToSend>) => IFilterEndpointsAction;
export type THandleFilterEndpoints = () => Thunk<void>;

export const filterEndpoints: TFilterEndpoints = filter => ({
  type: ActionTypeKeys.FILTER_ENDPOINTS,
  payload: api.filterEndpoints(filter),
});

export const handleFilterEndpoints: THandleFilterEndpoints = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = preparedFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterEndpoints(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Add endpoint action
 */

export type TAddEndpoint = (data: Partial<IEndpointData>) => IAddEndpointAction;
export type THandleAddEndpoint = (data: Partial<IEndpointDetails>) => Thunk<void>;

export const addEndpoint: TAddEndpoint = data => ({
  type: ActionTypeKeys.ADD_ENDPOINT,
  payload: api.addEndpoint(data),
});

export const handleAddEndpoint: THandleAddEndpoint = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = preparedDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        await dispatch(addEndpoint(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_ENDPOINT));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterEndpoints());
        }
      },
      dispatch
    );
  };

/**
 * Delete endpoint action
 */

export type TDeleteEndpoint = (id: number) => IDeleteEndpointAction;
export type THandleDeleteEndpoint = (id: number) => Thunk<void>;

export const deleteEndpoint: TDeleteEndpoint = id => ({
  type: ActionTypeKeys.DELETE_ENDPOINT,
  payload: api.deleteEndpoint(id),
  meta: { id },
});

export const handleDeleteEndpoint: THandleDeleteEndpoint = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteEndpoint(id));
        dispatch(closeModal(modalNamesConst.EDIT_ENDPOINT));
      },
      dispatch
    );
  };

/**
 * Update endpoint action
 */

export type TUpdateEndpoint = (data: Partial<IEndpointData>) => IUpdateEndpointAction;
export type THandleUpdateEndpoint = (data: Partial<IEndpointDetails>) =>
  Thunk<void>;

export const updateEndpoint: TUpdateEndpoint = data => ({
  type: ActionTypeKeys.UPDATE_ENDPOINT,
  payload: api.updateEndpoint(data),
});

export const handleUpdateEndpoint: THandleUpdateEndpoint = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = preparedDataToSend(data);

        await dispatch(updateEndpoint(preparedData));
        await dispatch(handleFilterEndpoints());
      },
      dispatch
    );
  };

/**
 * Get endpoints by institution ID action
 */

export type THandleGetEndpointsByInstId = (id: string | number) => Thunk<void>;
export type TGetEndpointsByInstId = (id: string | number) => IGetEndpointsByInstIdAction;

export const getEndpointsByInstitutionId: TGetEndpointsByInstId = id => ({
  type: ActionTypeKeys.GET_ENDPOINTS_BY_INST_ID,
  payload: api.getEndpointsByInstitutionId(id),
});

export const handleGetEndpointsByInstitutionId: THandleGetEndpointsByInstId = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getEndpointsByInstitutionId(id));
      },
      dispatch
    );
  };

/**
 * Reset endpoints action
 */

export type TResetEndpoints = () => void;

export const resetEndpoints: TResetEndpoints = () => ({
  type: ActionTypeKeys.RESET_ENDPOINTS,
});
