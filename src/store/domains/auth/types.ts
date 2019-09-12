export interface AuthPassword {
  password?: string;
}

export interface AuthCode {
  code?: string;
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
  last_activity: string;
  status: string;
  requires_2fa_flag: string;
}

export interface AuthStepTwoResponse {
  two_factor_authentication: {
    secret_key: string;
    data_url: string;
  };
}

export interface AuthStepTwoResponsePrepared {
  code: string;
  dataUrl: string;
}

export interface AuthState {
  sessionId: string;
  firstName: string;
  lastName: string;
  lastActivity: string;
  status: string;
  currentRegisterStep: number;
  code: string;
  dataUrl: string;
  requires2faFlag: string;
  isLogout: boolean;
}
