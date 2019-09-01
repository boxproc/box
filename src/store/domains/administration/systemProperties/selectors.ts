import { createSelector } from 'reselect';

import { yesNoTypes } from 'consts';

import { StoreState } from 'store/StoreState';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.systemProperties.systemProperties;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.asMutable().map(item => {
    return {
      id: item.property_name,
      currentValue: item.current_value,
      previousValue: item.previous_value,
      lastDatetime: item.last_datetime,
      lockedFlag: item.locked_flag === yesNoTypes.YES ? true : false,
    };
  })
);

export const selectCurrentSysPropId = (state: StoreState) =>
  state.administration.systemProperties.currentSysPropId;

export const selectCurrentAdminSysPropsItem = createSelector(
  selectAdminSysPropsItems,
  selectCurrentSysPropId,
  (items, currentId) => items.find(item => item.id === currentId)
);
