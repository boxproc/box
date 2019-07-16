import { AdminSchedulerData } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_SCHEDULER_JOBS = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS',
  GET_ADMIN_SCHEDULER_JOBS_FULFILLED = 'administration/scheduler/' +
   'GET_ADMIN_SCHEDULER_JOBS_FULFILLED',
  GET_ADMIN_SCHEDULER_JOBS_REJECTED = 'administration/scheduler/GET_ADMIN_SCHEDULER_JOBS_REJECTED',
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

export type AdminSchedulerJobsActionTypes =
  | GetAdminSchedulerJobFulfilledAction;
