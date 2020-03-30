import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Cards from './Cards';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleFilterByIdAccounts,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerTransactions,
  handleFilterByIdStatements,
  handleFilterLedgerCards,
  LedgerCardsActionTypes,
  resetCards,
  selectLedgerCards,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  cards: selectLedgerCards(state),
  currentId: activeItemIdSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCards: handleFilterLedgerCards,
    filterAccountsById: handleFilterByIdAccounts,
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
