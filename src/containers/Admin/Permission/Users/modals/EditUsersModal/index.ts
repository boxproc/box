import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditUserModal from './EditUserModal';

import { currentUsernameSelector, currentUserSelector, IStoreState } from 'store';

const dirty = isDirty(formNamesConst.USER);

const mapStateToProps = (state: IStoreState) => ({
  currentUsername: currentUsernameSelector(state),
  isFormDirty: dirty(state),
  userDetails: currentUserSelector(state),
});

export default connect(
  mapStateToProps
)(EditUserModal);
