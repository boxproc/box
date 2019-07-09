import { push } from 'react-router-redux';

import * as api from './api';

import { basePath } from 'consts';

import {
  ActionTypeKeys,
  SetRememberUserAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';
// import { selectIsRememberedMe, selectUsername } from './selectors';
import { AuthRequest, PreparedAuthRequest } from './types';
import { prepareAuthValues } from './utils';

import { apiClient } from 'services';

import { PromiseRes, Thunk, VoidThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type UserLogin = (data: PreparedAuthRequest) => UserLoginAction;
export type UserLogout = () => UserLogoutAction;
export type SetRememberUser = (rememberMe: boolean) => SetRememberUserAction;

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

export const setRememberUser: SetRememberUser = rememberMe => ({
  type: ActionTypeKeys.SET_REMEMBER_USER,
  payload: rememberMe,
});

export const handleUserLogin: HandleUserLogin = (data) =>
  async (dispatch) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedAuthValues = prepareAuthValues(data);
        const res = await dispatch(userLogin(preparedAuthValues)) as PromiseRes<any>;
        dispatch(setRememberUser(data.rememberMe));

        // const state = getState();
        apiClient.set('session_id', res.value.session_id);

        dispatch(push(`${basePath}`));
        // urlUtil.openLocation(`${basePath}`);

        // cookiesUtil.setCookie(cookiesNames.SESSION_ID, res.value.session_id, {
        //   expires: cookiesExpires.SESSION_ID_EXPIRES,
        // });

        // if (selectIsRememberedMe(state)) {
        //   cookiesUtil.setCookie(
        //     cookiesNames.USER_NAME,
        //     selectUsername(state), {
        //       expires: cookiesExpires.USER_NAME_EXPIRES,
        //     }
        //   );
        // }
      },
      dispatch
    );
  };

export const handleUserLogout: HandleUserLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        // const sessionId = cookiesUtil.getCookie(cookiesNames.SESSION_ID);

        await dispatch(userLogout());

        dispatch(push(`${basePath}login`));
        // cookiesUtil.deleteCookie(cookiesNames.SESSION_ID);
        // urlUtil.openLocation(`${basePath}login`);
      },
      dispatch
    );
  };
