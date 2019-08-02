import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import {
  handleAddAdminActiveUsers,
  handleGetAdminActiveUsers,
  selectActiveUsersItems,
  selectUserGroupById,
} from 'store/domains';

import { formNames } from 'consts';

import EditUserGroupMembers from './EditUserGroupMembers';

import { StoreState } from 'store/StoreState';

const formSelector = formValueSelector(formNames.EDIT_USER_GROUP_MEMBERS_FORM);

const mapStateToProps = (state: StoreState) => ({
  currentGroupId: selectUserGroupById(state),
  activeUsersItemsOptions: selectActiveUsersItems(state),
  selectedUser: formSelector(
    state,
    'username'
  ),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getActiveUsers: handleGetAdminActiveUsers,
    addAdminActiveUsers: handleAddAdminActiveUsers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUserGroupMembers);
