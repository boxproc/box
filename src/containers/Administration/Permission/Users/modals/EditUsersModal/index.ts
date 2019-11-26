import { connect } from 'react-redux';
import { isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditUserModal from './EditUserModal';

import {
  selectCurrentPermissionsUsername,
  selectUsersDetails,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_USER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  userDetails: selectUsersDetails(state),
  currentUsername: selectCurrentPermissionsUsername(state),
});

export default connect(
  mapStateToProps
)(EditUserModal);
