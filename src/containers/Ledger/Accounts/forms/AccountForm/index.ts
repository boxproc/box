import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import AccountForm from './AccountForm';

import { StoreState } from 'store/StoreState';

import {
  createLoadingSelector,
  handleAddLedgerAccount,
  handleUpdateLedgerAccount,
  LedgerAccountsActionTypes,
  selectLedgerCurrentAccountProductType,
} from 'store/domains';

const loadingSelector = createLoadingSelector([
  LedgerAccountsActionTypes.UPDATE_LEDGER_ACCOUNT,
  LedgerAccountsActionTypes.ADD_LEDGER_ACCOUNT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  accountProductType: selectLedgerCurrentAccountProductType(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateLedgerAccount: handleUpdateLedgerAccount,
    addLedgerAccount: handleAddLedgerAccount,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountForm);
