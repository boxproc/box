export interface UserLoginData {
  userName?: string;
  password?: string;
  userAgent?: string;
}

export interface UserInfo {
  sessionId: number;
  resultCode: number;
  errorDescription: string;
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface UserState {
  isLoggedIn: boolean;
  userInfo: UserInfo;
}
