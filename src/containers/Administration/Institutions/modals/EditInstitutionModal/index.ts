import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInstitutionModal from './EditInstitutionModal';

import { selectAdminCurrentInstitution, selectAdminCurrentInstitutionName } from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.INSTITUTIONS);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentInstitution: selectAdminCurrentInstitution(state),
  currentInstitutionName: selectAdminCurrentInstitutionName(state),
});

export default connect(
  mapStateToProps
)(EditInstitutionModal);
