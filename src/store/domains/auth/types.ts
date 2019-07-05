export interface AuthRequest {
  username?: string;
  password_hash?: string;
  rememberMe?: boolean;
}

export interface AuthResponse {
  session_id: string;
  result_code: number;
  message?: string;
  description?: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isRememberedMe: boolean;
  authInfo: AuthResponse;
}
