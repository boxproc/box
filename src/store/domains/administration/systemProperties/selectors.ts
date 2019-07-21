import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { camelizeUtil } from 'utils';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.adminSysProps.systemProperties;

export const selectSysPropsFilterParams = (state: StoreState) =>
  state.administration.adminSysProps.systemPropertiesFilterParams;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.asMutable().map(item => {
    return camelizeUtil.camelize(item, 'camelcase');
  })
);
