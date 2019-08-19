import { getFormValues, reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import {
  ActionTypeKeys,
  AddAdminSysPropAction,
  DeleteAdminSysPropAction,
  FilterAdminSysPropsAction,
  GetAdminSysPropsAction,
  UpdateAdminSysPropsAction,
} from './actionTypes';

import {
  AdminSysPropFilterParams,
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';

import {
  prepareAdminSysPropFilterParams,
  prepareEditableAdminSysPropItemValues,
} from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSysProps = () => GetAdminSysPropsAction;
export type HandleGetAdminSysProps = VoidPromiseThunk;

export type DeleteAdminSysProp = (propName: string) => DeleteAdminSysPropAction;
export type HandleDeleteAdminSysProp = (propName: string) => Thunk<void>;

export type AddAdminSysProp = (propValues: EditableAdminSysPropPrepared) =>
  AddAdminSysPropAction;
export type HandleAddAdminSysProp = (propValues: EditableAdminSysProp) => Thunk<void>;

export type UpdateAdminSysProps = (propValues: EditableAdminSysPropPrepared) =>
  UpdateAdminSysPropsAction;
export type HandleUpdateAdminSysProps = (propValues: EditableAdminSysProp) => Thunk<void>;

export type FilterAdminSysProps = (filterParams: AdminSysPropFilterParamsPrepared) =>
  FilterAdminSysPropsAction;
export type HandleFilterAdminSysProps = (filterParams: AdminSysPropFilterParams) => Thunk<void>;

export const getAdminSysProps: GetAdminSysProps = () => ({
  type: ActionTypeKeys.GET_ADMIN_SYS_PROPS,
  payload: api.getAdminSysProps(),
});

export const deleteAdminSysProp: DeleteAdminSysProp = propName => ({
  type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP,
  payload: api.deleteAdminSysProp(propName),
  meta: propName,
});

export const addAdminSysProp: AddAdminSysProp = propValues => ({
  type: ActionTypeKeys.ADD_ADMIN_SYS_PROP,
  payload: api.addAdminSysProp(propValues),
});

export const updateAdminSysProps: UpdateAdminSysProps = propValues => ({
  type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS,
  payload: api.updateAdminSysProps(propValues),
});

export const filterAdminSysProps: FilterAdminSysProps = filterParams => ({
  type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS,
  payload: api.filterAdminSysProps(filterParams),
  meta: filterParams,
});

export const handleGetAdminSysProps: HandleGetAdminSysProps = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.SYSTEM_PROPERTY_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = prepareAdminSysPropFilterParams(formValues(state));
          await dispatch(filterAdminSysProps(preparedValues));
        } else {
          await dispatch(getAdminSysProps());
        }
      },
      dispatch
    );
  };

export const handleDeleteAdminSysProp: HandleDeleteAdminSysProp = propName =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminSysProp(propName));
      },
      dispatch
    );
  };

export const handleAddAdminSysProp: HandleAddAdminSysProp = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareEditableAdminSysPropItemValues(propValues);

        await dispatch(addAdminSysProp(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_SYSTEM_PROPERTY));
        await dispatch(handleGetAdminSysProps());
        await dispatch(resetForm(formNames.ADD_ADMIN_SYSTEM_PROPERTY));
      },
      dispatch
    );
  };

export const handleUpdateAdminSysProps: HandleUpdateAdminSysProps = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareEditableAdminSysPropItemValues(propValues);

        await dispatch(updateAdminSysProps(preparedValues));
        await dispatch(handleGetAdminSysProps());
      },
      dispatch
    );
  };

export const handleFilterAdminSysProps: HandleFilterAdminSysProps = filterParams =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminSysPropFilterParams(filterParams);

        await dispatch(filterAdminSysProps(preparedValues));
      },
      dispatch
    );
  };
