import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  activeItemIdSelector,
  createLoadingSelector,
  handleDeleteLedgerCustomer,
  handleFilterByIdAccounts,
  handleFilterByIdCards,
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
    filterCardsById: handleFilterByIdCards,
    filterTransactionsById: handleFilterByIdLedgerTransactions,
    filterStatementsById: handleFilterByIdStatements,
    filterAccountsById: handleFilterByIdAccounts,
    resetCustomers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
