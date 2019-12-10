import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ResultManualTransactionModal';

import {
  handleFilterByIdLedgerTransactions,
  selectLedgerLimitAdjustmentTransaction,
  selectLedgerManualTransaction,
  selectLedgerManualTransactionId,
  selectLedgerManualTransactionModalIsLimit,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  ledgerManualTransaction: selectLedgerManualTransaction(state),
  ledgerLimitAdjustmentTransaction: selectLedgerLimitAdjustmentTransaction(state),
  transactionId: selectLedgerManualTransactionId(state),
  isLimitAdjustment: selectLedgerManualTransactionModalIsLimit(state),
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
