import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  createLoadingSelector,
  handleDeleteLedgerCustomer,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerStatements,
  handleFilterByIdLedgerTransactions,
  handleFilterLedgerCustomers,
  LedgerAccountsActionTypes,
  LedgerCardsActionTypes,
  LedgerCustomersActionTypes,
  LedgerStatementsActionTypes,
  LedgerTransactionsActionTypes,
  resetCustomers,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerCurrentCustomerName,
  selectLedgerCustomers,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS,
  LedgerAccountsActionTypes.FILTER_LEDGER_ACCOUNTS_BY_ID,
  LedgerCardsActionTypes.FILTER_LEDGER_CARDS_BY_ID,
  LedgerTransactionsActionTypes.FILTER_LEDGER_TRANSACTIONS_BY_ID,
  LedgerStatementsActionTypes.FILTER_LEDGER_STATEMENTS_BY_ID,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  ledgerCustomers: selectLedgerCustomers(state),
  ledgerCurrentCustomerName: selectLedgerCurrentCustomerName(state),
  currentId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerCustomers: handleFilterLedgerCustomers,
    deleteLedgerCustomer: handleDeleteLedgerCustomer,
    filterLedgerCardsById: handleFilterByIdLedgerCards,
    filterLedgerTransactionsById: handleFilterByIdLedgerTransactions,
    filterLedgerStatementsById: handleFilterByIdLedgerStatements,
    filterLedgerAccountsById: handleFilterByIdLedgerAccounts,
    resetCustomers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
