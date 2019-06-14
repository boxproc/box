import { UserInfo } from './types';

import { ApiResponse, MessageResponse } from 'types';

export enum ActionTypeKeys {
  GET_USER_INFO = 'user/GET_USER_INFO',
  GET_USER_INFO_FULFILLED = 'user/GET_USER_INFO_FULFILLED',
  GET_USER_INFO_REJECTED = 'user/GET_USER_INFO_REJECTED',

  USER_LOGOUT = 'user/USER_LOGOUT',
  USER_LOGOUT_FULFILLED = 'user/USER_LOGOUT_FULFILLED',
  USER_LOGOUT_REJECTED = 'user/USER_LOGOUT_REJECTED',
}

export interface GetUserInfoAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USER_INFO;
}

export interface GetUserInfoFulfilledAction {
  readonly payload: UserInfo;
  readonly type: ActionTypeKeys.GET_USER_INFO_FULFILLED;
}

export interface GetUserInfoRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_USER_INFO_REJECTED;
}

export interface LogOutAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.USER_LOGOUT;
}

export interface LogOutActionFulfilled {
  readonly payload: MessageResponse;
  readonly type: ActionTypeKeys.USER_LOGOUT_FULFILLED;
}

export interface LogOutActionRejected {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.USER_LOGOUT_REJECTED;
}

export type UserActionTypes =
  | LogOutActionFulfilled
  | GetUserInfoFulfilledAction
  | GetUserInfoFulfilledAction;
