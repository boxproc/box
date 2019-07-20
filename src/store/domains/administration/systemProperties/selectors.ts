import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultAdminSysPropsItems = (state: StoreState) =>
  state.administration.adminSysProps.systemProperties;

export const selectDefaultSysPropsFilterParams = (state: StoreState) =>
  state.administration.adminSysProps.systemPropertiesFilterParams;

export const selectAdminSysPropsItems = createSelector(
  selectDefaultAdminSysPropsItems,
  items => items && items.asMutable().map(item => {
    return camelizeFieldsUtil.camelizeFields(item, 'camelcase');
  })
);

export const selectSysPropsFilterParams = createSelector(
  selectDefaultSysPropsFilterParams,
  params => params && camelizeFieldsUtil.camelizeFields(params, 'camelcase')
);
