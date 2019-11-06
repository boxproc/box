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
  LedgerCardsActionTypes,
  resetCards,
  selectActiveItemId,
  selectLedgerCards,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS,
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
