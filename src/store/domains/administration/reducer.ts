import { combineReducers } from 'redux-seamless-immutable';

import adminSysPropsReducer from './systemProperties/reducer';

import adminSchedulerJobsReducer from './scheduler/reducer';

const administrationReducer = combineReducers({
  adminSysProps: adminSysPropsReducer,
  adminSchedulerJobs: adminSchedulerJobsReducer,

});

export default administrationReducer;
