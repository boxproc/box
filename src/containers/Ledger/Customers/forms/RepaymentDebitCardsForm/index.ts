import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDebitCardsForm from './RepaymentDebitCardsForm';

import {
  handleAddRepaymentDebitCard,
  isAddingRepaymentDebitCardSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isAddingRepaymentDebitCardSelector(state),
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
