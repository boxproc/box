import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditAccountForm from './EditAccountForm';

import {
  StoreState,
} from 'store/StoreState';

import {
  createLoadingSelector,
  handleUpdateLedgerAccount,
  LedgerAccountsActionTypes,
  selectLedgerCurrentAccount,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.UPDATE_LEDGER_ACCOUNT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  initialValues: selectLedgerCurrentAccount(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateLedgerAccount: handleUpdateLedgerAccount,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAccountForm);
