import { combineReducers } from 'redux-seamless-immutable';

import authReducer from './auth/reducer';
import userInstitutionsReducer from './institutions/reducer';

const loginReducer = combineReducers({
  auth: authReducer,
  institutions: userInstitutionsReducer,
});

export default loginReducer;
