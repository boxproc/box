import { combineReducers } from 'redux-seamless-immutable';
import auditApiCallsReducer from './apiCalls/reducer';
import auditUserActivityReducer from './userActivity/reducer';

const auditReducer = combineReducers({
  userActivity: auditUserActivityReducer,
  apiCalls: auditApiCallsReducer,
});

export default auditReducer;
