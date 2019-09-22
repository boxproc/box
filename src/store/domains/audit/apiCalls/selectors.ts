import { createSelector } from 'reselect';

import { selectActiveItemId } from 'store/domains/utils';
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

export const selectAuditApiCallStatement = createSelector(
  selectAuditApiCalls,
  selectActiveItemId,
  (apiCall, currentId) => {
    const current = apiCall.find(el => el.id === currentId);

    return current;
  }
);
