import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import TransactionModal from './TransactionModal';

import {
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
  resetDirectDebitPayment,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
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
    resetDirectDebitPayment,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionModal);
