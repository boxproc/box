import { push } from 'connected-react-router';

import { basePath, cookiesNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';
import {
  ActionTypeKeys,
  SetRememberMeAction,
  SetUserCurrentRegisterStepAction,
  UserConfirmAuthKeyAction,
  UserGetAuthKeyAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';
import * as api from './api';
import { AuthPassword, AuthRequest, PreparedAuthRequest } from './types';
import { prepareAuthValues } from './utils';

import { apiClient } from 'services';

import { PromiseRes, Thunk, VoidThunk } from 'types';
import { cookiesUtil, errorDecoratorUtil, urlUtil } from 'utils';

export type HandleUserLogin = (data: AuthRequest) => Thunk<void>;
export type UserLogin = (data: PreparedAuthRequest) => UserLoginAction;

export type HandleUserLogout = VoidThunk;
export type UserLogout = () => UserLogoutAction;

export type SetRememberMe = (rememberMe: boolean) => SetRememberMeAction;

export type SetUserCurrentRegisterStep = (step: number) => SetUserCurrentRegisterStepAction;
export type HandleSetUserCurrentRegisterStep = (step: number) => void;

export type HandleUserGetAuthKey = (data: AuthPassword) => Thunk<void>;
export type UserGetAuthKey = (password: string) => UserGetAuthKeyAction;

export type HandleUserConfirmAuthKey = VoidThunk;
export type UserConfirmAuthKey = () => UserConfirmAuthKeyAction;

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const userLogout: UserLogout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(),
});

export const userGetAuthKey: UserGetAuthKey = password => ({
  type: ActionTypeKeys.USER_GET_AUTH_KEY,
  payload: api.getAuthKey(password),
});

export const setRememberMe: SetRememberMe = rememberMe => ({
  type: ActionTypeKeys.SET_REMEMBER_ME,
  payload: rememberMe,
});

export const setUserCurrentRegisterStep: SetUserCurrentRegisterStep = step => ({
  type: ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP,
  payload: step,
});

export const userConfirmAuthKey: UserConfirmAuthKey = () => ({
  type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY,
  payload: api.userConfirmAuthKey(),
});

export const handleSetUserCurrentRegisterStep: HandleSetUserCurrentRegisterStep = step =>
  setUserCurrentRegisterStep(step);

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

        if (cookiesUtil.get(cookiesNames.SESSION_ID)) {
          await dispatch(userLogout());
          urlUtil.openLocation(`${basePath}login`);
          cookiesUtil.remove(cookiesNames.SESSION_ID);
        }
      },
      dispatch
    );
  };

export const handleUserGetAuthKey: HandleUserGetAuthKey = (data) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userGetAuthKey(data.password));
      },
      dispatch
    );
  };

export const handleUserConfirmAuthKey: HandleUserConfirmAuthKey = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(closeModal(modalNames.REGISTER_2FA_MODAL));
        await dispatch(handleUserLogout());
      },
      dispatch
    );
  };
