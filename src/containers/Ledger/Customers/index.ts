import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  activeItemIdSelector,
  customersSelector,
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
  currentId: activeItemIdSelector(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterCustomers: handleFilterCustomers,
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
