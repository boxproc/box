import { AdminCyclesEditorDataResp } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  ADD_ADMIN_CYCLE_EDITOR = 'administration/cycles/ADD_ADMIN_CYCLE_JOBS',
  ADD_ADMIN_CYCLE_EDITOR_FULFILLED = 'administration/cycles/ADD_ADMIN_CYCLE_JOBS_FULFILLED',
  ADD_ADMIN_CYCLE_EDITOR_REJECTED = 'administration/cycles/ADD_ADMIN_CYCLE_JOBS_REJECTED',

  DELETE_ADMIN_CYCLE_EDITOR = 'administration/cycles/DELETE_ADMIN_CYCLE_EDITOR',
  DELETE_ADMIN_CYCLE_EDITOR_FULFILLED = 'administration/cycles/DELETE_ADMIN_CYCLE_EDITOR_FULFILLED',
  DELETE_ADMIN_CYCLE_EDITOR_REJECTED = 'administration/cycles/DELETE_ADMIN_CYCLE_EDITOR_REJECTED',

  UPDATE_ADMIN_CYCLE_EDITOR = 'administration/cycles/UPDATE_ADMIN_CYCLE_EDITOR',
  UPDATE_ADMIN_CYCLE_EDITOR_FULFILLED = 'administration/cycles/UPDATE_ADMIN_CYCLE_EDITOR_FULFILLED',
  UPDATE_ADMIN_CYCLE_EDITOR_REJECTED = 'administration/cycles/UPDATE_ADMIN_CYCLE_EDITOR_REJECTED',

  FILTER_ADMIN_CYCLES_EDITOR = 'administration/cycles/FILTER_ADMIN_CYCLES_EDITOR',
  FILTER_ADMIN_CYCLES_EDITOR_FULFILLED =
    'administration/cycles/FILTER_ADMIN_CYCLES_EDITOR_FULFILLED',
  FILTER_ADMIN_CYCLES_EDITOR_REJECTED = 'administration/cycles/FILTER_ADMIN_CYCLES_EDITOR_REJECTED',
}

export interface AddAdminCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR;
}

export interface AddAdminCycleEditorFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR_FULFILLED;
}

export interface AddAdminCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR_REJECTED;
}

export interface DeleteAdminCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR;
}

export interface DeleteAdminCycleEditorFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR_FULFILLED;
  meta: { id: number };
}

export interface DeleteAdminCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR_REJECTED;
}

export interface UpdateAdminCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR;
}

export interface UpdateAdminCycleEditorFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR_FULFILLED;
}

export interface UpdateAdminCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR_REJECTED;
}

export interface FilterCyclesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR;
}

export interface FilterCyclesFulfilledAction {
  readonly payload: AdminCyclesEditorDataResp;
  readonly type: ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR_FULFILLED;
}

export interface FilterCyclesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR_REJECTED;
}

export type AdminCycleEditorActionTypes =
  | AddAdminCycleEditorFulfilledAction
  | DeleteAdminCycleEditorFulfilledAction
  | UpdateAdminCycleEditorFulfilledAction
  | FilterCyclesFulfilledAction;
