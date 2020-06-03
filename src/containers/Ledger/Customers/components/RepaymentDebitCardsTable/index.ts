import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDebitCardsTable from './RepaymentDebitCardsTable';

import {
  handleGetRepaymentDebitCards,
  isLoadingRepaymentDebitCardsSelector,
  IStoreState,
  repaymentDebitCardsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isLoadingRepaymentDebitCardsSelector(state),
  repaymentDebitCards: repaymentDebitCardsSelector(state),
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
