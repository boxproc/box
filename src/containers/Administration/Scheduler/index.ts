import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  activeItemIdSelector,
  AuditScheduledJobsActionType,
  createLoadingSelector,
  currentSchedulerNameSelector,
  handleDeleteSchedulerJob,
  handleExecSchedulerJob,
  handleFilterByIdAuditScheduledJobs,
  handleFilterSchedulerJobs,
  handleGetLogData,
  isReadOnlySelector,
  isSchedulerJobDeletingSelector,
  isSchedulerJobsFilteringSelector,
  isSchedulerJobUpdatingSelector,
  resetScheduler,
  schedulerJobsSelector,
  StoreState,
  SystemMonitorActionTypes,
  userInstitutionsOptionsSelector,
} from 'store';

const loadingSelector = createLoadingSelector([
  AuditScheduledJobsActionType.FILTER_AUDIT_SCHEDULED_JOBS_BY_ID,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  currentSchedulerId: activeItemIdSelector(state),
  currentSchedulerName: currentSchedulerNameSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isLoading: loadingSelector(state)
    || isSchedulerJobsFilteringSelector(state)
    || isSchedulerJobUpdatingSelector(state)
    || isSchedulerJobDeletingSelector(state),
  isReadOnly: isReadOnlySelector(state),
  schedulerJobs: schedulerJobsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteSchedulerJob: handleDeleteSchedulerJob,
    execSchedulerJob: handleExecSchedulerJob,
    filterScheduledJobsById: handleFilterByIdAuditScheduledJobs,
    filterSchedulerJobs: handleFilterSchedulerJobs,
    getLogData: handleGetLogData,
    resetScheduler,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scheduler);
