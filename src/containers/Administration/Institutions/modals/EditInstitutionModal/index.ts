import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInstitutionModal from './EditInstitutionModal';

import {
  currentInstitutionNameSelector,
  currentInstitutionSelector,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.INSTITUTIONS);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentInstitution: currentInstitutionSelector(state),
  currentInstitutionName: currentInstitutionNameSelector(state),
});

export default connect(
  mapStateToProps
)(EditInstitutionModal);
