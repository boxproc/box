import { combineReducers } from 'redux-seamless-immutable';

import ledgerCustomersReducer from './customers/reducer';

const ledgerReducer = combineReducers({
  ledgerCustomers: ledgerCustomersReducer,
});

export default ledgerReducer;
