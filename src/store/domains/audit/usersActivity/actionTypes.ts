import { IUsersActivityItemsData, IUsersActivityUsersData } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_USERS = 'usersActivity/GET_USERS',
  GET_USERS_FULFILLED = 'usersActivity/GET_USERS_FULFILLED',
  GET_USERS_REJECTED = 'usersActivity/GET_USERS_REJECTED',

  FILTER_USERS_ACTIVITY = 'usersActivity/FILTER_USERS_ACTIVITY',
  FILTER_USERS_ACTIVITY_FULFILLED = 'usersActivity/FILTER_USERS_ACTIVITY_FULFILLED',
  FILTER_USERS_ACTIVITY_REJECTED = 'usersActivity/FILTER_USERS_ACTIVITY_REJECTED',

  FILTER_USERS_ACTIVITY_BY_ID = 'usersActivity/FILTER_USERS_ACTIVITY_BY_ID',
  FILTER_USERS_ACTIVITY_BY_ID_FULFILLED = 'usersActivity/FILTER_USERS_ACTIVITY_BY_ID_FULFILLED',
  FILTER_USERS_ACTIVITY_BY_ID_REJECTED = 'usersActivity/FILTER_USERS_ACTIVITY_BY_ID_REJECTED',

  RESET_USERS_ACTIVITY = 'usersActivity/FILTER_USERS_ACTIVITY_REJECTED',
}

export interface IGetUsersActivityUsersAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USERS;
}

export interface IGetUsersActivityUsersFulfilledAction {
  readonly payload: IUsersActivityUsersData;
  readonly type: ActionTypeKeys.GET_USERS_FULFILLED;
}

export interface IGetUsersActivityUsersRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USERS_FULFILLED;
}

export interface IFilterUsersActivityAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_USERS_ACTIVITY;
}

export interface IFilterUsersActivityFulfilledAction {
  readonly payload: IUsersActivityItemsData;
  readonly type: ActionTypeKeys.FILTER_USERS_ACTIVITY_FULFILLED;
}

export interface IFilterUsersActivityRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_USERS_ACTIVITY_REJECTED;
}

export interface IFilterUsersActivityByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_USERS_ACTIVITY_BY_ID;
}

export interface IFilterUsersActivityByIdFulfilledAction {
  readonly payload: IUsersActivityItemsData;
  readonly type: ActionTypeKeys.FILTER_USERS_ACTIVITY_BY_ID_FULFILLED;
}

export interface IFilterUsersActivityByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_USERS_ACTIVITY_BY_ID_REJECTED;
}

export interface IResetUsersActivityAction {
  readonly type: ActionTypeKeys.RESET_USERS_ACTIVITY;
}

export type TUsersActivityAction =
  | IGetUsersActivityUsersFulfilledAction
  | IFilterUsersActivityFulfilledAction
  | IFilterUsersActivityByIdFulfilledAction
  | IResetUsersActivityAction;
