import { createSelector } from 'reselect';

import { yesNoTypesConst } from 'consts';

import { selectActiveItemId } from 'store/domains/utils';
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
      lockedFlag: item.locked_flag === yesNoTypesConst.YES,
    };
  })
);

export const selectCurrentAdminSysPropsItem = createSelector(
  selectAdminSysPropsItems,
  selectActiveItemId,
  (items, currentId) => items.find(item => item.id === currentId)
);
