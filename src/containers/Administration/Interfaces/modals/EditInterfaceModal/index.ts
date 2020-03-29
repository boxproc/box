import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInterfaceModal from './EditInterfaceModal';

import {
  currentInterfaceNameSelector,
  currentInterfaceSelector,
  StoreState,
  userInstitutionsOptionsSelector,
} from 'store';

const dirty = isDirty(formNamesConst.INTERFACE);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentInterface: currentInterfaceSelector(state),
  institutionsOptions: userInstitutionsOptionsSelector(state),
  currentInterfaceName: currentInterfaceNameSelector(state),
});

export default connect(
  mapStateToProps
)(EditInterfaceModal);
