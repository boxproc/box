import { IResponseStatus, TApiResponse } from 'types';
import { IInterfacesData } from './types';

export enum ActionTypeKeys {
  ADD_INTERFACE = 'administration/interfaces/ADD_INTERFACE',
  ADD_INTERFACE_FULFILLED = 'administration/interfaces/ADD_INTERFACE_FULFILLED',
  ADD_INTERFACE_REJECTED = 'administration/interfaces/ADD_INTERFACE_REJECTED',

  DELETE_INTERFACE = 'administration/interfaces/DELETE_INTERFACE',
  DELETE_INTERFACE_FULFILLED = 'administration/interfaces/DELETE_INTERFACE_FULFILLED',
  DELETE_INTERFACE_REJECTED = 'administration/interfaces/DELETE_INTERFACE_REJECTED',

  UPDATE_INTERFACE = 'administration/interfaces/UPDATE_INTERFACE',
  UPDATE_INTERFACE_FULFILLED = 'administration/interfaces/UPDATE_INTERFACE_FULFILLED',
  UPDATE_INTERFACE_REJECTED = 'administration/interfaces/UPDATE_INTERFACE_REJECTED',

  FILTER_INTERFACES = 'administration/interfaces/FILTER_INTERFACES',
  FILTER_INTERFACES_FULFILLED = 'administration/interfaces/FILTER_INTERFACES_FULFILLED',
  FILTER_INTERFACES_REJECTED = 'administration/interfaces/FILTER_INTERFACES_REJECTED',

  RESET_INTERFACES = 'administration/interfaces/RESET_INTERFACES',
}

/** Add interface action interfaces */

export interface IAddInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_INTERFACE;
}

export interface IAddInterfaceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_INTERFACE_FULFILLED;
}

export interface IAddInterfaceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_INTERFACE_REJECTED;
}

/** Delete interface action interfaces */

export interface IDeleteInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_INTERFACE;
}

export interface IDeleteInterfaceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_INTERFACE_FULFILLED;
  meta: { id: number };
}

export interface IDeleteInterfaceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_INTERFACE_REJECTED;
}

/** Update interface action interfaces */

export interface IUpdateInterfaceAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_INTERFACE;
}

export interface IUpdateInterfaceFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_INTERFACE_FULFILLED;
}

export interface IUpdateInterfaceRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_INTERFACE_REJECTED;
}

/** Filter interfaces action interfaces */

export interface IFilterInterfacesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_INTERFACES;
}

export interface IFilterInterfacesFulfilledAction {
  readonly payload: IInterfacesData;
  readonly type: ActionTypeKeys.FILTER_INTERFACES_FULFILLED;
}

export interface IFilterInterfacesRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_INTERFACES_REJECTED;
}

/** Reset interfaces action interfaces */

export interface IResetInterfacesAction {
  readonly type: ActionTypeKeys.RESET_INTERFACES;
}

export type TInterfacesActionTypes =
  | IAddInterfaceFulfilledAction
  | IDeleteInterfaceFulfilledAction
  | IFilterInterfacesFulfilledAction
  | IUpdateInterfaceFulfilledAction
  | IResetInterfacesAction;
