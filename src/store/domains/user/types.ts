import { ImmutableArray } from 'seamless-immutable';

export interface UserLoginData {
  userName?: string;
  passwordHash?: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  sessionId: string;
  resultCode: number;
  errorDescription: string;
}

export interface MenuItem {
  id: number;
  title: string;
  parentId: number;
  childCount: number;
}

export interface UserInfo {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  uiItems: Array<MenuItem>;
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
    uiItems: ImmutableArray<MenuItem>;
  };
}
