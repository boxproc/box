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
