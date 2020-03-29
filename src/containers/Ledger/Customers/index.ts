import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleDeleteLedgerCustomer,
  handleFilterByIdLedgerAccounts,
  handleFilterByIdLedgerCards,
  handleFilterByIdLedgerTransactions,
  handleFilterByIdStatements,
  handleFilterLedgerCustomers,
  isReadOnlySelector,
  LedgerCustomersActionTypes,
  resetCustomers,
  selectLedgerCurrentCustomerName,
  selectLedgerCustomers,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  customers: selectLedgerCustomers(state),
  currentCustomerName: selectLedgerCurrentCustomerName(state),
  currentId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCustomers: handleFilterLedgerCustomers,
    deleteCustomer: handleDeleteLedgerCustomer,
    filterCardsById: handleFilterByIdLedgerCards,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    filterStatementsById: handleFilterByIdStatements,
    filterAccountsById: handleFilterByIdLedgerAccounts,
    resetCustomers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
