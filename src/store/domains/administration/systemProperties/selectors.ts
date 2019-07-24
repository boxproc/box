import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.adminSysProps.systemProperties;

export const selectDefaultSysPropsFilterParams = (state: StoreState) =>
  state.administration.adminSysProps.systemPropertiesFilterParams;

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

export const selectSysPropsFilterParams = createSelector(
  selectDefaultSysPropsFilterParams,
  params => {
    if (!params) {
      return null;
    }

    return {
      propertyName: params.property_name,
    };
  }
);
