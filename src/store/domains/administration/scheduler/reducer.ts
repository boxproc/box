import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, AdminSchedulerJobsActionTypes } from './actionTypes';
import { AdminSchedulerState } from './types';

export const adminSchedulerJobsInitialState:
  seamlessImmutable.ImmutableObject<AdminSchedulerState> = Immutable({
    scheduler: Immutable([]),
    generatedCronExpression: null,
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

      case ActionTypeKeys.SET_GENERATED_CRON_EXPRESSION:
        return state
          .set('generatedCronExpression', action.payload);

      default: return state;
    }
  };

export default adminSchedulerJobsReducer;
