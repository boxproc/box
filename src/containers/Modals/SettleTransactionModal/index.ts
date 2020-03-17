import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import SettleTransaction from './SettleTransaction';

import { formNamesConst } from 'consts';

import {
  createLoadingSelector,
  handleRetrieveTransaction,
  handleSettleTransaction,
  LedgerSettleTransactionActionTypes,
  resetRetrievedTransaction,
  selectIsRetrievedTransaction,
  selectPayloadSettleTransactionModal,
  selectRetrievedTransaction,
  selectUiItems,
  StoreState,
} from 'store';

const retrieveLoadingSelector = createLoadingSelector([
  LedgerSettleTransactionActionTypes.RETRIEVE_TRANSACTION,
]);

const loadingSelector = createLoadingSelector([
  LedgerSettleTransactionActionTypes.SETTLE_TRANSACTION,
]);

const dirtySettleTransactionForm = isDirty(formNamesConst.SETTLE_TRANSACTION_FORM);

const mapStateToProps = (state: StoreState) => ({
  isRetrieving: retrieveLoadingSelector(state),
  isLoading: loadingSelector(state),
  isRetrievedTransaction: selectIsRetrievedTransaction(state),
  isDirtySettleTransactionForm: dirtySettleTransactionForm(state),
  retrievedTransaction: selectRetrievedTransaction(state),
  payloadSettleTransactionModal: selectPayloadSettleTransactionModal(state),
  uiItems: selectUiItems(state),
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
