import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import AddUserModal from './AddUserModal';

import { StoreState } from 'store';

const dirty = isDirty(formNamesConst.USER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
});

export default connect(
  mapStateToProps
)(AddUserModal);
