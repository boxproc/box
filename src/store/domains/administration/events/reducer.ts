import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminEventsActionTypes } from './actionTypes';
import { AdminEventsState } from './types';

export const adminEventsInitialState: ImmutableObject<AdminEventsState> = Immutable({
  events: Immutable([]),
});

const adminEventsReducer =
  (state = adminEventsInitialState, action: AdminEventsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_EVENTS_FULFILLED:
        return state
          .set('events', action.payload.events);

      default: return state;
    }
  };

export default adminEventsReducer;
