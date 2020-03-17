import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDebitCardsTable from './RepaymentDebitCardsTable';

import {
  createLoadingSelector,
  handleGetRepaymentDebitCards,
  LedgerCustomersActionTypes,
  selectRepaymentDebitCards,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.GET_REPAYMENT_DEBIT_CARDS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  repaymentDebitCards: selectRepaymentDebitCards(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getRepaymentDebitCards: handleGetRepaymentDebitCards,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepaymentDebitCardsTable);
