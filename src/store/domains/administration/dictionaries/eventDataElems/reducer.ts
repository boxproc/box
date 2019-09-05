import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminEventDataElemsActionTypes } from './actionTypes';
import { AdminEventDataElemsState } from './types';

export const adminEventsInitialState: ImmutableObject<AdminEventDataElemsState> = Immutable({
  eventDataElems: Immutable([]),
});

const adminEventDataElemsReducer =
  (state = adminEventsInitialState, action: AdminEventDataElemsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED:
        return state
          .set('eventDataElems', action.payload.event_data_elements);

      default: return state;
    }
  };

export default adminEventDataElemsReducer;
