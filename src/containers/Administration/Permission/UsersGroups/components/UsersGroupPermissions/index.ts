import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import {
  activeItemIdSelector,
  handleDeleteUsersGroupPermission,
  handleGetUsersGroupPermissions,
  isLoadingUsersGroupPermissionsSelector,
  StoreState,
  usersGroupPermissionsSelector,
} from 'store';

import UsersGroupPermissions from './UsersGroupPermissions';

const mapStateToProps = (state: StoreState) => ({
  isLoading: isLoadingUsersGroupPermissionsSelector(state),
  memberId: activeItemIdSelector(state),
  groupPermissions: usersGroupPermissionsSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  {
    getGroupPermission: handleGetUsersGroupPermissions,
    deleteGroupPermission: handleDeleteUsersGroupPermission,
  },
  dispatch
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersGroupPermissions);
