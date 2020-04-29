import { combineReducers } from 'redux-seamless-immutable';

import accountsReducer from './accounts/reducer';
import cardsReducer from './cards/reducer';
import currencyRatesReducer from './currencyRates/reducer';
import customersReducer from './customers/reducer';
import statementsReducer from './statements/reducer';
import transactionsReducer from './transactions/reducer';

const ledgerReducer = combineReducers({
  accounts: accountsReducer,
  cards: cardsReducer,
  customers: customersReducer,
  statements: statementsReducer,
  transactions: transactionsReducer,
  currencyRates: currencyRatesReducer,
});

export default ledgerReducer;
