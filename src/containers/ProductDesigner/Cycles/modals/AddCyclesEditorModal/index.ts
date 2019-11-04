import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddCyclesEditorModal from './AddCyclesEditorModal';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_CYCLE_EDITOR);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddCyclesEditorModal);
