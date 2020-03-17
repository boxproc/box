import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInterfaceModal from './EditInterfaceModal';

import {
  selectAdminCurrentInterface,
  selectAdminCurrentInterfaceName,
  selectInstitutionsOptions,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.INTERFACE);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentInterface: selectAdminCurrentInterface(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentInterfaceName: selectAdminCurrentInterfaceName(state),
});

export default connect(
  mapStateToProps
)(EditInterfaceModal);
