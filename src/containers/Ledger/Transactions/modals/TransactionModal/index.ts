import { connect } from 'react-redux';

import TransactionModal from './TransactionModal';

import {
  selectActiveItemId,
  selectIsTransactionConvertibleToLoan,
  selectLedgerTransactionAmount,
  selectPayloadTransactionModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentTransactionId: selectActiveItemId(state),
  payloadTransactionModal: selectPayloadTransactionModal(state),
  transactionAmount: selectLedgerTransactionAmount(state),
  isConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
});

export default connect(
  mapStateToProps
)(TransactionModal);
