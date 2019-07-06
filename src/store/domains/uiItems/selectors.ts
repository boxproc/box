import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectDefaultUiItems = (state: StoreState) => state.uiItems.uiItems;

export const selectUiItems = createSelector(
  selectDefaultUiItems,
  uiItems => {
    return uiItems && uiItems.asMutable().map(item => {
      return {
        id: item.ui_item,
        parentId: item.ui_item.split('/').slice(0, -1).join('/') || null,
        title: item.ui_item.split('/').slice(-1).join('').split('_').join(' ') || null,
        type: item.item_type,
      };
    });
  }
);

export const selectVisibleUiItems = createSelector(
  selectDefaultUiItems,
  uiItems => uiItems && uiItems.asMutable().map(item => item.ui_item)
);
