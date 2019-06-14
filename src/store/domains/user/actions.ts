import * as api from './api';

import {
  ActionTypeKeys,
  GetUserInfoAction,
  LogOutAction,
} from './actionTypes';

import { HandleLogout, VoidPromiseThunk } from 'types';

import { errorDecoratorUtil, urlUtil } from 'utils';

export type GetUserInfo = () => GetUserInfoAction;
export type Logout = () => LogOutAction;

export type HandleGettingUserInfo = VoidPromiseThunk;

export const getUserInfo: GetUserInfo = () => ({
  type: ActionTypeKeys.GET_USER_INFO,
  payload: api.getUserInfo(),
});

export const logOut: Logout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.logOut(),
});

export const handleGettingUserInfo: HandleGettingUserInfo = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(getUserInfo());
    });
  };

export const handleLogout: HandleLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(logOut());
      urlUtil.openLocation('/');
    });
  };
