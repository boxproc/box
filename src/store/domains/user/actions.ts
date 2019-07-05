import * as api from './api';

import { cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetUserInfoAction,
} from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetUserInfo = (sessionId: string) => GetUserInfoAction;

export type HandleGetUserInfo = VoidPromiseThunk;

export const getUserInfo: GetUserInfo = sessionId => ({
  type: ActionTypeKeys.GET_USER_INFO,
  payload: api.getUserInfo(sessionId),
});

export const handleGetUserInfo: HandleGetUserInfo = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);
        await dispatch(getUserInfo(sessionId));
      },
      dispatch
    );
  };
