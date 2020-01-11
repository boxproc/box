import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import SettleTransaction from './SettleTransaction';

import {
  createLoadingSelector,
  handleRetrieveTransaction,
  handleSettleTransaction,
  LedgerSettleTransactionActionTypes,
  resetRetrievedTransaction,
  selectIsRetrievedTransaction,
  selectRetrievedTransaction,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const retrieveLoadingSelector = createLoadingSelector([
  LedgerSettleTransactionActionTypes.RETRIEVE_TRANSACTION,
]);

const loadingSelector = createLoadingSelector([
  LedgerSettleTransactionActionTypes.SETTLE_TRANSACTION,
]);

const mapStateToProps = (state: StoreState) => ({
  isRetrieving: retrieveLoadingSelector(state),
  isLoading: loadingSelector(state),
  isRetrievedTransaction: selectIsRetrievedTransaction(state),
  retrievedTransaction: selectRetrievedTransaction(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    retrieveTransaction: handleRetrieveTransaction,
    settleTransaction: handleSettleTransaction,
    resetRetrievedTransaction,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettleTransaction);
