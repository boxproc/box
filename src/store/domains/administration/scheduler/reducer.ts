import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminSchedulerJobsActionTypes } from './actionTypes';
import { AdminSchedulerState } from './types';

export const adminSchedulerJobsInitialState:
  seamlessImmutable.ImmutableObject<AdminSchedulerState> = Immutable({
    scheduler: Immutable([]),
    currentSchedulerId: null,
  });

const adminSchedulerJobsReducer =
  (state = adminSchedulerJobsInitialState, action: AdminSchedulerJobsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS_FULFILLED:
        return state
          .set('scheduler', action.payload.s_scheduler);

      case ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED:
        return state
          .set(
            'scheduler',
            state.scheduler.filter(el => el.id !== action.meta.id)
          );

      case ActionTypeKeys.SET_ADMIN_SCHEDULER_JOBS_ID:
        return state
          .set('currentSchedulerId', action.payload);

      default: return state;
    }
  };

export default adminSchedulerJobsReducer;
