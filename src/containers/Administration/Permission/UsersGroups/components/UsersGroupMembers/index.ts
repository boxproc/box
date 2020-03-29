import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  activeItemIdSelector,
  handleDeleteUsersGroupMember,
  handleGetUsersGroupMembers,
  isLoadingUsersGroupMembers,
  StoreState,
  usersGroupMembersSelector,
} from 'store';

import UsersGroupMembers from './UsersGroupMembers';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isLoadingUsersGroupMembers(state),
  memberId: activeItemIdSelector(state),
  members: usersGroupMembersSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUsersGroupMembers: handleGetUsersGroupMembers,
    deleteUsersGroupMember: handleDeleteUsersGroupMember,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroupMembers);
