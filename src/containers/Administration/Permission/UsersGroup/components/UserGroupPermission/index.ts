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
  userGroupMemberId: selectActiveItemId(state),
  groupPermissions: selectAdminGroupPermissionsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getGroupPermission: handleGetAdminGroupPermission,
    deleteGroupPermission: handleDeleteAdminGroupPermissions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroupPermission);
