import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentHierarchyTable from './RepaymentHierarchyTable';

import {
  handleGetRepaymentHierarchy,
  handleUpdateRepaymentHierarchy,
  isRepaymentHierarchyLoadingSelector,
  isRepaymentHierarchyUpdatingSelector,
  IStoreState,
  repaymentHierarchySelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isRepaymentHierarchyLoadingSelector(state),
  isUpdating: isRepaymentHierarchyUpdatingSelector(state),
  data: repaymentHierarchySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getRepaymentHierarchy: handleGetRepaymentHierarchy,
    updateRepaymentHierarchy: handleUpdateRepaymentHierarchy,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepaymentHierarchyTable);
