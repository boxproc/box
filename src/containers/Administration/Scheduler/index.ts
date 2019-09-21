import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  AdminSchedulerJobsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  handleGetAdminSchedulerJobs,
  handleSendAdminSchedulerAction,
  handleSetAdminSchedulerJobId,
  selectAdminSchedulerJobsItems,
  selectCurrentSchedulerJobId,
  selectCurrentSchedulerName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.GET_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.UPDATE_ADMIN_SCHEDULER_JOBS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminSchedulerJobsItems: selectAdminSchedulerJobsItems(state),
  currentSchedulerName: selectCurrentSchedulerName(state),
  currentSchedulerJobId: selectCurrentSchedulerJobId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminSchedulerJobs: handleGetAdminSchedulerJobs,
    setAdminSchedulerJobId: handleSetAdminSchedulerJobId,
    sendAdminSchedulerAction: handleSendAdminSchedulerAction,
    deleteAdminSchedulerJob: handleDeleteAdminSchedulerJob,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
