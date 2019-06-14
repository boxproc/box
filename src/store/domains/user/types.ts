export interface UserInfo {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  status: number;
}

export interface UserState {
  userInfo: UserInfo;
}
