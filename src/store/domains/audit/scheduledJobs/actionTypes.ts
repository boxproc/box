import { IScheduledJobsData } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_SCHEDULED_JOBS = 'scheduledJobs/FILTER_SCHEDULED_JOBS',
  FILTER_SCHEDULED_JOBS_FULFILLED = 'scheduledJobs/FILTER_SCHEDULED_JOBS_FULFILLED',
  FILTER_SCHEDULED_JOBS_REJECTED = 'scheduledJobs/FILTER_SCHEDULED_JOBS_REJECTED',

  FILTER_SCHEDULED_JOBS_BY_ID = 'scheduledJobs/FILTER_SCHEDULED_JOBS_BY_ID',
  FILTER_SCHEDULED_JOBS_BY_ID_FULFILLED = 'scheduledJobs/FILTER_SCHEDULED_JOBS_BY_ID_FULFILLED',
  FILTER_SCHEDULED_JOBS_BY_ID_REJECTED = 'scheduledJobs/FILTER_SCHEDULED_JOBS_BY_ID_REJECTED',

  RESET_SCHEDULED_JOBS = 'scheduledJobs/RESET_SCHEDULED_JOBS',
}

export interface IFilterScheduledJobsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_SCHEDULED_JOBS;
}

export interface IFilterScheduledJobsFulfilledAction {
  readonly payload: IScheduledJobsData;
  readonly type: ActionTypeKeys.FILTER_SCHEDULED_JOBS_FULFILLED;
}

export interface IFilterScheduledJobsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_SCHEDULED_JOBS_REJECTED;
}

export interface IFilterScheduledJobsByIdAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_SCHEDULED_JOBS_BY_ID;
}

export interface IFilterScheduledJobsByIdFulfilledAction {
  readonly payload: IScheduledJobsData;
  readonly type: ActionTypeKeys.FILTER_SCHEDULED_JOBS_BY_ID_FULFILLED;
}

export interface IFilterScheduledJobsByIdRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_SCHEDULED_JOBS_BY_ID_REJECTED;
}

export interface IResetScheduledJobsAction {
  readonly type: ActionTypeKeys.RESET_SCHEDULED_JOBS;
}

export type TScheduledJobsAction =
  | IFilterScheduledJobsFulfilledAction
  | IFilterScheduledJobsByIdFulfilledAction
  | IResetScheduledJobsAction;
