import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AddCustomerForm from './AddCustomerForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  createLoadingSelector,
  handleAddLedgerCustomer,
  LedgerCustomersActionTypes,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.ADD_LEDGER_CUSTOMER,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addLedgerCustomer: handleAddLedgerCustomer,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCustomerForm);
