import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInstitutionModal from './EditInstitutionModal';

import {
  selectAdminCurrentInstitution,
  selectAdminCurrentInstitutionName,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.INSTITUTIONS);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentInstitution: selectAdminCurrentInstitution(state),
  currentInstitutionName: selectAdminCurrentInstitutionName(state),
});

export default connect(
  mapStateToProps
)(EditInstitutionModal);
