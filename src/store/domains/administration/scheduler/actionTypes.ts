import { AdminSchedulerDataResp } from './types';

import { ApiResponse, ResponseStatusType } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS',
  GET_ADMIN_SCHEDULER_JOBS_FULFILLED =
  'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS_FULFILLED',
  GET_ADMIN_SCHEDULER_JOBS_REJECTED = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS_REJECTED',

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

  SET_ADMIN_SCHEDULER_JOBS_ID = 'administration/scheduler/SET_ADMIN_SCHEDULER_JOBS_ID',

  SET_GENERATED_CRON_EXPRESSION = 'administration/scheduler/SET_GENERATED_CRON_EXPRESSION',
}

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

export interface SetAdminSchedulerJobIdAction {
  readonly payload: number;
  readonly type: ActionTypeKeys.SET_ADMIN_SCHEDULER_JOBS_ID;
}

export interface SetGeneratedCronExpressionAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.SET_GENERATED_CRON_EXPRESSION;
}

export type AdminSchedulerJobsActionTypes =
  | GetAdminSchedulerJobFulfilledAction
  | AddAdminSchedulerJobFulfilledAction
  | DeleteAdminSchedulerJobFulfilledAction
  | UpdateAdminSchedulerJobFulfilledAction
  | SendAdminSchedulerActionJobFulfilledAction
  | SetAdminSchedulerJobIdAction
  | SetGeneratedCronExpressionAction;
