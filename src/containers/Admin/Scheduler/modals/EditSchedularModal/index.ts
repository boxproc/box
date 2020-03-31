import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditSchedulerModal from './EditSchedularModal';

import {
  activeItemIdSelector,
  currentSchedulerJobSelector,
  currentSchedulerNameSelector,
  handleDeleteSchedulerJob,
  handleUpdateSchedulerJobs,
  isSchedulerJobDeletingSelector,
  IStoreState,
} from 'store';

const dirty = isDirty(formNamesConst.SCHEDULER);

const mapStateToProps = (state: IStoreState) => ({
  currentSchedulerId: activeItemIdSelector(state),
  currentSchedulerJob: currentSchedulerJobSelector(state),
  currentSchedulerName: currentSchedulerNameSelector(state),
  isFormDirty: dirty(state),
  isLoading: isSchedulerJobDeletingSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    deleteSchedulerJob: handleDeleteSchedulerJob,
    updateSchedulerJob: handleUpdateSchedulerJobs,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSchedulerModal);
