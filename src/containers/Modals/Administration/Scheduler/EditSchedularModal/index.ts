import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditSchedulerModal from './EditSchedularModal';

import {
  AdminSchedulerJobsActionTypes,
  closeModal,
  createLoadingSelector,
  handleDeleteAdminSchedulerJob,
  selectSchedulerJobId,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const loadingSelector = createLoadingSelector([
  AdminSchedulerJobsActionTypes.DELETE_ADMIN_SCHEDULER_JOBS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  schedulerJobId: selectSchedulerJobId(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteAdminSchedulerJob: handleDeleteAdminSchedulerJob,
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSchedulerModal);
