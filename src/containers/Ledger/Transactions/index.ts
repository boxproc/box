import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Transactions from './Transactions';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdStatements,
  handleFilterLedgerTransactions,
  LedgerTransactionsActionTypes,
  resetTransactions,
  selectIsTransactionConvertibleToLoan,
  selectLedgerTransactions,
  selectUiItems,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  transactions: selectLedgerTransactions(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  currentId: activeItemIdSelector(state),
  isConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
  uiItems: selectUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterTransactions: handleFilterLedgerTransactions,
    filterCardsById: handleFilterByIdLedgerCards,
    filterStatementsById: handleFilterByIdStatements,
    filterCustomersById: handleFilterByIdLedgerCustomers,
    filterAccountsById: handleFilterByIdLedgerAccounts,
    resetTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
