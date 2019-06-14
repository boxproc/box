import { History } from 'history';

import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux-seamless-immutable';

const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
});

export default createRootReducer;
