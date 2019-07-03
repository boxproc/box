import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.user.isLoggedIn;

export const selectIsRememberedMe = (state: StoreState) => state.user.isRememberedMe;

export const selectSessionId = (state: StoreState) => state.user.loginInfo.session_id;

export const selectDefaultUiItems = (state: StoreState) => state.user.userInfo.uiItems;

export const selectUiItems = createSelector(
  selectDefaultUiItems,
  uiItems => {
    return uiItems && uiItems.asMutable().map(item => {
      return {
        ...item,
        id: item.uiItem,
        parentId: item.uiItem.split('/').slice(0, -1).join('/') || null,
      };
    });
  }
);

export const selectUserName = (state: StoreState) => state.user.userInfo.userName;
