import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.user.isLoggedIn;

export const selectIsRememberedMe = (state: StoreState) => state.user.isRememberedMe;

export const selectSessionId = (state: StoreState) => state.user.loginInfo.sessionId;

export const selectDefaultUiItems = (state: StoreState) => state.user.userInfo.uiItems;

export const selectUiItems = createSelector(
    selectDefaultUiItems,
    uiItems => uiItems.asMutable()
  );

export const selectUserName = (state: StoreState) => state.user.userInfo.userName;
