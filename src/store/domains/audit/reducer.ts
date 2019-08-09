import { combineReducers } from 'redux-seamless-immutable';
import auditUserActivitiesReducer from './userActivity/reducer';

const auditReducer = combineReducers({
    auditUserActivities: auditUserActivitiesReducer,
});

export default auditReducer;
