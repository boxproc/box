import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.adminSysProps.system_properties;

export const selectFilterSystemProperties = (state: StoreState) =>
  state.administration.adminSysProps.filter_system_properties;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.asMutable().map(item => {
    return camelizeFieldsUtil.camelizeFields(item, 'camelcase');
  })
);
