import { combineReducers } from 'redux-seamless-immutable';

import accountsReducer from './accounts/reducer';
import cardsReducer from './cards/reducer';
import customersReducer from './customers/reducer';
import limitAdjustmentReducer from './limitAdjustment/reducer';
import manualTransactionReducer from './manualTransaction/reducer';
import settleTransactionReducer from './settleTransaction/reducer';
import ledgerStatementsReducer from './statements/reducer';
import transactionsReducer from './transactions/reducer';

const ledgerReducer = combineReducers({
  accounts: accountsReducer,
  cards: cardsReducer,
  customers: customersReducer,
  limitAdjustment: limitAdjustmentReducer,
  manualTransaction: manualTransactionReducer,
  settleTransaction: settleTransactionReducer,
  statements: ledgerStatementsReducer,
  transactions: transactionsReducer,
});

export default ledgerReducer;
