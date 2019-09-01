import { push } from 'connected-react-router';

import * as api from './api';

import { basePath, cookiesNames } from 'consts';

import {
  ActionTypeKeys,
  SetRememberMeAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';

import { AuthRequest, PreparedAuthRequest } from './types';
import { prepareAuthValues } from './utils';

import { apiClient } from 'services';

import { PromiseRes, Thunk, VoidThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, urlUtil } from 'utils';

export type UserLogin = (data: PreparedAuthRequest) => UserLoginAction;
export type UserLogout = () => UserLogoutAction;

export type HandleUserLogin = (data: AuthRequest) => Thunk<void>;
export type HandleUserLogout = VoidThunk;

export type SetRememberMe = (rememberMe: boolean) => SetRememberMeAction;

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const userLogout: UserLogout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(),
});

export const setRememberMe: SetRememberMe = rememberMe => ({
  type: ActionTypeKeys.SET_REMEMBER_ME,
  payload: rememberMe,
});

export const handleUserLogin: HandleUserLogin = (data) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedAuthValues = prepareAuthValues(data);
        const res = await dispatch(userLogin(preparedAuthValues)) as PromiseRes<any>;

        apiClient.set('session_id', res.value.session_id);

        dispatch(push(basePath));
        dispatch(setRememberMe(data.rememberMe));
      },
      dispatch
    );
  };

export const handleUserLogout: HandleUserLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userLogout());

        if (cookiesUtil.get(cookiesNames.SESSION_ID)) {
          urlUtil.openLocation(`${basePath}login`);
          cookiesUtil.remove(cookiesNames.SESSION_ID);
        }
      },
      dispatch
    );
  };
