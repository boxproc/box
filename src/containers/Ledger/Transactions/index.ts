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
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerTransactions: selectLedgerTransactions(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentId: selectActiveItemId(state),
  isConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerTransactions: handleFilterLedgerTransactions,
    filterLedgerCardsById: handleFilterByIdLedgerCards,
    filterLedgerStatementsById: handleFilterByIdLedgerStatements,
    filterLedgerCustomersById: handleFilterByIdLedgerCustomers,
    filterLedgerAccountsById: handleFilterByIdLedgerAccounts,
    resetTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transactions);
