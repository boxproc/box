import { CyclesDescriptions, CyclesEditorDataResp } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  ADD_CYCLE_EDITOR = 'productDesigner/cycles/ADD_CYCLE_JOBS',
  ADD_CYCLE_EDITOR_FULFILLED = 'productDesigner/cycles/ADD_CYCLE_JOBS_FULFILLED',
  ADD_CYCLE_EDITOR_REJECTED = 'productDesigner/cycles/ADD_CYCLE_JOBS_REJECTED',

  DELETE_CYCLE_EDITOR = 'productDesigner/cycles/DELETE_CYCLE_EDITOR',
  DELETE_CYCLE_EDITOR_FULFILLED = 'productDesigner/cycles/DELETE_CYCLE_EDITOR_FULFILLED',
  DELETE_CYCLE_EDITOR_REJECTED = 'productDesigner/cycles/DELETE_CYCLE_EDITOR_REJECTED',

  UPDATE_CYCLE_EDITOR = 'productDesigner/cycles/UPDATE_CYCLE_EDITOR',
  UPDATE_CYCLE_EDITOR_FULFILLED = 'productDesigner/cycles/UPDATE_CYCLE_EDITOR_FULFILLED',
  UPDATE_CYCLE_EDITOR_REJECTED = 'productDesigner/cycles/UPDATE_CYCLE_EDITOR_REJECTED',

  FILTER_CYCLES_EDITOR = 'productDesigner/cycles/FILTER_CYCLES_EDITOR',
  FILTER_CYCLES_EDITOR_FULFILLED =
  'productDesigner/cycles/FILTER_CYCLES_EDITOR_FULFILLED',
  FILTER_CYCLES_EDITOR_REJECTED = 'productDesigner/cycles/FILTER_CYCLES_EDITOR_REJECTED',

  GET_STATEMENTS_DESCRIPTIONS = 'productDesigner/cycles/GET_STATEMENTS_DESCRIPTIONS',
  GET_STATEMENTS_DESCRIPTIONS_FULFILLED =
  'productDesigner/cycles/GET_STATEMENTS_DESCRIPTIONS_FULFILLED',
  GET_STATEMENTS_DESCRIPTIONS_REJECTED =
  'productDesigner/cycles/GET_STATEMENTS_DESCRIPTIONS_REJECTED',

  RESET_STATEMENTS_DESCRIPTIONS = 'productDesigner/cycles/RESET_STATEMENTS_DESCRIPTIONS',

  RESET_CYCLES = 'productDesigner/cycles/RESET_CYCLES',
}

export interface AddCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_CYCLE_EDITOR;
}

export interface AddCycleEditorFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_CYCLE_EDITOR_FULFILLED;
}

export interface AddCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_CYCLE_EDITOR_REJECTED;
}

export interface DeleteCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_CYCLE_EDITOR;
}

export interface DeleteCycleEditorFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_CYCLE_EDITOR_FULFILLED;
  meta: { id: number };
}

export interface DeleteCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_CYCLE_EDITOR_REJECTED;
}

export interface UpdateCycleEditorAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_CYCLE_EDITOR;
}

export interface UpdateCycleEditorFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_CYCLE_EDITOR_FULFILLED;
}

export interface UpdateCycleEditorRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_CYCLE_EDITOR_REJECTED;
}

export interface FilterCyclesAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_CYCLES_EDITOR;
}

export interface FilterCyclesFulfilledAction {
  readonly payload: CyclesEditorDataResp;
  readonly type: ActionTypeKeys.FILTER_CYCLES_EDITOR_FULFILLED;
}

export interface FilterCyclesRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_CYCLES_EDITOR_REJECTED;
}

export interface GetCyclesDescriptionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_STATEMENTS_DESCRIPTIONS;
}

export interface GetCyclesDescriptionsFulfilledAction {
  readonly payload: CyclesDescriptions;
  readonly type: ActionTypeKeys.GET_STATEMENTS_DESCRIPTIONS_FULFILLED;
}

export interface GetCyclesDescriptionsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_STATEMENTS_DESCRIPTIONS_REJECTED;
}

export interface ResetCyclesDescriptionsAction {
  readonly type: ActionTypeKeys.RESET_STATEMENTS_DESCRIPTIONS;
}

export interface ResetCyclesAction {
  readonly type: ActionTypeKeys.RESET_CYCLES;
}

export type CycleEditorActionTypes =
  | AddCycleEditorFulfilledAction
  | DeleteCycleEditorFulfilledAction
  | UpdateCycleEditorFulfilledAction
  | FilterCyclesFulfilledAction
  | GetCyclesDescriptionsFulfilledAction
  | ResetCyclesDescriptionsAction
  | ResetCyclesAction;
