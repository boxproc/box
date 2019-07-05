// import { push } from 'react-router-redux';

import * as api from './api';

import { basePath, cookiesExpires, cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  SetRememberUserAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';
import { selectIsRememberedMe, selectSessionId } from './selectors';
import { AuthRequest } from './types';

import { Thunk, VoidThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, urlUtil } from 'utils';

export type UserLogin = (data: AuthRequest) => UserLoginAction;
export type UserLogout = (sessionId: string) => UserLogoutAction;
export type SetRememberUser = (rememberMe: boolean) => SetRememberUserAction;

export type HandleUserLogin = (data: AuthRequest) => Thunk<void>;
export type HandleUserLogout = VoidThunk;

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const userLogout: UserLogout = sessionId => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(sessionId),
});

export const setRememberUser: SetRememberUser = rememberMe => ({
  type: ActionTypeKeys.SET_REMEMBER_USER,
  payload: rememberMe,
});

export const handleUserLogin: HandleUserLogin = (data) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userLogin(data));
        dispatch(setRememberUser(data.rememberMe));

        const state = getState();
        // dispatch(push(`${basePath}`));
        urlUtil.openLocation(`${basePath}`);
        cookiesUtil.setCookie(cookiesNames.SESSION_ID, selectSessionId(state), {
          expires: 600,
        });
        if (selectIsRememberedMe(state)) {
          cookiesUtil.setCookie(
            cookiesNames.USER_NAME,
            'admin', {
              expires: cookiesExpires.USER_NAME_EXPIRES,
            }
          );
        }
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
