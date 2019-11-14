import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { AuditScheduledJobsState } from './types';

import { ActionTypeKeys, AuditScheduledJobsActionTypes } from './actionTypes';

export const auditScheduledJobsInitialState:
  seamlessImmutable.ImmutableObject<AuditScheduledJobsState> = Immutable({
    schedulerJobs: Immutable([]),
  });

const auditScheduledJobsReducer =
  (state = auditScheduledJobsInitialState, action: AuditScheduledJobsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS_FULFILLED:
        return state
          .set('schedulerJobs', action.payload.scheduler_jobs);

      case ActionTypeKeys.FILTER_AUDIT_SCHEDULED_JOBS_BY_ID_FULFILLED:
        return state
          .set('schedulerJobs', action.payload.scheduler_jobs);

      case ActionTypeKeys.RESET_SCHEDULED_JOBS:
        return state = auditScheduledJobsInitialState;

      default:
        return state;
    }
  };

export default auditScheduledJobsReducer;
