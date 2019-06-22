export interface UserLoginData {
  userName?: string;
  passwordHash?: string;
}

export interface LoginResponse {
  sessionId: string;
  resultCode: number;
  errorDescription: string;
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
  loginInfo: LoginResponse;
  userInfo: UserInfo;
}
