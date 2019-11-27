import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransaction from './ManualTransaction';

import {
  createLoadingSelector,
  handleMakeLedgerTransaction,
  LedgerManualTransactionActionTypes,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  LedgerManualTransactionActionTypes.MAKE_LEDGER_TRANSACTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    makeLedgerTransaction: handleMakeLedgerTransaction,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransaction);
