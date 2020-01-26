import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleDeleteAdminUserGroupMembers,
  handleGetAdminUserGroupMembers,
  selectActiveItemId,
  selectAdminUserGroupMembers,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import UserGroupMembers from './UserGroupMembers';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_ADMIN_USER_GROUP_MEMBERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  userGroupMemberId: selectActiveItemId(state),
  userGroupMembers: selectAdminUserGroupMembers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getUserGroupMembers: handleGetAdminUserGroupMembers,
    deleteUserGroupMembers: handleDeleteAdminUserGroupMembers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroupMembers);
