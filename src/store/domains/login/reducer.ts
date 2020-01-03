import { combineReducers } from 'redux-seamless-immutable';

import authReducer from './auth/reducer';
import institutionsReducer from './institutions/reducer';

const loginReducer = combineReducers({
  auth: authReducer,
  institutions: institutionsReducer,
});

export default loginReducer;
