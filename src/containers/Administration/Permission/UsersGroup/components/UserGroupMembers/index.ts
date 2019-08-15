import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleDeleteAdminUserGroupMembers,
  handleGetAdminUserGroupMembers,
  selectAdminUserGroupMembers,
  selectCurrentUserGroupId,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import UserGroupMembers from './UserGroupMembers';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_ADMIN_USER_GROUP_MEMBERS,
  AdminUsersGroupActionTypes.DELETE_ADMIN_GROUP_MEMBERS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminUserGroupMemberId: selectCurrentUserGroupId(state),
  AdminUserGroupMembers: selectAdminUserGroupMembers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminUserGroupMembers: handleGetAdminUserGroupMembers,
    deleteAdminUserGroupMembers: handleDeleteAdminUserGroupMembers,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroupMembers);
