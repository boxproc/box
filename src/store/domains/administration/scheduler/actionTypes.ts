import { AdminSchedulerData,
         AdminSchedulerIdDataResp,
         AdminSchedulerJobDataResp,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS',
  GET_ADMIN_SCHEDULER_JOBS_FULFILLED = 'administration/scheduler/' +
   'GET_ADMIN_SCHEDULER_JOBS_FULFILLED',
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
export interface GetAdminSchedulerJobAction {
    readonly payload: Promise<object>;
    readonly type: ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS;
}
export interface GetAdminSchedulerJobFulfilledAction {
    readonly payload: AdminSchedulerData;
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
  readonly payload: AdminSchedulerJobDataResp;
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
  readonly payload: AdminSchedulerIdDataResp;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface DeleteAdminSysPropRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export type AdminSchedulerJobsActionTypes =
  | GetAdminSchedulerJobFulfilledAction
  | AddAdminSchedulerJobFulfilledAction
  | DeleteAdminSchedulerJobFulfilledAction;
