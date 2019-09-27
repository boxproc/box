import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ScheduledJobs from './ScheduledJobs';

import {
  AuditScheduledJobsActionType,
  createLoadingSelector,
  handleFilterAuditScheduledJobs,
  selectAuditScheduledJobs,
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
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterAuditScheduledJobs: handleFilterAuditScheduledJobs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledJobs);
