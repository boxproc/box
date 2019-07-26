import {
  AdminCyclesEditorDataResp,
  AdminCyclesEditorEditableItemPrepared,
} from './types';

import { ApiResponse, SuccessResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_CYCLE_EDITOR = 'administration/cycles/GET_ADMIN_CYCLE_EDITOR',
  GET_ADMIN_CYCLE_EDITOR_FULFILLED =
  'administration/cycles/GET_ADMIN_CYCLE_EDITOR_FULFILLED',
  GET_ADMIN_CYCLE_EDITOR_REJECTED = 'administration/cycles/GET_ADMIN_CYCLE_EDITOR_REJECTED',

  ADD_ADMIN_CYCLE_EDITOR = 'administration/cycles/ADD_ADMIN_CYCLE_JOBS',
  ADD_ADMIN_CYCLE_EDITOR_FULFILLED =
  'administration/cycles/ADD_ADMIN_CYCLE_JOBS_FULFILLED',
  ADD_ADMIN_CYCLE_EDITOR_REJECTED =
  'administration/cycles/ADD_ADMIN_CYCLE_JOBS_REJECTED',

  DELETE_ADMIN_CYCLE_EDITOR = 'administration/cycles/DELETE_ADMIN_CYCLE_EDITOR',
  DELETE_ADMIN_CYCLE_EDITOR_FULFILLED =
  'administration/cycles/DELETE_ADMIN_CYCLE_EDITOR_FULFILLED',
  DELETE_ADMIN_CYCLE_EDITOR_REJECTED =
  'administration/cycles/DELETE_ADMIN_CYCLE_EDITOR_REJECTED',

  UPDATE_ADMIN_CYCLE_EDITOR = 'administration/cycles/UPDATE_ADMIN_CYCLE_EDITOR',
  UPDATE_ADMIN_CYCLE_EDITOR_FULFILLED =
  'administration/cycles/UPDATE_ADMIN_CYCLE_EDITOR_FULFILLED',
  UPDATE_ADMIN_CYCLE_EDITOR_REJECTED =
  'administration/cycles/UPDATE_ADMIN_CYCLE_EDITOR_REJECTED',
}

export interface GetAdminCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR;
}

export interface GetAdminCycleEditorFulfilledAction {
  readonly payload: AdminCyclesEditorDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR_FULFILLED;
}

export interface GetAdminCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR_REJECTED;
}

export interface AddAdminCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR;
}

export interface AddAdminCycleEditorFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR_FULFILLED;
  readonly meta: AdminCyclesEditorEditableItemPrepared;
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
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR_FULFILLED;
  meta: number;
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
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR_FULFILLED;
  readonly meta: AdminCyclesEditorEditableItemPrepared;
}

export interface UpdateAdminCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR_REJECTED;
}

export type AdminCycleEditorActionTypes =
  | GetAdminCycleEditorFulfilledAction
  | AddAdminCycleEditorFulfilledAction
  | DeleteAdminCycleEditorFulfilledAction
  | UpdateAdminCycleEditorFulfilledAction;
