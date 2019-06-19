import * as api from './api';

import { basePath } from 'consts';

import {
  ActionTypeKeys,
  GetUserInfoAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';

import { UserLoginData } from './types';

import { history } from 'store';

import { HandleUserLogout, Thunk, VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type UserLogin = (data: UserLoginData) => UserLoginAction;
export type GetUserInfo = () => GetUserInfoAction;
export type UserLogout = () => UserLogoutAction;

export type HandleUserLogin = (data: UserLoginData) => Thunk<void>;
export type HandleGetUserInfo = VoidPromiseThunk;

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const getUserInfo: GetUserInfo = () => ({
  type: ActionTypeKeys.GET_USER_INFO,
  payload: api.getUserInfo(),
});

export const userLogout: UserLogout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(),
});

export const handleUserLogin: HandleUserLogin = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(userLogin(data));
      history.push(`${basePath}page`);
    });
  };

export const handleGetUserInfo: HandleGetUserInfo = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(getUserInfo());
    });
  };

export const handleUserLogout: HandleUserLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(userLogout());
      history.push(`${basePath}login`);
    });
  };
