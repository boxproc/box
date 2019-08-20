import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import EditCyclesEditorModal from './EditCyclesEditorModal';

import { closeModal, selectCycleEditorValues } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNames.DEFINE_ADMIN_CYCLE_EDITOR);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  cycleEditorValues: selectCycleEditorValues(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCyclesEditorModal);
