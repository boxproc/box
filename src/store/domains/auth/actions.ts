import { push } from 'connected-react-router';

import { basePath, modalNames } from 'consts';

import { closeModal, openModal } from 'store/domains/modals';
import {
  ActionTypeKeys,
  ChangeAdminProfileAction,
  SetUserCurrentRegisterStepAction,
  UserConfirmAuthKeyAction,
  UserEnterAuthKeyAction,
  UserGetAuthKeyAction,
  UserLoginAction,
  UserLogoutAction,
} from './actionTypes';
import * as api from './api';
import {
  selectIs2faAuthenticationPending,
  selectIs2faRegistrationPending,
  selectSessionId,
} from './selectors';
import {
  AuthCode,
  AuthConfirm,
  AuthPassword,
  AuthRequest,
  PreparedAuthRequest,
} from './types';
import {
  prepareAuthValues,
  setAuthPendingStatusToStorage,
  setLoginStatusToStorage,
  setRegistrationPendingStatusToStorage,
  // setSessionIdToStorage,
} from './utils';

import { Thunk, VoidThunk } from 'types';
import { errorDecoratorUtil, storageUtil, urlUtil } from 'utils';

export type HandleUserLogin = (data: AuthRequest) => Thunk<void>;
export type UserLogin = (data: PreparedAuthRequest) => UserLoginAction;

export type HandleUserLogout = VoidThunk;
export type UserLogout = () => UserLogoutAction;

export type SetUserCurrentRegisterStep = (step: number) => SetUserCurrentRegisterStepAction;
export type HandleSetUserCurrentRegisterStep = (step: number) => void;

export type HandleUserGetAuthKey = (data: AuthPassword) => Thunk<void>;
export type UserGetAuthKey = (data: AuthPassword) => UserGetAuthKeyAction;

export type HandleUserConfirmAuthKey = VoidThunk;
export type UserConfirmAuthKey = (data: AuthConfirm) => UserConfirmAuthKeyAction;

export type HandleUserEnterAuthKey = (data: AuthCode) => Thunk<void>;
export type UserEnterAuthKey = (data: AuthCode) => UserEnterAuthKeyAction;

export type ChangeAdminProfile = (data: any) => ChangeAdminProfileAction;
export type HandleChangeAdminProfile = (data: any) => Thunk<void>;

export const userLogin: UserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const userLogout: UserLogout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(),
});

export const userGetAuthKey: UserGetAuthKey = data => ({
  type: ActionTypeKeys.USER_GET_AUTH_KEY,
  payload: api.getAuthKey(data),
});

export const setUserCurrentRegisterStep: SetUserCurrentRegisterStep = step => ({
  type: ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP,
  payload: step,
});

export const userConfirmAuthKey: UserConfirmAuthKey = data => ({
  type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY,
  payload: api.userConfirmAuthKey(data),
});

export const userEnterAuthKey: UserEnterAuthKey = code => ({
  type: ActionTypeKeys.USER_ENTER_AUTH_KEY,
  payload: api.enterAuthKey(code),
});

export const changeAdminProfile: ChangeAdminProfile = data => ({
  type: ActionTypeKeys.CHANGE_ADMIN_PROFILE,
  payload: api.changeAdminProfile(data),
});

export const handleSetUserCurrentRegisterStep: HandleSetUserCurrentRegisterStep = step =>
  setUserCurrentRegisterStep(step);

export const handleUserLogin: HandleUserLogin = (data) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedAuthValues = prepareAuthValues(data);
        await dispatch(userLogin(preparedAuthValues));

        const state = getState();
        const sessionId = selectSessionId(state);

        // setSessionIdToStorage(sessionId); // for demo

        if (selectIs2faAuthenticationPending(state)) {
          setAuthPendingStatusToStorage();
          await dispatch(openModal({
            name: modalNames.LOGIN_CODE_2FA_MODAL,
          }));
        } else {
          if (selectIs2faRegistrationPending(state)) {
            setRegistrationPendingStatusToStorage();
          }
          setLoginStatusToStorage(sessionId);
          dispatch(push(basePath));
        }
      },
      dispatch
    );
  };

export const handleUserEnterAuthKey: HandleUserEnterAuthKey = (data) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userEnterAuthKey(data));

        const state = getState();
        const sessionId = selectSessionId(state);

        // setSessionIdToStorage(sessionId); // for demo
        setLoginStatusToStorage(sessionId);

        await dispatch(closeModal(modalNames.LOGIN_CODE_2FA_MODAL));
        dispatch(push(basePath));
      },
      dispatch
    );
  };

export const handleUserLogout: HandleUserLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userLogout());

        storageUtil.clearStorage();
        urlUtil.openLocation(basePath);
      },
      dispatch
    );
  };

export const handleUserGetAuthKey: HandleUserGetAuthKey = (data) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userGetAuthKey(data));
      },
      dispatch
    );
  };

export const handleUserConfirmAuthKey: HandleUserConfirmAuthKey = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userConfirmAuthKey({ confirm: 'Y' }));
        await dispatch(closeModal(modalNames.REGISTER_2FA_MODAL));
        await dispatch(handleUserLogout());
      },
      dispatch
    );
  };

export const handleChangeAdminProfile: HandleChangeAdminProfile = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(changeAdminProfile({user_id: data.username.value}));

        const state = getState();
        const sessionId = selectSessionId(state);

        // setSessionIdToStorage(sessionId); // for demo

        if (selectIs2faRegistrationPending(state)) {
          setRegistrationPendingStatusToStorage();
        }
        setLoginStatusToStorage(sessionId);

        await dispatch(closeModal(modalNames.CHANGE_PROFILE_MODAL));
        urlUtil.openLocation(basePath);
      },
      dispatch
    );
  };
