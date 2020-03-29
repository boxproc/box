import { IAuthResp, IAuthStepTwoResp, IChangePassword, IUserInstitutionsData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  USER_LOGIN = 'login/USER_LOGIN',
  USER_LOGIN_FULFILLED = 'login/USER_LOGIN_FULFILLED',
  USER_LOGIN_REJECTED = 'login/USER_LOGIN_REJECTED',

  USER_LOGOUT = 'login/USER_LOGOUT',
  USER_LOGOUT_FULFILLED = 'login/USER_LOGOUT_FULFILLED',
  USER_LOGOUT_REJECTED = 'login/USER_LOGOUT_REJECTED',

  SET_USER_CURRENT_REGISTER_STEP = 'login/SET_USER_CURRENT_REGISTER_STEP',

  USER_GET_AUTH_KEY = 'login/USER_GET_AUTH_KEY',
  USER_GET_AUTH_KEY_FULFILLED = 'login/USER_GET_AUTH_KEY_FULFILLED',
  USER_GET_AUTH_KEY_REJECTED = 'login/USER_GET_AUTH_KEY_REJECTED',

  USER_CONFIRM_AUTH_KEY = 'login/USER_CONFIRM_AUTH_KEY',
  USER_CONFIRM_AUTH_KEY_FULFILLED = 'login/USER_CONFIRM_AUTH_KEY_FULFILLED',
  USER_CONFIRM_AUTH_KEY_REJECTED = 'login/USER_CONFIRM_AUTH_KEY_REJECTED',

  USER_ENTER_AUTH_KEY = 'login/USER_ENTER_AUTH_KEY',
  USER_ENTER_AUTH_KEY_FULFILLED = 'login/USER_ENTER_AUTH_KEY_FULFILLED',
  USER_ENTER_AUTH_KEY_REJECTED = 'login/USER_ENTER_AUTH_KEY_REJECTED',

  CHANGE_PROFILE = 'login/CHANGE_PROFILE',
  CHANGE_PROFILE_FULFILLED = 'login/CHANGE_PROFILE_FULFILLED',
  CHANGE_PROFILE_REJECTED = 'login/CHANGE_PROFILE_REJECTED',

  CHANGE_PASSWORD = 'login/CHANGE_PASSWORD',
  CHANGE_PASSWORD_FULFILLED = 'login/CHANGE_PASSWORD_FULFILLED',
  CHANGE_PASSWORD_REJECTED = 'login/CHANGE_PASSWORD_REJECTED',

  GET_USER_INSTITUTIONS = 'login/GET_USER_INSTITUTIONS',
  GET_USER_INSTITUTIONS_FULFILLED = 'login/GET_USER_INSTITUTIONS_FULFILLED',
  GET_USER_INSTITUTIONS_REJECTED = 'login/GET_USER_INSTITUTIONS_REJECTED',
}

/** User login action interfaces */

export interface IUserLoginAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGIN;
}

export interface IUserLoginFulfilledAction {
  readonly payload: IAuthResp;
  readonly type: ActionTypeKeys.USER_LOGIN_FULFILLED;
}

export interface IUserLoginRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.USER_LOGIN_REJECTED;
}

/** User logout action interfaces */

export interface IUserLogoutAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGOUT;
}

export interface IUserLogoutFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.USER_LOGOUT_FULFILLED;
}

export interface IUserLogoutRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.USER_LOGOUT_REJECTED;
}

/** Set current 2FA register step action interfaces */

export interface ISetUserCurrentRegisterStepAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP;
}

/** Get auth key action interfaces */

export interface IUserGetAuthKeyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_GET_AUTH_KEY;
}

export interface IUserGetAuthKeyFulfilledAction {
  readonly payload: IAuthStepTwoResp;
  readonly type: ActionTypeKeys.USER_GET_AUTH_KEY_FULFILLED;
}

export interface IUserGetAuthKeyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.USER_GET_AUTH_KEY_REJECTED;
}

/** User confirm register auth key action interfaces */

export interface IUserConfirmAuthKeyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY;
}

export interface IUserConfirmAuthKeyFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY_FULFILLED;
}

export interface IUserConfirmAuthKeyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY_REJECTED;
}

/** User enter auth key action interfaces */

export interface IUserEnterAuthKeyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_ENTER_AUTH_KEY;
}

export interface IUserEnterAuthKeyFulfilledAction {
  readonly payload: IAuthResp;
  readonly type: ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED;
}

export interface IUserEnterAuthKeyRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.USER_ENTER_AUTH_KEY_REJECTED;
}

/** Change profile action interfaces */

export interface IChangeProfileAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CHANGE_PROFILE;
}

export interface IChangeProfileFulfilledAction {
  readonly payload: IAuthResp;
  readonly type: ActionTypeKeys.CHANGE_PROFILE_FULFILLED;
}

export interface IChangeProfileRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CHANGE_PROFILE_REJECTED;
}

/** Change password action interfaces */

export interface IChangePasswordAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CHANGE_PASSWORD;
}

export interface IChangePasswordFulfilledAction {
  readonly payload: IChangePassword;
  readonly type: ActionTypeKeys.CHANGE_PASSWORD_FULFILLED;
}

export interface IChangePasswordRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.CHANGE_PASSWORD_REJECTED;
}

/** Get user institutions login action interfaces */

export interface IGetUserInstitutionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USER_INSTITUTIONS;
}

export interface IGetUserInstitutionsFulfilledAction {
  readonly payload: IUserInstitutionsData;
  readonly type: ActionTypeKeys.GET_USER_INSTITUTIONS_FULFILLED;
}

export interface IGetUserInstitutionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USER_INSTITUTIONS_REJECTED;
}

export type TAuthActionTypes =
  | IUserLoginFulfilledAction
  | IUserLogoutFulfilledAction
  | IUserGetAuthKeyFulfilledAction
  | ISetUserCurrentRegisterStepAction
  | IUserConfirmAuthKeyFulfilledAction
  | IUserEnterAuthKeyFulfilledAction
  | IChangeProfileFulfilledAction
  | IChangePasswordFulfilledAction
  | IGetUserInstitutionsFulfilledAction;
