import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux-seamless-immutable';

import loaderReducer from './domains/loader/reducer';
import userReducer from './domains/user/reducer';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  form: formReducer,

  loader: loaderReducer,
  user: userReducer,
});

export default createRootReducer;
