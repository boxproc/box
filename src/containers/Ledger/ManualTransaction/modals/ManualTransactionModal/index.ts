import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ManualTransactionModal';

import {
  handleFilterByIdLedgerTransactions,
  selectLedgerManualTransaction,
  selectLedgerManualTransactionId,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  ledgerManualTransaction: selectLedgerManualTransaction(state),
  transactionId: selectLedgerManualTransactionId(state),
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
