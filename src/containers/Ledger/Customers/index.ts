import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  createLoadingSelector,
  handleDeleteLedgerCustomer,
  handleFilterLedgerCustomers,
  LedgerCustomersActionTypes,
  resetCustomers,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectLedgerCurrentCustomerName,
  selectLedgerCustomers,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS,
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
    resetCustomers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
