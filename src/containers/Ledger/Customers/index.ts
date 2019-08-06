import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Customers from './Customers';

import {
  createLoadingSelector,
  handleFilterLedgerCustomers,
  handleGetLedgerCustomerId,
  handleGetLedgerCustomers,
  LedgerCustomersActionTypes,
  openModal,
  selectInstitutionsOptions,
  selectLedgerCustomers,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.GET_LEDGER_CUSTOMERS,
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  ledgerCustomers: selectLedgerCustomers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    openModal,
    getLedgerCustomers: handleGetLedgerCustomers,
    filterLedgerCustomers: handleFilterLedgerCustomers,
    getLedgerCustomerId: handleGetLedgerCustomerId,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
