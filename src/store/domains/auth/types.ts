export interface AuthRequest {
  userName?: string;
  password?: string;
  rememberMe?: boolean;
}

export interface PreparedAuthRequest {
  username: string;
  password_hash: string;
  remember_me?: boolean;
}

export interface AuthResponse {
  session_id: string;
  username: string;
}

export interface AuthState {
  isRememberedMe: boolean;
  username: string;
}
