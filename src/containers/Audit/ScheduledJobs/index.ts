import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import ScheduledJobs from './ScheduledJobs';

import {
  currentScheduledJobIdSelector,
  currentScheduledJobNameSelector,
  handleFilterScheduledJobs,
  handleGetLogData,
  isScheduledJobsLoadingSelector,
  isSysMonitorLoadingLogDataSelector,
  IStoreState,
  resetScheduledJobs,
  scheduledJobsSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  isLoading: isSysMonitorLoadingLogDataSelector(state)
    || isScheduledJobsLoadingSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  scheduledJobs: scheduledJobsSelector(state),
  currentSchedulerId: currentScheduledJobIdSelector(state),
  currentScheduledJobName: currentScheduledJobNameSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    filterScheduledJobs: handleFilterScheduledJobs,
    getLogData: handleGetLogData,
    resetScheduledJobs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduledJobs);
