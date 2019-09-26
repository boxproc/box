import { AdminSchedulerDataResp } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  FILTER_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/FILTER_ADMIN_SCHEDULER_JOBS',
  FILTER_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/FILTER_ADMIN_SCHEDULER_JOBS_FULFILLED',
  FILTER_ADMIN_SCHEDULER_JOBS_REJECTED =
  'administration/scheduler/FILTER_ADMIN_SCHEDULER_JOBS_REJECTED',

  ADD_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/ADD_ADMIN_SCHEDULER_JOBS',
  ADD_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/ADD_ADMIN_SCHEDULER_JOBS_FULFILLED',
  ADD_ADMIN_SCHEDULER_JOBS_REJECTED =
  'administration/scheduler/ADD_ADMIN_SCHEDULER_JOBS_REJECTED',

  DELETE_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/DELETE_ADMIN_SCHEDULER_JOBS',
  DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED',
  DELETE_ADMIN_SCHEDULER_JOBS_REJECTED =
  'administration/scheduler/DELETE_ADMIN_SCHEDULER_JOBS_REJECTED',

  SEND_ADMIN_SCHEDULER_ACTION_JOB = 'administration/scheduler/SEND_ADMIN_SCHEDULER_ACTION_JOB',
  SEND_ADMIN_SCHEDULER_ACTION_JOB_FULFILLED =
  'administration/scheduler/SEND_ADMIN_SCHEDULER_ACTION_JOB_FULFILLED',
  SEND_ADMIN_SCHEDULER_ACTION_JOB_REJECTED =
  'administration/scheduler/SEND_ADMIN_SCHEDULER_ACTION_JOB_REJECTED',

  UPDATE_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/UPDATE_ADMIN_SCHEDULER_JOBS',
  UPDATE_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/UPDATE_ADMIN_SCHEDULER_JOBS_FULFILLED',
  UPDATE_ADMIN_SCHEDULER_JOBS_REJECTED =
  'administration/scheduler/UPDATE_ADMIN_SCHEDULER_JOBS_REJECTED',
}

export interface FilterAdminSchedulerJobsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SCHEDULER_JOBS;
}

export interface FilterAdminSchedulerJobsFulfilledAction {
  readonly payload: AdminSchedulerDataResp;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface FilterAdminSchedulerJobsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface AddAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS;
}

export interface AddAdminSchedulerJobFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface AddAdminSchedulerJobRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface DeleteAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS;
}

export interface DeleteAdminSchedulerJobFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED;
  meta: { id: number };
}

export interface DeleteAdminSchedulerJobRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface UpdateAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS;
}

export interface UpdateAdminSchedulerJobFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface UpdateAdminSchedulerJobRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface SendAdminSchedulerActionJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB;
}

export interface SendAdminSchedulerActionJobFulfilledAction {
  readonly payload: ResponseStatusType;
  readonly type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB_FULFILLED;
}

export interface SendAdminSchedulerActionJobRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB_REJECTED;
}

export type AdminSchedulerJobsActionTypes =
  | FilterAdminSchedulerJobsFulfilledAction
  | AddAdminSchedulerJobFulfilledAction
  | DeleteAdminSchedulerJobFulfilledAction
  | UpdateAdminSchedulerJobFulfilledAction
  | SendAdminSchedulerActionJobFulfilledAction;
