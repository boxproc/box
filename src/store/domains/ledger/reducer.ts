import { combineReducers } from 'redux-seamless-immutable';

import accountsReducer from './accounts/reducer';
import cardsReducer from './cards/reducer';
import ledgerCustomersReducer from './customers/reducer';
import ledgerLimitAdjustmentReducer from './limitAdjustment/reducer';
import ledgerManualTransactionReducer from './manualTransaction/reducer';
import ledgerSettleTransactionReducer from './settleTransaction/reducer';
import ledgerStatementsReducer from './statements/reducer';
import ledgerTransactionsReducer from './transactions/reducer';

const ledgerReducer = combineReducers({
  accounts: accountsReducer,
  cards: cardsReducer,
  customers: ledgerCustomersReducer,
  limitAdjustment: ledgerLimitAdjustmentReducer,
  manualTransaction: ledgerManualTransactionReducer,
  settleTransaction: ledgerSettleTransactionReducer,
  statements: ledgerStatementsReducer,
  transactions: ledgerTransactionsReducer,
});

export default ledgerReducer;
