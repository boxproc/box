import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { preparedDataToRender } from './utils';

export const selectDefaultAuditUiSessions = (state: StoreState) =>
  state.audit.uiSessions.uiSessions;

export const selectAuditUiSessions = createSelector(
  selectDefaultAuditUiSessions,
  items => items && items.asMutable().map(item => preparedDataToRender(item))
);
