import { createSelector } from 'reselect';

import { yesNoConst } from 'consts';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';

export const defaultSysPropsSelector = (state: StoreState) =>
  state.administration.systemProperties.sysProps;

export const sysPropsSelector = createSelector(
  defaultSysPropsSelector,
  data => data && data.map(el => {
    return {
      id: el.property_name,
      currentValue: el.current_value,
      previousValue: el.previous_value,
      lastDatetime: el.last_datetime,
      lockedFlag: el.locked_flag === yesNoConst.YES,
    };
  })
);

export const currentSysPropSelector = createSelector(
  sysPropsSelector,
  activeItemIdSelector,
  (data, currentId) => data.find(el => el.id === currentId)
);

/**
 * System properties loading selectors
 */

export const isSysPropUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_SYS_PROP,
]);

export const isSysPropDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_SYS_PROP,
]);

export const isSysPropAddingSelector = createLoadingSelector([
  ActionTypeKeys.ADD_SYS_PROP,
]);

export const isSysPropsFilteringSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_SYS_PROPS,
]);
