import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  DeleteAdminSysPropAction,
  GetAdminSysPropsAction,
  UpdateAdminSysPropsAction,
} from './actionTypes';

import { AdminSysPropsItem, AdminSysPropsItemResp } from './types';
import { prepareAdminSysItemValues } from './utils';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSysProps = (sessionId: string) => GetAdminSysPropsAction;
export type HandleGetAdminSysProps = VoidPromiseThunk;

export type DeleteAdminSysProp = (sessionId: string, propName: string) => DeleteAdminSysPropAction;
export type HandleDeleteAdminSysProp = (propName: string) => Thunk<void>;

export type UpdateAdminSysProps = (sessionId: string, propValues: AdminSysPropsItemResp) =>
  UpdateAdminSysPropsAction;
export type HandleUpdateAdminSysProps = (propValues: AdminSysPropsItem) => Thunk<void>;

export const getAdminSysProps: GetAdminSysProps = sessionId => ({
  type: ActionTypeKeys.GET_ADMIN_SYS_PROPS,
  payload: api.getAdminSysProps(sessionId),
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
        await dispatch(getAdminSysProps(sessionId));
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
