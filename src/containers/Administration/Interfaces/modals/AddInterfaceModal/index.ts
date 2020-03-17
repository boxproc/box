import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddInterfaceModal from './AddInterfaceModal';

import { selectInstitutionsOptions, StoreState } from 'store';

const dirty = isDirty(formNamesConst.INTERFACE);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  institutionsOptions: selectInstitutionsOptions(state),
});

export default connect(
  mapStateToProps
)(AddInterfaceModal);
