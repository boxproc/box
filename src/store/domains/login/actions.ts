import { push } from 'connected-react-router';

import { basePath, modalNamesConst } from 'consts';

import { closeModal, openModal } from 'store';
import {
  ActionTypeKeys,
  IChangePasswordAction,
  IChangeProfileAction,
  IGetUserInstitutionsAction,
  ISetUserCurrentRegisterStepAction,
  IUserConfirmAuthKeyAction,
  IUserEnterAuthKeyAction,
  IUserGetAuthKeyAction,
  IUserLoginAction,
  IUserLogoutAction,
} from './actionTypes';
import * as api from './api';
import {
  is2faAuthPendingSelector,
  isUserInstitutionsLoadedSelector,
  loginDataSelector,
} from './selectors';
import {
  IAuthCode,
  IAuthConfirm,
  IAuthPassword,
  IAuthReq,
  IAuthReqToSend,
  IAuthUserId,
  IAuthUsername,
  IChangePassword,
  IChangePasswordToSend,
} from './types';
import { prepareAuthData, prepareChangePasswordDataToSend, setUserDataToStorage } from './utils';

import { apiClientService } from 'services';

import { Thunk, VoidPromiseThunk, VoidThunk } from 'types';
import { errorDecoratorUtil, storageUtil, urlUtil } from 'utils';

/**
 * User login action
 */

export type THandleUserLogin = (data: IAuthReq) => Thunk<void>;
export type TUserLogin = (data: IAuthReqToSend) => IUserLoginAction;

export const userLogin: TUserLogin = data => ({
  type: ActionTypeKeys.USER_LOGIN,
  payload: api.userLogin(data),
});

export const handleUserLogin: THandleUserLogin = (data) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        apiClientService.clear();
        const preparedAuthValues = prepareAuthData(data);
        await dispatch(userLogin(preparedAuthValues));

        const state = getState();
        setUserDataToStorage(loginDataSelector(state));

        if (is2faAuthPendingSelector(state)) {
          dispatch(openModal({ name: modalNamesConst.LOGIN_CODE_2FA }));
        } else {
          dispatch(push(basePath));
        }
      },
      dispatch
    );
  };

/**
 * User logout action
 */

export type THandleUserLogout = VoidThunk;
export type TUserLogout = () => IUserLogoutAction;

export const userLogout: TUserLogout = () => ({
  type: ActionTypeKeys.USER_LOGOUT,
  payload: api.userLogout(),
});

export const handleUserLogout: THandleUserLogout = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userLogout());

        storageUtil.clear();
        // dispatch(push(basePath));
        urlUtil.openLocation(basePath);
      },
      dispatch
    );
  };

/**
 * Set current register 2FA step action
 */

export type TSetUserCurrentRegisterStep = (step: number) => ISetUserCurrentRegisterStepAction;
export type THandleSetUserCurrentRegisterStep = (step: number) => void;

export const setUserCurrentRegisterStep: TSetUserCurrentRegisterStep = step => ({
  type: ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP,
  payload: step,
});

export const handleSetUserCurrentRegisterStep: THandleSetUserCurrentRegisterStep = step =>
  setUserCurrentRegisterStep(step);

/**
 * Get auth key action
 */

export type THandleUserGetAuthKey = (data: IAuthPassword) => Thunk<void>;
export type TUserGetAuthKey = (data: IAuthPassword) => IUserGetAuthKeyAction;

export const userGetAuthKey: TUserGetAuthKey = data => ({
  type: ActionTypeKeys.USER_GET_AUTH_KEY,
  payload: api.getAuthKey(data),
});

export const handleUserGetAuthKey: THandleUserGetAuthKey = (data) =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userGetAuthKey(data));
      },
      dispatch
    );
  };

/**
 * Confirm registration 2FA auth key action
 */

export type THandleUserConfirmAuthKey = VoidThunk;
export type TUserConfirmAuthKey = (data: IAuthConfirm) => IUserConfirmAuthKeyAction;

export const userConfirmAuthKey: TUserConfirmAuthKey = data => ({
  type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY,
  payload: api.userConfirmAuthKey(data),
});

export const handleUserConfirmAuthKey: THandleUserConfirmAuthKey = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userConfirmAuthKey({ confirm: 'Y' }));
        dispatch(closeModal(modalNamesConst.REGISTER_2FA));
        await dispatch(handleUserLogout());
      },
      dispatch
    );
  };

/**
 * Enter auth key action
 */

export type THandleUserEnterAuthKey = (data: IAuthCode) => Thunk<void>;
export type TUserEnterAuthKey = (data: IAuthCode) => IUserEnterAuthKeyAction;

export const userEnterAuthKey: TUserEnterAuthKey = code => ({
  type: ActionTypeKeys.USER_ENTER_AUTH_KEY,
  payload: api.enterAuthKey(code),
});

export const handleUserEnterAuthKey: THandleUserEnterAuthKey = (data) =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(userEnterAuthKey(data));

        const state = getState();
        setUserDataToStorage(loginDataSelector(state));

        dispatch(closeModal(modalNamesConst.LOGIN_CODE_2FA));
        dispatch(push(basePath));
      },
      dispatch
    );
  };

/**
 * Change profile action
 */

export type TChangeProfile = (data: IAuthUserId) => IChangeProfileAction;
export type THandleChangeProfile = (data: IAuthUsername) => Thunk<void>;

export const changeProfile: TChangeProfile = data => ({
  type: ActionTypeKeys.CHANGE_PROFILE,
  payload: api.changeProfile(data),
});

export const handleChangeProfile: THandleChangeProfile = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(changeProfile({ id: data.username.value }));

        const state = getState();
        setUserDataToStorage(loginDataSelector(state), true);

        urlUtil.openLocation(basePath);
      },
      dispatch
    );
  };

/**
 * Change password action
 */

export type TChangePassword = (data: Partial<IChangePasswordToSend>) => IChangePasswordAction;
export type THandleChangePassword = (data: Partial<IChangePassword>) => Thunk<void>;

export const changePassword: TChangePassword = data => ({
  type: ActionTypeKeys.CHANGE_PASSWORD,
  payload: api.changePassword(data),
});

export const handleChangePassword: THandleChangePassword = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareChangePasswordDataToSend(data);

        await dispatch(changePassword(preparedData));
        dispatch(closeModal(modalNamesConst.CHANGE_PASSWORD));
        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: { message: 'Password changed.' },
        }));
      },
      dispatch
    );
  };

/**
 * Get user institutions action
 */

export type TGetUserInstitutions = () => IGetUserInstitutionsAction;
export type THandleGetUserInstitutions = VoidPromiseThunk;

export const getUserInstitutions: TGetUserInstitutions = () => ({
  type: ActionTypeKeys.GET_USER_INSTITUTIONS,
  payload: api.getUserInstitutions(),
});

export const handleGetUserInstitutions: THandleGetUserInstitutions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!isUserInstitutionsLoadedSelector(getState())) {
          await dispatch(getUserInstitutions());
        }
      },
      dispatch
    );
  };
