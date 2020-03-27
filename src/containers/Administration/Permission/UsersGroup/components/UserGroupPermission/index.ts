import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  activeItemIdSelector,
  AdminUsersGroupActionTypes,
  createLoadingSelector,
  handleDeleteGroupPermissions,
  handleGetGroupPermission,
  selectAdminGroupPermissionsItems,
  StoreState,
} from 'store';

import UserGroupPermission from './UserGroupPermission';

const loadingSelector = createLoadingSelector([
  AdminUsersGroupActionTypes.GET_USERS_GROUP_PERMISSIONS,
]);

const mapStateToProps = (state: StoreState) => ({
  isLoading: loadingSelector(state),
  userGroupMemberId: activeItemIdSelector(state),
  groupPermissions: selectAdminGroupPermissionsItems(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getGroupPermission: handleGetGroupPermission,
    deleteGroupPermission: handleDeleteGroupPermissions,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserGroupPermission);
