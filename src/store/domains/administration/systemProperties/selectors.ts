import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.adminSysProps.systemProperties;

export const selectFilterSystemProperties = (state: StoreState) =>
  state.administration.adminSysProps.filterSystemProperties;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.asMutable().map(item => {
    return camelizeFieldsUtil.camelizeFields(item, 'camelcase');
  })
);
