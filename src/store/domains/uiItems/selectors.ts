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
  uiItems => uiItems && uiItems.asMutable().map(item => item.ui_item)
);
