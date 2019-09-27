import { AuditScheduledJobsItems } from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_AUDIT_SCHEDULED_JOBS = 'audit/scheduledJobs/FILTER_AUDIT_SCHEDULED_JOBS',
  FILTER_AUDIT_SCHEDULED_JOBS_FULFILLED =
  'audit/scheduledJobs/FILTER_AUDIT_SCHEDULED_JOBS_FULFILLED',
  FILTER_AUDIT_SCHEDULED_JOBS_REJECTED = 'audit/scheduledJobs/FILTER_AUDIT_SCHEDULED_JOBS_REJECTED',
}

export interface FilterScheduledJobsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS;
}

export interface FilterScheduledJobsFulfilledAction {
  readonly payload: AuditScheduledJobsItems;
  readonly type: ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS_FULFILLED;
}

export interface FilterScheduledJobsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS_REJECTED;
}

export type AuditScheduledJobsActionTypes =
  | FilterScheduledJobsFulfilledAction;
