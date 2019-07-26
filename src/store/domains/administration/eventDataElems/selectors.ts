import { createSelector } from 'reselect';

import { dataTypesOptions } from 'consts';

import { StoreState } from 'store/StoreState';

import { selectAdminEventsOptions } from '../events';

export const selectDefaultAdminEventDataElemsItems = (state: StoreState) =>
  state.administration.adminEventDataElems.eventDataElems.asMutable();

export const selectAdminEventDataElemsItems = createSelector(
  selectDefaultAdminEventDataElemsItems,
  items => items && items.map(item => {
    return {
      name: item.name,
      description: item.description,
      eventId: item.event_id,
      dataType: dataTypesOptions.find(el => el.value === item.data_type).label,
    };
  })
);

export const selectDefaultFilterAdminEventDataElemsParams = (state: StoreState) =>
  state.administration.adminEventDataElems.filterEventDataElems;

export const selectFilterAdminEventDataElemsParams = createSelector(
  selectDefaultFilterAdminEventDataElemsParams,
  selectAdminEventsOptions,
  (params, events) => {
    if (!params) {
      return null;
    }

    return {
      eventId: events.find(el => el.value === params.event_id),
    };
  }
);
