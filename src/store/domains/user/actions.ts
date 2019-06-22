import { push } from 'react-router-redux';

import * as api from './api';

import { basePath } from 'consts';

import {
  ActionTypeKeys,
  GetUserInfoAction,
  SetRememberMeAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';
import { selectSessionId } from './selectors';
import { UserLoginData } from './types';

import { Thunk, VoidPromiseThunk, VoidThunk } from 'types';

import { errorDecoratorUtil, urlUtil } from 'utils';

export type UserLogin = (data: UserLoginData) => UserLoginAction;
export type GetUserInfo = () => GetUserInfoAction;
export type UserLogout = (sessionId: string) => UserLogoutAction;
export type SetRememberMe = (rememberMe: boolean) => SetRememberMeAction;

export type HandleUserLogin = (data: UserLoginData) => Thunk<void>;
export type HandleGetUserInfo = VoidPromiseThunk;
export type HandleUserLogout = VoidThunk;

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const getUserInfo: GetUserInfo = () => ({
  type: ActionTypeKeys.GET_USER_INFO,
  payload: api.getUserInfo(),
});

export const userLogout: UserLogout = sessionId => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(sessionId),
});

export const setRememberMe: SetRememberMe = rememberMe => ({
  type: ActionTypeKeys.SET_REMEMBER_ME,
  payload: rememberMe,
});

export const handleUserLogin: HandleUserLogin = (data) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(userLogin(data));
      dispatch(setRememberMe(data.rememberMe));

      window.sessionStorage.setItem('isLoggedIn', 'true');
      dispatch(push(`${basePath}`));
    });
  };

export const handleGetUserInfo: HandleGetUserInfo = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(async () => {
      await dispatch(getUserInfo());
    });
  };

export const handleUserLogout: HandleUserLogout = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(async () => {
      const state = getState();
      await dispatch(userLogout(selectSessionId(state)));

      window.sessionStorage.removeItem('isLoggedIn');
      urlUtil.openLocation(`${basePath}login`);
    });
  };
