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
  LedgerCustomersActionTypes,
  resetCustomers,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectIsReadOnly,
  selectLedgerCurrentCustomerName,
  selectLedgerCustomers,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  customers: selectLedgerCustomers(state),
  currentCustomerName: selectLedgerCurrentCustomerName(state),
  currentId: selectActiveItemId(state),
  isReadOnly: selectIsReadOnly(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCustomers: handleFilterLedgerCustomers,
    deleteCustomer: handleDeleteLedgerCustomer,
    filterCardsById: handleFilterByIdLedgerCards,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    filterStatementsById: handleFilterByIdLedgerStatements,
    filterAccountsById: handleFilterByIdLedgerAccounts,
    resetCustomers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
