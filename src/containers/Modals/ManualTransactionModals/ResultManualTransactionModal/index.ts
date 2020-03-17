import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ResultManualTransactionModal';

import {
  handleFilterByIdLedgerTransactions,
  selectLedgerLimitAdjustment,
  selectLedgerManualTransaction,
  selectLedgerManualTransactionId,
  selectManualTransactionModalIsLimit,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  ledgerManualTransaction: selectLedgerManualTransaction(state),
  ledgerLimitAdjustment: selectLedgerLimitAdjustment(state),
  transactionId: selectLedgerManualTransactionId(state),
  isLimitAdjustment: selectManualTransactionModalIsLimit(state),
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
