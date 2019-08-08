import { combineReducers } from 'redux-seamless-immutable';

import ledgerAccountsReducer from './accounts/reducer';
import ledgerCustomersReducer from './customers/reducer';
import ledgerTransactionsReducer from './transactions/reducer';

const ledgerReducer = combineReducers({
  ledgerCustomers: ledgerCustomersReducer,
  ledgerAccounts: ledgerAccountsReducer,
  ledgerTransactions: ledgerTransactionsReducer,
});

export default ledgerReducer;
