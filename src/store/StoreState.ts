import { RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { FormStateMap } from 'redux-form';

import { AuthState } from './domains/auth';
import { LoaderState } from './domains/loader';
import { ModalsState } from './domains/modals';
import { UserState } from './domains/user';

export interface StoreState {
  form: Reducer<FormStateMap>;
  router: RouterState;
  loader: LoaderState;
  user: UserState;
  modals: ModalsState;
  auth: AuthState;
}
