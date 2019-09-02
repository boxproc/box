import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import Customers from './Customers';

import {
  createLoadingSelector,
  handleFilterLedgerCustomers,
  handleGetLedgerCustomers,
  LedgerCustomersActionTypes,
  selectInstitutionsOptions,
  selectLedgerCustomers,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.GET_LEDGER_CUSTOMERS,
  LedgerCustomersActionTypes.FILTER_LEDGER_CUSTOMERS,
]);

const dirty = isDirty(formNames.LEDGER_CUSTOMERS_FILTER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFilterFormDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
  ledgerCustomers: selectLedgerCustomers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getLedgerCustomers: handleGetLedgerCustomers,
    filterLedgerCustomers: handleFilterLedgerCustomers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customers);
