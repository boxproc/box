import { combineReducers } from 'redux-seamless-immutable';

import ledgerAccountsReducer from './accounts/reducer';
import ledgerCustomersReducer from './customers/reducer';

const ledgerReducer = combineReducers({
  ledgerCustomers: ledgerCustomersReducer,
  ledgerAccounts: ledgerAccountsReducer,
});

export default ledgerReducer;
