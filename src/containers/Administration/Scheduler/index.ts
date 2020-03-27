import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  activeItemIdSelector,
  AdminSchedulerJobsActionTypes,
  AuditScheduledJobsActionType,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  handleFilterAdminSchedulerJobs,
  handleFilterByIdAuditScheduledJobs,
  handleGetLogData,
  handleSendAdminSchedulerAction,
  isReadOnlySelector,
  resetScheduler,
  selectAdminSchedulerJobsItems,
  selectCurrentSchedulerName,
  selectInstitutionsOptions,
  StoreState,
  SystemMonitorActionTypes,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.FILTER_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
  AdminSchedulerJobsActionTypes.UPDATE_ADMIN_SCHEDULER_JOBS,
  AuditScheduledJobsActionType.FILTER_AUDIT_SCHEDULED_JOBS_BY_ID,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  schedulerJobsItems: selectAdminSchedulerJobsItems(state),
  currentSchedulerName: selectCurrentSchedulerName(state),
  currentSchedulerId: activeItemIdSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  isReadOnly: isReadOnlySelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterSchedulerJobs: handleFilterAdminSchedulerJobs,
    filterScheduledJobsById: handleFilterByIdAuditScheduledJobs,
    sendSchedulerAction: handleSendAdminSchedulerAction,
    deleteSchedulerJob: handleDeleteAdminSchedulerJob,
    getLogData: handleGetLogData,
    resetScheduler,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
