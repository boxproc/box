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
  LedgerAccountsActionTypes,
  LedgerCardsActionTypes,
  LedgerCustomersActionTypes,
  LedgerStatementsActionTypes,
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
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS_BY_ID,
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS_BY_ID,
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS_BY_ID,
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  ledgerTransactions: selectLedgerTransactions(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentId: selectActiveItemId(state),
  isTransactionConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
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
