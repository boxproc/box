import { createSelector } from 'reselect';

import { yesNoConst } from 'consts';

import { StoreState } from 'store';
import { selectActiveItemId } from 'store/domains/utils';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.systemProperties.systemProperties;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.map(item => {
    return {
      id: item.property_name,
      currentValue: item.current_value,
      previousValue: item.previous_value,
      lastDatetime: item.last_datetime,
      lockedFlag: item.locked_flag === yesNoConst.YES,
    };
  })
);

export const selectCurrentAdminSysPropsItem = createSelector(
  selectAdminSysPropsItems,
  selectActiveItemId,
  (items, currentId) => items.find(item => item.id === currentId)
);
