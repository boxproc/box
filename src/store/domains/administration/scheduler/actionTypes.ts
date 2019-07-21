import {
  AdminSchedulerDataResp, AdminSchedulerEditableItemPrepared,
} from './types';

import { ApiResponse, SuccessResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS',
  GET_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS_FULFILLED',
  GET_ADMIN_SCHEDULER_JOBS_REJECTED = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS_REJECTED',

  ADD_ADMIN_SCHEDULER_JOBS = 'administration/systemProperties/ADD_ADMIN_SCHEDULER_JOBS',
  ADD_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/systemProperties/ADD_ADMIN_SCHEDULER_JOBS_FULFILLED',
  ADD_ADMIN_SCHEDULER_JOBS_REJECTED =
  'administration/systemProperties/ADD_ADMIN_SCHEDULER_JOBS_REJECTED',

  DELETE_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/DELETE_ADMIN_SCHEDULER_JOBS',
  DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED',
  DELETE_ADMIN_SCHEDULER_JOBS_REJECTED =
  'administration/scheduler/DELETE_ADMIN_SCHEDULER_JOBS_REJECTED',
}

// Get all scheduler jobs
export interface GetAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS;
}

export interface GetAdminSchedulerJobFulfilledAction {
  readonly payload: AdminSchedulerDataResp;
  readonly type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface GetAdminSchedulerJobRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS_REJECTED;
}

// Add new scheduler job
export interface AddAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS;
}

export interface AddAdminSchedulerJobFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS_FULFILLED;
  meta: AdminSchedulerEditableItemPrepared;
}

export interface AddAdminSchedulerJobRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS_REJECTED;
}

// Delete scheduler job by id
export interface DeleteAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS;
}

export interface DeleteAdminSchedulerJobFulfilledAction {
  readonly payload: SuccessResponseStatusType;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED;
  meta: number;
}

export interface DeleteAdminSysPropRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export type AdminSchedulerJobsActionTypes =
  | GetAdminSchedulerJobFulfilledAction
  | AddAdminSchedulerJobFulfilledAction
  | DeleteAdminSchedulerJobFulfilledAction;
