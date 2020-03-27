import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInterfaceModal from './EditInterfaceModal';

import {
  currentInterfaceNameSelector,
  currentInterfaceSelector,
  selectInstitutionsOptions,
  StoreState,
} from 'store';

const dirty = isDirty(formNamesConst.INTERFACE);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  currentInterface: currentInterfaceSelector(state),
  institutionsOptions: selectInstitutionsOptions(state),
  currentInterfaceName: currentInterfaceNameSelector(state),
});

export default connect(
  mapStateToProps
)(EditInterfaceModal);
