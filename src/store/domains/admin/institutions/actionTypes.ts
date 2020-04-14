import { IInstitutionsData } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_INSTITUTIONS = 'institutions/GET_INSTITUTIONS',
  GET_INSTITUTIONS_FULFILLED = 'institutions/GET_INSTITUTIONS_FULFILLED',
  GET_INSTITUTIONS_REJECTED = 'institutions/GET_INSTITUTIONS_REJECTED',

  DELETE_INSTITUTION = 'institutions/DELETE_INSTITUTION',
  DELETE_INSTITUTION_FULFILLED = 'institutions/DELETE_INSTITUTION_FULFILLED',
  DELETE_INSTITUTION_REJECTED = 'institutions/DELETE_INSTITUTION_REJECTED',

  ADD_INSTITUTION = 'institutions/ADD_INSTITUTION',
  ADD_INSTITUTION_FULFILLED = 'institutions/ADD_INSTITUTION_FULFILLED',
  ADD_INSTITUTION_REJECTED = 'institutions/ADD_INSTITUTION_REJECTED',

  UPDATE_INSTITUTION = 'institutions/UPDATE_INSTITUTIONS',
  UPDATE_INSTITUTION_FULFILLED = 'institutions/UPDATE_INSTITUTION_FULFILLED',
  UPDATE_INSTITUTION_REJECTED = 'institutions/UPDATE_INSTITUTION_REJECTED',

  RESET_INSTITUTIONS = 'institutions/RESET_INSTITUTIONS',
}

/** Get institutions action interfaces */

export interface IGetInstitutionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS;
}

export interface IGetInstitutionsFulfilledAction {
  readonly payload: IInstitutionsData;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS_FULFILLED;
}

export interface IGetInstitutionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS_REJECTED;
}

/** Delete institution action interfaces */

export interface IDeleteInstitutionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_INSTITUTION;
}

export interface IDeleteInstitutionFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_INSTITUTION_FULFILLED;
  readonly meta: { id: number };
}

export interface IDeleteInstitutionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_INSTITUTION_REJECTED;
}

/** Add institution action interfaces */

export interface IAddInstitutionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_INSTITUTION;
}

export interface IAddInstitutionFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_INSTITUTION_FULFILLED;
}

export interface IAddInstitutionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_INSTITUTION_REJECTED;
}

/** Update institution action interfaces */

export interface IUpdateInstitutionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_INSTITUTION;
}

export interface IUpdateInstitutionFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_INSTITUTION_FULFILLED;
}

export interface IUpdateInstitutionRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_INSTITUTION_REJECTED;
}

/** Reset institutions action interfaces */

export interface IResetInstitutionsAction {
  readonly type: ActionTypeKeys.RESET_INSTITUTIONS;
}

export type TInstitutionsAction =
  | IGetInstitutionsFulfilledAction
  | IAddInstitutionFulfilledAction
  | IDeleteInstitutionFulfilledAction
  | IUpdateInstitutionFulfilledAction
  | IResetInstitutionsAction;