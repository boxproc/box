import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditSchedulerModal from './ShowLogFileModal';

import {
  AdminSchedulerJobsActionTypes,
  createLoadingSelector,
  handleGetSchedulerLogFile,
  selectCurrentSchedulerName,
  selectSchedulerLogFile,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.GET_SCHEDULER_LOG_FILE,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  schedulerName: selectCurrentSchedulerName(state),
  logFile: selectSchedulerLogFile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getSchedulerLogFile: handleGetSchedulerLogFile,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSchedulerModal);
