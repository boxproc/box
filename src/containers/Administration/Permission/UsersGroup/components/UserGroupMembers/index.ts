import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  activeItemIdSelector,
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleDeleteUserGroupMembers,
  handleGetUserGroupMembers,
  selectAdminUserGroupMembers,
  StoreState,
} from 'store';

import UserGroupMembers from './UserGroupMembers';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_USERS_GROUP_MEMBERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  userGroupMemberId: activeItemIdSelector(state),
  userGroupMembers: selectAdminUserGroupMembers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUserGroupMembers: handleGetUserGroupMembers,
    deleteUserGroupMembers: handleDeleteUserGroupMembers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroupMembers);
