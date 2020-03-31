import { InstitutionProductServiceEndpoints, InstitutionProductServiceInterfaces } from './types';

import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_SERVICE_INTERFACES = 'products/GET_SERVICE_INTERFACES',
  GET_SERVICE_INTERFACES_FULFILLED = 'products/GET_SERVICE_INTERFACES_FULFILLED',
  GET_SERVICE_INTERFACES_REJECTED = 'products/GET_SERVICE_INTERFACES_REJECTED',

  GET_SERVICE_ENDPOINTS = 'products/GET_SERVICE_ENDPOINTS',
  GET_SERVICE_ENDPOINTS_FULFILLED = 'products/GET_SERVICE_ENDPOINTS_FULFILLED',
  GET_SERVICE_ENDPOINTS_REJECTED = 'products/GET_SERVICE_ENDPOINTS_REJECTED',

  UPDATE_CARD_SERVICES = 'products/UPDATE_CARD_SERVICES',
  UPDATE_CARD_SERVICES_FULFILLED = 'products/UPDATE_CARD_SERVICES_FULFILLED',
  UPDATE_CARD_SERVICES_REJECTED = 'products/UPDATE_CARD_SERVICES_REJECTED',
}

export interface GetInterfacesProductServiceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SERVICE_INTERFACES;
}

export interface GetInterfacesProductServiceFulfilledAction {
  readonly payload: InstitutionProductServiceInterfaces;
  readonly type: ActionTypeKeys.GET_SERVICE_INTERFACES_FULFILLED;
}

export interface GetInterfacesProductServiceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SERVICE_INTERFACES_REJECTED;
}

export interface GetEndpointsProductServiceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SERVICE_ENDPOINTS;
}

export interface GetEndpointsProductServiceFulfilledAction {
  readonly payload: InstitutionProductServiceEndpoints;
  readonly type: ActionTypeKeys.GET_SERVICE_ENDPOINTS_FULFILLED;
}

export interface GetEndpointsProductServiceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SERVICE_ENDPOINTS_REJECTED;
}

export interface UpdateCardServiceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_CARD_SERVICES;
}

export interface UpdateCardServiceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_CARD_SERVICES_FULFILLED;
}

export interface UpdateCardServiceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_CARD_SERVICES_REJECTED;
}

export type TProductServicesAction =
  | GetEndpointsProductServiceFulfilledAction
  | GetInterfacesProductServiceFulfilledAction
  | UpdateCardServiceFulfilledAction;
