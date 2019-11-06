import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  createLoadingSelector,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerStatements,
  handleFilterByIdLedgerTransactions,
  handleFilterLedgerCards,
  LedgerAccountsActionTypes,
  LedgerCardsActionTypes,
  LedgerCustomersActionTypes,
  LedgerStatementsActionTypes,
  LedgerTransactionsActionTypes,
  resetCards,
  selectActiveItemId,
  selectLedgerCards,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS,
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS_BY_ID,
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS_BY_ID,
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS_BY_ID,
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerCards: selectLedgerCards(state),
  currentId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerCards: handleFilterLedgerCards,
    filterLedgerAccountsById: handleFilterByIdLedgerAccounts,
    filterLedgerCustomersById: handleFilterByIdLedgerCustomers,
    filterLedgerStatementsById: handleFilterByIdLedgerStatements,
    filterLedgerTransactionsById: handleFilterByIdLedgerTransactions,
    resetCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
