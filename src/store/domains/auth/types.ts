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
  username: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  isRememberedMe: boolean;
  sessionId: string;
  username: string;
}
