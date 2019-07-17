import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypeKeys, AdminSchedulerJobsActionTypes } from './actionTypes';
import { AdminSchedulerState } from './types';

export const adminSchedulerJobsInitialState: ImmutableObject<AdminSchedulerState> = Immutable({
  s_scheduler: Immutable([]),
});

const adminSchedulerJobsReducer =
  (state = adminSchedulerJobsInitialState, action: AdminSchedulerJobsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SCHEDULER_JOBS_FULFILLED:
        return state
          .set('s_scheduler', action.payload.s_scheduler);

      case ActionTypeKeys.DELETE_ADMIN_SCHEDULER_JOBS_FULFILLED:
        return state
          .set(
            's_scheduler',
            state.s_scheduler.filter(el => el.id !== action.payload.job_id)
          );
      default: return state;
    }
  };

export default adminSchedulerJobsReducer;
