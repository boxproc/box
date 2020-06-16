import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionModal from './TransactionModal';

import {
  activeItemIdSelector,
  currentTrAmountSelector,
  currentTransactionSelector,
  directDebitPaymentHistorySelector,
  directDebitPaymentSelector,
  handleGetDirectDebitPayment,
  isDirectDebitTrSelector,
  isLoadingDirectDebitPaymentSelector,
  IStoreState,
  isTrConvertibleToLoanSelector,
  payloadTransactionModalSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentTransactionId: activeItemIdSelector(state),
  payloadTransactionModal: payloadTransactionModalSelector(state),
  transactionAmount: currentTrAmountSelector(state),
  isConvertibleToLoan: isTrConvertibleToLoanSelector(state),
  currentTransaction: currentTransactionSelector(state),
  isDirectDebitTr: isDirectDebitTrSelector(state),
  isLoadingDirectDebitPayment: isLoadingDirectDebitPaymentSelector(state),
  directDebitPaymentHistory: directDebitPaymentHistorySelector(state),
  directDebitPayment: directDebitPaymentSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getDirectDebitPayment: handleGetDirectDebitPayment,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionModal);
