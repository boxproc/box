import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDirectDebitsTable from './RepaymentDirectDebitsTable';

import {
  handleGetRepaymentDirectDebits,
  isGettingRepaymentDirectDebitsSelector,
  IStoreState,
  repaymentDirectDebitsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
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
