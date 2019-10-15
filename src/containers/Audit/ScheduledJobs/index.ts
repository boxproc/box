import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ScheduledJobs from './ScheduledJobs';

import {
  AuditScheduledJobsActionType,
  createLoadingSelector,
  handleFilterAuditScheduledJobs,
  handleGetSchedulerLogFile,
  resetScheduledJobs,
  selectAuditScheduledJobs,
  selectAuditScheduledJobsSchedulerId,
  selectInstitutionsOptions
} from 'store/domains';

import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AuditScheduledJobsActionType.FILTER_AUDIT_SCHEDULED_JOBS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  auditScheduledJobs: selectAuditScheduledJobs(state),
  currentSchedulerId: selectAuditScheduledJobsSchedulerId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAuditScheduledJobs: handleFilterAuditScheduledJobs,
    getSchedulerLogFile: handleGetSchedulerLogFile,
    resetScheduledJobs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledJobs);
