import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ManualTransactionModal from './ResultManualTransactionModal';

import {
  handleFilterByIdTransactions,
  IStoreState,
  manualTransactionIdSelector,
  manualTransactionSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  manualTransaction: manualTransactionSelector(state),
  transactionId: manualTransactionIdSelector(state),
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
