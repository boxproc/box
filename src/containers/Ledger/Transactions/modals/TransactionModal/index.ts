import { connect } from 'react-redux';

import TransactionModal from './TransactionModal';

import {
  activeItemIdSelector,
  currentTrAmountSelector,
  IStoreState,
  isTrConvertibleToLoanSelector,
  payloadTransactionModalSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentTransactionId: activeItemIdSelector(state),
  payloadTransactionModal: payloadTransactionModalSelector(state),
  transactionAmount: currentTrAmountSelector(state),
  isConvertibleToLoan: isTrConvertibleToLoanSelector(state),
});

export default connect(
  mapStateToProps
)(TransactionModal);
