import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditCyclesEditorModal from './EditCyclesEditorModal';

import { selectCycleEditorValues } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_CYCLE_EDITOR);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  cycleEditorValues: selectCycleEditorValues(state),
});

export default connect(
  mapStateToProps
)(EditCyclesEditorModal);
