import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import EditUsersGroupModal from './EditUserGroupModal';

import { formNames } from 'consts';
import { formValueSelector } from 'redux-form';
import {
  closeModal,
  handleUpdateAdminUsersGroup,
  selectUsersGroupValues,
} from 'store/domains';
import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.DEFINE_ADMIN_USERS_GROUP);

const mapStateToProps = (state: StoreState) => ({
  selectUsersGroupItems: selectUsersGroupValues(state),
  usersGroupValue: formSelector(
    state,
    'name'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    updateAdminUsersGroup: handleUpdateAdminUsersGroup,
    closeModal,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupModal);
