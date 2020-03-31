import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInstitutionModal from './EditInstitutionModal';

import {
  currentInstitutionNameSelector,
  currentInstitutionSelector,
  IStoreState,
} from 'store';

const dirty = isDirty(formNamesConst.INSTITUTION);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  currentInstitution: currentInstitutionSelector(state),
  currentInstitutionName: currentInstitutionNameSelector(state),
});

export default connect(
  mapStateToProps
)(EditInstitutionModal);
