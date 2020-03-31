import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDebitCardsTable from './RepaymentDebitCardsTable';

import {
  handleGetRepaymentDebitCards,
  isGettingRepaymentDebitCardsSelector,
  IStoreState,
  repaymentDebitCardsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isGettingRepaymentDebitCardsSelector(state),
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
