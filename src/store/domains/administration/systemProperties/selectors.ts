import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.adminSysProps.system_properties;

export const selectFilterSystemProperties = (state: StoreState) =>
  state.administration.adminSysProps.filter_system_properties;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.asMutable().map(item => {
    return {
      propertyName: item.property_name,
      currentValue: item.current_value,
      previousValue: item.previous_value,
      lastDatetime: item.last_datetime,
      lockedFlag: item.locked_flag,
    };
  })
);
