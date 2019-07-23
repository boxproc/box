import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminEventDataElemsActionTypes } from './actionTypes';
import { AdminEventDataElemsState } from './types';

export const adminEventsInitialState: ImmutableObject<AdminEventDataElemsState> = Immutable({
  eventDataElems: Immutable([]),
  filterEventDataElems: null,
});

const adminEventDataElemsReducer =
  (state = adminEventsInitialState, action: AdminEventDataElemsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMS_FULFILLED:
        return state
          .set('eventDataElems', action.payload.event_data_elements);

      case ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS_FULFILLED:
        return state
          .set('eventDataElems', action.payload.event_data_elements)
          .set('filterEventDataElems', action.meta);

      default: return state;
    }
  };

export default adminEventDataElemsReducer;
