import { UserInfo } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_USER_INFO = 'user/GET_USER_INFO',
  GET_USER_INFO_FULFILLED = 'user/GET_USER_INFO_FULFILLED',
  GET_USER_INFO_REJECTED = 'user/GET_USER_INFO_REJECTED',
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

export type UserActionTypes =
  | GetUserInfoFulfilledAction;
