import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  AdminSchedulerJobsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  handleFilterAdminSchedulerJobs,
  handleGetSchedulerLogData,
  handleSendAdminSchedulerAction,
  resetScheduler,
  selectActiveItemId,
  selectAdminSchedulerJobsItems,
  selectCurrentSchedulerName,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.FILTER_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.UPDATE_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.GET_SCHEDULER_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminSchedulerJobsItems: selectAdminSchedulerJobsItems(state),
  currentSchedulerName: selectCurrentSchedulerName(state),
  currentSchedulerJobId: selectActiveItemId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAdminSchedulerJobs: handleFilterAdminSchedulerJobs,
    sendAdminSchedulerAction: handleSendAdminSchedulerAction,
    deleteAdminSchedulerJob: handleDeleteAdminSchedulerJob,
    getSchedulerLogData: handleGetSchedulerLogData,
    resetScheduler,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
