import { ImmutableArray } from 'seamless-immutable';

export interface UserLoginData {
  userName?: string;
  password?: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  sessionId: string;
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
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  uiItems: Array<UiItem>;
}

export interface UserState {
  isLoggedIn: boolean;
  isRememberedMe: boolean;
  loginInfo: LoginResponse;
  userInfo: {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    uiItems: ImmutableArray<UiItem>;
  };
}
