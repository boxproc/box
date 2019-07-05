import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.auth.isLoggedIn;

export const selectIsRememberedMe = (state: StoreState) => state.auth.isRememberedMe;

export const selectSessionId = (state: StoreState) => state.auth.authInfo.session_id;

// export const selectUserName = (state: StoreState) => state.auth.userAuthInfo.username;
