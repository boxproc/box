import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditInterfaceModal from './EditInterfaceModal';

import {
  currentInterfaceNameSelector,
  currentInterfaceSelector,
  IStoreState,
} from 'store';

const dirty = isDirty(formNamesConst.INTERFACE);

const mapStateToProps = (state: IStoreState) => ({
  isFormDirty: dirty(state),
  currentInterface: currentInterfaceSelector(state),
  currentInterfaceName: currentInterfaceNameSelector(state),
});

export default connect(
  mapStateToProps
)(EditInterfaceModal);
