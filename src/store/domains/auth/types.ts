export interface AuthPassword {
  password?: string;
}

export interface AuthCode {
  code?: string;
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
  firstName: string;
  lastName: string;
  lastActivity: string;
  status: string;
  currentRegisterStep: number;
  code: string;
  dataUrl: string;
}
