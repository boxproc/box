import { IApiCallDetails, IApiCallsData } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_API_CALLS = 'apiCalls/FILTER_API_CALLS',
  FILTER_API_CALLS_FULFILLED = 'apiCalls/FILTER_API_CALLS_FULFILLED',
  FILTER_API_CALLS_REJECTED = 'apiCalls/FILTER_API_CALLS_REJECTED',

  GET_DETAILS_API_CALLS = 'apiCalls/GET_DETAILS_API_CALLS',
  GET_DETAILS_API_CALLS_FULFILLED = 'apiCalls/GET_DETAILS_API_CALLS_FULFILLED',
  GET_DETAILS_API_CALLS_REJECTED = 'apiCalls/GET_DETAILS_API_CALLS_REJECTED',

  RESET_API_CALLS = 'apiCalls/RESET_API_CALLS',
}

export interface IFilterApiCallsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_API_CALLS;
}

export interface IFilterApiCallsFulfilledAction {
  readonly payload: IApiCallsData;
  readonly type: ActionTypeKeys.FILTER_API_CALLS_FULFILLED;
}

export interface IFilterApiCallsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_API_CALLS_REJECTED;
}

export interface IGetDetailsApiCallsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_DETAILS_API_CALLS;
}

export interface IGetDetailsApiCallsFulfilledAction {
  readonly payload: IApiCallDetails;
  readonly type: ActionTypeKeys.GET_DETAILS_API_CALLS_FULFILLED;
}

export interface IGetDetailsApiCallsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DETAILS_API_CALLS_REJECTED;
}

export interface IGetDetailsApiCallsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DETAILS_API_CALLS_REJECTED;
}

export interface IGetDetailsApiCallsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_DETAILS_API_CALLS_REJECTED;
}

export interface IResetApiCallsAction {
  readonly type: ActionTypeKeys.RESET_API_CALLS;
}

export type TApiCallsAction =
  | IFilterApiCallsFulfilledAction
  | IGetDetailsApiCallsFulfilledAction
  | IResetApiCallsAction;
