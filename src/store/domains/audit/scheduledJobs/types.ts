import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType, SelectValues } from 'types';

interface AuditScheduledJobsId {
  id: number;
}

export interface AuditScheduledJobsItem extends AuditScheduledJobsId {
  scheduler_id: number;
  start_datetime: string;
  finish_datetime: string;
  execution_result: string;
  error_description: string;
}

export interface AuditScheduledJobsItemPrepared extends AuditScheduledJobsId {
  schedulerId: number;
  startDatetime: string;
  finishDatetime: string;
  executionResult: string;
  errorDescription: string;
}

export interface AuditScheduledJobsFilter {
  institutionId: SelectValues;
  scheduler: SelectValues;
  startDatetime: string;
  finishDatetime: string;
}

export interface AuditScheduledJobsFilterPrepared {
  institution_id: string | number;
  scheduler_id: string | number;
  start_datetime: string;
  finish_datetime: string;
}

export interface AuditScheduledJobsItems extends ResponseStatusType {
  scheduler_jobs: Array<AuditScheduledJobsItem>;
}

export interface AuditScheduledJobsState {
  schedulerJobs: ImmutableArray<AuditScheduledJobsItem>;
}
