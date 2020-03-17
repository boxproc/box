import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddInstitutionModal from './AddInstitutionModal';

import { StoreState } from 'store';

const dirty = isDirty(formNamesConst.INSTITUTIONS);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddInstitutionModal);
