import { connect } from 'react-redux';

import TransactionModal from './TransactionModal';

import {
  selectActiveItemId,
  selectIsTransactionConvertibleToLoan,
  selectLedgerTransactionAmount,
  selectPayloadLedgerTransactionModal,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  currentTransactionId: selectActiveItemId(state),
  payloadLedgerTransactionModal: selectPayloadLedgerTransactionModal(state),
  transactionAmount: selectLedgerTransactionAmount(state),
  isConvertibleToLoan: selectIsTransactionConvertibleToLoan(state),
});

export default connect(
  mapStateToProps
)(TransactionModal);
