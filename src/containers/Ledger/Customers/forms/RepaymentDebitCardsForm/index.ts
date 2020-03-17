import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDebitCardsForm from './RepaymentDebitCardsForm';

import {
  createLoadingSelector,
  handleAddRepaymentDebitCard,
  LedgerCustomersActionTypes,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.ADD_REPAYMENT_DEBIT_CARD,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addRepaymentDebitCard: handleAddRepaymentDebitCard,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepaymentDebitCardsForm);
