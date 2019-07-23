import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminEventDataElementsActionTypes } from './actionTypes';
import { AdminEventDataElementsState } from './types';

export const adminEventsInitialState: ImmutableObject<AdminEventDataElementsState> = Immutable({
  eventDataElements: Immutable([]),
});

const adminEventDataElementsReducer =
  (state = adminEventsInitialState, action: AdminEventDataElementsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMENTS_FULFILLED:
        return state
          .set('eventDataElements', action.payload.event_data_elements);

      default: return state;
    }
  };

export default adminEventDataElementsReducer;
