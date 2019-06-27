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

export interface UserInfo {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  isLoggedIn: boolean;
  isRememberedMe: boolean;
  loginInfo: LoginResponse;
  userInfo: UserInfo;
}
