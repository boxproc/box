import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddSchedulerModal from './AddSchedulerModal';

import {
  handleAddAdminSchedulerJob,
  selectInstitutionsOptions,
  selectSchedulerJobValues,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.SCHEDULER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
  schedulerJobValues: selectSchedulerJobValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addSchedulerJob: handleAddAdminSchedulerJob,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSchedulerModal);
