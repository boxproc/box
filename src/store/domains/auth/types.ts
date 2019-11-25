import { SelectValues } from 'types';

export interface AuthPassword {
  password?: string;
}

export interface AuthCode {
  code?: string;
}

export interface AuthUsername {
  username?: SelectValues;
}

export interface AuthUserId {
  user_id: number | string;
}

export interface AuthConfirm {
  confirm: string;
}

export interface AuthRequest extends AuthPassword {
  userName?: string;
  rememberMe?: boolean;
}

export interface PreparedAuthRequest {
  username: string;
  password: string;
  remember_me: boolean;
}

export interface AuthResponse {
  session_id: string;
  first_name: string;
  last_name: string;
  username: string;
  last_activity: string;
  status: string;
  requires_2fa_flag: string;
}

export interface UserData {
  sessionId: string;
  firstName: string;
  lastName: string;
  username: string;
  lastActivity: string;
  status: string;
  requires2faFlag: string;
}

export interface AuthStepTwoData {
  secret_key: string;
  data_url: string;
}

export interface AuthStepTwoResponse {
  two_factor_authentication: AuthStepTwoData;
}

export interface AuthStepTwoResponsePrepared {
  code: string;
  dataUrl: string;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
  code: string;
}

export interface ChangePasswordDataPrepared {
  current_password: string;
  new_password: string;
  code: string;
}

export interface AuthState {
  loginData: AuthResponse;
  data2fa: AuthStepTwoData;
  currentRegisterStep: number;
}
