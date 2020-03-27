import Immutable, * as seamlessImmutable from 'seamless-immutable';

import { ActionTypeKeys, TSchedulerJobsActionTypes } from './actionTypes';
import { ISchedulerState } from './types';

export const schedulerInitialState: seamlessImmutable.ImmutableObject<ISchedulerState> = Immutable({
  scheduler: Immutable([]),
  schedulerNames: Immutable([]),
});

const schedulerReducer = (state = schedulerInitialState, action: TSchedulerJobsActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_SCHEDULER_JOBS_FULFILLED:
      return state.set('scheduler', action.payload.s_scheduler);

    case ActionTypeKeys.DELETE_SCHEDULER_JOB_FULFILLED:
      return state.set('scheduler', state.scheduler.filter(el => el.id !== action.meta.id));

    case ActionTypeKeys.GET_SCHEDULER_NAMES_BY_INST_ID_FULFILLED:
      return state.set('schedulerNames', action.payload.scheduler_names);

    case ActionTypeKeys.RESET_SCHEDULER:
      return state = schedulerInitialState;

    default: return state;
  }
};

export default schedulerReducer;
