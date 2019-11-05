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
    const dataType = dataTypesOptions.find(el => el.value === item.data_type);

    return {
      name: item.name,
      description: item.description,
      eventId: item.event_id,
      dataType: dataType && dataType.label,
      event: itemEvent && itemEvent.name,
    };
  })
);

export const selectEventDataElemsForRules = createSelector(
  selectDefaultDictionaryEventDataElemsItems,
  (dataElems) => dataElems && dataElems.asMutable().map(item => {
    const dataType = dataTypesOptions.find(el => el.value === item.data_type);

    return {
      name: item.name,
      description: `${dataType && dataType.label} - ${item.description}`,
    };
  })
);
