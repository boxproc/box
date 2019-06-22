import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.user.isLoggedIn;

export const selectIsRememberedMe = (state: StoreState) => state.user.isRememberedMe;

export const selectSessionId = (state: StoreState) => state.user.loginInfo.sessionId;

export const selectUserName = (state: StoreState) => state.user.userInfo.userName;
