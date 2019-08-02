import { AuthResponse } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  USER_LOGIN = 'user/USER_LOGIN',
  USER_LOGIN_FULFILLED = 'user/USER_LOGIN_FULFILLED',
  USER_LOGIN_REJECTED = 'user/USER_LOGIN_REJECTED',

  SET_REMEMBER_ME = 'user/SET_REMEMBER_ME',

  USER_LOGOUT = 'user/USER_LOGOUT',
  USER_LOGOUT_FULFILLED = 'user/USER_LOGOUT_FULFILLED',
  USER_LOGOUT_REJECTED = 'user/USER_LOGOUT_REJECTED',
}

export interface UserLoginAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGIN;
}

export interface UserLoginActionFulfilledAction {
  readonly payload: AuthResponse;
  readonly type: ActionTypeKeys.USER_LOGIN_FULFILLED;
}

export interface UserLoginActionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_LOGIN_REJECTED;
}

export interface SetRememberMeAction {
  readonly payload: boolean;
  readonly type: ActionTypeKeys.SET_REMEMBER_ME;
}

export interface UserLogoutAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGOUT;
}

export interface UserLogoutActionFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.USER_LOGOUT_FULFILLED;
}

export interface UserLogoutActionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_LOGOUT_REJECTED;
}

export type AuthActionTypes =
  | UserLoginActionFulfilledAction
  | UserLogoutActionFulfilledAction
  | SetRememberMeAction;
