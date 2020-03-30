import { connect } from 'react-redux';

import TransactionModal from './TransactionModal';

import {
  activeItemIdSelector,
  currentTrAmountSelector,
  isTrConvertibleToLoanSelector,
  payloadTransactionModalSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  currentTransactionId: activeItemIdSelector(state),
  payloadTransactionModal: payloadTransactionModalSelector(state),
  transactionAmount: currentTrAmountSelector(state),
  isConvertibleToLoan: isTrConvertibleToLoanSelector(state),
});

export default connect(
  mapStateToProps
)(TransactionModal);
