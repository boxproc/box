import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ResultManualTransactionModal';

import {
  handleFilterByIdTransactions,
  limitAdjustmentSelector,
  manualTransactionIdSelector,
  manualTransactionSelector,
  manualTrModalIsLimitAdjSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  ledgerManualTransaction: manualTransactionSelector(state),
  ledgerLimitAdjustment: limitAdjustmentSelector(state),
  transactionId: manualTransactionIdSelector(state),
  isLimitAdjustment: manualTrModalIsLimitAdjSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerTransactionsById: handleFilterByIdTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
