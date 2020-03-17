import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Transactions from './Transactions';

import {
  createLoadingSelector,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerCustomers,
  handleFilterByIdLedgerStatements,
  handleFilterLedgerTransactions,
  LedgerTransactionsActionTypes,
  resetTransactions,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectIsTransactionConvertibleToLoan,
  selectLedgerTransactions,
  selectUiItems,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  transactions: selectLedgerTransactions(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentId: selectActiveItemId(state),
  isConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
  uiItems: selectUiItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterTransactions: handleFilterLedgerTransactions,
    filterCardsById: handleFilterByIdLedgerCards,
    filterStatementsById: handleFilterByIdLedgerStatements,
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
