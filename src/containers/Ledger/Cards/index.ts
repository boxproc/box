import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterByIdStatements,
  handleFilterLedgerCards,
  LedgerCardsActionTypes,
  resetCards,
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
  currentId: activeItemIdSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCards: handleFilterLedgerCards,
    filterAccountsById: handleFilterByIdLedgerAccounts,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterStatementsById: handleFilterByIdStatements,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    resetCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);
