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

export const selectAuditApiCallCurrentId = (state: StoreState) =>
  state.audit.apiCalls.currentStatementId;

export const selectAuditApiCallStatement = createSelector(
  selectAuditApiCalls,
  selectAuditApiCallCurrentId,
  (apiCall, currentId) => {
    const current = apiCall.find(el => el.id === currentId);

    return current;
  }
);
