import { combineReducers } from 'redux-seamless-immutable';
import auditApiCallsReducer from './apiCalls/reducer';
import auditUserActivitiesReducer from './userActivity/reducer';

const auditReducer = combineReducers({
  userActivities: auditUserActivitiesReducer,
  apiCalls: auditApiCallsReducer,
});

export default auditReducer;
