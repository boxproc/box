import { reset as resetForm } from 'redux-form';

import { cookiesNames, formsNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import {
  ActionTypeKeys,
  AddAdminSysPropAction,
  DeleteAdminSysPropAction,
  GetAdminSysPropsAction,
  UpdateAdminSysPropsAction,
} from './actionTypes';

import { AdminSysPropsItem, AdminSysPropsItemResp } from './types';
import { prepareAdminSysItemValues } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSysProps = () => GetAdminSysPropsAction;
export type HandleGetAdminSysProps = VoidPromiseThunk;

export type AddAdminSysProp = (propValues: AdminSysPropsItemResp) =>
  AddAdminSysPropAction;
export type HandleAddAdminSysProp = (propValues: AdminSysPropsItem) => Thunk<void>;

export type DeleteAdminSysProp = (propName: string) => DeleteAdminSysPropAction;
export type HandleDeleteAdminSysProp = (propName: string) => Thunk<void>;

export type UpdateAdminSysProps = (propValues: AdminSysPropsItemResp) =>
  UpdateAdminSysPropsAction;
export type HandleUpdateAdminSysProps = (propValues: AdminSysPropsItem) => Thunk<void>;

export const getAdminSysProps: GetAdminSysProps = () => ({
  type: ActionTypeKeys.GET_ADMIN_SYS_PROPS,
  payload: api.getAdminSysProps(),
});

export const addAdminSysProp: AddAdminSysProp = (propValues) => ({
  type: ActionTypeKeys.ADD_ADMIN_SYS_PROP,
  payload: api.addAdminSysProp(propValues),
});

export const deleteAdminSysProp: DeleteAdminSysProp = (propName) => ({
  type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP,
  payload: api.deleteAdminSysProp(propName),
});

export const updateAdminSysProps: UpdateAdminSysProps = (propValues) => ({
  type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS,
  payload: api.updateAdminSysProps(propValues),
});

export const handleGetAdminSysProps: HandleGetAdminSysProps = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        await dispatch(getAdminSysProps());
      },
      dispatch
    );
  };

export const handleAddAdminSysProp: HandleAddAdminSysProp = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedAdminSysItemValues = prepareAdminSysItemValues(propValues);

        await dispatch(addAdminSysProp(preparedAdminSysItemValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_SYSTEM_PROPERTY));
        await dispatch(resetForm(formsNames.ADD_ADMIN_SYSTEM_PROPERTY));
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

export const handleUpdateAdminSysProps: HandleUpdateAdminSysProps = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedAdminSysItemValues = prepareAdminSysItemValues(propValues);

        await dispatch(updateAdminSysProps(preparedAdminSysItemValues));
      },
      dispatch
    );
  };
