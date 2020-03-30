import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDirectDebitsTable from './RepaymentDirectDebitsTable';

import {
  handleGetRepaymentDirectDebits,
  isGettingRepaymentDirectDebitsSelector,
  repaymentDirectDebitsSelector,
  StoreState,
} from 'store';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isGettingRepaymentDirectDebitsSelector(state),
  repaymentDirectDebits: repaymentDirectDebitsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getRepaymentDirectDebits: handleGetRepaymentDirectDebits,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepaymentDirectDebitsTable);
