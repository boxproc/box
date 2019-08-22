import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import EditSchedulerModal from './EditSchedularModal';

import {
  AdminSchedulerJobsActionTypes,
  closeModal,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  handleUpdateAdminSchedulerJobs,
  openModal,
  selectCurrentCronExpression,
  selectCurrentSchedulerName,
  selectSchedulerJobId,
  selectSchedulerJobValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
]);

const dirty = isDirty(formNames.DEFINE_ADMIN_SCHEDULER_JOB);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFormDirty: dirty(state),
  schedulerJobId: selectSchedulerJobId(state),
  schedulerJobValues: selectSchedulerJobValues(state),
  currentSchedulerName: selectCurrentSchedulerName(state),
  currentCronExpression: selectCurrentCronExpression(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteAdminSchedulerJob: handleDeleteAdminSchedulerJob,
    updateAdminSchedulerJob: handleUpdateAdminSchedulerJobs,
    closeModal,
    openModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSchedulerModal);
