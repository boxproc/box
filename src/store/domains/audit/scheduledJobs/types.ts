import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

export interface IScheduledJobData {
  id: number;
  scheduler_name: string;
  scheduler_id: number;
  start_datetime: string;
  finish_datetime: string;
  execution_result: string;
  error_description: string;
}

export interface IScheduledJobsData {
  scheduler_jobs: Array<IScheduledJobData>;
}

export interface IScheduledJob {
  id: number;
  scheduler: string;
  dateTimeFrom: string;
  dateTimeTo: string;
  executionResult: string;
  errorDescription: string;
}

export interface ISchedulerId {
  scheduler_id: number;
}

/**
 * Scheduled jobs filter interfaces
 */

export interface IScheduledJobsFilter {
  institutionId: ISelectValue;
  scheduler: ISelectValue;
  scheduledJobsDateTimeFrom: string;
  scheduledJobsDateTimeTo: string;
}

export interface IScheduledJobsFilterToSend {
  institution_id: string | number;
  scheduler_id: string | number;
  start_datetime: string;
  finish_datetime: string;
}

/** Scheduled jobs state */
export interface IScheduledJobsState {
  schedulerJobs: ImmutableArray<IScheduledJobData>;
}
