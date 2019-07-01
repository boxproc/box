import { ImmutableArray } from 'seamless-immutable';

export interface UserLoginData {
  userName?: string;
  passwordHash?: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  sessionId: string;
  resultCode: number;
  message?: string;
  description?: string;
}

export interface UiItem {
  id: number;
  title: string;
  parentId: number;
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
