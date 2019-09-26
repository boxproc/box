import { createSelector } from 'reselect';

import { dataTypesOptions } from 'consts';

import { selectDictionaryEventsItems } from '../events';

import { StoreState } from 'store/StoreState';

export const selectDefaultDictionaryEventDataElemsItems = (state: StoreState) =>
  state.administration.eventDataElements.eventDataElems;

export const selectDictionaryEventDataElemsItems = createSelector(
  selectDefaultDictionaryEventDataElemsItems,
  selectDictionaryEventsItems,
  (dataElems, events) => dataElems && dataElems.asMutable().map(item => {
    const itemEvent = events.find(event => event.id === item.event_id);

    return {
      name: item.name,
      description: item.description,
      eventId: item.event_id,
      dataType: dataTypesOptions.find(el => el.value === item.data_type).label,
      event: itemEvent && itemEvent.name,
    };
  })
);
