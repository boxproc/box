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
  selectInstitutionsOptions,
  selectLedgerCards,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  cards: selectLedgerCards(state),
  currentId: selectActiveItemId(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCards: handleFilterLedgerCards,
    filterAccountsById: handleFilterByIdLedgerAccounts,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterStatementsById: handleFilterByIdLedgerStatements,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    resetCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
