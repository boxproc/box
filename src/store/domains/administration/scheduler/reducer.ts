import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypeKeys, AdminSchedulerJobsActionTypes } from './actionTypes';
import { AdminSchedulerState } from './types';

export const adminSchedulerJobsInitialState: ImmutableObject<AdminSchedulerState> = Immutable({
  scheduler: Immutable([]),
});

const adminSchedulerJobsReducer =
  (state = adminSchedulerJobsInitialState, action: AdminSchedulerJobsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS_FULFILLED:
        return state
          .set('scheduler', action.payload.s_scheduler);
      default: return state;
    }
  };

export default adminSchedulerJobsReducer;
