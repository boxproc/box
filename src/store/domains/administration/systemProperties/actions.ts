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
  SetAdminSysPropIdAction,
  UpdateAdminSysPropsAction,
} from './actionTypes';
import { selectCurrentAdminSysPropsItem } from './selectors';
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

export type DeleteAdminSysProp = (id: string) => DeleteAdminSysPropAction;
export type HandleDeleteAdminSysProp = (id: string) => Thunk<void>;

export type AddAdminSysProp = (propValues: EditableAdminSysPropPrepared) =>
  AddAdminSysPropAction;
export type HandleAddAdminSysProp = (propValues: EditableAdminSysProp) => Thunk<void>;

export type UpdateAdminSysProps = (propValues: EditableAdminSysPropPrepared) =>
  UpdateAdminSysPropsAction;
export type HandleUpdateAdminSysProps = (propValues: EditableAdminSysProp) => Thunk<void>;

export type FilterAdminSysProps = (filterParams: AdminSysPropFilterParamsPrepared) =>
  FilterAdminSysPropsAction;
export type HandleFilterAdminSysProps = (filterParams: AdminSysPropFilterParams) => Thunk<void>;

export type SetAdminSysPropId = (id: string) => SetAdminSysPropIdAction;
export type HandleSetAdminSysPropId = (id: string) => void;

export const getAdminSysProps: GetAdminSysProps = () => ({
  type: ActionTypeKeys.GET_ADMIN_SYS_PROPS,
  payload: api.getAdminSysProps(),
});

export const deleteAdminSysProp: DeleteAdminSysProp = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP,
  payload: api.deleteAdminSysProp(id),
  meta: id,
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
});

export const setAdminSysPropId: SetAdminSysPropId = id => ({
  type: ActionTypeKeys.SET_ADMIN_SYS_PROP_ID,
  payload: id,
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
        }
      },
      dispatch
    );
  };

export const handleDeleteAdminSysProp: HandleDeleteAdminSysProp = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminSysProp(id));
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
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedValues = prepareEditableAdminSysPropItemValues({
          ...selectCurrentAdminSysPropsItem(state),
          ...propValues,
        });

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

export const handleSetAdminSysPropId: HandleSetAdminSysPropId = id =>
  setAdminSysPropId(id);
