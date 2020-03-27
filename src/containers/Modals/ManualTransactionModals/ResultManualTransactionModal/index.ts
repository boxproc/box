import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ResultManualTransactionModal';

import {
  handleFilterByIdLedgerTransactions,
  manualTrModalIsLimitAdjSelector,
  selectLedgerLimitAdjustment,
  selectLedgerManualTransaction,
  selectLedgerManualTransactionId,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  ledgerManualTransaction: selectLedgerManualTransaction(state),
  ledgerLimitAdjustment: selectLedgerLimitAdjustment(state),
  transactionId: selectLedgerManualTransactionId(state),
  isLimitAdjustment: manualTrModalIsLimitAdjSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterLedgerTransactionsById: handleFilterByIdLedgerTransactions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManualTransactionModal);
