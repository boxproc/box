export interface AuthRequest {
  userName?: string;
  password?: string;
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
}

export interface AuthState {
  sessionId: string;
  username: string;
  isRememberedMe: boolean;
  firstName: string;
  lastName: string;
  lastActivity: string;
}
