import { ISchedulerJobsData, ISchedulerJobsNames } from './types';

import { IResponseStatus, TApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_SCHEDULER_JOBS = 'administration/scheduler/FILTER_SCHEDULER_JOBS',
  FILTER_SCHEDULER_JOBS_FULFILLED = 'administration/scheduler/FILTER_SCHEDULER_JOBS_FULFILLED',
  FILTER_SCHEDULER_JOBS_REJECTED = 'administration/scheduler/FILTER_SCHEDULER_JOBS_REJECTED',

  ADD_SCHEDULER_JOB = 'administration/scheduler/ADD_SCHEDULER_JOB',
  ADD_SCHEDULER_JOB_FULFILLED = 'administration/scheduler/ADD_SCHEDULER_JOB_FULFILLED',
  ADD_SCHEDULER_JOB_REJECTED = 'administration/scheduler/ADD_SCHEDULER_JOB_REJECTED',

  DELETE_SCHEDULER_JOB = 'administration/scheduler/DELETE_SCHEDULER_JOB',
  DELETE_SCHEDULER_JOB_FULFILLED = 'administration/scheduler/DELETE_SCHEDULER_JOB_FULFILLED',
  DELETE_SCHEDULER_JOB_REJECTED = 'administration/scheduler/DELETE_SCHEDULER_JOB_REJECTED',

  EXEC_SCHEDULER_JOB = 'administration/scheduler/EXEC_SCHEDULER_JOB',
  EXEC_SCHEDULER_JOB_FULFILLED = 'administration/scheduler/EXEC_SCHEDULER_JOB_FULFILLED',
  EXEC_SCHEDULER_JOB_REJECTED = 'administration/scheduler/EXEC_SCHEDULER_JOB_REJECTED',

  UPDATE_SCHEDULER_JOB = 'administration/scheduler/UPDATE_SCHEDULER_JOB',
  UPDATE_SCHEDULER_JOB_FULFILLED = 'administration/scheduler/UPDATE_SCHEDULER_JOB_FULFILLED',
  UPDATE_SCHEDULER_JOB_REJECTED = 'administration/scheduler/UPDATE_SCHEDULER_JOB_REJECTED',

  GET_SCHEDULER_NAMES_BY_INST_ID = 'administration/scheduler/GET_SCHEDULER_NAMES_BY_INST_ID',
  GET_SCHEDULER_NAMES_BY_INST_ID_FULFILLED =
  'administration/scheduler/GET_SCHEDULER_NAMES_BY_INST_ID_FULFILLED',
  GET_SCHEDULER_NAMES_BY_INST_ID_REJECTED =
  'administration/scheduler/GET_SCHEDULER_NAMES_BY_INST_ID_REJECTED',

  RESET_SCHEDULER = 'administration/scheduler/RESET_SCHEDULER',
}

/** Filter scheduler jobs action interfaces */

export interface IFilterSchedulerJobsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_SCHEDULER_JOBS;
}

export interface IFilterSchedulerJobsFulfilledAction {
  readonly payload: ISchedulerJobsData;
  readonly type: ActionTypeKeys.FILTER_SCHEDULER_JOBS_FULFILLED;
}

export interface IFilterSchedulerJobsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_SCHEDULER_JOBS_REJECTED;
}

/** Add scheduler job action interfaces */

export interface IAddSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_SCHEDULER_JOB;
}

export interface IAddSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_SCHEDULER_JOB_FULFILLED;
}

export interface IAddSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_SCHEDULER_JOB_REJECTED;
}

/** Delete scheduler job action interfaces */

export interface IDeleteSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_SCHEDULER_JOB;
}

export interface IDeleteSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_SCHEDULER_JOB_FULFILLED;
  meta: { id: number };
}

export interface IDeleteSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_SCHEDULER_JOB_REJECTED;
}

/** Update scheduler job action interfaces */

export interface IUpdateSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_SCHEDULER_JOB;
}

export interface IUpdateSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_SCHEDULER_JOB_FULFILLED;
}

export interface IUpdateSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_SCHEDULER_JOB_REJECTED;
}

/** Execute scheduler job action interfaces */

export interface IExecSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.EXEC_SCHEDULER_JOB;
}

export interface IExecSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.EXEC_SCHEDULER_JOB_FULFILLED;
}

export interface IExecSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.EXEC_SCHEDULER_JOB_REJECTED;
}

/** Get scheduler jobs names action interfaces */

export interface IGetSchedulerNamesByInstIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INST_ID;
}

export interface IGetSchedulerNamesByInstIdFulfilledAction {
  readonly payload: ISchedulerJobsNames;
  readonly type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INST_ID_FULFILLED;
}

export interface IGetSchedulerNamesByInstIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INST_ID_REJECTED;
}

/** Reset scheduler action interfaces */

export interface IResetSchedulerAction {
  readonly type: ActionTypeKeys.RESET_SCHEDULER;
}

export type TSchedulerJobsActionTypes =
  | IFilterSchedulerJobsFulfilledAction
  | IAddSchedulerJobFulfilledAction
  | IDeleteSchedulerJobFulfilledAction
  | IUpdateSchedulerJobFulfilledAction
  | IExecSchedulerJobFulfilledAction
  | IGetSchedulerNamesByInstIdFulfilledAction
  | IResetSchedulerAction;
