import { ImmutableArray } from 'seamless-immutable';

export interface UserLoginData {
  username?: string;
  password_hash?: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  session_id: string;
  resultCode: number;
  message?: string;
  description?: string;
}

export interface UiItem {
  uiItem: string;
  description: string;
  itemType: string;
  hasChildren: boolean;
}

export interface UiItemPrepared extends UiItem {
  id: string;
  parentId: string;
}

export interface UserInfo {
  userName: string;
  uiItems: Array<UiItem>;
}

export interface UserState {
  isLoggedIn: boolean;
  isRememberedMe: boolean;
  loginInfo: LoginResponse;
  userInfo: {
    userName: string;
    uiItems: ImmutableArray<UiItem>;
  };
}
