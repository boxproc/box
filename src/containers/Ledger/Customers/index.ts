import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  createLoadingSelector,
  handleDeleteLedgerCustomer,
  handleFilterLedgerCustomers,
  handleGetLedgerCustomerId,
  LedgerCustomersActionTypes,
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
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerCustomers: handleFilterLedgerCustomers,
    getLedgerCustomerId: handleGetLedgerCustomerId,
    deleteLedgerCustomer: handleDeleteLedgerCustomer,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
