import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import SettleTransaction from './SettleTransaction';

import { formNamesConst } from 'consts';

import {
  handleRetrieveTransaction,
  handleSettleTransaction,
  isRetrievedTransactionSelector,
  isRetrievingTrSelector,
  isSettlingTrSelector,
  payloadSettleTrModalSelector,
  resetRetrievedTransaction,
  retrievedTransactionSelector,
  StoreState,
} from 'store';

const dirtySettleTransactionForm = isDirty(formNamesConst.SETTLE_TRANSACTION_FORM);

const mapStateToProps = (state: StoreState) => ({
  isRetrieving: isRetrievingTrSelector(state),
  isLoading: isSettlingTrSelector(state),
  isRetrievedTransaction: isRetrievedTransactionSelector(state),
  isDirtySettleTransactionForm: dirtySettleTransactionForm(state),
  retrievedTransaction: retrievedTransactionSelector(state),
  payloadSettleTransactionModal: payloadSettleTrModalSelector(state),
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
