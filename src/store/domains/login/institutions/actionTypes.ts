import {
  InstitutionsDataResp,
} from './types';

import { TApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_USER_INSTITUTIONS = 'institutions/GET_USER_INSTITUTIONS',
  GET_USER_INSTITUTIONS_FULFILLED = 'institutions/GET_USER_INSTITUTIONS_FULFILLED',
  GET_USER_INSTITUTIONS_REJECTED = 'institutions/GET_USER_INSTITUTIONS_REJECTED',
}

export interface IGetUserInstitutionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_USER_INSTITUTIONS;
}

export interface IGetUserInstitutionsFulfilledAction {
  readonly payload: InstitutionsDataResp;
  readonly type: ActionTypeKeys.GET_USER_INSTITUTIONS_FULFILLED;
}

export interface IGetUserInstitutionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_USER_INSTITUTIONS_REJECTED;
}

export type TInstitutionsActionTypes =
  | IGetUserInstitutionsFulfilledAction;
