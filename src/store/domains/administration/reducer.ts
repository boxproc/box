import { combineReducers } from 'redux-seamless-immutable';

import adminSysPropsReducer from './systemProperties/reducer';

const administrationReducer = combineReducers({
  adminSysProps: adminSysPropsReducer,
});

export default administrationReducer;
