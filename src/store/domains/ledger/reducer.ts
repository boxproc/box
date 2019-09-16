import { combineReducers } from 'redux-seamless-immutable';

import ledgerAccountsReducer from './accounts/reducer';
import ledgerCardsReducer from './cards/reducer';
import ledgerCustomersReducer from './customers/reducer';
import ledgerStatementsReducer from './statements/reducer';
import ledgerTransactionsReducer from './transactions/reducer';

const ledgerReducer = combineReducers({
  customers: ledgerCustomersReducer,
  accounts: ledgerAccountsReducer,
  statements: ledgerStatementsReducer,
  transactions: ledgerTransactionsReducer,
  cards: ledgerCardsReducer,
});

export default ledgerReducer;
