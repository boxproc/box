import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentDirectDebitsTable from './RepaymentDirectDebitsTable';

import {
  createLoadingSelector,
  handleGetRepaymentDirectDebits,
  LedgerCustomersActionTypes,
  selectRepaymentDirectDebits,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  LedgerCustomersActionTypes.GET_REPAYMENT_DIRECT_DEBITS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  repaymentDirectDebits: selectRepaymentDirectDebits(state),
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
