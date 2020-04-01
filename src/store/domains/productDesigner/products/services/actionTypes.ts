import { IProductServicesEndpoints, IProductServicesInterfaces } from './types';

import { IResponseStatus, TApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_SERVICES_INTERFACES = 'products/GET_SERVICES_INTERFACES',
  GET_SERVICES_INTERFACES_FULFILLED = 'products/GET_SERVICES_INTERFACES_FULFILLED',
  GET_SERVICES_INTERFACES_REJECTED = 'products/GET_SERVICES_INTERFACES_REJECTED',

  GET_SERVICES_ENDPOINTS = 'products/GET_SERVICES_ENDPOINTS',
  GET_SERVICES_ENDPOINTS_FULFILLED = 'products/GET_SERVICES_ENDPOINTS_FULFILLED',
  GET_SERVICES_ENDPOINTS_REJECTED = 'products/GET_SERVICES_ENDPOINTS_REJECTED',

  UPDATE_PRODUCT_SERVICES = 'products/UPDATE_PRODUCT_SERVICES',
  UPDATE_PRODUCT_SERVICES_FULFILLED = 'products/UPDATE_PRODUCT_SERVICES_FULFILLED',
  UPDATE_PRODUCT_SERVICES_REJECTED = 'products/UPDATE_PRODUCT_SERVICES_REJECTED',
}

export interface IGetServicesInterfacesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SERVICES_INTERFACES;
}

export interface IGetServicesInterfacesFulfilledAction {
  readonly payload: IProductServicesInterfaces;
  readonly type: ActionTypeKeys.GET_SERVICES_INTERFACES_FULFILLED;
}

export interface IGetServicesInterfacesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SERVICES_INTERFACES_REJECTED;
}

export interface IGetServicesEndpointsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SERVICES_ENDPOINTS;
}

export interface IGetServicesEndpointsFulfilledAction {
  readonly payload: IProductServicesEndpoints;
  readonly type: ActionTypeKeys.GET_SERVICES_ENDPOINTS_FULFILLED;
}

export interface IGetServicesEndpointsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SERVICES_ENDPOINTS_REJECTED;
}

export interface IUpdateProductServicesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_SERVICES;
}

export interface IUpdateProductServicesFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_SERVICES_FULFILLED;
}

export interface IUpdateProductServicesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_PRODUCT_SERVICES_REJECTED;
}

export type TProductServicesAction =
  | IGetServicesEndpointsFulfilledAction
  | IGetServicesInterfacesFulfilledAction
  | IUpdateProductServicesFulfilledAction;
