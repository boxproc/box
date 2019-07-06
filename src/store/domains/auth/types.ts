export interface AuthRequest {
  userName?: string;
  password?: string;
  rememberMe?: boolean;
}

export interface PreparedAuthRequest {
  username: string;
  password_hash: string;
}

export interface AuthResponse {
  session_id: string;
  result_code: number;
  result_message?: string;
  result_description?: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isRememberedMe: boolean;
  sessionId: string;
}
