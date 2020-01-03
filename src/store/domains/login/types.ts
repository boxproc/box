import { AuthState } from './auth';
import { InstitutionsState } from './institutions';

export interface LoginState {
  auth: AuthState;
  institutions: InstitutionsState;
}
