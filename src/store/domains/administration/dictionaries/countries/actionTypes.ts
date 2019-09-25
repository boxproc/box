import { AdminCountriesData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_COUNTRIES = 'administration/countries/GET_ADMIN_COUNTRIES',
  GET_ADMIN_COUNTRIES_FULFILLED = 'administration/countries/GET_ADMIN_COUNTRIES_FULFILLED',
  GET_ADMIN_COUNTRIES_REJECTED = 'administration/countries/GET_ADMIN_COUNTRIES_REJECTED',
}

export interface GetAdminCountriesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_COUNTRIES;
}

export interface GetAdminCountriesFulfilledAction {
  readonly payload: AdminCountriesData;
  readonly type: ActionTypeKeys.GET_ADMIN_COUNTRIES_FULFILLED;
}

export interface GetAdminCountriesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_COUNTRIES_REJECTED;
}

export type AdminCountriesActionTypes =
  | GetAdminCountriesFulfilledAction;
