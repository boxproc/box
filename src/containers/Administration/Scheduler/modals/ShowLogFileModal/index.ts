import { connect } from 'react-redux';

import EditSchedulerModal from './ShowLogFileModal';

import {
  selectAuditScheduledJobsSchedulerName,
  selectCurrentSchedulerName,
  selectSchedulerLogFile,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const mapStateToProps = (state: StoreState) => ({
  schedulerName: selectCurrentSchedulerName(state) || selectAuditScheduledJobsSchedulerName(state),
  logFile: selectSchedulerLogFile(state),
});

export default connect(
  mapStateToProps
)(EditSchedulerModal);
