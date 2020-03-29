import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { formValueSelector } from 'redux-form';

import {
  activeItemIdSelector,
  handleAddUsersGroupMember,
  handleGetUsersGroupUsers,
  isAddingUsersGroupMember,
  StoreState,
  usersGroupUsersSelector,
} from 'store';

import { formNamesConst } from 'consts';

import EditUsersGroupMembersForm from './EditUsersGroupMembersForm';

const formSelector = formValueSelector(formNamesConst.EDIT_USERS_GROUP_MEMBERS);

const mapStateToProps = (state: StoreState) => ({
  isLoading: isAddingUsersGroupMember(state),
  currentUsersGroupId: activeItemIdSelector(state),
  activeUsersItemsOptions: usersGroupUsersSelector(state),
  selectedUser: formSelector(state, 'username'),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsersGroupUsers: handleGetUsersGroupUsers,
    addUsersGroupMember: handleAddUsersGroupMember,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditUsersGroupMembersForm);
