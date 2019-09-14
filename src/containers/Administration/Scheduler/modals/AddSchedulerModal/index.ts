import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddSchedulerModal from './AddSchedulerModal';

import {
  closeModal,
  handleAddAdminSchedulerJob,
  openModal,
  selectInstitutionsOptions,
  selectSchedulerJobValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_ADMIN_SCHEDULER_JOB);

const mapStateToProps = (state: StoreState) => ({
  isDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
  schedulerJobValues: selectSchedulerJobValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
    openModal,
    addAdminSchedulerJob: handleAddAdminSchedulerJob,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSchedulerModal);
