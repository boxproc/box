import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import RepaymentHierarchyTable from './RepaymentHierarchyTable';

import {
  createLoadingSelector,
  handleGetRepaymentHierarchy,
  handleUpdateRepaymentHierarchy,
  RepaymentHierarchyActionTypes,
  selectRepaymentHierarchy,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  RepaymentHierarchyActionTypes.GET_REPAYMENT_HIERARCHY,
]);

const loadingSelectorUpdate = createLoadingSelector([
  RepaymentHierarchyActionTypes.UPDATE_REPAYMENT_HIERARCHY,
]);

const mapStateToProps = (state: StoreState) => ({
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
