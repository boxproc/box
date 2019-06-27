// import { push } from 'react-router-redux';

import * as api from './api';

import { basePath, cookiesExpires, cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  GetUserInfoAction,
  SetRememberMeAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';
import { selectIsRememberedMe, selectSessionId, selectUserName } from './selectors';
import { UserLoginData } from './types';
import { prepareLoginValues } from './util';

import { Thunk, VoidPromiseThunk, VoidThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, urlUtil } from 'utils';

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
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedLoginValues = prepareLoginValues(data);
        await dispatch(userLogin(preparedLoginValues));
        dispatch(setRememberMe(data.rememberMe));

        const state = getState();
        // dispatch(push(`${basePath}`));
        urlUtil.openLocation(`${basePath}`);
        cookiesUtil.setCookie(cookiesNames.SESSION_ID, selectSessionId(state), {
          expires: 600,
        });
        if (selectIsRememberedMe(state)) {
          cookiesUtil.setCookie(
            cookiesNames.USER_NAME,
            selectUserName(state), {
              expires: cookiesExpires.USER_NAME_EXPIRES,
            }
          );
        }
      },
      dispatch
    );
  };

export const handleGetUserInfo: HandleGetUserInfo = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUserInfo());
      },
      dispatch
    );
  };

export const handleUserLogout: HandleUserLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

        await dispatch(userLogout(sessionId));

        // dispatch(push(`${basePath}login`));
        urlUtil.openLocation(`${basePath}login`);
        cookiesUtil.deleteCookie(cookiesNames.SESSION_ID);
      },
      dispatch
    );
  };
