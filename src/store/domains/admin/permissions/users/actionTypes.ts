import { IUsersData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  ADD_USER = 'users/ADD_USER',
  ADD_USER_FULFILLED = 'users/ADD_USER_FULFILLED',
  ADD_USER_REJECTED = 'users/ADD_USER_REJECTED',

  FILTER_USERS = 'users/FILTER_USERS',
  FILTER_USERS_FULFILLED = 'users/FILTER_USERS_FULFILLED',
  FILTER_USERS_REJECTED = 'users/FILTER_USERS_REJECTED',

  UPDATE_USER = 'users/UPDATE_USER',
  UPDATE_USER_FULFILLED = 'users/UPDATE_USER_FULFILLED',
  UPDATE_USER_REJECTED = 'users/UPDATE_USER_REJECTED',

  GET_USERNAMES = 'users/GET_USERNAMES',
  GET_USERNAMES_FULFILLED = 'users/GET_USERNAMES_FULFILLED',
  GET_USERNAMES_REJECTED = 'users/GET_USERNAMES_REJECTED',

  RESET_USERS = 'users/RESET_USERS',
}

/** Add user action interfaces */

export interface IAddUserAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_USER;
}

export interface IAddUserFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_USER_FULFILLED;
}

export interface IAddUserRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_USER_REJECTED;
}

/** Filter users action interfaces */

export interface IFilterUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_USERS;
}

export interface IFilterUsersFulfilledAction {
  readonly payload: Partial<IUsersData>;
  readonly type: ActionTypeKeys.FILTER_USERS_FULFILLED;
}

export interface IFilterUsersRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_USERS_REJECTED;
}

/** Update user action interfaces */

export interface IUpdateUserAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_USER;
}

export interface IUpdateUserFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_USER_FULFILLED;
}

export interface IUpdateUserRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_USER_REJECTED;
}

/** Get usernames action interfaces */

export interface IGetUsernamesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERNAMES;
}

export interface IGetUsernamesFulfilledAction {
  readonly payload: Partial<IUsersData>;
  readonly type: ActionTypeKeys.GET_USERNAMES_FULFILLED;
}

export interface IGetUsernamesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERNAMES_REJECTED;
}

/** Reset users action interfaces */

export interface IResetUsersAction {
  readonly type: ActionTypeKeys.RESET_USERS;
}

export type TUsersAction =
  | IAddUserFulfilledAction
  | IFilterUsersFulfilledAction
  | IUpdateUserFulfilledAction
  | IGetUsernamesFulfilledAction
  | IResetUsersAction;
