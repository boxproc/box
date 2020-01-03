import {
  InstitutionsDataResp,
} from './types';

import { ApiResponse, } from 'types';

export enum ActionTypeKeys {
  GET_INSTITUTIONS = 'institutions/GET_INSTITUTIONS',
  GET_INSTITUTIONS_FULFILLED = 'institutions/GET_INSTITUTIONS_FULFILLED',
  GET_INSTITUTIONS_REJECTED = 'institutions/GET_INSTITUTIONS_REJECTED',
}

export interface GetInstitutionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS;
}

export interface GetInstitutionsFulfilledAction {
  readonly payload: InstitutionsDataResp;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS_FULFILLED;
}

export interface GetInstitutionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_INSTITUTIONS_REJECTED;
}

export type InstitutionsActionTypes =
  | GetInstitutionsFulfilledAction;
