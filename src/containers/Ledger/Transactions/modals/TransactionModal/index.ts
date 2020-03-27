import { connect } from 'react-redux';

import TransactionModal from './TransactionModal';

import {
  activeItemIdSelector,
  payloadTransactionModalSelector,
  selectIsTransactionConvertibleToLoan,
  selectLedgerTransactionAmount,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentTransactionId: activeItemIdSelector(state),
  payloadTransactionModal: payloadTransactionModalSelector(state),
  transactionAmount: selectLedgerTransactionAmount(state),
  isConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
});

export default connect(
  mapStateToProps
)(TransactionModal);
