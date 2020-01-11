import { combineReducers } from 'redux-seamless-immutable';

import ledgerAccountsReducer from './accounts/reducer';
import ledgerCardsReducer from './cards/reducer';
import ledgerCustomersReducer from './customers/reducer';
import ledgerLimitAdjustmentReducer from './limitAdjustment/reducer';
import ledgerManualTransactionReducer from './manualTransaction/reducer';
import ledgerSettleTransactionReducer from './settleTransaction/reducer';
import ledgerStatementsReducer from './statements/reducer';
import ledgerTransactionsReducer from './transactions/reducer';

const ledgerReducer = combineReducers({
  customers: ledgerCustomersReducer,
  accounts: ledgerAccountsReducer,
  statements: ledgerStatementsReducer,
  transactions: ledgerTransactionsReducer,
  cards: ledgerCardsReducer,
  manualTransaction: ledgerManualTransactionReducer,
  limitAdjustment: ledgerLimitAdjustmentReducer,
  settleTransaction: ledgerSettleTransactionReducer,
});

export default ledgerReducer;
