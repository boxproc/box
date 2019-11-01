import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector, isDirty } from 'redux-form';

import { formNamesConst } from 'consts';

import EditUserModal from './EditUserModal';

import {
  handleUpdateAdminUser,
  selectCurrentPermissionsUsername,
  selectUsersDetails,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const dirty = isDirty(formNamesConst.DEFINE_USER);
const formSelector = formValueSelector(formNamesConst.DEFINE_USER);

const mapStateToProps = (state: StoreState) => ({
  isFormDirty: dirty(state),
  userDetails: selectUsersDetails(state),
  currentUsername: selectCurrentPermissionsUsername(state),
  requires2faFlagValue: formSelector(
    state,
    'requires2faFlag'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminUser: handleUpdateAdminUser,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserModal);
