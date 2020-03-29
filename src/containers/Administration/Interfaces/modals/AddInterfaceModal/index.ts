import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddInterfaceModal from './AddInterfaceModal';

import { StoreState, userInstitutionsOptionsSelector } from 'store';

const dirty = isDirty(formNamesConst.INTERFACE);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
});

export default connect(
  mapStateToProps
)(AddInterfaceModal);
