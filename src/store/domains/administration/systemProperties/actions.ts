import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetAdminSysPropsAction,
} from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminSysProps = (sessionId: string) => GetAdminSysPropsAction;
export type HandleGetAdminSysProps = VoidPromiseThunk;

export const getAdminSysProps: GetAdminSysProps = sessionId => ({
  type: ActionTypeKeys.GET_ADMIN_SYS_PROPS,
  payload: api.getAdminSysProps(sessionId),
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
