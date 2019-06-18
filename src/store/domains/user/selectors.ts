import { StoreState } from 'store/StoreState';

export const selectIsLoggedIn = (state: StoreState) => state.user.isLoggedIn;

export const selectUserInfo = (state: StoreState) => state.user.userInfo;

export const selectUsername = (state: StoreState) => state.user.userInfo.userName;
