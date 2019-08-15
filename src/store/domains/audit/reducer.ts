import { combineReducers } from 'redux-seamless-immutable';
import auditUserActivitiesReducer from './userActivity/reducer';

const auditReducer = combineReducers({
  userActivities: auditUserActivitiesReducer,
});

export default auditReducer;
