import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddSchedulerModal from './AddSchedulerModal';

import {
  currentSchedulerJobSelector,
  handleAddSchedulerJob,
  IStoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const dirty = isDirty(formNamesConst.SCHEDULER);

const mapStateToProps = (state: IStoreState) => ({
  currentSchedulerJob: currentSchedulerJobSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  isFormDirty: dirty(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    addSchedulerJob: handleAddSchedulerJob,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSchedulerModal);
