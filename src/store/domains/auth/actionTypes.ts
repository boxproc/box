import { AuthResponse, AuthStepTwoResponse } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  USER_LOGIN = 'user/USER_LOGIN',
  USER_LOGIN_FULFILLED = 'user/USER_LOGIN_FULFILLED',
  USER_LOGIN_REJECTED = 'user/USER_LOGIN_REJECTED',

  USER_LOGOUT = 'user/USER_LOGOUT',
  USER_LOGOUT_FULFILLED = 'user/USER_LOGOUT_FULFILLED',
  USER_LOGOUT_REJECTED = 'user/USER_LOGOUT_REJECTED',

  SET_USER_CURRENT_REGISTER_STEP = 'user/SET_USER_CURRENT_REGISTER_STEP',

  USER_GET_AUTH_KEY = 'user/USER_GET_AUTH_KEY',
  USER_GET_AUTH_KEY_FULFILLED = 'user/USER_GET_AUTH_KEY_FULFILLED',
  USER_GET_AUTH_KEY_REJECTED = 'user/USER_GET_AUTH_KEY_REJECTED',

  USER_CONFIRM_AUTH_KEY = 'user/USER_CONFIRM_AUTH_KEY',
  USER_CONFIRM_AUTH_KEY_FULFILLED = 'user/USER_CONFIRM_AUTH_KEY_FULFILLED',
  USER_CONFIRM_AUTH_KEY_REJECTED = 'user/USER_CONFIRM_AUTH_KEY_REJECTED',

  USER_ENTER_AUTH_KEY = 'user/USER_ENTER_AUTH_KEY',
  USER_ENTER_AUTH_KEY_FULFILLED = 'user/USER_ENTER_AUTH_KEY_FULFILLED',
  USER_ENTER_AUTH_KEY_REJECTED = 'user/USER_ENTER_AUTH_KEY_REJECTED',

  CHANGE_ADMIN_PROFILE = 'administration/permissions/users/CHANGE_ADMIN_PROFILE',
  CHANGE_ADMIN_PROFILE_FULFILLED =
    'administration/permissions/users/CHANGE_ADMIN_PROFILE_FULFILLED',
  CHANGE_ADMIN_PROFILE_REJECTED = 'administration/permissions/users/CHANGE_ADMIN_PROFILE_REJECTED',
}

export interface UserLoginAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGIN;
}

export interface UserLoginFulfilledAction {
  readonly payload: AuthResponse;
  readonly type: ActionTypeKeys.USER_LOGIN_FULFILLED;
}

export interface UserLoginRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_LOGIN_REJECTED;
}
export interface UserLogoutAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGOUT;
}

export interface UserLogoutFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.USER_LOGOUT_FULFILLED;
}

export interface UserLogoutRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_LOGOUT_REJECTED;
}

export interface SetUserCurrentRegisterStepAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_USER_CURRENT_REGISTER_STEP;
}

export interface UserGetAuthKeyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_GET_AUTH_KEY;
}

export interface UserGetAuthKeyFulfilledAction {
  readonly payload: AuthStepTwoResponse;
  readonly type: ActionTypeKeys.USER_GET_AUTH_KEY_FULFILLED;
}

export interface UserGetAuthKeyRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_GET_AUTH_KEY_REJECTED;
}

export interface UserConfirmAuthKeyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY;
}

export interface UserConfirmAuthKeyFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY_FULFILLED;
}

export interface UserConfirmAuthKeyRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_CONFIRM_AUTH_KEY_REJECTED;
}

export interface UserEnterAuthKeyAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_ENTER_AUTH_KEY;
}

export interface UserEnterAuthKeyFulfilledAction {
  readonly payload: AuthResponse;
  readonly type: ActionTypeKeys.USER_ENTER_AUTH_KEY_FULFILLED;
}

export interface UserEnterAuthKeyRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_ENTER_AUTH_KEY_REJECTED;
}

export interface ChangeAdminProfileAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.CHANGE_ADMIN_PROFILE;
}

export interface ChangeAdminProfileFulfilledAction {
  readonly payload: AuthResponse;
  readonly type: ActionTypeKeys.CHANGE_ADMIN_PROFILE_FULFILLED;
}

export interface ChangeAdminProfileRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.CHANGE_ADMIN_PROFILE_REJECTED;
}

export type AuthActionTypes =
  | UserLoginFulfilledAction
  | UserLogoutFulfilledAction
  | UserGetAuthKeyFulfilledAction
  | SetUserCurrentRegisterStepAction
  | UserConfirmAuthKeyFulfilledAction
  | UserEnterAuthKeyFulfilledAction
  | ChangeAdminProfileFulfilledAction;
