export interface AuthPassword {
  password?: string;
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
  username: string;
  first_name: string;
  last_name: string;
  last_activity: string;
  status: string;
}

export interface AuthStepTwoResponse {
  code: string;
  data_url: string;
}

export interface AuthStepTwoResponsePrepared {
  code: string;
  dataUrl: string;
}

export interface AuthState {
  sessionId: string;
  username: string;
  isRememberedMe: boolean;
  firstName: string;
  lastName: string;
  lastActivity: string;
  status: string;
  currentRegisterStep: number;
  code: string;
  dataUrl: string;
}
