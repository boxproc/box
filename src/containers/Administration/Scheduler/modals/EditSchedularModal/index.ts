import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditSchedulerModal from './EditSchedularModal';

import {
  activeItemIdSelector,
  AdminSchedulerJobsActionTypes,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  handleUpdateAdminSchedulerJobs,
  selectCurrentSchedulerName,
  selectSchedulerJobValues,
  StoreState,
} from 'store';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
]);

const dirty = isDirty(formNamesConst.SCHEDULER);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  isFormDirty: dirty(state),
  schedulerJobValues: selectSchedulerJobValues(state),
  currentSchedulerName: selectCurrentSchedulerName(state),
  currentSchedulerId: activeItemIdSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteSchedulerJob: handleDeleteAdminSchedulerJob,
    updateSchedulerJob: handleUpdateAdminSchedulerJobs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSchedulerModal);
