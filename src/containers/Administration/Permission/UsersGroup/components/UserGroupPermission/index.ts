import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleDeleteAdminGroupPermissions,
  handleGetAdminGroupPermission,
  selectActiveItemId,
  selectAdminGroupPermissionsItems,
} from 'store/domains';

import { StoreState } from 'store/StoreState';
import UserGroupPermission from './UserGroupPermission';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_ADMIN_GROUP_PERMISSIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  adminUserGroupMemberId: selectActiveItemId(state),
  adminGroupPermissions: selectAdminGroupPermissionsItems(state),
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
