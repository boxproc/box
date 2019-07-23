import { createSelector } from 'reselect';

import { dataTypesOptions } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectDefaultAdminEventDataElementsItems = (state: StoreState) =>
  state.administration.adminEventDataElements.eventDataElements.asMutable();

export const selectAdminEventDataElementsItems = createSelector(
  selectDefaultAdminEventDataElementsItems,
  items => items && items.map(item => {
    return {
      ...item,
      eventId: item.event_id,
      dataType: dataTypesOptions.find(el => el.value === item.data_type).label,
    };
  })
);
