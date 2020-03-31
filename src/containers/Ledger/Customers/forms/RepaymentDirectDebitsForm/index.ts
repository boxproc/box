import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDirectDebitsForm from './RepaymentDirectDebitsForm';

import {
  handleAddRepaymentDirectDebit,
  isAddingRepaymentDirectDebitSelector,
  IStoreState,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
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
