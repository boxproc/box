import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddInstitutionModal from './AddInstitutionModal';

import { IStoreState } from 'store';

const dirty = isDirty(formNamesConst.INSTITUTION);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddInstitutionModal);
