import { AdminInstitutionsItems } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_INSTITUTIONS = 'administration/institutions/GET_ADMIN_INSTITUTIONS',
  GET_ADMIN_INSTITUTIONS_FULFILLED = 'administration/institutions/GET_ADMIN_INSTITUTIONS_FULFILLED',
  GET_ADMIN_INSTITUTIONS_REJECTED = 'administration/institutions/GET_ADMIN_INSTITUTIONS_REJECTED',

  DELETE_ADMIN_INSTITUTION = 'administration/institutions/DELETE_ADMIN_INSTITUTION',
  DELETE_ADMIN_INSTITUTION_FULFILLED =
  'administration/institutions/DELETE_ADMIN_INSTITUTION_FULFILLED',
  DELETE_ADMIN_INSTITUTION_REJECTED =
  'administration/institutions/DELETE_ADMIN_INSTITUTION_REJECTED',

  ADD_ADMIN_INSTITUTION = 'administration/institutions/ADD_ADMIN_INSTITUTION',
  ADD_ADMIN_INSTITUTION_FULFILLED = 'administration/institutions/ADD_ADMIN_INSTITUTION_FULFILLED',
  ADD_ADMIN_INSTITUTION_REJECTED = 'administration/institutions/ADD_ADMIN_INSTITUTION_REJECTED',

  UPDATE_ADMIN_INSTITUTION = 'administration/institutions/UPDATE_ADMIN_INSTITUTIONS',
  UPDATE_ADMIN_INSTITUTION_FULFILLED =
  'administration/institutions/UPDATE_ADMIN_INSTITUTION_FULFILLED',
  UPDATE_ADMIN_INSTITUTION_REJECTED =
  'administration/institutions/UPDATE_ADMIN_INSTITUTION_REJECTED',
}

export interface GetAdminInstitutionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_INSTITUTIONS;
}

export interface GetAdminInstitutionsFulfilledAction {
  readonly payload: AdminInstitutionsItems;
  readonly type: ActionTypeKeys.GET_ADMIN_INSTITUTIONS_FULFILLED;
}

export interface GetAdminInstitutionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_INSTITUTIONS_REJECTED;
}

export interface DeleteAdminInstitutionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INSTITUTION;
}

export interface DeleteAdminInstitutionFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INSTITUTION_FULFILLED;
  readonly meta: {
    id: number;
  };
}

export interface DeleteAdminInstitutionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_INSTITUTION_REJECTED;
}

export interface AddAdminInstitutionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_INSTITUTION;
}

export interface AddAdminInstitutionFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_INSTITUTION_FULFILLED;
}

export interface AddAdminInstitutionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_INSTITUTION_REJECTED;
}

export interface UpdateAdminInstitutionAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INSTITUTION;
}

export interface UpdateAdminInstitutionFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INSTITUTION_FULFILLED;
}

export interface UpdateAdminInstitutionRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_INSTITUTION_REJECTED;
}

export type AdminInstitutionsActionTypes =
  | GetAdminInstitutionsFulfilledAction
  | AddAdminInstitutionFulfilledAction
  | DeleteAdminInstitutionFulfilledAction
  | UpdateAdminInstitutionFulfilledAction;
