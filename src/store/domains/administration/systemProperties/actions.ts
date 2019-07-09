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

export type GetAdminSysProps = (sessionId: string) => GetAdminSysPropsAction;
export type HandleGetAdminSysProps = VoidPromiseThunk;

export type AddAdminSysProp = (sessionId: string, propValues: AdminSysPropsItemResp) =>
  AddAdminSysPropAction;
export type HandleAddAdminSysProp = (propValues: AdminSysPropsItem) => Thunk<void>;

export type DeleteAdminSysProp = (sessionId: string, propName: string) => DeleteAdminSysPropAction;
export type HandleDeleteAdminSysProp = (propName: string) => Thunk<void>;

export type UpdateAdminSysProps = (sessionId: string, propValues: AdminSysPropsItemResp) =>
  UpdateAdminSysPropsAction;
export type HandleUpdateAdminSysProps = (propValues: AdminSysPropsItem) => Thunk<void>;

export const getAdminSysProps: GetAdminSysProps = sessionId => ({
  type: ActionTypeKeys.GET_ADMIN_SYS_PROPS,
  payload: api.getAdminSysProps(sessionId),
});

export const addAdminSysProp: AddAdminSysProp = (sessionId, propValues) => ({
  type: ActionTypeKeys.ADD_ADMIN_SYS_PROP,
  payload: api.addAdminSysProp(sessionId, propValues),
});

export const deleteAdminSysProp: DeleteAdminSysProp = (sessionId, propName) => ({
  type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP,
  payload: api.deleteAdminSysProp(sessionId, propName),
});

export const updateAdminSysProps: UpdateAdminSysProps = (sessionId, propValues) => ({
  type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS,
  payload: api.updateAdminSysProps(sessionId, propValues),
});

export const handleGetAdminSysProps: HandleGetAdminSysProps = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        await dispatch(getAdminSysProps(sessionId));
      },
      dispatch
    );
  };

export const handleAddAdminSysProp: HandleAddAdminSysProp = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);
        const preparedAdminSysItemValues = prepareAdminSysItemValues(propValues);

        await dispatch(addAdminSysProp(sessionId, preparedAdminSysItemValues));
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
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);
        await dispatch(deleteAdminSysProp(sessionId, propName));
      },
      dispatch
    );
  };

export const handleUpdateAdminSysProps: HandleUpdateAdminSysProps = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);
        const preparedAdminSysItemValues = prepareAdminSysItemValues(propValues);

        await dispatch(updateAdminSysProps(sessionId, preparedAdminSysItemValues));
      },
      dispatch
    );
  };
