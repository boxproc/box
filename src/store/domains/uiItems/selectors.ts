import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { prepareUiItems } from './utils';

export const selectDefaultUiItems = (state: StoreState) => state.uiItems.uiItems;

export const selectUiItems = createSelector(
  selectDefaultUiItems,
  uiItems => uiItems && prepareUiItems(uiItems)
);

export const selectIsUiItems = createSelector(
  selectUiItems,
  uiItems => uiItems && uiItems.length
);

export const selectVisibleUiItemsList = createSelector(
  selectDefaultUiItems,
  uiItems => uiItems && uiItems.map(item => item.ui_item)
);

export const selectHelpLink = (state: StoreState) => state.uiItems.helpLink;
