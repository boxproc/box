import { IEndpoints, IEndpointsNames } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  /** Add endpoint action type keys */
  ADD_ENDPOINT = 'administration/endpoints/ADD_ENDPOINT',
  ADD_ENDPOINT_FULFILLED = 'administration/endpoints/ADD_ENDPOINT_FULFILLED',
  ADD_ENDPOINT_REJECTED = 'administration/endpoints/ADD_ENDPOINT_REJECTED',

  /** Delete endpoint action type keys */
  DELETE_ENDPOINT = 'administration/endpoints/DELETE_ENDPOINT',
  DELETE_ENDPOINT_FULFILLED = 'administration/endpoints/DELETE_ENDPOINT_FULFILLED',
  DELETE_ENDPOINT_REJECTED = 'administration/endpoints/DELETE_ENDPOINT_REJECTED',

  /** Update endpoint action type keys */
  UPDATE_ENDPOINT = 'administration/endpoints/UPDATE_ENDPOINT',
  UPDATE_ENDPOINT_FULFILLED = 'administration/endpoints/UPDATE_ENDPOINT_FULFILLED',
  UPDATE_ENDPOINT_REJECTED = 'administration/endpoints/UPDATE_ENDPOINT_REJECTED',

  /** Filter endpoints action type keys */
  FILTER_ENDPOINTS = 'administration/endpoints/FILTER_ENDPOINTS',
  FILTER_ENDPOINTS_FULFILLED = 'administration/endpoints/FILTER_ENDPOINTS_FULFILLED',
  FILTER_ENDPOINTS_REJECTED = 'administration/endpoints/FILTER_ENDPOINTS_REJECTED',

  /** Get endpoints by institution ID action type keys */
  GET_ENDPOINTS_BY_INST_ID = 'administration/endpoints/GET_ENDPOINTS_BY_INST_ID',
  GET_ENDPOINTS_BY_INST_ID_FULFILLED =
  'administration/endpoints/GET_ENDPOINTS_BY_INST_ID_FULFILLED',
  GET_ENDPOINTS_BY_INST_ID_REJECTED = 'administration/endpoints/GET_ENDPOINTS_BY_INST_ID_REJECTED',

  /** Reset endpoints action type keys */
  RESET_ENDPOINTS = 'administration/endpoints/RESET_ENDPOINTS',
}

/** Add endpoint action interfaces */

export interface IAddEndpointAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ENDPOINT;
}

export interface IAddEndpointFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_ENDPOINT_FULFILLED;
}

export interface IAddEndpointRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_ENDPOINT_REJECTED;
}

/** Delete endpoint action interfaces */

export interface IDeleteEndpointAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ENDPOINT;
}

export interface IDeleteEndpointFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_ENDPOINT_FULFILLED;
  meta: { id: number };
}

export interface IDeleteEndpointRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_ENDPOINT_REJECTED;
}

/** Update endpoint action interfaces */

export interface IUpdateEndpointAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ENDPOINT;
}

export interface IUpdateEndpointFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_ENDPOINT_FULFILLED;
}

export interface IUpdateEndpointRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ENDPOINT_REJECTED;
}

/** Filter endpoints action interfaces */

export interface IFilterEndpointsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ENDPOINTS;
}

export interface IFilterEndpointsFulfilledAction {
  readonly payload: IEndpoints;
  readonly type: ActionTypeKeys.FILTER_ENDPOINTS_FULFILLED;
}

export interface IFilterEndpointsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_ENDPOINTS_REJECTED;
}

/** Get endpoints by institution ID action interfaces */

export interface IGetEndpointsByInstIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INST_ID;
}

export interface IGetEndpointsByInstIdFulfilledAction {
  readonly payload: IEndpointsNames;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INST_ID_FULFILLED;
}

export interface IGetEndpointsByInstIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_ENDPOINTS_BY_INST_ID_REJECTED;
}

/** Reset endpoints action interfaces */

export interface IResetEndpointsAction {
  readonly type: ActionTypeKeys.RESET_ENDPOINTS;
}

export type TEndpointActionTypes =
  | IAddEndpointFulfilledAction
  | IDeleteEndpointFulfilledAction
  | IFilterEndpointsFulfilledAction
  | IUpdateEndpointFulfilledAction
  | IGetEndpointsByInstIdFulfilledAction
  | IResetEndpointsAction;
