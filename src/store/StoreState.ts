import { RouterState } from 'connected-react-router';
import { Reducer } from 'redux';
import { FormStateMap } from 'redux-form';

import { LoaderState } from './domains/loader';

export interface StoreState {
  form: Reducer<FormStateMap>;
  router: RouterState;
  loader: LoaderState;
}
