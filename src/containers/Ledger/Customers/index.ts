import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  activeItemIdSelector,
  currentCustomerNameSelector,
  customersSelector,
  handleDeleteCustomer,
  handleFilterByIdAccounts,
  handleFilterByIdCards,
  handleFilterByIdStatements,
  handleFilterByIdTransactions,
  handleFilterCustomers,
  isLoadingCustomersSelector,
  isReadOnlySelector,
  IStoreState,
  resetCustomers,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingCustomersSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  customers: customersSelector(state),
  currentCustomerName: currentCustomerNameSelector(state),
  currentId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCustomers: handleFilterCustomers,
    deleteCustomer: handleDeleteCustomer,
    filterCardsById: handleFilterByIdCards,
    filterTransactionsById: handleFilterByIdTransactions,
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
