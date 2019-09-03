import { createSelector } from 'reselect';

import { dataTypesOptions } from 'consts';

import { StoreState } from 'store/StoreState';
import { selectAdminEventsItems } from '../events';

export const selectDefaultAdminEventDataElemsItems = (state: StoreState) =>
  state.administration.eventDataElements.eventDataElems;

export const selectAdminEventDataElemsItems = createSelector(
  selectDefaultAdminEventDataElemsItems,
  selectAdminEventsItems,
  (dataElems, events) => dataElems && dataElems.asMutable().map(item => {
    return {
      name: item.name,
      description: item.description,
      eventId: item.event_id,
      dataType: dataTypesOptions.find(el => el.value === item.data_type).label,
      event: events.find(event => event.id === item.event_id)
        && events.find(event => event.id === item.event_id).name,
    };
  })
);
