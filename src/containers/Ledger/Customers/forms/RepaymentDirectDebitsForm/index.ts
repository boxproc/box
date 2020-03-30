import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDirectDebitsForm from './RepaymentDirectDebitsForm';

import {
  handleAddRepaymentDirectDebit,
  isAddingRepaymentDirectDebitSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isAddingRepaymentDirectDebitSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addRepaymentDirectDebit: handleAddRepaymentDirectDebit,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepaymentDirectDebitsForm);
