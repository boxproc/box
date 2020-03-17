import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDirectDebitsForm from './RepaymentDirectDebitsForm';

import {
  createLoadingSelector,
  handleAddRepaymentDirectDebit,
  LedgerCustomersActionTypes,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.ADD_REPAYMENT_DIRECT_DEBIT,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
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
