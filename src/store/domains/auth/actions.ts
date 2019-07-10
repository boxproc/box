// import { push } from 'react-router-redux';

import * as api from './api';

import { basePath, cookiesExpires, cookiesNames } from 'consts';

import {
  ActionTypeKeys,
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

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const userLogout: UserLogout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(),
});

export const handleUserLogin: HandleUserLogin = (data) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const { userName, rememberMe } = data;
        const preparedAuthValues = prepareAuthValues(data);
        const res = await dispatch(userLogin(preparedAuthValues)) as PromiseRes<any>;

        apiClient.set('session_id', res.value.session_id);

        // dispatch(push(`${basePath}`));
        urlUtil.openLocation(`${basePath}`);

        cookiesUtil.setCookie(cookiesNames.SESSION_ID, res.value.session_id, {
          expires: cookiesExpires.SESSION_ID,
        });

        if (rememberMe) {
          cookiesUtil.setCookie(
            cookiesNames.USER_NAME,
            userName, {
              expires: cookiesExpires.USER_NAME,
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
        await dispatch(userLogout());

        // dispatch(push(`${basePath}login`));
        cookiesUtil.deleteCookie(cookiesNames.SESSION_ID);
        urlUtil.openLocation(`${basePath}login`);
      },
      dispatch
    );
  };
