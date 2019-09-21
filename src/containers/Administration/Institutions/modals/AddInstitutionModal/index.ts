import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddInstitutionModal from './AddInstitutionModal';

import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.ADMIN_INSTITUTIONS);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddInstitutionModal);
