import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { isDirty } from 'redux-form';

import { formNames } from 'consts';

import AddCyclesEditorModal from './AddCyclesEditorModal';

import { closeModal } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNames.DEFINE_ADMIN_CYCLE_EDITOR);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
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
)(AddCyclesEditorModal);
