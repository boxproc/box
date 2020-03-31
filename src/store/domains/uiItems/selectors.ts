import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from '../loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareUiItems } from './utils';

export const defaultUiItemsSelector = (state: IStoreState) => state.uiItems.uiItems;

export const uiItemsSelector = createSelector(
  defaultUiItemsSelector,
  data => data && prepareUiItems(data)
);

export const isLoadedUiItemsSelector = createSelector(
  uiItemsSelector,
  data => data && data.length
);

export const visibleUiItemsListSelector = createSelector(
  defaultUiItemsSelector,
  data => data && data.map(el => el.ui_item)
);

export const helpLinkSelector = (state: IStoreState) => state.uiItems.helpLink;

export const isUiItemsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_UI_ITEMS,
]);
