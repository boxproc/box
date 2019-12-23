import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  AdminSchedulerJobsActionTypes,
  AuditScheduledJobsActionType,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  handleFilterAdminSchedulerJobs,
  handleFilterByIdAuditScheduledJobs,
  handleGetLogData,
  handleSendAdminSchedulerAction,
  resetScheduler,
  selectActiveItemId,
  selectAdminSchedulerJobsItems,
  selectCurrentSchedulerName,
  selectInstitutionsOptions,
  SystemMonitorActionTypes,
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.FILTER_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.UPDATE_ADMIN_SCHEDULER_JOBS,
  AuditScheduledJobsActionType.FILTER_AUDIT_SCHEDULED_JOBS_BY_ID,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminSchedulerJobsItems: selectAdminSchedulerJobsItems(state),
  currentSchedulerName: selectCurrentSchedulerName(state),
  currentSchedulerJobId: selectActiveItemId(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAdminSchedulerJobs: handleFilterAdminSchedulerJobs,
    filterAdminScheduledJobsById: handleFilterByIdAuditScheduledJobs,
    sendAdminSchedulerAction: handleSendAdminSchedulerAction,
    deleteAdminSchedulerJob: handleDeleteAdminSchedulerJob,
    getLogData: handleGetLogData,
    resetScheduler,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
