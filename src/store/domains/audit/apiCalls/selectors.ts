import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { prepareValuesToRender } from './utils';

export const selectDefaultAuditApiCalls = (state: StoreState) =>
  state.audit.apiCalls.apiCalls;

export const selectAuditApiCalls = createSelector(
  selectDefaultAuditApiCalls,
  items => items && items.asMutable().map(item => {
    return {
      ...prepareValuesToRender(item),
    };
  })
);

export const selectDefaultApiCallEndpointsOptions = (state: StoreState) =>
  state.audit.apiCalls.endpoints;

export const selectApiCallEndpointsOptions = createSelector(
  selectDefaultApiCallEndpointsOptions,
  items => items && items.asMutable().map(item => {
    return {
      value: item.id,
      label: item.name,
    };
  })
);
