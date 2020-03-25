import { AdminSchedulerDataResp, AdminSchedulerNameItems } from './types';

import { IResponseStatus, TApiResponse } from 'types';

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

  GET_SCHEDULER_NAMES_BY_INSTITUTION_ID =
  'administration/scheduler/GET_SCHEDULER_NAMES_BY_INSTITUTION_ID',
  GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_FULFILLED =
  'administration/scheduler/GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_FULFILLED',
  GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_REJECTED =
  'administration/scheduler/GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_REJECTED',

  RESET_SCHEDULER = 'administration/scheduler/RESET_SCHEDULER',
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
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface AddAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS;
}

export interface AddAdminSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface AddAdminSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.ADD_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface DeleteAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS;
}

export interface DeleteAdminSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED;
  meta: { id: number };
}

export interface DeleteAdminSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface UpdateAdminSchedulerJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS;
}

export interface UpdateAdminSchedulerJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS_FULFILLED;
}

export interface UpdateAdminSchedulerJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.UPDATE_ADMIN_SCHEDULER_JOBS_REJECTED;
}

export interface SendAdminSchedulerActionJobAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB;
}

export interface SendAdminSchedulerActionJobFulfilledAction {
  readonly payload: IResponseStatus;
  readonly type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB_FULFILLED;
}

export interface SendAdminSchedulerActionJobRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.SEND_ADMIN_SCHEDULER_ACTION_JOB_REJECTED;
}

export interface GetSchedulerNamesByInstitutionIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INSTITUTION_ID;
}

export interface GetSchedulerNamesByInstitutionIdFulfilledAction {
  readonly payload: AdminSchedulerNameItems;
  readonly type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_FULFILLED;
}

export interface GetSchedulerNamesByInstitutionIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_REJECTED;
}

export interface ResetSchedulerAction {
  readonly type: ActionTypeKeys.RESET_SCHEDULER;
}

export type AdminSchedulerJobsActionTypes =
  | FilterAdminSchedulerJobsFulfilledAction
  | AddAdminSchedulerJobFulfilledAction
  | DeleteAdminSchedulerJobFulfilledAction
  | UpdateAdminSchedulerJobFulfilledAction
  | SendAdminSchedulerActionJobFulfilledAction
  | GetSchedulerNamesByInstitutionIdFulfilledAction
  | ResetSchedulerAction;
