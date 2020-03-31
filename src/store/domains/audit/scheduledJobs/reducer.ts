import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { IScheduledJobsState } from './types';

import { ActionTypeKeys, TScheduledJobsAction } from './actionTypes';

export const scheduledJobsInitialState:
  seamlessImmutable.ImmutableObject<IScheduledJobsState> = Immutable({
    schedulerJobs: Immutable([]),
  });

const scheduledJobsReducer = (state = scheduledJobsInitialState, action: TScheduledJobsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_SCHEDULED_JOBS_FULFILLED:
      return state.set('schedulerJobs', action.payload.scheduler_jobs);

    case ActionTypeKeys.FILTER_SCHEDULED_JOBS_BY_ID_FULFILLED:
      return state.set('schedulerJobs', action.payload.scheduler_jobs);

    case ActionTypeKeys.RESET_SCHEDULED_JOBS:
      return state = scheduledJobsInitialState;

    default:
      return state;
  }
};

export default scheduledJobsReducer;
