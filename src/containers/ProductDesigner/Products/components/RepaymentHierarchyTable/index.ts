import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentHierarchyTable from './RepaymentHierarchyTable';

import {
  createLoadingSelector,
  handleGetRepaymentHierarchy,
  handleUpdateRepaymentHierarchy,
  IStoreState,
  RepaymentHierarchyActionTypes,
  selectRepaymentHierarchy,
} from 'store';

const loadingSelector = createLoadingSelector([
  RepaymentHierarchyActionTypes.GET_REPAYMENT_HIERARCHY,
]);

const loadingSelectorUpdate = createLoadingSelector([
  RepaymentHierarchyActionTypes.UPDATE_REPAYMENT_HIERARCHY,
]);

const mapStateToProps = (state: IStoreState) => ({
  isLoading: loadingSelector(state),
  isUpdating: loadingSelectorUpdate(state),
  data: selectRepaymentHierarchy(state),
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
