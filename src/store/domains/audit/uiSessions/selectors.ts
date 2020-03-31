import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './utils';

export const defaultUiSessionsSelector = (state: IStoreState) => state.audit.uiSessions.uiSessions;

export const uiSessionsSelector = createSelector(
  defaultUiSessionsSelector,
  data => data && data.map(el => prepareDataToRender(el))
);

export const isUiSessionsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_UI_SESSIONS,
]);
