import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditUserModal from './EditUserModal';

import { currentUsernameSelector, currentUserSelector, StoreState } from 'store';

const dirty = isDirty(formNamesConst.USER);

const mapStateToProps = (state: StoreState) => ({
  currentUsername: currentUsernameSelector(state),
  isFormDirty: dirty(state),
  userDetails: currentUserSelector(state),
});

export default connect(
  mapStateToProps
)(EditUserModal);
