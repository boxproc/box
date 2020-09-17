import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import SettleTransaction from './SettleTransaction';

import { formNamesConst } from 'consts';

import {
  // handleRetrieveTransaction,
  // isRetrievedTransactionSelector,
  // isRetrievingTrLoadingSelector,
  // retrievedTransactionSelector,
  handleSettleTransaction,
  isSettlingTrLoadingSelector,
  IStoreState,
  payloadSettleTrModalSelector,
  // resetRetrievedTransaction,
  transactionForSettleSelector,
} from 'store';

const dirtySettleTransactionForm = isDirty(formNamesConst.SETTLE_TRANSACTION_FORM);

const mapStateToProps = (state: IStoreState) => ({
  // isRetrievedTransaction: isRetrievedTransactionSelector(state),
  // isRetrieving: isRetrievingTrLoadingSelector(state),
  // retrievedTransaction: retrievedTransactionSelector(state),
  isDirtySettleTransactionForm: dirtySettleTransactionForm(state),
  isLoading: isSettlingTrLoadingSelector(state),
  payloadSettleTransactionModal: payloadSettleTrModalSelector(state),
  transactionForSettle: transactionForSettleSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    // retrieveTransaction: handleRetrieveTransaction,
    settleTransaction: handleSettleTransaction,
    // resetRetrievedTransaction,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettleTransaction);
