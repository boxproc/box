import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminSchedulerJobsActionTypes } from './actionTypes';
import { AdminSchedulerState } from './types';

export const adminSchedulerJobsInitialState:
  seamlessImmutable.ImmutableObject<AdminSchedulerState> = Immutable({
    scheduler: Immutable([]),
    schedulerNames: Immutable([]),
  });

const adminSchedulerJobsReducer =
  (state = adminSchedulerJobsInitialState, action: AdminSchedulerJobsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_ADMIN_SCHEDULER_JOBS_FULFILLED:
        return state.set('scheduler', action.payload.s_scheduler);

      case ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INSTITUTION_ID_FULFILLED:
        return state.set('schedulerNames', action.payload.scheduler_names);

      case ActionTypeKeys.RESET_SCHEDULER:
        return state = adminSchedulerJobsInitialState;

      default: return state;
    }
  };

export default adminSchedulerJobsReducer;
