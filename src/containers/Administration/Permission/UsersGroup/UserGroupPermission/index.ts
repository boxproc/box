import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleDeleteAdminGroupPermissions,
  handleGetAdminGroupPermission,
  selectAdminGroupPermissionsItems,
//   selectAdminUserGroupMembers,
   selesctUserGroupById,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import UserGroupPermission from './UserGroupPermission';

const loadingSelector = createLoadingSelector([
    AdminUsersGroupActionTypes.GET_ADMIN_GROUP_PERMISSIONS,
    AdminUsersGroupActionTypes.DELETE_ADMIN_GROUP_PERMISSIONS,
    // AdminUsersGroupActionTypes.UPDATE_ADMIN_USERS_GROUP,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
   adminUserGroupMemberId: selesctUserGroupById(state),
   adminGroupPermissions: selectAdminGroupPermissionsItems(state),
//   AdminUserGroupMembers: selectAdminUserGroupMembers(state),

});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getAdminGroupPermission: handleGetAdminGroupPermission,
    deleteAdminGroupPermission: handleDeleteAdminGroupPermissions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroupPermission);
