import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditCustomerForm from './EditCustomerForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  createLoadingSelector,
  handleDeleteLedgerCustomer,
  handleUpdateLedgerCustomer,
  LedgerCustomersActionTypes,
  selectLedgerCurrentCustomer,
  selectLedgerCustomerCurrentId,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.DELETE_LEDGER_CUSTOMER,
  LedgerCustomersActionTypes.UPDATE_LEDGER_CUSTOMER,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectLedgerCurrentCustomer(state),
  ledgerCustomerCurrentId: selectLedgerCustomerCurrentId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteLedgerCustomer: handleDeleteLedgerCustomer,
    updateLedgerCustomer: handleUpdateLedgerCustomer,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCustomerForm);
