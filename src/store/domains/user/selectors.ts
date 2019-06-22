import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.user.isLoggedIn;

export const selectSessionId = (state: StoreState) => state.user.loginInfo.sessionId;

export const selectUsername = (state: StoreState) => state.user.userInfo.userName;
