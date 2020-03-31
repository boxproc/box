import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ResultManualTransactionModal';

import {
  handleFilterByIdTransactions,
  IStoreState,
  limitAdjustmentSelector,
  manualTransactionIdSelector,
  manualTransactionSelector,
  manualTrModalIsLimitAdjSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  manualTransaction: manualTransactionSelector(state),
  limitAdjustment: limitAdjustmentSelector(state),
  transactionId: manualTransactionIdSelector(state),
  isLimitAdjustment: manualTrModalIsLimitAdjSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterTransactionsById: handleFilterByIdTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
