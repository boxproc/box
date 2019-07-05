import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectDefaultUiItems = (state: StoreState) => state.user.userInfo.ui_items;

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
