import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Scheduler from './Scheduler';

import {
  activeItemIdSelector,
  currentSchedulerNameSelector,
  handleDeleteSchedulerJob,
  handleExecSchedulerJob,
  handleFilterByIdScheduledJobs,
  handleFilterSchedulerJobs,
  handleGetLogData,
  isReadOnlySelector,
  isSchedulerJobDeletingSelector,
  isSchedulerJobsFilteringSelector,
  isSchedulerJobUpdatingSelector,
  isSysMonitorLoadingLogDataSelector,
  IStoreState,
  resetScheduler,
  schedulerJobsSelector,
  userInstitutionsOptionsSelector,
} from 'store';

const mapStateToProps = (state: IStoreState) => ({
  currentSchedulerId: activeItemIdSelector(state),
  currentSchedulerName: currentSchedulerNameSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isLoading: isSysMonitorLoadingLogDataSelector(state)
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
    filterScheduledJobsById: handleFilterByIdScheduledJobs,
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
