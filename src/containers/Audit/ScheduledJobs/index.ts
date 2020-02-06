import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ScheduledJobs from './ScheduledJobs';

import {
  AuditScheduledJobsActionType,
  createLoadingSelector,
  handleFilterAuditScheduledJobs,
  handleGetLogData,
  resetScheduledJobs,
  selectAuditScheduledJobs,
  selectAuditScheduledJobsSchedulerId,
  selectAuditScheduledJobsSchedulerName,
  selectInstitutionsOptions,
  SystemMonitorActionTypes
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditScheduledJobsActionType.FILTER_AUDIT_SCHEDULED_JOBS,
  SystemMonitorActionTypes.GET_LOG_DATA,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  scheduledJobs: selectAuditScheduledJobs(state),
  currentSchedulerId: selectAuditScheduledJobsSchedulerId(state),
  currentScheduledJobName: selectAuditScheduledJobsSchedulerName(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterScheduledJobs: handleFilterAuditScheduledJobs,
    getLogData: handleGetLogData,
    resetScheduledJobs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledJobs);
